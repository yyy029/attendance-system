'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d21cdc883590e196743654fae297bc72",
"assets/AssetManifest.bin.json": "25d1285dcc6ce09c3d66f1d36c395e79",
"assets/AssetManifest.json": "ff4fae14700077079ae2e34a89e23e7b",
"assets/assets/images/animal_01_h.png": "5cd87133cb6a16daec1e3e7c4d63dde0",
"assets/assets/images/dansei_01_a.png": "1c951a81c003c1120dff98f9ed4ff0b0",
"assets/assets/images/dansei_03_a.png": "8d6c258e6f06bf732b72014ca90d0a14",
"assets/assets/images/dansei_05_d.png": "6112e44f59e9236371490d686cfd3ae5",
"assets/assets/images/dansei_06_a.png": "9b0fa3287e2f2507723dc29a5a57a19c",
"assets/assets/images/dansei_09_a.png": "a75db876462194dd29faf252816c3daf",
"assets/assets/images/dansei_15_b.png": "b0cadd9ed125ab16818b14035ba7f679",
"assets/assets/images/dansei_16_b.png": "b28b04af77582d8aba6a44f3bef0bb1b",
"assets/assets/images/josei_01_a.png": "028c49b11e8d00be9fa0bbecf0a2bb2a",
"assets/assets/images/josei_02_a.png": "491a7c21f355c65275a86961762621e0",
"assets/assets/images/josei_03_a.png": "668ac5bcce7e2b6af3bed8f61ce5c079",
"assets/assets/images/josei_04_a.png": "854342f0581a679777a82d3c9a840c70",
"assets/assets/images/josei_05_a.png": "41212bab6074bbeeee60174bf083b23d",
"assets/assets/images/josei_06_b.png": "c31ea195f4499c1151bd5a94fd530700",
"assets/assets/images/josei_07_a.png": "a0ca24c9cd542c815c35353fa8c1142b",
"assets/assets/images/josei_09_b_g.png": "98f042f8ae734294394a7e47615a6605",
"assets/assets/images/josei_10_a.png": "5cb159dae8b1a84c74be6871ee5f549c",
"assets/assets/images/josei_11_b.png": "449b4f22d025c9565265049b85098c65",
"assets/assets/images/josei_14_b.png": "1fefd3aab393233f7ddc3289df336881",
"assets/assets/stub/messages/character1/attend/12_messages.json": "9a84f3fbeba62194c41c6b9fa013a430",
"assets/assets/stub/messages/character1/attend/34_messages.json": "ebda8441973b236660c1f907943dc6ff",
"assets/assets/stub/messages/character1/attend/56_messages.json": "541aa6ea09025aa2b214a9367e62f86d",
"assets/assets/stub/messages/character1/Home/autumn.json": "0643b1d1d567f29456ad657b433fd47a",
"assets/assets/stub/messages/character1/Home/christmas.json": "f20a94ee88836e704ee31d5c2f53470e",
"assets/assets/stub/messages/character1/Home/spring.json": "dd188b001b0defeb9e46e2ef3f2615f5",
"assets/assets/stub/messages/character1/Home/summer.json": "c0c529f3b510fd5031cfea6f5bda86d2",
"assets/assets/stub/messages/character1/Home/winter.json": "b150b3a9c0b95e4935fe5963409207aa",
"assets/assets/stub/messages/character1/tap/messages_home.json": "0520bf72ccc267acfb6253c0c4f626db",
"assets/assets/stub/messages/character2/attend/12_messages.json": "b21cdfa9ea6176b722927be2c74dab91",
"assets/assets/stub/messages/character2/attend/34_messages.json": "89c152defa6cca3f423d78a8607576c9",
"assets/assets/stub/messages/character2/attend/56_messages.json": "cd7a7a084942cea7931545f79c4c3483",
"assets/assets/stub/messages/character2/Home/autumn.json": "13e2ffc3432dc1a3defbc79c2caaba09",
"assets/assets/stub/messages/character2/Home/christmas.json": "28caa4560c83d59bf805779ceeb71b4f",
"assets/assets/stub/messages/character2/Home/spring.json": "3ce18ea69e650553292c562730802f4f",
"assets/assets/stub/messages/character2/Home/summer.json": "a1688fd4118fd0868a06ae7c9ad4422e",
"assets/assets/stub/messages/character2/Home/winter.json": "f9abfbb5bc5215fcc78cf2b163976340",
"assets/assets/stub/messages/character2/tap/messages_home.json": "6ee25160d1baf7098acab682ba41ac10",
"assets/assets/stub/messages/character3/attend/12_messages.json": "51f048c382606f57c175134234b723d8",
"assets/assets/stub/messages/character3/attend/34_messages.json": "b9fd7e4b1a2a383b63f2bccb808d268f",
"assets/assets/stub/messages/character3/attend/56_messages.json": "a51ca5086ff597d177cdc4f735a3067a",
"assets/assets/stub/messages/character3/Home/autumn.json": "fcfe8d91cdc063fd9647a57fad7af695",
"assets/assets/stub/messages/character3/Home/christmas.json": "431a0588a29d2918cdc0949969f228ab",
"assets/assets/stub/messages/character3/Home/spring.json": "88e2abc8b8cf8a9c1bebfa2eaddc5d40",
"assets/assets/stub/messages/character3/Home/summer.json": "485040a8b4dc9d09349e8471bd0ca3ea",
"assets/assets/stub/messages/character3/Home/winter.json": "68a2e106965c23cfad2d5a49638ed2f9",
"assets/assets/stub/messages/character3/tap/messages_home.json": "da496da73e24e1a3ec0ff810d45ddf0d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2873b0a4ede6317d5100d5ea68b2cd61",
"assets/NOTICES": "7d90d1118863c9fb5d1ee9f228119abc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6a94f7e775ce899546e00b8184e216df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8e47fb5a016b143f8139ddfe9c30a863",
"/": "8e47fb5a016b143f8139ddfe9c30a863",
"main.dart.js": "fe53cfd2e5f652c1a6a06ff3e05e0d58",
"manifest.json": "e5efac5e89e6ced382495329fc31cdaf",
"version.json": "b5e57a15cc13426243b909fad8e06823"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
