const SERVICE_WORKER_VERSION = "v0.1.2";
const RUNTIME = `runtime-${SERVICE_WORKER_VERSION}`;
const PRECACHE = `precache-${SERVICE_WORKER_VERSION}`;

const PRECACHE_URLS = [
  "/assets/images/portfolio/can-i-deploy-today-banner.webp",
  "/assets/images/portfolio/can-i-deploy-today-logo.webp",
  "/assets/images/portfolio/mooca-app-banner.webp",
  "/assets/images/portfolio/mooca-app-logo.webp",
  "/assets/images/portfolio/neutron-website-banner.webp",
  "/assets/images/portfolio/neutron-website-logo.svg",
  "/assets/images/portfolio/royal-house-club-banner.webp",
  "/assets/images/portfolio/royal-house-club-logo.svg",
  "/assets/images/profile.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  const currentCaches = [PRECACHE, RUNTIME];

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => caches.delete(cacheToDelete))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then((cache) => {
          return fetch(event.request).then((response) => {
            return cache
              .put(event.request, response.clone())
              .then(() => response);
          });
        });
      })
    );
  }
});
