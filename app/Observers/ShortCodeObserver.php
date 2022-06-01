<?php

namespace App\Observers;

use App\Models\ShortCode;
use Illuminate\Support\Facades\Cache;

class ShortCodeObserver
{
    public function created(ShortCode $shortCode)
    {
        //  Generate a new and unique shared shortcode
        $uniqueSharedCode = str_replace('#', '*'.$shortCode->id.'#', request()->input('shared_short_code'));

        //  Set the generated unique shared shortcode
        $shortCode->update([
            'shared_code' => $uniqueSharedCode
        ]);

        //  Re-Cache the shortcodes
        $shortCode->findAndCache();
    }

    public function updated(ShortCode $shortCode)
    {
        //
    }

    public function deleted(ShortCode $shortCode)
    {
        //
    }

    public function restored(ShortCode $shortCode)
    {
        //
    }

    public function forceDeleted(ShortCode $shortCode)
    {
    }
}
