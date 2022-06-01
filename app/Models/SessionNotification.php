<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionNotification extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $casts = [
        'test' => 'boolean',
        'metadata' => 'array',
        'showing_notification' => 'boolean',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        /*  Session Notification Details  */
        'msisdn', 'test', 'type', 'name', 'message', 'continue_text', 'showing_notification',

        /*  Meta Data  */
        'metadata',

        /*  Ownership Information  */
        'app_id'

    ];
}
