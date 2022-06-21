<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AirtimeBilingToken extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'airtime_biling_tokens';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ussd_account_id', 'access_token', 'expiry_date'
    ];
}
