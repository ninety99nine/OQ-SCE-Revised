<?php

namespace App\Observers;

use App\Models\Version;

class VersionObserver
{
    public function created(Version $version)
    {
        //  Re-Cache this version
        $version->findAndCache();
    }

    public function updated(Version $version)
    {
        //  Re-Cache this version
        $version->findAndCache();
    }

    public function deleted(Version $version)
    {
        //  Remove this version from cache
        $version->removeFromCache();
    }

    public function restored(Version $version)
    {
        //
    }

    public function forceDeleted(Version $version)
    {
        //  Remove this version from cache
        $version->removeFromCache();
    }
}
