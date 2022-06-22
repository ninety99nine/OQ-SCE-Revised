<?php

namespace App\Models;

use App\Traits\UssdAccountTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UssdAccount extends Model
{
    use HasFactory, UssdAccountTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $casts = [
        'test' => 'boolean'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        /*  Ussd Account Information  */
        'msisdn', 'test',

        /*  Ownership Information  */
        'user_id', 'app_id', 'version_id'

    ];

    /**
     *  Scope: Search by msisdn
     */
    public function scopeSearch($query, $search)
    {
        return empty($search) ? $query : $query->where('msisdn', 'like', '%'.$search.'%');
    }

    /**
     *  Scope: Test Account
     */
    public function scopeTestAccounts($query)
    {
        return $query->where('test', '1');
    }

    /**
     *  Scope: Real Account
     */
    public function scopeRealAccounts($query)
    {
        return $query->where('test', '0');
    }

    /*
     *  Returns account sessions
     */
    public function sessions()
    {
        return $this->hasMany(UssdSession::class);
    }

    /*
     *  Returns account session notifications
     */
    public function sessionNotifications()
    {
        return $this->hasMany(SessionNotification::class);
    }

    /*
     *  Returns account global variables
     */
    public function globalVariables()
    {
        return $this->hasMany(GlobalVariable::class);
    }

    /*
     *  Returns account database entries
     */
    public function databaseEntries()
    {
        return $this->hasMany(DatabaseEntry::class);
    }

    /* ATTRIBUTES */

    protected $appends = [
        'origin', 'mobile_number'
    ];

    /*
     *  Returns origin
     */
    public function getOriginAttribute()
    {
        return $this->test == 1 ? 'Simulator' : 'Mobile';
    }

    /*
     *  Returns total replies
     */
    public function getMobileNumberAttribute()
    {
        return preg_replace("/^267/", "$1", $this->msisdn);
    }
}
