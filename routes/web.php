<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\VersionController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/login', 301);
Route::get('/login', [LoginController::class, 'show'])->name('login.show');
Route::post('/login', [LoginController::class, 'authenticate'])->name('login.authenticate');

Route::get('/register', [RegisterController::class, 'show'])->name('register.show');
Route::post('/register', [RegisterController::class, 'create'])->name('register.create');

Route::post('/logout', [LogoutController::class, 'logout'])->name('logout');

Route::middleware(['auth'])->group(function () {

    Route::controller(ProjectController::class)
        ->prefix('projects')
        /**
         *  Scope bindings will instruct laravel to fetch the child relationship via
         *  the parent relatcionship e.g "projects/{project}/versions/{version}" will
         *  make sure that the {version} must be a resource related to the {project}
         *  provided.
         *
         *  Refer to: https://laravel.com/docs/9.x/routing#implicit-model-binding-scoping
         */
        ->scopeBindings()
        ->group(function () {

            Route::get('/', 'index')->name('projects.show');
            Route::post('/', 'create')->name('projects.create');

            Route::prefix('/{project}')->group(function () {

                Route::name('project.')->group(function () {
                    Route::get('/', 'show')->name('show');
                    Route::put('/', 'update')->name('update');
                    Route::delete('/', 'delete')->name('delete');
                });

                Route::controller(AppController::class)
                    ->prefix('apps')
                    ->group(function () {

                    Route::post('/', 'create')->name('apps.create');

                    Route::prefix('/{app}')->group(function () {

                        Route::name('app.')->group(function () {
                            Route::get('/', 'show')->name('show');
                            Route::put('/', 'update')->name('update');
                            Route::delete('/', 'delete')->name('delete');
                        });

                        Route::controller(VersionController::class)
                            ->prefix('versions')
                            ->group(function () {

                            Route::get('/', 'index')->name('versions.show');
                            Route::post('/', 'create')->name('versions.create');

                            Route::prefix('/{version}')->name('version.')->group(function () {

                                Route::get('/', 'show')->name('show');
                                Route::put('/', 'update')->name('update');
                                Route::delete('/', 'delete')->name('delete');
                                Route::post('/simulate', 'simulate')->name('simulate');

                                Route::post('/repair', 'repair')->name('repair');

                            });

                        });
                    });

                });

            });

        });

});
