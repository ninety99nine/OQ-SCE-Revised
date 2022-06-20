<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\UssdSession;
use App\Models\Version;

class SessionController extends Controller
{
    public function index(Project $project, App $app, Version $version)
    {
        //  Get the search term
        $search = request()->input('search');

        //  Eager load the shortcode
        $app->load('shortCode');

        //  Version options
        $versionOptions = $app->versions()->select('id', 'number')->get();

        //  Get the version sessions
        $sessions = $version->sessions();

        /**
         *  We need to clone the $sessions because when the "Where Clause" is applied
         *  it is then chained as part of the Eloquent "Where Clauses". This then
         *  applies the previous where clause for other code logic which is not
         *  a desired outcome. To solve this, we clone the "sessions" variable
         *  and apply the necessary where clause on that particular instance
         *  knowing that it would not be used again.
         */
        $totalSessions = (clone $sessions)->count();
        $totalMobileSessions = (clone $sessions)->where('test', '0')->count();
        $totalSimulatorSessions = (clone $sessions)->where('test', '1')->count();
        $totalFailSessions = (clone $sessions)->where('fatal_error', '1')->count();
        $totalSuccessSessions = (clone $sessions)->where('fatal_error', '0')->count();

        //  Filter by origin
        if( $origin = request()->input('origin') ) {

            if($origin === 'mobile') {
                $sessions = $sessions->where('test', '0');
            }elseif($origin === 'simulator') {
                $sessions = $sessions->where('test', '1');
            }

        }

        //  Filter by status
        if( $status = request()->input('status') ) {

            if($status === 'success') {
                $sessions = $sessions->where('fatal_error', '0');
            }elseif($status === 'fail') {
                $sessions = $sessions->where('fatal_error', '1');
            }

        }

        //  Filter by request type
        if( $requestType = request()->input('requestType') ) {

            if($requestType !== 'any') {
                $sessions = $sessions->where('request_type', $requestType);
            }

        }

        $sessionsPayload = $sessions->search($search)->latest()->paginate()->withQueryString();

        //  Show the user sessions
        return Inertia::render('Sessions/List', [
            'appPayload' => $app,
            'projectPayload' => $project,
            'versionOptions' => $versionOptions,
            'sessionsPayload' => $sessionsPayload,
            'versionPayload' => $version->makeHidden('builder'),
            'statistics' => [
                'totalSessions' => number_format($totalSessions, 0, '', ','),
                'totalFailSessions' => number_format($totalFailSessions, 0, '', ','),
                'totalSuccessSessions' => number_format($totalSuccessSessions, 0, '', ','),
                'totalMobileSessions' => number_format($totalMobileSessions, 0, '', ','),
                'totalSimulatorSessions' => number_format($totalSimulatorSessions, 0, '', ','),
            ]
        ]);
    }

    public function show(Project $project, App $app, Version $version, UssdSession $session)
    {
        //  Eager load the shortcode
        $app->load('shortCode');

        //  Show the user sessions
        return Inertia::render('Sessions/Show', [
            'appPayload' => $app,
            'projectPayload' => $project,
            'sessionPayload' => $session,
            'versionPayload' => $version->makeHidden('builder')
        ]);
    }

    public function create()
    {
    }

    public function update()
    {
    }

    public function delete()
    {
    }
}
