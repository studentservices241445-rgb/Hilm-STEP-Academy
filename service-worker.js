// Simple service worker for offline caching of site assets
const CACHE_NAME = 'step-academy-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './app-config.js',
  './level-test.html',
  './assets/img/top-scores.png',
  './assets/img/logo-192.png',
  './assets/img/logo-512.png',
  './assets/css/styles.css',
  './assets/js/app.js',
  './assets/js/app-config.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});