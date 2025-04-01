<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class LoginController extends Controller
{
    public function authenticate(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        
        if (Auth::attempt($credentials)) {
 
            $token = Auth::user()->createToken('accessToken');

            return response()->json(['token' => $token->plainTextToken], 200);
        }
 
        return response()->json(['message' => 'Invalid email/password'], 422);
    }
}