<?php

namespace App\Traits;

use Carbon\Carbon;
use App\Traits\Base\BaseTrait;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

trait UssdAccountTrait
{
    use BaseTrait;

    public function getCacheName($msisdn, $test_mode, $app_id)
    {
        //  If this is a test account
        if( $test_mode ){

            $user_id = auth()->user()->id;

            //  USSD_ACCOUNT_26772123456_1_2 = [ ... ]
            return $this->getBaseCacheName().'_'.$msisdn.'_'.$user_id.'_'.$app_id;

        }else{

            //  USSD_ACCOUNT_26772123456_2 = [ ... ]
            return $this->getBaseCacheName().'_'.$msisdn.'_'.$app_id;

        }
    }

    public function findAndCache($msisdn, $test_mode, $app_id)
    {
        //  We failed to retrieve from the cache, therefore perform a query
        $account = DB::table('ussd_accounts');

        //  If this is a test account
        if( $test_mode ){

            $user_id = auth()->user()->id;

            //  Filter test database entries
            $account = $account->where('test', 1)
                               ->where('msisdn', $msisdn)
                               ->where('app_id', $app_id)
                               ->where('user_id', $user_id);

        //  If this is a real account
        }else{

            //  Filter real account
            $account = $account->where('test', 0)
                               ->where('msisdn', $msisdn)
                               ->where('app_id', $app_id);
        }

        //  Get the first account
        $account = $account->first();

        if( $account ) {

            //  Cache the account e.g USSD_ACCOUNT_1_2 = [ ... ] (Valid for only 30 minutes)
            Cache::put($this->getCacheName($msisdn, $test_mode, $app_id), $account, Carbon::now()->addMinutes(30));

        }

        //  Return the account
        return $account;
    }

}
