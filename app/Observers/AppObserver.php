<?php

namespace App\Observers;

use App\Models\App;

class AppObserver
{
    public function created(App $app)
    {
        //  Re-Cache this app
        $app->findAndCache();
    }

    public function updated(App $app)
    {
        //  Re-Cache this app
        $app->findAndCache();
    }

    public function deleted(App $app)
    {
        //  Remove this app from cache
        $app->removeFromCache();
    }

    public function restored(App $app)
    {
        //
    }

    public function forceDeleted(App $app)
    {
        //  Remove this app from cache
        $app->removeFromCache();
    }
}
