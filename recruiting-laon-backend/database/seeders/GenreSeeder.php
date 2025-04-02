<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('genres')->insert([
            [ 'id' => 1, 'description' => 'Ação' ],
            [ 'id' => 2, 'description' => 'Aventura' ],
            [ 'id' => 3, 'description' => 'Animação' ],
            [ 'id' => 4, 'description' => 'Comédia' ],
            [ 'id' => 5, 'description' => 'Crime' ],
            [ 'id' => 6, 'description' => 'Documentário' ],
            [ 'id' => 7, 'description' => 'Família' ],
            [ 'id' => 8, 'description' => 'Fantasia' ],
            [ 'id' => 9, 'description' => 'História' ],
            [ 'id' => 10, 'description' => 'Terror' ],
            [ 'id' => 11, 'description' => 'Música' ],
            [ 'id' => 12, 'description' => 'Mistério' ],
            [ 'id' => 13, 'description' => 'Romance' ],
            [ 'id' => 14, 'description' => 'Ficção científica' ],
            [ 'id' => 15, 'description' => 'Cinema TV' ],
            [ 'id' => 16, 'description' => 'Suspense' ],
            [ 'id' => 17, 'description' => 'Guerra' ],
            [ 'id' => 18, 'description' => 'Faroeste' ],
            [ 'id' => 19, 'description' => 'Drama' ],
            [ 'id' => 20, 'description' => 'Kids' ],
            [ 'id' => 21, 'description' => 'Notícias' ],
            [ 'id' => 22, 'description' => 'Reality' ],
            [ 'id' => 23, 'description' => 'Ficção Científica & Fantasia' ],
            [ 'id' => 24, 'description' => 'Novela' ],
            [ 'id' => 25, 'description' => 'Faroeste' ],
        ]);
    }
}
