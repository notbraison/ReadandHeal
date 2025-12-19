<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of books
     */
    public function index(Request $request)
    {
        $query = Book::query();

        // Filter by premium status
        if ($request->has('type')) {
            if ($request->type === 'free') {
                $query->free();
            } elseif ($request->type === 'premium') {
                $query->premium();
            }
        }

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('author', 'like', "%{$search}%")
                    ->orWhere('therapeutic_focus', 'like', "%{$search}%");
            });
        }

        $books = $query->latest()->paginate(12);

        return Inertia::render('Books/Index', [
            'books' => $books,
            'filters' => $request->only(['type', 'search']),
        ]);
    }

    /**
     * Display the specified book
     */
    public function show(Book $book)
    {
        $book->load([]);

        $userHasAccess = $book->userHasAccess(auth()->user());

        return Inertia::render('Books/Show', [
            'book' => [
                ...$book->toArray(),
                'cover_image_url' => $book->cover_image_url,
                'user_has_access' => $userHasAccess,
                'download_url' => $userHasAccess ? $book->getSecureDownloadUrl(auth()->user()) : null,
            ],
        ]);
    }

    /**
     * Download book (with security checks)
     */
    public function download(Request $request, Book $book)
    {
        $user = auth()->user();

        if (!$user) {
            abort(401, 'You must be logged in to download books.');
        }

        if (!$book->userHasAccess($user)) {
            abort(403, 'You do not have access to this book.');
        }

        // Verify signature
        $expectedSignature = hash_hmac('sha256', $book->id . $user->id, config('app.key'));
        if ($request->signature !== $expectedSignature) {
            abort(403, 'Invalid download signature.');
        }

        if (!Storage::exists($book->file_path)) {
            abort(404, 'Book file not found.');
        }

        return Storage::download($book->file_path, $book->title . '.pdf');
    }

    /**
     * Store a newly created book (admin only)
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'therapeutic_focus' => 'nullable|string|max:255',
            'full_description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'is_premium' => 'required|boolean',
            'cover_image' => 'nullable|image|max:2048',
            'book_file' => 'required|file|mimes:pdf,epub|max:51200', // 50MB max
        ]);

        // Handle cover image upload
        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request->file('cover_image')
                ->store('covers', 'public');
        }

        // Handle book file upload (private storage)
        if ($request->hasFile('book_file')) {
            $validated['file_path'] = $request->file('book_file')
                ->store('books', 'private');
        }

        $book = Book::create($validated);

        return redirect()->route('books.show', $book)
            ->with('success', 'Book created successfully!');
    }

    /**
     * Update the specified book (admin only)
     */
    public function update(Request $request, Book $book)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'therapeutic_focus' => 'nullable|string|max:255',
            'full_description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'is_premium' => 'required|boolean',
            'cover_image' => 'nullable|image|max:2048',
            'book_file' => 'nullable|file|mimes:pdf,epub|max:51200',
        ]);

        // Handle cover image update
        if ($request->hasFile('cover_image')) {
            if ($book->cover_image) {
                Storage::disk('public')->delete($book->cover_image);
            }
            $validated['cover_image'] = $request->file('cover_image')
                ->store('covers', 'public');
        }

        // Handle book file update
        if ($request->hasFile('book_file')) {
            if ($book->file_path) {
                Storage::disk('private')->delete($book->file_path);
            }
            $validated['file_path'] = $request->file('book_file')
                ->store('books', 'private');
        }

        $book->update($validated);

        return redirect()->route('books.show', $book)
            ->with('success', 'Book updated successfully!');
    }

    /**
     * Remove the specified book (admin only)
     */
    public function destroy(Book $book)
    {
        // Delete associated files
        if ($book->cover_image) {
            Storage::disk('public')->delete($book->cover_image);
        }

        if ($book->file_path) {
            Storage::disk('private')->delete($book->file_path);
        }

        $book->delete();

        return redirect()->route('books.index')
            ->with('success', 'Book deleted successfully!');
    }
}
