<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class SettingController extends Controller
{
    protected $phpCommands = [
        'git pull',
        'composer install',
    ];

    protected $artisanCommands = [
        'config:cache',
        'config:clear',
        'cache:clear',
        'route:clear',
        'route:cache',
        'migrate'
    ];

    public function index()
    {
        $data = [];

        if( request()->routeIs('settings.server.commands') ) {

            $data['commands'] = [
                ...$this->artisanCommands,
                ...$this->phpCommands,
            ];

        }

        return Inertia::render('Settings', $data);
    }

    public function updateAccount()
    {
        $data = Validator::make(request()->all(), [
            'curr_password' => ['current_password'],
            'new_password' => ['required', 'confirmed', Password::min(6)]
        ])->validate();

        auth()->user()->update([
            'password' => bcrypt($data['new_password'])
        ]);

        return redirect()->back();
    }

    public function runServerCommands()
    {
        $data = Validator::make(request()->all(), [
            'command' => ['required', 'string']
        ])->validate();

        $response = null;

        $command = $data['command'];

        if( in_array($command, $this->artisanCommands) || in_array($command, $this->phpCommands) ) {

            /**
             *  Navigate to the application root folder and execute the command.
             *  Since this is a sudo command, we need to echo the server user
             *  password.
             */
            if(in_array($command, ['git pull'])) {

                $response = shell_exec('cd '.base_path().' && sudo '.$command);

            }if(in_array($command, ['composer install'])) {

                $response = shell_exec('cd '.base_path().' && '.$command.' --no-dev');

            }else{

                //  dd(shell_exec('cd '.base_path().' && sudo php artisan '.$command.' && echo 1Timothy5:7!'));
                $response = shell_exec('cd '.base_path().' && php artisan '.$command);

            }

        }

        return $response;
    }

    public function downloadApplicationLogFile()
    {
        return response()->download(storage_path('logs/laravel.log'));
    }
}
