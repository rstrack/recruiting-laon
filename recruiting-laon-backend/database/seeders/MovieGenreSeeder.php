<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieGenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('movie_genre')->insert([
            [ 'movie_id' => 1, 'genre_id' => 1],
            [ 'movie_id' => 1, 'genre_id' => 16],
            [ 'movie_id' => 2, 'genre_id' => 14],
            [ 'movie_id' => 2, 'genre_id' => 16],
            [ 'movie_id' => 3, 'genre_id' => 1],
            [ 'movie_id' => 3, 'genre_id' => 2],
            [ 'movie_id' => 4, 'genre_id' => 1],
            [ 'movie_id' => 4, 'genre_id' => 14],
            [ 'movie_id' => 4, 'genre_id' => 16],
            [ 'movie_id' => 5, 'genre_id' => 1],
            [ 'movie_id' => 5, 'genre_id' => 17],
            [ 'movie_id' => 6, 'genre_id' => 1],
            [ 'movie_id' => 6, 'genre_id' => 19],
            [ 'movie_id' => 7, 'genre_id' => 1],
            [ 'movie_id' => 7, 'genre_id' => 5],
            [ 'movie_id' => 7, 'genre_id' => 16],
            [ 'movie_id' => 8, 'genre_id' => 10],
            [ 'movie_id' => 9, 'genre_id' => 7],
            [ 'movie_id' => 9, 'genre_id' => 8],
            [ 'movie_id' => 10, 'genre_id' => 2],
            [ 'movie_id' => 10, 'genre_id' => 3],
            [ 'movie_id' => 10, 'genre_id' => 7],
        ]);
    }
}
