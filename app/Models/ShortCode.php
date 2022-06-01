<?php

namespace App\Models;

use App\Traits\ShortCodeTrait;
use Illuminate\Database\Eloquent\Model;

class ShortCode extends Model
{
    use ShortCodeTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'shared_code', 'dedicated_code', 'app_id'
    ];

    /*
     *  Returns the app of this shortcode
     */
    public function app()
    {
        return $this->belongsTo(App::class);
    }

    /****************************
     *  ACCESSORS               *
     ***************************/

    protected $appends = ['primary_code'];

    public function getPrimaryCodeAttribute()
    {
        return $this->dedicated_code ?? $this->shared_code;
    }

}
