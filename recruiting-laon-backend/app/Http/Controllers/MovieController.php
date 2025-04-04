<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\MovieService;

use Illuminate\Http\Request;

class MovieController extends Controller
{

    public function __construct(protected MovieService $service){}

    public function list(Request $request) {
        return $this->service->list($request->query('search'));
    }

    public function get(string $id) {
        return $this->service->get($id);
    }

}