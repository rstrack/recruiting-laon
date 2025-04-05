<?php

namespace App\Repositories\Implementations\Eloquent;

use App\Repositories\MovieRepositoryInterface;
use App\Models\Movie;

class MovieRepository implements MovieRepositoryInterface
{
    public function findByID($id)
    {
        $movie = Movie::with('genres')->findOrFail($id);
        return $movie;
    }

    public function findAll($search)
    {
        $movies = Movie::select(['id', 'title', 'poster_url'])
            ->where('title', 'like', "%{$search}%")
            ->paginate();
        return $movies;
    }
}