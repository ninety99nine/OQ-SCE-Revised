<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SimulationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/launch/ussd', [SimulationController::class, 'launchUssd'])->name('launch-ussd');
Route::post('/{session}/stop/ussd', [SimulationController::class, 'stopUssd'])->name('stop-ussd');

/**
 *  DELETE THIS AND POINT ALL USSD SHORTCODES TO THE ROUTE ABOVE. THE ROUTE BELOW IS DEPRECATED.
 *  WE NOW USE THE "/launch/ussd" route instead of the "/api/ussd/builder" which was used by the
 *  legacy Service Creation Environment.
 */
Route::post('/ussd/builder', [SimulationController::class, 'launchUssd'])->name('legacy-launch-ussd');
