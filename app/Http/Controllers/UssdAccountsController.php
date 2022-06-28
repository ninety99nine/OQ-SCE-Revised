<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Version;
use App\Models\Project;
use App\Models\UssdAccount;
use App\Services\Session\SessionService;
use App\Services\Session\DatabaseEntryService;
use App\Services\Session\GlobalVariableService;
use App\Services\Session\SessionNotificationService;

class UssdAccountsController extends Controller
{
    public function index(Project $project, App $app, Version $version)
    {
        //  Get the search term
        $search = request()->input('search');

        //  Get the version accounts
        $accounts = $app->accounts();

        /**
         *  We need to clone the $accounts because when the "Where Clause" is applied
         *  it is then chained as part of the Eloquent "Where Clauses". This then
         *  applies the previous where clause for other code logic which is not
         *  a desired outcome. To solve this, we clone the "accounts" variable
         *  and apply the necessary where clause on that particular instance
         *  knowing that it would not be used again.
         */
        $totalAccounts = (clone $accounts)->count();
        $totalMobileAccounts = (clone $accounts)->realAccounts()->count();
        $totalSimulatorAccounts = (clone $accounts)->testAccounts()->count();

        //  Filter by origin
        if( $origin = request()->input('origin') ) {
            if($origin === 'mobile') {
                $accounts = $accounts->realAccounts();
            }elseif($origin === 'simulator') {
                $accounts = $accounts->testAccounts();
            }
        }

        $accountsPayload = $accounts->search($search)->withCount(['sessions', 'sessionNotifications', 'databaseEntries', 'globalVariables'])->latest()->paginate()->withQueryString();

        //  Prepare Response
        $props = [
            'appPayload' => $app,
            'projectPayload' => $project,
            'accountsPayload' => $accountsPayload,
            'versionPayload' => $version->makeHidden('builder'),
            'statistics' => [
                'totalAccounts' => number_format($totalAccounts, 0, '', ','),
                'totalMobileAccounts' => number_format($totalMobileAccounts, 0, '', ','),
                'totalSimulatorAccounts' => number_format($totalSimulatorAccounts, 0, '', ','),
            ]
        ];

        //  Return Response
        return request()->expectsJson() ? $props : Inertia::render('Accounts/List', $props);

    }

    public function show(Project $project, App $app, Version $version)
    {
        //  Get the account
        $account = UssdAccount::withCount(['sessions', 'sessionNotifications', 'databaseEntries', 'globalVariables'])->findOrFail(request()->account);

        if ( request()->routeIs('account.sessions.show') ) {

            //  Get the session service response
            $serviceResponse = (new SessionService())->getSessions();

        }else if ( request()->routeIs('account.notifications.show') ) {

            //  Get the notification service response
            $serviceResponse = (new SessionNotificationService())->getNotifications();

        }else if ( request()->routeIs('account.database.entries.show') ) {

            //  Get the database entries service response
            $serviceResponse = (new DatabaseEntryService())->getDatabaseEntries();

        }else if ( request()->routeIs('account.global.variables.show') ) {

            //  Get the global variables service response
            $serviceResponse = (new GlobalVariableService())->getGlobalVariables();

        }

        //  Version options
        $versionOptions = $app->versions()->select('id', 'number')->get();

        //  Prepare Response
        $props = array_merge([
            'appPayload' => $app,
            'projectPayload' => $project,
            'accountPayload' => $account,
            'versionOptions' => $versionOptions,
            'versionPayload' => $version->makeHidden('builder'),
        ], $serviceResponse);

        //  Return Response
        return request()->expectsJson() ? $props : Inertia::render('Accounts/Show', $props);

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
