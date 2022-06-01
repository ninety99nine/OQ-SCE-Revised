<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;

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
            'email' => ['required', 'email', 'unique:users'],
            'name' => ['required', 'min:3', 'max:30'],
            'password' => ['required'],
        ]);

        $credentials['password'] = bcrypt($credentials['password']);

        $user = User::create($credentials);

        Auth::login($user);

        return redirect()->route('projects.show');
    }
}
