'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9f16ea8b136cd971c0ece138a19407fc",
"assets/AssetManifest.json": "2e7cb6e96cb3d67e23a19f8f27f10536",
"assets/assets/img/ait_logo.png": "ee106c67422bc620209652418f8734ef",
"assets/assets/img/ban.png": "92bdf87be2e3c220fbaba36db1752a12",
"assets/assets/img/bell.png": "e7e4ff7f67f79bc7f67b3dba56cfb3b0",
"assets/assets/img/circle.png": "1f3b15efb11cea5cb69b56f2921ded24",
"assets/assets/img/dutch.png": "ebc647db2b8b0f9bd966a9d6e618eaf1",
"assets/assets/img/english.png": "90d5740bdb54415bb9a3ed2b232b0e85",
"assets/assets/img/extra_logo.png": "73427c30437871f90892e07ebac229de",
"assets/assets/img/french.png": "073c6f0b1adc98a256e592f80e11c85e",
"assets/assets/img/german.png": "4f9f709bfbfa2dafbdf317c91bfeb4b2",
"assets/assets/img/italien.png": "e364a8e167efb753f5e63067d374fab7",
"assets/assets/img/lg_logo.png": "3a50d0c5c6efdc70ed11a2b441c1d817",
"assets/assets/img/logo.png": "4df59aff0a91bd8996da29b6181bac9b",
"assets/assets/img/portuguese.png": "c15fb69eedec62d2a2fe8579380af892",
"assets/assets/img/spanish.png": "f1bcb9f349e090c7a7a5a75a1d97f3b1",
"assets/assets/img/trash.png": "1dcd2ac497f5613bb07c1fbb6a9a9bcc",
"assets/assets/logo.png": "e781f773541b92fefc888043f63db438",
"assets/assets/svgs/arrow-down.svg": "9e78dd093447f63aa5bbddcf447e370d",
"assets/assets/svgs/ban.svg": "964848b557a2595517f255001014b716",
"assets/assets/svgs/bell.svg": "266549af4c243e62858942321955d9e2",
"assets/assets/svgs/circle.svg": "0166dccedf4249ea020cf9da56b4d0f2",
"assets/assets/svgs/dutch.svg": "d2b8269116d331f1bf9efbfe62f08dd0",
"assets/assets/svgs/english.svg": "ff8e0393dc8b71e777982b157dabf9c2",
"assets/assets/svgs/french.svg": "2307426956230aced4fde8bbe23cec57",
"assets/assets/svgs/german.svg": "2373e626c37d67e12059ff576dfe4c62",
"assets/assets/svgs/italien.svg": "35720de7fa390c1afb91cfef8c4bc9b1",
"assets/assets/svgs/login-m.svg": "0210cb5350499a949878b82145faa782",
"assets/assets/svgs/login-w.svg": "b19b05ea18988fea097ba6c3b93f6828",
"assets/assets/svgs/logo.svg": "e4160bd6f208bc8d34db3b0136f10b40",
"assets/assets/svgs/logout.svg": "14da5cd19fff2c0a51f9daaf15615056",
"assets/assets/svgs/microphone.svg": "2c8c9fefe8cbad03daec6a7d865bf37c",
"assets/assets/svgs/no-conversation.svg": "86143fc1fc33e71e4c89627bdcd1b81d",
"assets/assets/svgs/no-data.svg": "c438b173a8085ffb5c396f5f64e4dafd",
"assets/assets/svgs/page-not-found.svg": "8306747664a960fcf2cdc8a5dcab5c40",
"assets/assets/svgs/portuguese.svg": "1bf1ff006f196262544b5ce2415186bc",
"assets/assets/svgs/registration.svg": "3d93961dd51d49deb952df4ca888d52c",
"assets/assets/svgs/spanish.svg": "db5cadd5f39d92028d444c613ef5281a",
"assets/assets/svgs/trash.svg": "f61b612dbbea3e2fab0578720ba21eb2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3c618835bd113c78922c9748f2334a3f",
"assets/NOTICES": "2033db4120e2717230ffdc2ffecaf0d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "598bde2b12559ec5bb00eee46e0f0eeb",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon-16.png": "a5df5325e26aa69af9559f779625e268",
"favicon.png": "4abbe19e089eb75d8c70ec49dfd0aad3",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ecf4ab3c970bac079050c48b20ed647e",
"icons/Icon-512.png": "165526dc0b92499b9e97c6d0c85264d0",
"icons/Icon-maskable-192.png": "ecf4ab3c970bac079050c48b20ed647e",
"index.html": "50be772a7b3634741a856c918851880b",
"/": "50be772a7b3634741a856c918851880b",
"main.dart.js": "e4843dab2a4b242fea91a3506d805db0",
"manifest.json": "959f09bb055e02132f09795066ad4a3a",
"script.js": "6313e9989163b953a068cf31cb74d82c",
"version.json": "eae24cc7b6bf3b33ae9ef491b3a4dc42"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
