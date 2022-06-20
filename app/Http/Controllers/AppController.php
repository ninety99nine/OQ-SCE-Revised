<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use App\Models\App;
use App\Models\Project;
use App\Models\ShortCode;
use App\Models\Version;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AppController extends Controller
{
    public function show(Project $project, App $app)
    {
        //  Get the search term
        $search = request()->input('search');

        //  Version options
        $versionOptions = $app->versions()->select('id', 'number')->get();

        //  Get the user app versiosn
        $versionsPayload = $app->versionsWithoutBuilder()->search($search)->latest()->paginate(6)->withQueryString();

        //  Show the user apps
        return Inertia::render('Apps/Show', [
            'appPayload' => $app,
            'projectPayload' => $project,
            'versionOptions' => $versionOptions,
            'versionsPayload' => $versionsPayload,
        ]);
    }

    public function create(Project $project, Request $request)
    {
        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'online' => ['required', 'boolean'],
            'description' => ['nullable', 'string', 'min:3', 'max:500'],
            'offline_message' => ['nullable', 'string', 'min:3', 'max:120'],
            'name' => ['required', 'string', 'min:3', 'max:30', Rule::unique('apps')->where('project_id', $project->id)],
        ])->validate();

        //  Create new version
        $version = Version::create([
            'builder' => (new Version)->getBuilderTemplate(),
            'confirmation_code' => random_int(100000, 999999),
            'description' => $data['description'],
            'features' => []
        ]);

        //  Create new app (Set the verison as the active version)
        $app = App::create( array_merge($data, [
            'confirmation_code' => random_int(100000, 999999),
            'active_version_id' => $version->id,
            'project_id' => $project->id,
        ]));

        //  Create new shared shortcode for this new app
        $shortCode = ShortCode::create([
            'app_id' => $app->id
        ]);

        //  Associate the active version with the new app
        $version->update([
            'app_id' => $app->id
        ]);

        return redirect()->route('project.show', ['project' => $project->id]);
    }

    public function update(Project $project, App $app, Request $request)
    {
        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'online' => ['required', 'boolean'],
            'active_version_id' => ['required', 'integer'],
            'description' => ['nullable', 'string', 'min:3', 'max:500'],
            'name' => ['required', 'string', 'min:3', 'max:30', Rule::unique('apps')->where('project_id', $project->id)->ignore($app->id)],
            'offline_message' => ['string', 'min:3', 'max:120', Rule::requiredIf( request()->input('online') == false )],
        ], [], [
            'active_version_id' => 'active version'
        ])->validate();

        //  Update the existing app
        $app->update( array_merge($data, [
            'confirmation_code' => random_int(100000, 999999)
        ]));

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
