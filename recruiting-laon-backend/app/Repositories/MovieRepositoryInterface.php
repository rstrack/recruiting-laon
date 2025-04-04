<?php

namespace App\Repositories;

interface MovieRepositoryInterface {
    public function findByID($id);
    public function findAll($search);
}