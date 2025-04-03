<?php

namespace App\Providers;

use App\Repositories\UserRepositoryInterface;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(
            UserRepositoryInterface::class,
            fn() => new \App\Repositories\Implementations\Eloquent\UserRepository()
        );
    }
}
