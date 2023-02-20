'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4f15f8e9512ae9d24abc94b5a39a6dc0",
"assets/assets/avatar/avatar1.png": "70b3294e9a1a5de2265a07221df5fefc",
"assets/assets/avatar/avatar2_blanco.jpeg": "2beb16d1510e615f9ad978376b2e7f1a",
"assets/assets/avatar/logo.png": "91056d55f07cf23120e7889718065ad5",
"assets/assets/cursos/cype.jpg": "5ff12526f2ab111d45635c7666a2e36a",
"assets/assets/cursos/imaginaformacion.png": "fbd62fae988af81d206e38882998b924",
"assets/assets/cursos/mathworks.png": "5869f390b26f18a68d57b904b0f57c51",
"assets/assets/cursos/nvidia.png": "3389db25050632267f84df860a29211d",
"assets/assets/cursos/prevenpyme.png": "be683dbff60b2e223b6b353174a896b4",
"assets/assets/cursos/sepe.jpg": "635b7bc8f2d848a2b8ec8222cb73ebeb",
"assets/assets/cursos/uab.png": "3c259fe9796ae8b094c152432803dbfe",
"assets/assets/cursos/udacity.png": "91d63b125b3d0df793c6386bc1787ae3",
"assets/assets/cursos/udemy.png": "1e387f37c71689e30ebd489db7e27b2e",
"assets/assets/educacion/upv.png": "068a0a14dd4667cfb12387c72099a9a6",
"assets/assets/empresas/casamediterranea.png": "4ede95034de27b58bdcc1005af0d7e14",
"assets/assets/empresas/devoltec.png": "045869d20712e5f542c1304ade999586",
"assets/assets/empresas/discom.jpg": "61f70e9563fa2185105f302bea62846b",
"assets/assets/empresas/grupocobra.png": "e1a3dc28a3bab7e79523a5b78c394123",
"assets/assets/empresas/inypsa.jpg": "e701b736a99b98faf149d6c5ee226058",
"assets/assets/empresas/milarosa.jpg": "708481e63cd3813ab666a605f4cbb9ec",
"assets/assets/empresas/rnb.png": "8f68c7c4100dc2aafc47cbdff2f28436",
"assets/assets/proyectos/barapp/1.jpg": "97e6348a7df6c1cad467c824a106bf5d",
"assets/assets/proyectos/barapp/10.jpg": "e9e9f0f359ce1eb3644537d2016b8ad1",
"assets/assets/proyectos/barapp/11.jpg": "6ccba8e7e19c96e25c1dd11b93e992a6",
"assets/assets/proyectos/barapp/12.jpg": "dee18da7fb1513c8c694d72b38198257",
"assets/assets/proyectos/barapp/2.jpg": "7cc99343f72b7d2bccbcd1a3d1ff1c4c",
"assets/assets/proyectos/barapp/3.jpg": "dc34c4549d0b8a03beccfb49e2ad4982",
"assets/assets/proyectos/barapp/4.jpg": "3cb13920e6682a3e59cb074d79815e5d",
"assets/assets/proyectos/barapp/5.jpg": "9878dc33512c397ece6e56093544e246",
"assets/assets/proyectos/barapp/6.jpg": "f464ac6cac4f9fc6e6d2403e621e14ce",
"assets/assets/proyectos/barapp/7.jpg": "6cec0e1b6271c650c8921871964c34dd",
"assets/assets/proyectos/barapp/8.jpg": "2ae85c3f770cfb8809fead0263a78cac",
"assets/assets/proyectos/barapp/9.jpg": "d213a59ef47aaca8e4d0dfdfe2decf5b",
"assets/assets/proyectos/barapp/main.jpg": "b3cb9be1ebb84830db713b95661efb71",
"assets/assets/proyectos/comboi/1.jpg": "74df6b6e599e3acea0ba707e4fa6aac2",
"assets/assets/proyectos/comboi/2.jpg": "42251646b715a3946182fc81a5f418f9",
"assets/assets/proyectos/comboi/SVID_20210525_223159_1.mp4": "ed030d3aa2f86a8c9f7ad495b29b3ce0",
"assets/assets/proyectos/goPallet/1.png": "983ee4a2fc76cecd2dbae473cf4e9db2",
"assets/assets/proyectos/goPallet/2.png": "ffe9e30afee8c503d9a4b9db74366fac",
"assets/assets/proyectos/goPallet/3.png": "fe22b3f36bd5840f67ea96550387af70",
"assets/assets/proyectos/goPallet/4.png": "1fffccbb0c29cfcb0139677eb73112f7",
"assets/assets/proyectos/goPallet/5.png": "2570248df00e24035f1bec33c0d95cfd",
"assets/assets/proyectos/goPallet/6.png": "b1bed3aa0289a61fd0ef15cb013b883d",
"assets/assets/proyectos/goPallet/main.png": "8c0ac37142156688ab412c54619d551d",
"assets/assets/proyectos/tomacita/tomacita.png": "fca88f2293c7ceb4ffc672a09083799c",
"assets/assets/skills/angular.png": "2fb0a23ae38ff99569c176bd96191629",
"assets/assets/skills/csharp.png": "876afbe5e38c58cb01ccd6e2a789cc47",
"assets/assets/skills/css.png": "5e7e28ebe25c3d4bd6cfb0d37db05850",
"assets/assets/skills/dart.png": "fbae7586a98090afb20a657a80d4cd12",
"assets/assets/skills/docker.png": "3f7967d5a59d54766bd834febd1933c8",
"assets/assets/skills/excel.png": "89b40f03eadd93c8b80eb304fdf3a9e2",
"assets/assets/skills/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/skills/flutter.png": "0f690cfa7748a6487168893597ff3202",
"assets/assets/skills/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/skills/gitlab.png": "bc3c1f14326a57e9d3a22c523d420488",
"assets/assets/skills/html.png": "fe947724b122f585bb1bd2b8e1fb9198",
"assets/assets/skills/javascript.png": "f402850a3832b09a8273b2994c8c2444",
"assets/assets/skills/jira.png": "4b19de4182b852aa45f24fcf295f33f8",
"assets/assets/skills/microsofttodo.png": "f4bad5b3a0d8811f9bcef118aba6b8f8",
"assets/assets/skills/mongodb.png": "e5eee315a17de0d7f56117077eb71fa9",
"assets/assets/skills/mysql.png": "51fcab8705ee70a51035126df56798f3",
"assets/assets/skills/nestjs.png": "755c387e2c390086af54a320255a1ed2",
"assets/assets/skills/nodejs.png": "a74d8440d0bf4844b2de28ab4e2f5caf",
"assets/assets/skills/pandas.png": "aac08d01e49e59c311dbaeb238c9bf94",
"assets/assets/skills/powerbi.png": "aad357e0eaafeb2fe2c651f867288131",
"assets/assets/skills/python.png": "d3c746b2baa87534de255e2da8d49620",
"assets/assets/skills/pytorch.png": "f006806312dbf953a01945bc57c25740",
"assets/assets/skills/sqlserver.png": "a548af089c0645540673dfe0906f2045",
"assets/assets/skills/trello.png": "e51930722c98211010394cf449ca84f8",
"assets/assets/skills/typescript.png": "0d27acfc9e0690a5b594a5bfb744a941",
"assets/assets/skills/vb.png": "0346ee611387b7102cf99e7de982bfca",
"assets/assets/skills/winforms.png": "89aa4bed2c4db91b7f1ce7069dd1474e",
"assets/assets/social/linkedin.png": "9f2abaca158adf946e30f5dc5d2d8114",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d363ecbe734ff7e4fd3bfb1860425a9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/expandable_widgets/assets/background.png": "f1f2b9f95d2c2bb481acc14f4fad8196",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac887c6ae19242bd5beaba276f2c6dda",
"/": "ac887c6ae19242bd5beaba276f2c6dda",
"main.dart.js": "d8e8ec942cf00bd8ae8ffc71b59446c7",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
