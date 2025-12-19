<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AdminLoginController;

Route::get('/', function () {
    return Inertia::render('homepage', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


// User Routes

// Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('login', [AdminLoginController::class, 'showLoginForm'])->name('admin.login');
    Route::post('login', [AdminLoginController::class, 'login']);
    Route::get('/dashboard', function () {
        return 'Admin Dashboard';
    })->middleware('auth:admin');
});

//book routes with auth middleware
Route::middleware(['auth', 'verified'])->group(function () {
    // Book routes
    Route::get('/books', [BookController::class, 'index'])->name('books.index');
    Route::get('/books/{book}', [BookController::class, 'show'])->name('books.show');
    Route::get('/books/{book}/download', [BookController::class, 'download'])->name('books.download');

    // Admin routes (add admin middleware)
    Route::middleware(['admin'])->group(function () {
        Route::post('/books', [BookController::class, 'store'])->name('books.store');
        Route::put('/books/{book}', [BookController::class, 'update'])->name('books.update');
        Route::delete('/books/{book}', [BookController::class, 'destroy'])->name('books.destroy');
    });
});


require __DIR__.'/settings.php';
