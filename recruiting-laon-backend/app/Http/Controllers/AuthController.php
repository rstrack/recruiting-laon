<?php
 
namespace App\Http\Controllers;
 
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(protected AuthService $service){}
    
    public function signIn(Request $request)
    {
        return $this->service->signIn($request->only('email', 'password'));
    }

    public function signUp(Request $request)
    {
        return $this->service->signUp($request->only('name', 'email', 'password'));
    }

    public function logout(Request $request)
    {
        return $this->service->logout();
    }
}