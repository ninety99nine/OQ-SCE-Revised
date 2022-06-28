<?php

namespace App\Traits\Base;

trait BaseTrait
{
    public function getBaseCacheName()
    {
        return 'CACHE_'.strtoupper(class_basename($this));
    }

    public function generateConfirmationCode()
    {
        return random_int(100000, 999999);
    }
}
