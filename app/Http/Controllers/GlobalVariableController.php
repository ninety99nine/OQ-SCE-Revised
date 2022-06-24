<?php

namespace App\Http\Controllers;

use App\Models\App;
use App\Models\GlobalVariable;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Version;
use App\Models\SessionNotification;
use App\Services\Session\GlobalVariableService;

class GlobalVariableController extends Controller
{
    public function index(Project $project, App $app, Version $version)
    {
        //  Version options
        $versionOptions = $app->versions()->select('id', 'number')->get();

        //  Get the global variable service response
        $globalVariableServiceResponse = (new GlobalVariableService())->getGlobalVariables();

        //  Prepare Response
        $props = array_merge([
            'appPayload' => $app,
            'projectPayload' => $project,
            'versionOptions' => $versionOptions,
            'versionPayload' => $version->makeHidden('builder')
        ], $globalVariableServiceResponse);

        //  Return Response
        return request()->expectsJson() ? $props : Inertia::render('GlobalVariables/List', $props);
    }

    public function show(Project $project, App $app, Version $version, GlobalVariable $globalVariable)
    {
        //  Prepare Response
        $props = [
            'appPayload' => $app,
            'projectPayload' => $project,
            'globalVariablePayload' => $globalVariable,
            'versionPayload' => $version->makeHidden('builder')
        ];

        //  Return Response
        return request()->expectsJson() ? $props : Inertia::render('GlobalVariables/Show', $props);
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
