const CACHE_NAME = 'SuperDiamondPrograming-offline';
const CACHE_DATA = [
  'config.json',
  'user.json',
  'service-worker-executor.js',
  'offline-access.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_DATA);
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
