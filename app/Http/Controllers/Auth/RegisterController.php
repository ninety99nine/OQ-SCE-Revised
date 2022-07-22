<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function show()
    {
        return Inertia::render('Auth/Register/Show');
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $credentials = $request->validate([
            //  The security email and password
            'signin_with_acount' => ['required', 'boolean'],
            'security_email' => ['required', 'email'],
            'security_password' => ['required'],

            'name' => ['required', 'min:3', 'max:30'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed', Password::min(6)],
        ]);

        $securityCredentials = [
            'email' => $credentials['security_email'],
            'password' => $credentials['security_password']
        ];

        //  Check if the security email and password represent a valid account
        if ( Auth::attempt($securityCredentials) ) {

            $credentials['name'] = ucwords($credentials['name']);
            $credentials['password'] = bcrypt($credentials['password']);

            $user = User::create($credentials);

            //  Check is the user is already logged in
            if( $credentials['signin_with_acount'] === true ) {

                Auth::login($user);

                return redirect()->route('projects.show');

            }else{

                return redirect()->back();

            }

        }else{

            throw ValidationException::withMessages([
                'security_email' => 'The provided credentials do not match our records.'
            ]);

        }
    }
}
