<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        /** The best practice would be to put cast, awards, 
         * director in their own tables, but to optimize 
         * time this implementation was chosen.*/
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'original_title');
            $table->string(column: 'title');
            $table->integer(column: 'year');
            $table->integer(column: 'duration')->comment('in minutes');
            $table->text(column: 'overview');
            $table->string(column: 'cast');
            $table->string(column: 'awards')->nullable();
            $table->string(column: 'director');
            $table->float(column: 'imdb_rating');
            $table->string(column: 'poster_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
