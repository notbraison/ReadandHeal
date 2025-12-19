<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    public function definition(): array
    {
        $isPremium = fake()->boolean(30); // 30% premium books

        $therapeuticFocuses = [
            'Anxiety and Stress Relief',
            'Depression and Mood Enhancement',
            'Self-Esteem and Confidence',
            'Grief and Loss',
            'Trauma Recovery',
            'Mindfulness and Meditation',
            'Personal Growth',
            'Relationship Healing',
            'Addiction Recovery',
            'Sleep and Relaxation',
        ];

        return [
            'title' => fake()->sentence(rand(2, 5)),
            'author' => fake()->name(),
            'therapeutic_focus' => fake()->randomElement($therapeuticFocuses),
            'full_description' => fake()->paragraphs(3, true),
            'price' => $isPremium ? fake()->randomFloat(2, 4.99, 29.99) : 0,
            'is_premium' => $isPremium,
            'cover_image' => 'covers/' . fake()->uuid() . '.jpg',
            'file_path' => 'books/' . fake()->uuid() . '.pdf',
        ];
    }

    /**
     * Indicate that the book is free
     */
    public function free(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_premium' => false,
            'price' => 0,
        ]);
    }

    /**
     * Indicate that the book is premium
     */
    public function premium(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_premium' => true,
            'price' => fake()->randomFloat(2, 9.99, 29.99),
        ]);
    }
}
