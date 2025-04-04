<?php

namespace App\Services;

use App\Repositories\UserRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthService {
    public function __construct(protected UserRepositoryInterface $repository){}


    public function signIn($data){
        $validatedData = Validator::make($data, [
            'email' => 'required|email',
            'password' => 'required'
        ])->validate();
        
        if (Auth::attempt($validatedData)) {
            $token = Auth::user()->createToken('accessToken');
            return response()->json(['token' => $token->plainTextToken], 200);
        }
 
        return response()->json(['message' => 'Invalid email/password'], 422);
    }

    public function signUp($data){
        $validatedData = Validator::make($data, [
            'name' => 'required',
            'email' => 'required|unique:users|email',
            'password' => 'required|min:8',
        ])->validate();

        $user = $this->repository->create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        $token = $user->createToken('accessToken');
        return response()->json(['token' => $token->plainTextToken], 200);
    }
}