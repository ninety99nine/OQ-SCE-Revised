<?php

namespace App\Http\Controllers;

use App\Models\App;
use Inertia\Inertia;
use App\Models\Version;
use App\Models\Project;
use App\Models\UssdAccount;
use App\Services\Session\SessionService;

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

        $accountsPayload = $accounts->search($search)->withCount(['sessions', 'sessionNotifications', 'globalVariables'])->latest()->paginate()->withQueryString();

        //  Show the user accounts
        return Inertia::render('Accounts/List', [
            'appPayload' => $app,
            'projectPayload' => $project,
            'accountsPayload' => $accountsPayload,
            'versionPayload' => $version->makeHidden('builder'),
            'statistics' => [
                'totalAccounts' => number_format($totalAccounts, 0, '', ','),
                'totalMobileAccounts' => number_format($totalMobileAccounts, 0, '', ','),
                'totalSimulatorAccounts' => number_format($totalSimulatorAccounts, 0, '', ','),
            ]
        ]);
    }

    public function show(Project $project, App $app, Version $version)
    {
        //  Get the account
        $account = UssdAccount::withCount(['sessions', 'sessionNotifications', 'globalVariables'])->findOrFail(request()->account);

        if (/* $request->routeIs('admin.*') */ true) {

            //  Get the session service response
            $sessionServiceResponse = (new SessionService())->getSessions();

            //  Version options
            $versionOptions = $app->versions()->select('id', 'number')->get();

            //  Set the props
            $props = array_merge([
                'appPayload' => $app,
                'projectPayload' => $project,
                'accountPayload' => $account,
                'versionOptions' => $versionOptions,
                'versionPayload' => $version->makeHidden('builder'),
            ], $sessionServiceResponse);

        }

        //  Show the user accounts
        return Inertia::render('Accounts/Show', $props);
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
