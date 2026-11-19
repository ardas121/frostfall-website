const CACHE_NAME = 'frostfall-shell-v2';
const SHELL = [
  './',
  './index.html',
  './story.html',
  './gameplay.html',
  './heroes.html',
  './updates.html',
  './media.html',
  './styles.css',
  './script.js',
  './manifest.webmanifest',
  './assets/playstore_icon_512.webp',
  './assets/01_last_fire.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Never precache or runtime-cache videos: keep mobile storage and data usage under control.
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url.pathname)) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok && request.destination !== 'video') {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
