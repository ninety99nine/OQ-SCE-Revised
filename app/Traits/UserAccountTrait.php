<?php

namespace App\Traits;

use Carbon\Carbon;
use App\Traits\Base\BaseTrait;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

trait DatabaseEntryTrait
{
    use BaseTrait;

    public function getCacheName($msisdn, $name, $test_mode, $app_id)
    {
        //  If this is a test account
        if( $test_mode ){

            $user_id = auth('api')->user()->id;

            //  CACHE_DATABASE_ENTRY_26772123456_profile_1_2 = [ ... ]
            return $this->getBaseCacheName().'_'.$msisdn.'_'.$name.'_'.$user_id.'_'.$app_id;

        }else{

            //  CACHE_DATABASE_ENTRY_26772123456_profile_2 = [ ... ]
            return $this->getBaseCacheName().'_'.$msisdn.'_'.$name.'_'.$app_id;

        }
    }

    public function findAndCache($msisdn, $name, $test_mode, $app_id)
    {
        //  We failed to retrieve from the cache, therefore perform a query
        $database_entry = DB::table('database_entries');

        //  If this is a test account
        if( $test_mode ){

            $user_id = auth('api')->user()->id;

            //  Filter test database entries
            $database_entry = $database_entry
                                ->where('test', 1)
                                ->where('name', $name)
                                ->where('msisdn', $msisdn)
                                ->where('app_id', $app_id)
                                ->where('user_id', $user_id);

        //  If this is a real account
        }else{

            //  Filter real account
            $database_entry = $database_entry
                                ->where('test', 0)
                                ->where('name', $name)
                                ->where('msisdn', $msisdn)
                                ->where('app_id', $app_id);
        }

        //  Get the first database entry
        $database_entry = $database_entry->first();

        if( $database_entry ){

            //  Convert the metadata to an associative array (We want to do this operation once)
            $database_entry->metadata = json_decode($database_entry->metadata, true);

            //  Cache the database entry e.g CACHE_DATABASE_ENTRY_1_2 = [ ... ] (Valid for only 30 minutes)
            Cache::put($this->getCacheName($msisdn, $name, $test_mode, $app_id), Carbon::now()->addMinutes(30));

        }

        //  Return the database entry
        return $database_entry;
    }

}
