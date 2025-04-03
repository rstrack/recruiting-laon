<?php

namespace App\Repositories;

interface UserRepositoryInterface {
    public function create($data);
    public function update($data, $id);
}