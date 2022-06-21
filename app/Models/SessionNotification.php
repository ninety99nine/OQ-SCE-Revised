<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionNotification extends Model
{
    use HasFactory;

    protected $with = ['account'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $casts = [
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
        'ussd_account_id', 'session_id', 'type', 'name', 'message',
        'continue_text', 'showing_notification',

        /*  Meta Data  */
        'metadata',

        /*  Ownership Information  */
        'app_id'

    ];

    /*
     *  Returns ussd account
     */
    public function account()
    {
        return $this->belongsTo(UssdAccount::class, 'ussd_account_id');
    }
}
