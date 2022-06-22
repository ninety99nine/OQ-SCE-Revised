<?php

namespace App\Services\Session;

use App\Models\UssdAccount;

class SessionService
{
    public function getSessions()
    {
        //  Get the search term
        $search = request()->input('search');

        //  If the account exists on the request
        if( request()->account ) {

            //  If the request account is a string
            if( is_string(request()->account) ) {

                //  Query the account
                request()->account = UssdAccount::findOrFail(request()->account);

            }

            //  Get the specified account sessions
            $sessions = request()->account->sessions();

        }elseif( request()->version ) {

            //  Get the specified version sessions
            $sessions = request()->version->sessions();

        }else{

            //  Get the app sessions
            $sessions = request()->app->sessions();

        }

        /**
         *  We need to clone the $sessions because when the "Where Clause" is applied
         *  it is then chained as part of the Eloquent "Where Clauses". This then
         *  applies the previous where clause for other code logic which is not
         *  a desired outcome. To solve this, we clone the "sessions" variable
         *  and apply the necessary where clause on that particular instance
         *  knowing that it would not be used again.
         */
        $totalSessions = (clone $sessions)->count();

        $totalMobileSessions = (clone $sessions)->realAccounts()->count();
        $totalSimulatorSessions = (clone $sessions)->testAccounts()->count();

        $totalFailSessions = (clone $sessions)->failed()->count();
        $totalSuccessSessions = (clone $sessions)->successful()->count();

        //  Filter by origin
        if( $origin = request()->input('origin') ) {

            if($origin === 'mobile') {
                $sessions = $sessions->realAccounts();
            }elseif($origin === 'simulator') {
                $sessions = $sessions->testAccounts();
            }

        }

        //  Filter by status
        if( $status = request()->input('status') ) {

            if($status === 'success') {
                $sessions = $sessions->successful();
            }elseif($status === 'fail') {
                $sessions = $sessions->failed();
            }

        }

        //  Filter by request type
        if( $requestType = request()->input('requestType') ) {

            if($requestType !== 'any') {
                $sessions = $sessions->where('request_type', $requestType);
            }

        }

        $sessionsPayload = $sessions->search($search)->latest()->paginate()->withQueryString();

        //  Return the sessions
        return [
            'sessionsPayload' => $sessionsPayload,
            'statistics' => [
                'totalSessions' => number_format($totalSessions, 0, '', ','),
                'totalFailSessions' => number_format($totalFailSessions, 0, '', ','),
                'totalSuccessSessions' => number_format($totalSuccessSessions, 0, '', ','),
                'totalMobileSessions' => number_format($totalMobileSessions, 0, '', ','),
                'totalSimulatorSessions' => number_format($totalSimulatorSessions, 0, '', ','),
            ]
        ];
    }
}
