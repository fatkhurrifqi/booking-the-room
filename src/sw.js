// Cache version
const CACHE_NAME = 'luxe-space-cache-v1';

// Files to cache
const FILES_TO_CACHE = ['/', '/index.html', '/home.html', '/favicon.ico', '/src/index.css', '/src/App.css', '/src/main.jsx', '/src/App.jsx', '/public/vite.svg', '/public/images/content/logo.png'];

// Install event - caching app shell
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event - cache cleanup
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(
      (response) =>
        response ||
        fetch(event.request).catch(() => {
          return caches.match('/index.html');
        })
    )
  );
});
