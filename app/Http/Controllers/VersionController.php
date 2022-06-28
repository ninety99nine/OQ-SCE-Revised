<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Version;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class VersionController extends Controller
{
    public function show(Project $project, App $app, Version $version)
    {
        //  If this is a REST Api request
        if (request()->expectsJson()) {

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

            //  Show the app version
            return Inertia::render('Versions/Show', [
                'appPayload' => $app,
                'projectPayload' => $project,
                'versionPayload' => $version->makeHidden('builder')
            ]);

        }
    }

    public function create(Project $project, App $app)
    {
        //  Validate the request inputs
        $data = Validator::make(request()->all(), [
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

        //  Create new app version
        $app->versions()->create($data);

        return redirect()->route('app.show', [ 'project' => $project->id, 'app' => $app->id ]);
    }

    public function update(Project $project, App $app, Version $version)
    {
        //  Check if the builder must be reset
        $wantsToResetBuilder = request()->input('reset_builder') == true;

        //  If the builder is provided
        if( request()->has('builder') ) {

            //  Incase we want to reset the builder
            if( $wantsToResetBuilder ) {

                //  Reset builder
                request()->merge(['builder' => $version->getBuilderTemplate()]);

            //  Incase the builder is provided in String format
            }else if( gettype(request()->input('builder') === 'string') ) {

                //  Convert the builder from String to Array format
                request()->merge(['builder' => json_decode(request()->input('builder'), true)]);

            }

        }

        //  Validate the request inputs
        $data = Validator::make(request()->all(), [
            'number' => ['sometimes', 'required', 'numeric', 'between:0,9999.99', Rule::unique('versions')->where('app_id', $app->id)->ignore($version->id)],
            'description' => ['nullable', 'string', 'min:3', 'max:500'],

            //  Resetting builder
            'reset_builder' => ['sometimes', 'required', 'boolean'],
            'features' => ['sometimes', 'array'],
            'features.*' => ['required'],
            'builder' => ['sometimes', 'required', 'array'],
            'confirmation_code' => [
                'string', 'size:6', ($wantsToResetBuilder ? '' : 'nullable'), Rule::requiredIf($wantsToResetBuilder), Rule::exists('versions')->where(function ($query) use ($version) {
                    return $query->where('id', $version->id);
                })
            ],
        ], [
            //  Custom messages
            'number.regex' => 'The version number must be a valid number or decimal',
            'confirmation_code.exists' => 'The reset code provided is not valid'
        ], [
            //  Custom attribute names
            'features.*' => 'feature',
        ])->validate();

        //  Update the existing version
        $version->update($data);

        //  Check if we should show the app
        if( request()->input('destination') === 'app.show' ) {

            //  Show the app
            return redirect()->route('app.show', [ 'project' => $project->id, 'app' => $app->id ]);

        }elseif( request()->input('destination') === 'version.show' ) {

            //  Show the version
            return redirect()->route('version.show', [ 'project' => $project->id, 'app' => $app->id, 'version' => $version->id ]);

        }
    }

    public function delete(Project $project, App $app, Version $version)
    {
        //  Validate the request inputs
        Validator::make(request()->all(), [
            'confirmation_code' => ['required', 'string', 'size:6', Rule::exists('versions')->where(function ($query) use ($version) {
                return $query->where('id', $version->id);
            })],
        ], [
            'confirmation_code.exists' => 'The confirmation code provided is not valid'
        ])->validate();

        //  Delete the existing project
        $version->delete();

        return redirect()->route('app.show', [ 'project' => $project->id, 'app' => $app->id ]);
    }

    public function repair(Project $project, App $app, Version $version)
    {
        //  If this is a REST Api request
        if ( request()->expectsJson() ) {

            //  If the builder is provided
            if( request()->has('builder') ) {

                //  Incase the builder is provided in String format
                if( gettype(request()->input('builder') === 'string') ) {

                    //  Convert the builder from String to Array format
                    request()->merge(['builder' => json_decode(request()->input('builder'), true)]);

                }

                //  Get the version builder
                $builder = request()->input('builder');

                //  Repair the version builder
                $repaiedBuilder = $version->repairBuilder($builder);

            }else{

                //  Get the version builder
                $repaiedBuilder = $version->getBuilderTemplate();

            }

            /**
             *  Calculate the content-length which is required by the Axios REST Api call
             *  to calculate the download progress of the content.
             */
            $contentLength = strlen(json_encode($repaiedBuilder));      //  3219152

            //  Return the version
            return response()->json($repaiedBuilder)->header('Content-Length', $contentLength);

        }

    }


}
