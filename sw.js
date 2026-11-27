const CACHE_NAME = 'gulzar-mouj-sync-v39.0';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

const API_HOST_DENYLIST = [
  'script.google.com',
  'script.googleusercontent.com',
  'api.github.com',
  'gist.githubusercontent.com',
  'generativelanguage.googleapis.com',
  'firebaseio.com',
  'firebasedatabase.app',
  'jsonbin.io',
  'jsonblob.com',
  'wikipedia.org'
];

const CACHEABLE_CDN_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdn.jsdelivr.net'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  // Only handle http/https requests (ignore chrome-extension://, capacitor://, data:, blob:)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // Never intercept or cache live cloud/AI/sync API calls
  if (API_HOST_DENYLIST.some(h => url.hostname === h || url.hostname.endsWith('.' + h))) {
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;
  const isCacheableCdn = CACHEABLE_CDN_HOSTS.some(h => url.hostname === h || url.hostname.endsWith('.' + h));
  if (!isSameOrigin && !isCacheableCdn) return;

  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && (res.ok || (isCacheableCdn && res.type === 'opaque'))) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then(cached => {
          if (cached) return cached;
          if (req.mode === 'navigate') return caches.match('./index.html');
          return new Response('', { status: 504, statusText: 'Offline' });
        })
      )
  );
});
