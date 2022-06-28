<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Version;
use App\Models\ShortCode;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\SharedShortCode;
use Illuminate\Support\Facades\Validator;

class AppController extends Controller
{
    public function show(Project $project, App $app)
    {
        //  Get the search term
        $search = request()->input('search');

        //  Shared Shortcodes options
        $sharedShortCodes = SharedShortCode::all();

        //  Version options
        $versionsPayload = $app->versions()->select('id', 'number')->get();

        //  Get the user app versiosn
        $appVersionsPayload = $app->versionsWithoutBuilder()->search($search)->latest()->paginate(6)->withQueryString();

        //  Show the user apps
        return Inertia::render('Apps/Show', [
            'appPayload' => $app,
            'projectPayload' => $project,
            'versionsPayload' => $versionsPayload,
            'appVersionsPayload' => $appVersionsPayload,
            'sharedShortCodesPayload' => $sharedShortCodes
        ]);
    }

    public function create(Project $project, Request $request)
    {
        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'online' => ['required', 'boolean'],
            'description' => ['nullable', 'string', 'min:3', 'max:500'],
            'offline_message' => ['nullable', 'string', 'min:3', 'max:120'],
            'shared_short_code_id' => [Rule::exists('shared_short_codes', 'id')],
            'dedicated_code' => ['nullable', 'regex:/^\*[0-9]+(\*[0-9]+)*#$/',
                $request->input('overide_dedicated_code') == true ? '' : Rule::unique('short_codes')
            ],
            'name' => ['required', 'string', 'min:3', 'max:30', Rule::unique('apps')->where('project_id', $project->id)],
        ], [
            'dedicated_code.unique' => 'The :attribute is already used by another app. Do you want to reassign the shortcode?'
        ])->validate();

        //  Create new app (Set the verison as the active version)
        $app = App::create(array_merge($data, [
            'project_id' => $project->id,
        ]));

        //  Create new version
        $version = $app->versions()->create([
            'builder' => (new Version)->getBuilderTemplate(),
            'description' => $data['description'],
            'features' => []
        ]);

        //  Assign the active version
        $app->assignActiveVersion($version->id);

        //  Assign the dedicated code
        $app->assignDedicatedCode( $request->input('dedicated_code') );

        //  Assign the shared code
        $app->assignSharedCode( $request->input('shared_short_code_id') );

        return redirect()->route('project.show', ['project' => $project->id]);
    }

    public function update(Project $project, App $app, Request $request)
    {
        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'online' => ['required', 'boolean'],
            'active_version_id' => ['required', 'integer'],
            'description' => ['nullable', 'string', 'min:3', 'max:500'],
            'shared_short_code_id' => [Rule::exists('shared_short_codes', 'id')],
            'name' => ['required', 'string', 'min:3', 'max:30', Rule::unique('apps')->where('project_id', $project->id)->ignore($app->id)],
            'offline_message' => ['string', 'min:3', 'max:120', Rule::requiredIf( request()->input('online') == false )],
            'dedicated_code' => ['nullable', 'regex:/^\*[0-9]+(\*[0-9]+)*#$/',
                $request->input('overide_dedicated_code') == true ? '' : Rule::unique('short_codes')->ignore($app->id, 'app_id')
            ]
        ], [
            'dedicated_code.unique' => 'The :attribute is already used by another app. Do you want to reassign the shortcode?'
        ], [
            'active_version_id' => 'active version'
        ])->validate();

        //  Update app
        $app->update($data);

        //  Assign the active version
        $app->assignActiveVersion( $request->input('active_version_id') );

        //  Assign the dedicated code
        $app->assignDedicatedCode( $request->input('dedicated_code') );

        //  Assign the shared code
        $app->assignSharedCode( $request->input('shared_short_code_id') );

        //  Check if we should show the project
        if( $request->input('destination') === 'project.show' ) {

            //  Show the project
            return redirect()->route('project.show', ['project' => $project->id]);

        }else{

            //  Show the app
            return redirect()->route('app.show', ['project' => $project->id, 'app' => $app->id]);

        }
    }

    public function delete(Project $project, App $app, Request $request)
    {
        //  Validate the request inputs
        Validator::make($request->all(), [
            'confirmation_code' => ['required', 'string', 'size:6', Rule::exists('apps')->where(function ($query) use ($app) {
                return $query->where('id', $app->id);
            })],
        ], [
            'confirmation_code.exists' => 'The confirmation code provided is not valid'
        ])->validate();

        //  Delete the existing app
        $app->delete();

        return redirect()->route('project.show', ['project' => $project->id]);
    }
}
