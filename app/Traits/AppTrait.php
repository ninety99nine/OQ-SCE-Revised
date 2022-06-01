<?php

namespace App\Traits;

use App\Traits\Base\BaseTrait;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

trait AppTrait
{
    use BaseTrait;

    public function getCacheName($id)
    {
        return $this->getBaseCacheName().'_'.$id;
    }

    public function findAndCache($id = null)
    {
        if( $id == null) {

            $app = $this;
            $id = $app->id;

        }else{

            //  We failed to retrieve from the cache, therefore perform a query
            $app = DB::table('apps')->select('id', 'name', 'description', 'active_version_id')->find($id);

        }

        //  Cache the app
        Cache::put($this->getCacheName($id), $app);

        //  Return the project
        return $app;
    }

    public function removeFromCache($id = null)
    {
        if( $id == null) {
            $id = $this->id;
        }

        Cache::forget($this->getCacheName($id));
    }

}
