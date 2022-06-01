<?php

namespace App\Models;

use App\Traits\DatabaseEntryTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DatabaseEntry extends Model
{
    use DatabaseEntryTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $casts = [
        'test' => 'boolean',
        'metadata' => 'array',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        /*  Global Variable Information  */
        'msisdn', 'name', 'test',

        /*  Meta Data  */
        'metadata',

        /*  Ownership Information  */
        'app_id', 'user_id'

    ];

    /*
     *  Scope:
     *  Return test database entries
     */
    public function scopeTestEntries($query)
    {
        return $query->where('test', 1);
    }

    /*
     *  Scope:
     *  Return real database entries
     */
    public function scopeRealEntries($query)
    {
        return $query->where('test', 0);
    }

    /*
     *  Returns the owning project
     */
    public function project()
    {
        return $this->belongsTo('App\Project', 'project_id');
    }

}
