if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => a(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(n.map((e) => r[e] || o(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-5afaf374"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/CNAME", revision: "b0f73944ab05d49155b58b00c07d4a55" },
        {
          url: "/_next/static/chunks/framework-fc97f3f1282ce3ed.js",
          revision: "fc97f3f1282ce3ed",
        },
        {
          url: "/_next/static/chunks/main-58544bb07492b0c4.js",
          revision: "58544bb07492b0c4",
        },
        {
          url: "/_next/static/chunks/pages/_app-45445ff11d8fa917.js",
          revision: "45445ff11d8fa917",
        },
        {
          url: "/_next/static/chunks/pages/_error-1995526792b513b2.js",
          revision: "1995526792b513b2",
        },
        {
          url: "/_next/static/chunks/pages/index-d6c62b2fa28f1935.js",
          revision: "d6c62b2fa28f1935",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "99442aec5788bccac9b2f0ead2afdd6b",
        },
        {
          url: "/_next/static/chunks/webpack-69bfa6990bb9e155.js",
          revision: "69bfa6990bb9e155",
        },
        {
          url: "/_next/static/css/602b3d22cbbcf811.css",
          revision: "602b3d22cbbcf811",
        },
        {
          url: "/_next/static/css/ff3743e26058a711.css",
          revision: "ff3743e26058a711",
        },
        {
          url: "/_next/static/xk41GzGRNJ1zssgabiAGj/_buildManifest.js",
          revision: "50fb0804eaad7472b29136c3ea39b21c",
        },
        {
          url: "/_next/static/xk41GzGRNJ1zssgabiAGj/_middlewareManifest.js",
          revision: "fb2823d66b3e778e04a3f681d0d2fb19",
        },
        {
          url: "/_next/static/xk41GzGRNJ1zssgabiAGj/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/assets/fonts/thrsouza-icons.eot",
          revision: "a7ace8c4fe58053dd3e76b35d87b7243",
        },
        {
          url: "/assets/fonts/thrsouza-icons.svg",
          revision: "532751be14b51988376f974e7ab13ecb",
        },
        {
          url: "/assets/fonts/thrsouza-icons.ttf",
          revision: "226c42d7a1cdbd08d0642e4d09443a2f",
        },
        {
          url: "/assets/fonts/thrsouza-icons.woff",
          revision: "cbd79a10228c39ae0b259fc5aee972f1",
        },
        {
          url: "/assets/fonts/thrsouza-icons.woff2",
          revision: "ad79309612de35085bd3fbf92ddf28f7",
        },
        {
          url: "/assets/icons/apple-icon-180.png",
          revision: "acfcac4e7d0999e5d9b16ee077e48b7d",
        },
        {
          url: "/assets/icons/manifest-icon-192.maskable.png",
          revision: "1dc1b535265baa9bc22d93c549437717",
        },
        {
          url: "/assets/icons/manifest-icon-512.maskable.png",
          revision: "5c50fb5f45f9c0862e80a7fd44dce60b",
        },
        {
          url: "/assets/images/banner/logo.svg",
          revision: "8adafeb9a4671718a7cf713f08b20665",
        },
        {
          url: "/assets/images/banner/subtitle.svg",
          revision: "6045f49dad767e63a52724e368a12eaf",
        },
        {
          url: "/assets/images/banner/thiagosouza-620x316.png",
          revision: "e3851c88bac510c9b2b9a95495fb22be",
        },
        {
          url: "/assets/images/portfolio/can-i-deploy-today-banner.webp",
          revision: "b2773d29addc60b6af21fb883cf408cc",
        },
        {
          url: "/assets/images/portfolio/can-i-deploy-today-logo.webp",
          revision: "efab185c466d0884600257a0dbac2a76",
        },
        {
          url: "/assets/images/portfolio/mooca-app-banner.webp",
          revision: "c9dfd8970ae8a4701301970d709b5f03",
        },
        {
          url: "/assets/images/portfolio/mooca-app-logo.webp",
          revision: "5abea3f8818d33c49670dba24e66d425",
        },
        {
          url: "/assets/images/portfolio/neutron-website-banner.webp",
          revision: "406c02551a5cb2f578009dce5950bf54",
        },
        {
          url: "/assets/images/portfolio/neutron-website-logo.svg",
          revision: "10f46fbb360c3db12dd54459460ffdb8",
        },
        {
          url: "/assets/images/portfolio/royal-house-club-banner.webp",
          revision: "6671cb524529c4c6bb44d43838d246dc",
        },
        {
          url: "/assets/images/portfolio/royal-house-club-logo.svg",
          revision: "5affa22e9e7eafb50e7063cc651eea06",
        },
        {
          url: "/assets/images/profile.webp",
          revision: "f467ea753ada29300d7a5c9305dbebe0",
        },
        {
          url: "/assets/splash-screen/apple-splash-1125-2436.jpg",
          revision: "27d22a785d1e6e8ba744a124e5f07b67",
        },
        {
          url: "/assets/splash-screen/apple-splash-1170-2532.jpg",
          revision: "4ab09af8e81a6aae7947d5ca1fc80542",
        },
        {
          url: "/assets/splash-screen/apple-splash-1242-2208.jpg",
          revision: "f27cc3ec22ce0db50833c3ebd96dbca1",
        },
        {
          url: "/assets/splash-screen/apple-splash-1242-2688.jpg",
          revision: "5940e3fc52019a9b1d535648edb47809",
        },
        {
          url: "/assets/splash-screen/apple-splash-1284-2778.jpg",
          revision: "b379a663290cd447b5987ada1d5f9cec",
        },
        {
          url: "/assets/splash-screen/apple-splash-1536-2048.jpg",
          revision: "7a71c07c90606e9a4b6f49c027cc7247",
        },
        {
          url: "/assets/splash-screen/apple-splash-1620-2160.jpg",
          revision: "3f614ddb124928e346350a99d1c85b2c",
        },
        {
          url: "/assets/splash-screen/apple-splash-1668-2224.jpg",
          revision: "4cd99eb7f413fb63cfb9a4836c48ca3b",
        },
        {
          url: "/assets/splash-screen/apple-splash-1668-2388.jpg",
          revision: "27465e969f7c131b3de0cc0685eb82ac",
        },
        {
          url: "/assets/splash-screen/apple-splash-2048-2732.jpg",
          revision: "e95a3cd5daf88f924785de68e2440973",
        },
        {
          url: "/assets/splash-screen/apple-splash-640-1136.jpg",
          revision: "2baefd5fcef647a1e969ef2b9e51675a",
        },
        {
          url: "/assets/splash-screen/apple-splash-750-1334.jpg",
          revision: "e771e3a48fae7e1343d5645783b9c34d",
        },
        {
          url: "/assets/splash-screen/apple-splash-828-1792.jpg",
          revision: "f6f5931c487d4010f4fa3ed0f2a4f3aa",
        },
        { url: "/favicon.svg", revision: "8adafeb9a4671718a7cf713f08b20665" },
        { url: "/manifest.json", revision: "582e67199921126e4e908d6d07ec140a" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
