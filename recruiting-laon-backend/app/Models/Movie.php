<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Movie extends Model
{
    protected $fillable = [
        'original_title',
        'title',
        'year',
        'duration',
        'overview',
        'cast',
        'awards',
        'director',
        'imdb_rating',
        'poster_url',
        'trailer_url',
    ];
    public function genres(): HasMany
    {
        return $this->hasMany(Genre::class);
    }
}
