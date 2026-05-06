self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('lms-v1').then(cache => {
      return cache.addAll([
        'index.html',        // غيرنا الاسم هنا
        'manifest.json',
        'icon-192.png'       // تأكدي من وجود صورة بهذا الاسم في حسابك
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});