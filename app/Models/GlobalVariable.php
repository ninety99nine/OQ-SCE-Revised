<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GlobalVariable extends Model
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
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        /*  Global Variable Information  */
        'msisdn', 'test',

        /*  Meta Data  */
        'metadata',

        /*  Ownership Information  */
        'app_id'
    ];

}
