<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class AdminLoginController extends Controller
{
public function showLoginForm() {
    return view('admin.auth.login');
}

public function login(Request $request) {
    if (Auth::guard('admin')->attempt($request->only('email', 'password'))) {
        return redirect()->route('admin.dashboard');
    }
    return back()->withErrors(['email' => 'Invalid Credentials']);
}
}
