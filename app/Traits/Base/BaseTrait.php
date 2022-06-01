<?php

namespace App\Traits\Base;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

trait BaseTrait
{
    public function getBaseCacheName()
    {
        return 'CACHE_'.strtoupper(class_basename($this));
    }
}
