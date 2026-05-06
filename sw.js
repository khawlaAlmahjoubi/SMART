self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('lms-v1').then(cache => {
      return cache.addAll([
        'lms-d-lrqmy-lshml.html',
        'manifest.json',
        'icon-192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});