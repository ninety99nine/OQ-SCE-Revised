<?php

namespace App\Models;

use App\Traits\VersionTrait;
use Illuminate\Database\Eloquent\Model;

class Version extends Model
{
    use VersionTrait;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'builder' => 'array',
        'features' => 'array',
        'number' => 'decimal:2',    //  2 represents the decimal precision to return e.g 1.00, 2.00, e.t.c
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'number', 'description', 'builder', 'features', 'app_id', 'confirmation_code'
    ];

    /**
     *  Scope: Search by name
     */
    public function scopeSearch($query, $search)
    {
        return $search ? $query->where('number', 'like', '%'.$search.'%')
                               ->orWhere('description', 'like', '%'.$search.'%')
                       : $query;
    }

    /*
     *  Returns the app of this version
     */
    public function app()
    {
        return $this->belongsTo(Project::class, 'app_id');
    }

    /*
     *  Returns the sessions
     */
    public function sessions()
    {
        return $this->hasMany(UssdSession::class);
    }

}
