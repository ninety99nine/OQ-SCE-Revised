<?php

use App\Http\Controllers\DatabaseEntryController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\UssdAccountsController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\SimulationController;
use App\Http\Controllers\VersionController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\GlobalVariableController;
use Illuminate\Support\Facades\Route;

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

                        //  Versions
                        Route::controller(VersionController::class)
                            ->prefix('versions')
                            ->group(function () {

                            Route::get('/', 'index')->name('versions.show');
                            Route::post('/', 'create')->name('versions.create');

                            Route::prefix('/{version}')->group(function () {

                                Route::name('version.')->group(function () {
                                    Route::get('/', 'show')->name('show');
                                    Route::put('/', 'update')->name('update');
                                    Route::delete('/', 'delete')->name('delete');
                                    Route::post('/repair', 'repair')->name('repair');
                                });

                                //  Accounts
                                Route::controller(UssdAccountsController::class)
                                    ->prefix('accounts')
                                    ->group(function () {

                                    Route::get('/', 'index')->name('accounts.show');

                                    Route::prefix('/{account}')->name('account.')->group(function () {
                                        Route::get('/sessions', 'show')->name('sessions.show');
                                        Route::get('/notifications', 'show')->name('notifications.show');
                                        Route::get('/database-entries', 'show')->name('database.entries.show');
                                        Route::get('/global-variables', 'show')->name('global.variables.show');
                                        Route::delete('/', 'delete')->name('delete');
                                    });

                                });

                                //  Sessions
                                Route::controller(SessionController::class)
                                    ->prefix('sessions')
                                    ->group(function () {

                                    Route::get('/', 'index')->name('sessions.show');

                                    Route::prefix('/{session}')->name('session.')->group(function () {

                                        Route::get('/', 'show')->name('show');
                                        Route::delete('/', 'delete')->name('delete');

                                    });

                                });

                                //  Notifications
                                Route::controller(NotificationController::class)
                                    ->prefix('notifications')
                                    ->group(function () {

                                    Route::get('/', 'index')->name('notifications.show');

                                    Route::prefix('/{notification}')->name('notification.')->group(function () {

                                        Route::get('/', 'show')->name('show');
                                        Route::delete('/', 'delete')->name('delete');

                                    });

                                });

                                //  Database Entries
                                Route::controller(DatabaseEntryController::class)
                                    ->prefix('database-entries')
                                    ->group(function () {

                                    Route::get('/', 'index')->name('database.entries.show');

                                    Route::prefix('/{database_entry}')->name('database.entry.')->group(function () {

                                        Route::get('/', 'show')->name('show');
                                        Route::put('/', 'update')->name('update');
                                        Route::delete('/', 'delete')->name('delete');

                                    });

                                });

                                //  Global Variables
                                Route::controller(GlobalVariableController::class)
                                    ->prefix('global-variables')
                                    ->group(function () {

                                    Route::get('/', 'index')->name('global.variables.show');

                                    Route::prefix('/{global_variable}')->name('global.variable.')->group(function () {

                                        Route::get('/', 'show')->name('show');
                                        Route::put('/', 'update')->name('update');
                                        Route::delete('/', 'delete')->name('delete');

                                    });

                                });

                            });

                        });

                    });

                });

            });

        });

    /**
     *  The below routes are used by the USSD Simulator (Test sessions)
     */
    Route::post('/launch/ussd/simulation', [SimulationController::class, 'launchUssd'])->name('launch.ussd.simulation');
    Route::post('/{session}/stop/ussd/simulation', [SimulationController::class, 'stopUssd'])->name('stop.ussd.simulation');

});
