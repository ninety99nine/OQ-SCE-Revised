<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Version;
use App\Models\UssdSession;
use App\Services\Session\SessionService;

class SessionController extends Controller
{
    public function index(Project $project, App $app, Version $version)
    {
        //  Get the session service response
        $sessionServiceResponse = (new SessionService())->getSessions();

        //  Version options
        $versionOptions = $app->versions()->select('id', 'number')->get();

        //  Set the props
        $props = array_merge([
            'appPayload' => $app,
            'projectPayload' => $project,
            'versionOptions' => $versionOptions,
            'versionPayload' => $version->makeHidden('builder'),
        ], $sessionServiceResponse);

        //  Show the user sessions
        return Inertia::render('Sessions/List', $props);
    }

    public function show(Project $project, App $app, Version $version, UssdSession $session)
    {
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
