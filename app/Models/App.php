<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Traits\AppTrait;

class App extends Model
{
    use HasFactory, AppTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $casts = [
        'online' => 'boolean'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'online', 'offline_message', 'delete_code', 'active_version_id', 'project_id'
    ];

    /**
     *  Scope: Search by name
     */
    public function scopeSearch($query, $search)
    {
        return empty($search) ? $query : $query->where('name', 'like', '%'.$search.'%');
    }

    /*
     *  Returns ussd short code
     */
    public function shortCode()
    {
        return $this->hasOne(ShortCode::class);
    }

    /*
     *  Returns versions of this app
     */
    public function versions()
    {
        return $this->hasMany(Version::class);
    }

    /*
     *  Returns versions of this app without the builder
     */
    public function versionsWithoutBuilder()
    {
        return $this->versions()->select('id', 'number', 'description', 'features', 'app_id', 'delete_code', 'created_at', 'updated_at');
    }

    /*
     *  Returns the active version of this app
     */
    public function activeVersion()
    {
        return $this->belongsTo(Version::class, 'active_version_id');
    }

    /*
     *  Returns the sessions
     */
    public function sessions()
    {
        return $this->hasMany(UssdSession::class);
    }

    /*
     *  Returns test sessions
     */
    public function testSessions()
    {
        return $this->sessions()->where('test', 1);
    }

    /*
     *  Returns live sessions
     */
    public function liveSessions()
    {
        return $this->sessions()->where('test', 0);
    }

    /*
     *  Returns database entries
     */
    public function databaseEntries()
    {
        return $this->hasMany(DatabaseEntry::class);
    }

    /*
     *  Returns test database entries
     */
    public function testDatabaseEntries()
    {
        return $this->databaseEntries()->where('test', 1);
    }

    /*
     *  Returns live database entries
     */
    public function liveDatabaseEntries()
    {
        return $this->databaseEntries()->where('test', 0);
    }

    //  ON DELETE EVENT
    public static function boot()
    {
        try {

            parent::boot();

            //  before delete() method call this
            static::deleting(function ($app) {

                //  Delete versions
                $app->versions()->delete();

                // do the rest of the cleanup...
            });

        } catch (\Exception $e) {
            throw($e);
        }
    }

}
