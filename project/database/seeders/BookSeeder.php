
// =============================================================================
// FILE: database/seeders/BookSeeder.php
// =============================================================================

<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        // Create 10 free books
        Book::factory()
            ->count(10)
            ->free()
            ->create();

        // Create 15 premium books
        Book::factory()
            ->count(15)
            ->premium()
            ->create();

        // Create specific featured books
        Book::create([
            'title' => 'The Anxiety Workbook',
            'author' => 'Dr. Sarah Johnson',
            'therapeutic_focus' => 'Anxiety and Stress Relief',
            'full_description' => 'A comprehensive guide to understanding and managing anxiety through proven therapeutic techniques.',
            'price' => 0,
            'is_premium' => false,
            'cover_image' => 'covers/anxiety-workbook.jpg',
            'file_path' => 'books/anxiety-workbook.pdf',
        ]);

        Book::create([
            'title' => 'Healing Through Words',
            'author' => 'Michael Chen',
            'therapeutic_focus' => 'Trauma Recovery',
            'full_description' => 'An evidence-based approach to processing trauma through reading and reflection.',
            'price' => 19.99,
            'is_premium' => true,
            'cover_image' => 'covers/healing-words.jpg',
            'file_path' => 'books/healing-words.pdf',
        ]);
    }
}
