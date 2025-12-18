Command Breakdown
bashcomposer run dev
This triggers a custom script defined in your composer.json that runs:
bashnpx concurrently -c "#93c5fd,#c4b5fd,#fdba74" \
  "php artisan serve" \
  "php artisan queue:listen --tries=1" \
  "npm run dev" \
  --names='server,queue,vite'
```

## The Three Processes Running:

### 1. **[server] - PHP Artisan Serve** 🟦 (blue #93c5fd)
```
INFO  Server running on [http://127.0.0.1:8000]
```
- **What**: Laravel's built-in development web server
- **Purpose**: Serves your Laravel backend (API routes, controllers, blade views)
- **Port**: 8000
- **Role**: Handles HTTP requests, database queries, authentication, business logic

### 2. **[queue] - Queue Worker** 🟪 (purple #c4b5fd)
```
INFO  Processing jobs from the [default] queue
```
- **What**: Laravel queue listener
- **Purpose**: Processes background jobs asynchronously (emails, notifications, data processing)
- **Flag**: `--tries=1` means jobs only attempt once (fail fast in development)
- **Role**: Handles time-consuming tasks without blocking HTTP requests

### 3. **[vite] - Vite Dev Server** 🟧 (orange #fdba74)
```
VITE v7.2.7  ready in 9186 ms
Local:   http://localhost:5173/
```
- **What**: Vite development server for React frontend
- **Purpose**: Hot Module Replacement (HMR) - instant updates when you edit React components
- **Port**: 5173
- **Features**:
  - Fast refresh (changes appear instantly without page reload)
  - TypeScript compilation
  - Asset bundling (CSS, images)
  - Laravel Vite Plugin integration

## How They Work Together:
```
┌─────────────────────────────────────┐
│  Browser: http://localhost:8000     │
└──────────────┬──────────────────────┘
               │
       ┌───────▼────────┐
       │  Laravel Server │ (Port 8000)
       │  [server]       │
       └───────┬─────────┘
               │
    ┌──────────┼──────────┐
    │                     │
┌───▼────┐         ┌──────▼──────┐
│ Queue  │         │    Vite     │ (Port 5173)
│[queue] │         │   [vite]    │
└────────┘         └──────┬──────┘
                          │
                   ┌──────▼──────┐
                   │ React App   │
                   │ (HMR)       │
                   └─────────────┘
The Flow:

You visit: http://localhost:8000
Laravel serves the initial HTML with references to Vite assets
Vite injects your React app into the page via @vite directive
React connects to Vite's WebSocket for hot updates
Queue processes background jobs independently

Key Benefits:

✅ Hot Module Replacement: Edit React code → see changes instantly
✅ Fast Refresh: Component state preserved during updates
✅ Background Jobs: Email/notifications don't slow down requests
✅ Single Command: One command starts entire dev environment
✅ Color-coded Logs: Easy to identify which service logged what

Important Notes:
The Vite Port (5173) is internal - you don't visit it directly. Always use http://localhost:8000 because:

Laravel handles authentication/sessions
API routes need Laravel's middleware
Vite proxies through Laravel automatically

When you make changes:

Edit .tsx/.jsx files → Vite hot reloads React components
Edit .php files → Refresh browser (Laravel server restarts)
Edit queue jobs → May need to restart queue worker