<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Version;
use App\Models\SessionNotification;
use App\Services\Session\SessionNotificationService;

class NotificationController extends Controller
{
    public function index(Project $project, App $app, Version $version)
    {
        //  Get the notification service response
        $notificationServiceResponse = (new SessionNotificationService())->getNotifications();

        //  Version options
        $versionOptions = $app->versions()->select('id', 'number')->get();

        //  Set the props
        $props = array_merge([
            'appPayload' => $app,
            'projectPayload' => $project,
            'versionOptions' => $versionOptions,
            'versionPayload' => $version->makeHidden('builder'),
        ], $notificationServiceResponse);

        //  Show the user notifications
        return Inertia::render('Notifications/List', $props);
    }

    public function show(Project $project, App $app, Version $version, SessionNotification $notification)
    {
        //  Show the user notifications
        return Inertia::render('Notifications/Show', [
            'appPayload' => $app,
            'projectPayload' => $project,
            'notificationPayload' => $notification,
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
