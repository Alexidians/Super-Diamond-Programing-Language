const CACHE_NAME = 'superdiamondprograming-offline-access';
const CACHE_DATA = [
  'offline-access.js',
  'offline-access.html',
  'programing-language.js'
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
