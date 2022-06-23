<?php

namespace App\Http\Controllers;

use App\Models\UssdSession;
use App\Services\Ussd\UssdService;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;

class SimulationController extends Controller
{
    public function launchUssd()
    {
        //  If we are starting a new test session
        if( request()->input('test_mode') == true && request()->input('request_type') == 1) {

            //  Close other running sessions
            UssdSession::whereIn('request_type', ['1', '2'])
                ->whereHas('account', function (Builder $query) {
                    $query->where('user_id', auth()->user()->id);
                })->update([
                    'request_type' => '3',   //  End the session
                    'updated_at' => now()
                ]);

        }

        return (new UssdService(request()))->setup();
    }

    public function stopUssd()
    {
        if( $sessionId = request()->session ) {

            //  Close current running session
            DB::table('ussd_sessions')->where('session_id', $sessionId)->update([
                'request_type' => '3',   //  End the session
                'updated_at' => now()
            ]);

        }
    }

}
