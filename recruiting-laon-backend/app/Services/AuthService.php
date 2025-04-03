<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthService {

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
}