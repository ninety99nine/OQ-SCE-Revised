<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Models\SharedShortCode;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function index()
    {
        /**
         *  @var User $user
         */
        $user = auth()->user();

        //  Get the search term
        $search = request()->input('search');

        //  Get the user projects
        $projectsPayload = $user->projectsAsTeamMember()->search($search)->withCount('apps')->latest()->paginate(9)->withQueryString();

        //  Show the user projects
        return Inertia::render('Projects/List', [
            'projectsPayload' => $projectsPayload
        ]);
    }

    public function show(Project $project)
    {
        //  Get the search term
        $search = request()->input('search');

        //  Get the user project apps
        $appsPayload = $project->apps()->withCount('versions')->with([
            'shortCode',
            'versions' => function($query) {
                $query->select('id', 'app_id', 'number');
            },
            'activeVersion' => function($query) {
                $query->select('id', 'app_id', 'number', 'features');
            },
        ])->search($search)->latest()->paginate(6)->withQueryString();

        //  Get the shared shortcodes
        $sharedShortCodesPayload = SharedShortCode::all();

        //  Show the user projects
        return Inertia::render('Projects/Show', [
            'sharedShortCodesPayload' => $sharedShortCodesPayload,
            'projectPayload' => $project,
            'appsPayload' => $appsPayload,
        ]);
    }

    public function create(Request $request)
    {
        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'name' => ['required', 'string', 'min:3', 'max:30', 'unique:projects,name']
        ])->validate();

        //  Create new project (Set the verison as the active app)
        $project = Project::create( array_merge($data, [
            'confirmation_code' => random_int(100000, 999999)
        ]));

        //  Add user to project
        DB::table('project_user')->insert([
            'permissions' => json_encode(['*']),
            'user_id' => auth()->user()->id,
            'project_id' => $project->id,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return redirect()->route('projects.show');
    }

    public function update(Project $project, Request $request)
    {
        //  Validate the request inputs
        $data = Validator::make($request->all(), [
            'name' => ['required', 'string', 'min:3', 'max:30', Rule::unique('projects')->ignore($project->id)]
        ])->validate();

        //  Update the existing project
        $project->update( array_merge($data, [
            'confirmation_code' => random_int(100000, 999999)
        ]));

        return redirect()->route('project.show', ['project' => $project->id]);
    }

    public function delete(Project $project, Request $request)
    {
        //  Validate the request inputs
        Validator::make($request->all(), [
            'confirmation_code' => ['required', 'string', 'size:6', Rule::exists('projects')->where(function ($query) use ($project) {
                return $query->where('id', $project->id);
            })],
        ], [
            'confirmation_code.exists' => 'The confirmation code provided is not valid'
        ])->validate();

        //  Delete the existing project
        $project->delete();

        return redirect()->route('projects.show');
    }
}
