<?php

namespace App\Services;


use App\Http\Resources\MovieResource;
use App\Repositories\MovieRepositoryInterface;

class MovieService {
    public function __construct(protected MovieRepositoryInterface $repository){}

    public function list($search){
        $movies = $this->repository->findAll($search);
        return MovieResource::collection($movies);
    }

    public function get($id){
        $movie = $this->repository->findByID($id);
        return new MovieResource($movie);
    }
}