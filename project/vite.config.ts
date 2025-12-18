import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const plugins = [
    laravel({
        input: ['resources/css/app.css', 'resources/js/app.tsx'],
        ssr: 'resources/js/ssr.tsx',
        refresh: true,
    }),
    react({
        babel: {
            plugins: ['babel-plugin-react-compiler'],
        },
    }),
    tailwindcss(),
];

// Wayfinder needs `php artisan` to be available. Disable it in environments
// (like Docker's Node build stage) where we set DISABLE_WAYFINDER=1.
if (!process.env.DISABLE_WAYFINDER) {
    plugins.push(
        wayfinder({
            formVariants: true,
        }),
    );
}

export default defineConfig({
    plugins, // ← This was missing!
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        host: 'localhost',
        port: 5173,
        strictPort: true,
        cors: true,
    },
});
