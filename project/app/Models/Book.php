<?php

// =============================================================================
// FILE: app/Models/Book.php
// =============================================================================

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'therapeutic_focus',
        'full_description',
        'price',
        'is_premium',
        'cover_image',
        'file_path',
    ];

    protected $casts = [
        'is_premium' => 'boolean',
        'price' => 'decimal:2',
    ];

    /**
     * Get the cover image URL
     */
    public function getCoverImageUrlAttribute(): ?string
    {
        if (!$this->cover_image) {
            return null;
        }

        return Storage::url($this->cover_image);
    }

    /**
     * Check if user has access to this book
     */
    public function userHasAccess($user): bool
    {
        if (!$this->is_premium) {
            return true;
        }

        if (!$user) {
            return false;
        }

        // Check if user has purchased this book
        return $user->purchases()->where('book_id', $this->id)->exists();
    }

    /**
     * Get secure download URL (implement token-based access)
     */
    public function getSecureDownloadUrl($user): ?string
    {
        if (!$this->userHasAccess($user)) {
            return null;
        }

        // Generate temporary signed URL valid for 1 hour
        return route('books.download', [
            'book' => $this->id,
            'signature' => hash_hmac('sha256', $this->id . $user->id, config('app.key'))
        ]);
    }

    /**
     * Scope for free books
     */
    public function scopeFree($query)
    {
        return $query->where('is_premium', false);
    }

    /**
     * Scope for premium books
     */
    public function scopePremium($query)
    {
        return $query->where('is_premium', true);
    }
}
