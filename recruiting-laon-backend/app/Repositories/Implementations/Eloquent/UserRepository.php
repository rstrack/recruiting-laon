<?php

namespace App\Repositories\Implementations\Eloquent;

use App\Repositories\UserRepositoryInterface;
use App\Models\User;

class UserRepository implements UserRepositoryInterface
{
    public function create($data) {
        $user = User::create($data);
        return $user;
    }

    public function update($data, $id) {
        $user = User::findOrFail($id);
        $user->update($data);
        return $user;
    }
}