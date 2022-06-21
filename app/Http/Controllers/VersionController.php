<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\UssdSession;
use App\Models\Version;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use App\Services\Ussd\UssdService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Builder;

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

            //  Show the app version
            return Inertia::render('Versions/Show', [
                'appPayload' => $app,
                'projectPayload' => $project,
                'versionPayload' => $version->makeHidden('builder')
            ]);

        }
    }

    public function startSimulation(Project $project, App $app, Version $version, Request $request)
    {
        //  If we are starting a new test session
        if( ($testMode = request()->input('test_mode')) == true && ($requestType = request()->input('request_type')) == 1) {

            //  Close other running sessions
            UssdSession::whereIn('request_type', ['1', '2'])
                ->whereHas('account', function (Builder $query) {
                    $query->where('user_id', auth()->user()->id);
                })->update([
                    'request_type' => '3',   //  End the session
                    'updated_at' => now()
                ]);

        }

        return (new UssdService($request))->setup();
    }

    public function stopSimulation(Project $project, App $app, Version $version, Request $request)
    {
        if( $sessionId = request()->session ) {

            //  Close current running session
            DB::table('ussd_sessions')->where('session_id', $sessionId)->update([
                'request_type' => '3',   //  End the session
                'updated_at' => now()
            ]);

        }
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
            'confirmation_code' => random_int(100000, 999999),
            'app_id' => $app->id
        ]));

        return redirect()->route('app.show', [ 'project' => $project->id, 'app' => $app->id ]);
    }

    public function update(Project $project, App $app, Version $version, Request $request)
    {
        $wantsToResetBuilder = request()->input('reset_builder') == true;

        if( $request->has('builder') && gettype($request->input('builder') === 'string')) {

            //  Convert the builder provided from String to Array format
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

        $builder = $wantsToResetBuilder ? $version->getBuilderTemplate() : ( request()->has('builder') ? request()->input('builder') : $version->builder);

        //  Update the existing version
        $version->update( array_merge($data, [
            'confirmation_code' => random_int(100000, 999999),
            'builder' => $version->repairBuilder($builder)
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

    public function repair(Project $project, App $app, Version $version, Request $request)
    {
        //  If this is a REST Api request
        if ( $request->expectsJson() ) {

            if( $request->has('builder') && gettype($request->input('builder') === 'string')) {

                //  Convert the builder provided from String to Array format
                $request->merge(['builder' => json_decode(request()->input('builder'), true)]);

            }

            //  Get the version builder
            $builder = request()->input('builder');

            //  Repair the version builder
            $repaiedBuilder = $version->repairBuilder($builder);

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
