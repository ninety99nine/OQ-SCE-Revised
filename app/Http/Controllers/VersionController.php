<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Version;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use App\Services\Ussd\UssdService;
use Illuminate\Support\Facades\Validator;

class VersionController extends Controller
{
    public function show(Project $project, App $app, Version $version, Request $request)
    {
        //  If this is a REST Api request
        if ($request->expectsJson()) {

            //  Get the version builder
            $builder = $version->builder;

            /**
             *  Calculate the content-length which is required by the Axios REST Api call
             *  to calculate the download progress of the content.
             */
            $contentLength = strlen(json_encode($builder));      //  3219152

            //  Return the version
            return response()->json($builder)->header('Content-Length', $contentLength);

        }else{

            /**
             *  Return the project, app and version information.
             *  Omit the version builder for faster page load,
             *  then we can ajax request the version with the
             *  builder as indicated by the code above.
             */

            $app->load('shortCode');

            //  Show the app version
            return Inertia::render('Versions/Show', [
                'appPayload' => $app,
                'projectPayload' => $project,
                'versionPayload' => $version->makeHidden('builder')
            ]);

        }
    }

    public function simulate(Project $project, App $app, Version $version, Request $request)
    {
        return (new UssdService($request))->setup();
    }

    public function create(Project $project, App $app, Request $request)
    {
        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'number' => ['required', 'numeric', 'between:0,9999.99', Rule::unique('versions')->where('app_id', $app->id)],
            'features' => ['sometimes', 'array'],
            'features.*' => ['required'],
            'description' => ['nullable', 'string', 'min:3', 'max:500'],
        ], [
            //  Custom messages
        ], [
            //  Custom attribute names
            'features.*' => 'feature',
        ])->validate();

        //  Create new version
        Version::create( array_merge($data, [
            'builder' => (new Version)->getBuilderTemplate(),
            'delete_code' => random_int(100000, 999999),
            'app_id' => $app->id
        ]));

        return redirect()->route('app.show', [ 'project' => $project->id, 'app' => $app->id ]);
    }

    public function update(Project $project, App $app, Version $version, Request $request)
    {
        $wantsToResetBuilder = request()->input('reset_builder') == true;

        if( $request->has('builder') && gettype($request->input('builder') === 'string')) {

            $request->merge(['builder' => json_decode(request()->input('builder'), true)]);

        }

        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'number' => ['sometimes', 'required', 'numeric', 'between:0,9999.99', Rule::unique('versions')->where('app_id', $app->id)->ignore($version->id)],
            'description' => ['nullable', 'string', 'min:3', 'max:500'],

            //  Resetting builder
            'reset_builder' => ['sometimes', 'required', 'boolean'],
            'features' => ['sometimes', 'array'],
            'features.*' => ['required'],
            'builder' => ['sometimes', 'required', 'array'],
            'delete_code' => [
                'string', 'size:6', ($wantsToResetBuilder ? '' : 'nullable'), Rule::requiredIf($wantsToResetBuilder), Rule::exists('versions')->where(function ($query) use ($version) {
                    return $query->where('id', $version->id);
                })
            ],
        ], [
            //  Custom messages
            'number.regex' => 'The version number must be a valid number or decimal',
            'delete_code.exists' => 'The reset code provided is not valid'
        ], [
            //  Custom attribute names
            'features.*' => 'feature',
        ])->validate();

        $builder = $wantsToResetBuilder ? $version->getBuilderTemplate() : ( request()->has('builder') ? request()->input('builder') : $version->builder);

        //  Update the existing version
        $version->update( array_merge($data, [
            'delete_code' => random_int(100000, 999999),
            'builder' => $builder
        ]));

        //  Check if we should show the app
        if( $request->input('destination') === 'app.show' ) {

            //  Show the app
            return redirect()->route('app.show', [ 'project' => $project->id, 'app' => $app->id ]);

        }elseif( $request->input('destination') === 'version.show' ) {

            //  Show the version
            return redirect()->route('version.show', [ 'project' => $project->id, 'app' => $app->id, 'version' => $version->id ]);

        }
    }

    public function delete(Project $project, App $app, Version $version, Request $request)
    {
        //  Validate the request inputs
        Validator::make($request->all(), [
            'delete_code' => ['required', 'string', 'size:6', Rule::exists('versions')->where(function ($query) use ($version) {
                return $query->where('id', $version->id);
            })],
        ], [
            'delete_code.exists' => 'The delete code provided is not valid'
        ])->validate();

        //  Delete the existing project
        $version->delete();

        return redirect()->route('app.show', [ 'project' => $project->id, 'app' => $app->id ]);
    }

    public function repair(Project $project, App $app, Version $version, Request $request)
    {
        //  If this is a REST Api request
        if ( $request->expectsJson() ) {

            //  Get the builder provided by the API Request
            $versionArrayBuilder = request()->input('builder');

            $versionArrayBuilder = json_decode($versionArrayBuilder, true);

        }else{

            //  Get the version as an array
            $versionArray = $version->toArray();

            //  Get the version builder as an array
            $versionArrayBuilder = $versionArray['builder'];

        }

        //  Get the version builder template
        $builder_template = $version->getBuilderTemplate();

        //  This fixes the builder events
        $fixEvents = function($events) use ( &$fixEvents ) {

            foreach($events as $x => $event) {

                //  Fix issues related to the "CRUD API" event handler
                if ($event['type'] == 'CRUD API') {

                    //  (1) ENABLE CODE EDITOR MODE FOR THE RESPONSE STATUS HANDLE ATTRIBUTES

                    //  Get the response status handles
                    $response_status_handles = $events[$x]['event_data']['response']['manual']['response_status_handles'] ?? [];

                    //  Foreach status handle
                    foreach($response_status_handles as $y => $response_status_handle) {

                        //  Get the response status handle attributes
                        $attributes = $response_status_handle['attributes'];

                        //  Foreach status attribute
                        foreach ($attributes as $z => $attribute) {

                            //  If the attribute does not has a name
                            if( empty($attribute['name']) ) {

                                //  Remove it
                                unset($events[$x]['event_data']['response']['manual']['response_status_handles'][$y]['attributes'][$z]);

                            //  If the variable does not support code editor mode
                            }elseif( !isset($attribute['value']['code_editor_mode']) ) {

                                //  Enable code editor support
                                $events[$x]['event_data']['response']['manual']['response_status_handles'][$y]['attributes'][$z]['value'] = [
                                    'text' => $attribute['value'],  //  Set the old value as the text value
                                    'code_editor_text' => '',
                                    'code_editor_mode' => false
                                ];

                            }

                        }

                    }

                }

                //  Fix issues related to the "Manage User Account" event handler
                if ($event['type'] == 'Manage User Account') {

                    //  Rename the event type
                    $events[$x]['type'] = 'Database';

                    //  If the action is set to "check_existence"
                    if( $events[$x]['event_data']['action'] === 'check_existence' ) {

                        //  Set the action to "read"
                        $events[$x]['event_data']['action'] = 'read';

                    }

                    //  Add database variable function
                    $addVariable = function($name, $value, $default_value = null) {

                        return [
                            'name' => $name,
                            'value' => is_array($value) ? $value : [
                                'text' => $value,
                                'code_editor_text' => '',
                                'code_editor_mode' => false
                            ],
                            'on_empty' => [
                                'value' => is_array($default_value) ? $default_value : [
                                    'text' => '',
                                    'code_editor_text' => '',
                                    'code_editor_mode' => false
                                ],
                            ],
                        ];

                    };

                    //  Get the additional fields
                    $additional_fields = $events[$x]['event_data']['additional_fields'] ?? [];

                    //  Foreach additional field
                    foreach($additional_fields as $y => $additional_field) {

                        //  If we are still using the old structure, lets rebuild to the new structure
                        if( isset($additional_field['key']) ) {

                            $name = $additional_field['key'];
                            $value = $additional_field['value'];
                            $default_value = $additional_field['on_empty_value']['default']['custom'];
                            $selected_type = $additional_field['on_empty_value']['default']['selected_type'];

                            if($selected_type == 'null') {

                                $default_value['code_editor_mode'] = true;
                                $default_value['code_editor_text'] = '<?php return null; ?>';

                            }else if($selected_type == 'true') {

                                $default_value['code_editor_mode'] = true;
                                $default_value['code_editor_text'] = '<?php return true; ?>';

                            }else if($selected_type == 'false') {

                                $default_value['code_editor_mode'] = true;
                                $default_value['code_editor_text'] = '<?php return false; ?>';

                            }else if($selected_type == 'empty_array') {

                                $default_value['code_editor_mode'] = true;
                                $default_value['code_editor_text'] = '<?php return []; ?>';

                            }

                            $events[$x]['event_data']['additional_fields'][$y] = $addVariable($name, $value, $default_value);

                        }

                    }

                    //  (1) Remove the first name field
                    if( isset($events[$x]['event_data']['first_name']) ) {

                        if( !empty($events[$x]['event_data']['first_name']) ) {

                            if( $events[$x]['event_data']['first_name']['code_editor_mode'] == true ) {

                                //  Set as metadata variable (as replacement)
                                $addVariable('first_name', $events[$x]['event_data']['first_name']['code_editor_text']);

                            }else{

                                //  Set as metadata variable (as replacement)
                                $addVariable('first_name', $events[$x]['event_data']['first_name']['text']);

                            }

                        }

                        unset($events[$x]['event_data']['first_name']);
                    }

                    //  (2) Remove the last name field
                    if( isset($events[$x]['event_data']['last_name']) ) {

                        if( !empty($events[$x]['event_data']['last_name']) ) {

                            if( $events[$x]['event_data']['last_name']['code_editor_mode'] == true ) {

                                //  Set as metadata variable (as replacement)
                                $addVariable('last_name', $events[$x]['event_data']['last_name']['code_editor_text']);

                            }else{

                                //  Set as metadata variable (as replacement)
                                $addVariable('last_name', $events[$x]['event_data']['last_name']['text']);

                            }

                        }

                        unset($events[$x]['event_data']['last_name']);
                    }

                    //  (3) Remove the mobile number field
                    if( isset($events[$x]['event_data']['mobile_number']) ) {

                        unset($events[$x]['event_data']['mobile_number']);

                    }

                    //  (4) Rename the "database_entry_reference_name" field to "reference_name"
                    if( isset($events[$x]['event_data']['database_entry_reference_name']) ) {

                        $events[$x]['event_data']['reference_name'] = $events[$x]['event_data']['database_entry_reference_name'];

                        unset($events[$x]['event_data']['database_entry_reference_name']);

                    }

                    //  (5) Replace the "user_account_reference_name" name field with the "reference_name" name field
                    if( isset($events[$x]['event_data']['user_account_reference_name']) ) {

                        $events[$x]['event_data']['reference_name'] = $events[$x]['event_data']['user_account_reference_name'];

                        unset($events[$x]['event_data']['user_account_reference_name']);

                    }

                    //  (6) Replace the "has_account_reference_name" name field with the "existence_reference_name" name field
                    if( isset($events[$x]['event_data']['has_account_reference_name']) ) {

                        $events[$x]['event_data']['existence_reference_name'] = $events[$x]['event_data']['has_account_reference_name'];

                        unset($events[$x]['event_data']['has_account_reference_name']);

                    }

                    //  (7) Add the "update_approach" field
                    if( !isset($events[$x]['event_data']['update_approach']) ) {

                        $events[$x]['event_data']['update_approach'] = 'merge';

                    }

                }

                //  Fix issues related to the "Event Collection" event handler
                if( $event['type'] ==  'Event Collection') {

                    //  If the "events" key exists
                    if( isset($events[$x]['event_data']['events']) ) {

                        //  Rename the "events" key to "collection" key
                        $events[$x]['event_data']['collection'] = $fixEvents($events[$x]['event_data']['events']);

                        unset($events[$x]['event_data']['events']);

                    }

                }

                //  Check if the event supports comments
                if( !isset($events[$x]['comment']) ) {

                    //  Enable comment support
                    $events[$x]['comment'] = '';

                }
            }

            return $events;
        };

        //  Set any missing values using the builder template
        foreach($builder_template as $property_name => $property_value){

            //  If the property does not exist
            if( !isset($versionArrayBuilder[$property_name]) ){

                //  Set the property and default value
                $versionArrayBuilder[$property_name] = $builder_template[$property_name];

            }

            if( empty($versionArrayBuilder['sms_connection']['username']['text']) ){

                $versionArrayBuilder['sms_connection'] = $builder_template['sms_connection'];

            }

            if( empty($versionArrayBuilder['airtime_billing_connection']['client_id']['text']) ){

                $versionArrayBuilder['airtime_billing_connection'] = $builder_template['airtime_billing_connection'];

            }

            if( $property_name === 'global_events' ) {

                //  If the global events are nested inside a key called "collection"
                if( isset($versionArrayBuilder['global_events']['collection']) ) {

                    //  Extract the nested events one level up
                    $versionArrayBuilder['global_events'] = $versionArrayBuilder['global_events']['collection'];

                }

                //  Fix specific event related issues
                $versionArrayBuilder['global_events'] = $fixEvents($versionArrayBuilder['global_events']);

            }

            if( $property_name === 'application_events' ) {

                //  Restructure "on_start" and "on_close"
                foreach(['on_start', 'on_close'] as $eventName) {

                    $code = function() use ($versionArrayBuilder, $eventName) {

                        if( isset($versionArrayBuilder['application_events'][$eventName]['conditional']['code']) &&
                            is_string($versionArrayBuilder['application_events'][$eventName]['conditional']['code']) ) {

                            return $versionArrayBuilder['application_events'][$eventName]['conditional']['code'];

                        }else{

                            return null;

                        }

                    };

                    $active = function() use ($versionArrayBuilder, $eventName) {

                        if( isset($versionArrayBuilder['application_events'][$eventName]['conditional']['active']) &&
                            is_bool($versionArrayBuilder['application_events'][$eventName]['conditional']['active']) ) {

                            return $versionArrayBuilder['application_events'][$eventName]['conditional']['active'];

                        }else{

                            return false;

                        }

                    };

                    $collection = function() use ($versionArrayBuilder, $eventName) {

                        if( isset($versionArrayBuilder['application_events'][$eventName]['collection']) ) {

                            return $versionArrayBuilder['application_events'][$eventName]['collection'];

                        }elseif( isset($versionArrayBuilder['application_events'][$eventName]) ) {

                            return $versionArrayBuilder['application_events'][$eventName];

                        }else{

                            return [];

                        }

                    };

                    //  Set the new structure for the Global Events
                    $versionArrayBuilder['application_events'][$eventName] = [

                        'conditional' => [

                            'code' => $code(),
                            'active' => $active(),

                        ],
                        'collection' => $collection()

                    ];

                    //  Fix specific event related issues
                    $versionArrayBuilder['application_events'][$eventName]['collection'] = $fixEvents($versionArrayBuilder['application_events'][$eventName]['collection']);

                }

            }

            if( $property_name === 'global_variables' ) {

                foreach($versionArrayBuilder['global_variables'] as $gv_key => $global_variable) {

                    //  Unset properties added by the Iview table component
                    unset($versionArrayBuilder['global_variables'][$gv_key]['_index']);
                    unset($versionArrayBuilder['global_variables'][$gv_key]['_rowKey']);

                    if( $versionArrayBuilder['global_variables'][$gv_key]['type'] == 'String' ) {

                        //  Convert the type from "String" to "string" as lowercase
                        $versionArrayBuilder['global_variables'][$gv_key]['type'] = 'string';

                    }

                    if( $versionArrayBuilder['global_variables'][$gv_key]['type'] == 'Integer' ) {

                        //  Convert the type from "Integer" to "integer" as lowercase
                        $versionArrayBuilder['global_variables'][$gv_key]['type'] = 'integer';

                        //  Convert the value key of "number" to "integer"
                        $versionArrayBuilder['global_variables'][$gv_key]['value']['integer'] = $versionArrayBuilder['global_variables'][$gv_key]['value']['number'];

                        //  Remove the deprecated "number" key name
                        unset($versionArrayBuilder['global_variables'][$gv_key]['value']['number']);

                    }

                    if( $versionArrayBuilder['global_variables'][$gv_key]['type'] == 'Boolean' ) {

                        //  Convert the type from "Boolean" to "boolean" as lowercase
                        $versionArrayBuilder['global_variables'][$gv_key]['type'] = 'boolean';

                    }

                    if( $versionArrayBuilder['global_variables'][$gv_key]['type'] == 'Null' ) {

                        //  Convert the type from "Null" to "null" as lowercase
                        $versionArrayBuilder['global_variables'][$gv_key]['type'] = 'null';

                    }

                    if( $versionArrayBuilder['global_variables'][$gv_key]['type'] == 'Custom' ) {

                        //  Convert the type from "Custom" to "code" as lowercase
                        $versionArrayBuilder['global_variables'][$gv_key]['type'] = 'code';

                    }

                }

            }

        }

        //  Foreach version screen
        foreach ($versionArrayBuilder['screens'] as $s_key => $screen) {

            /*****************
             *  SCREENS      *
             ****************/

            if( isset($versionArrayBuilder['screens'][$s_key]['requirements']) ){
                unset($versionArrayBuilder['screens'][$s_key]['requirements']);
            }

            //  Remove the repeat events which contain "before_repeat" and "after_repeat" (Deprecated)
            unset($versionArrayBuilder['screens'][$s_key]['repeat']['events']);

            //  Restructure "on_enter", "on_response" and "on_leave"
            foreach(['on_enter', 'on_response', 'on_leave'] as $eventName) {

                $code = function() use ($versionArrayBuilder, $s_key, $eventName) {

                    if( isset($versionArrayBuilder['screens'][$s_key]['events'][$eventName]['conditional']['code']) &&
                        is_string($versionArrayBuilder['screens'][$s_key]['events'][$eventName]['conditional']['code']) ) {

                        return $versionArrayBuilder['screens'][$s_key]['events'][$eventName]['conditional']['code'];

                    }else{

                        return null;

                    }

                };

                $active = function() use ($versionArrayBuilder, $s_key, $eventName) {

                    if( isset($versionArrayBuilder['screens'][$s_key]['events'][$eventName]['conditional']['active']) &&
                        is_bool($versionArrayBuilder['screens'][$s_key]['events'][$eventName]['conditional']['active']) ) {

                        return $versionArrayBuilder['screens'][$s_key]['events'][$eventName]['conditional']['active'];

                    }else{

                        return false;

                    }

                };

                $collection = function() use ($versionArrayBuilder, $s_key, $eventName) {

                    if( isset($versionArrayBuilder['screens'][$s_key]['events'][$eventName]['collection']) ) {

                        return $versionArrayBuilder['screens'][$s_key]['events'][$eventName]['collection'];

                    }elseif( isset($versionArrayBuilder['screens'][$s_key]['events'][$eventName]) ) {

                        return $versionArrayBuilder['screens'][$s_key]['events'][$eventName];

                    }else{

                        return [];

                    }

                };

                //  Set the new structure
                $versionArrayBuilder['screens'][$s_key]['events'][$eventName] = [

                    'conditional' => [
                        'code' => $code(),
                        'active' => $active(),
                    ],
                    'collection' => $collection()

                ];

                //  Fix specific event related issues
                $versionArrayBuilder['screens'][$s_key]['events'][$eventName]['collection'] = $fixEvents($versionArrayBuilder['screens'][$s_key]['events'][$eventName]['collection']);

            }

            //  Remove the marker "name" key
            foreach($versionArrayBuilder['screens'][$s_key]['markers'] as $m_key => $marker) {

                //  If the marker still uses the name key
                if( isset($versionArrayBuilder['screens'][$s_key]['markers'][$m_key]['name']) ){

                    /**
                     *  Flatten the value to simply include the value without the name key.
                     *
                     *  BEFORE: markers = [['name' => 'marker1'], ['name' => 'marker2'], ... ]
                     *
                     *  AFTER:  markers = ['marker1', 'marker2', ... ]
                     */
                    $versionArrayBuilder['screens'][$s_key]['markers'][$m_key] = $versionArrayBuilder['screens'][$s_key]['markers'][$m_key]['name'];

                }

            }


            foreach ($versionArrayBuilder['screens'][$s_key]['displays'] as $d_key => $display) {

                //  If the display uses the old "description" property instead of the new "instruction" property
                if( isset($display['content']['description']) ) {

                    //  Rename from "description" to "instruction"
                    $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['instruction'] = $display['content']['description'];

                    unset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['description']);

                }

                /*****************
                 *  DISPLAYS     *
                 ****************/

                //  Restructure "on_enter" (previously called "before_reply"), "on_response" (previously called "after_reply") and "on_leave" (recently introduced)
                foreach(['on_enter' => 'before_reply', 'on_response' => 'after_reply', 'on_leave' => ''] as $newEventName => $oldEventName) {

                    $code = function() use ($versionArrayBuilder, $s_key, $d_key, $newEventName) {

                        if( isset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['conditional']['code']) &&
                            is_string($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['conditional']['code']) ) {

                            return $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['conditional']['code'];

                        }else{

                            return null;

                        }

                    };

                    $active = function() use ($versionArrayBuilder, $s_key, $d_key, $newEventName) {

                        if( isset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['conditional']['active']) &&
                            is_bool($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['conditional']['active']) ) {

                            return $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['conditional']['active'];

                        }else{

                            return false;

                        }

                    };

                    $collection = function() use ($versionArrayBuilder, $s_key, $d_key, $newEventName, $oldEventName) {

                        if( isset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['collection']) ) {

                            return $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['collection'];

                        }elseif( isset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]) ) {

                            return $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName];

                        }elseif( isset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$oldEventName]) ) {

                            return $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$oldEventName];

                        }else{

                            return [];

                        }

                    };

                    $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName] = [

                        'conditional' => [

                            'code' => $code(),
                            'active' => $active(),

                        ],
                        'collection' => $collection()

                    ];

                    if( !empty($oldEventName) ) {

                        //  Remove "before_reply" and "after_reply" (Deprecated), but the "on_leave" remains the unchanged
                        unset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$oldEventName]);

                    }

                    //  Fix specific event related issues
                    $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['collection'] = $fixEvents($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['events'][$newEventName]['collection']);

                }

                //  Set the pagination (use_global_pagination) if not already set
                if( !isset( $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['pagination']['use_global_pagination'] ) ){

                    $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['pagination']['use_global_pagination'] = true;

                }

                //  Set the (display markers) if not already set
                if( !isset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['markers']) ){

                    $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['markers'] = [];

                }

                //  Remove the marker "name" key
                foreach($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['markers'] as $m_key => $marker) {

                    //  If the marker still uses the name key
                    if( isset($versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['markers'][$m_key]['name']) ){

                        /**
                         *  Flatten the value to simply include the value without the name key.
                         *
                         *  BEFORE: markers = [['name' => 'marker1'], ['name' => 'marker2'], ... ]
                         *
                         *  AFTER:  markers = ['marker1', 'marker2', ... ]
                         */
                        $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['markers'][$m_key] = $versionArrayBuilder['screens'][$s_key]['displays'][$d_key]['content']['markers'][$m_key]['name'];

                    }

                }

            }


        }

        //  If this is a REST Api request
        if ( $request->expectsJson() ) {

            /**
             *  Calculate the content-length which is required by the Axios REST Api call
             *  to calculate the download progress of the content.
             */
            $contentLength = strlen(json_encode($versionArrayBuilder));      //  3219152

            //  Return the version
            return response()->json($versionArrayBuilder)->header('Content-Length', $contentLength);

        }else{

            //  Update the current version
            $version->update([
                'builder' => $versionArrayBuilder,
            ]);

            //  Show the version
            return redirect()->route('version.show', [ 'project' => $project->id, 'app' => $app->id, 'version' => $version->id ]);

        }

    }


}
