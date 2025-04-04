<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'signIn']);
Route::post('/register', [AuthController::class, 'signUp']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $request) => $request->user());
    
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/movies', [MovieController::class, 'list']);
    Route::get('/movies/{id}', [MovieController::class, 'get']);
});