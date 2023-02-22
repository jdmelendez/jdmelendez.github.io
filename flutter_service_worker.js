'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d6a0f05d5297e7e19925f4e4ddb9fca4",
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
"assets/assets/empresas/devoltec.png": "354ba5fec1ff8b118da74a498ca1e614",
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
"assets/assets/proyectos/comboi/1.png": "164cc4bcdef8b1b7accce0f7b721f7cc",
"assets/assets/proyectos/comboi/2.jpg": "42251646b715a3946182fc81a5f418f9",
"assets/assets/proyectos/comboi/3.jpg": "40fb756b78ebcb35c3aa618ee185822c",
"assets/assets/proyectos/comboi/4.jpg": "2a91591ada1e087c2b9d0a63257d96c2",
"assets/assets/proyectos/comboi/5.jpg": "048ba60c252740b9375c416f90099265",
"assets/assets/proyectos/comboi/main.jpg": "74df6b6e599e3acea0ba707e4fa6aac2",
"assets/assets/proyectos/flyDocuments/1.jpg": "88f36459dfe1cd7c82edb3e19be8b177",
"assets/assets/proyectos/flyDocuments/2.jpg": "432514ba8bfc3eba04ff1bf4a6322531",
"assets/assets/proyectos/flyDocuments/3.jpg": "88b8a4983a4bc10624e6f058fa1918b0",
"assets/assets/proyectos/flyDocuments/4.jpg": "438a7192486bfed53f799ead34631151",
"assets/assets/proyectos/flyDocuments/5.jpg": "e27d2ec45e2a74c9877fd5e9cb8ad3d4",
"assets/assets/proyectos/flyDocuments/6.jpg": "87994edc2298dc1c53ff5724fe02b1fd",
"assets/assets/proyectos/flyDocuments/7.jpg": "c3cff8463fba36dbefd116ebb955e4fb",
"assets/assets/proyectos/flyDocuments/main.jpg": "3f7a1d5708fd3bb0fe6edb5d62df82ec",
"assets/assets/proyectos/goPallet/1.png": "983ee4a2fc76cecd2dbae473cf4e9db2",
"assets/assets/proyectos/goPallet/2.png": "ffe9e30afee8c503d9a4b9db74366fac",
"assets/assets/proyectos/goPallet/3.png": "fe22b3f36bd5840f67ea96550387af70",
"assets/assets/proyectos/goPallet/4.png": "1fffccbb0c29cfcb0139677eb73112f7",
"assets/assets/proyectos/goPallet/5.png": "2570248df00e24035f1bec33c0d95cfd",
"assets/assets/proyectos/goPallet/6.png": "b1bed3aa0289a61fd0ef15cb013b883d",
"assets/assets/proyectos/goPallet/main.png": "8c0ac37142156688ab412c54619d551d",
"assets/assets/proyectos/iot/1.png": "84539e0b6a1328d855502328509bf72b",
"assets/assets/proyectos/iot/10.png": "acf6e512367e96c5c0ee3924b8d77803",
"assets/assets/proyectos/iot/2.png": "67b8f803e7aa4854436ab889d7a1b8a8",
"assets/assets/proyectos/iot/3.png": "0eb50bd2f7c59a1210d61efc5c814189",
"assets/assets/proyectos/iot/4.png": "970534eb2d95e66f354d21c9aea64cd0",
"assets/assets/proyectos/iot/5.png": "4046a95e2b695b722b50c5a6ad155305",
"assets/assets/proyectos/iot/6.png": "9b534d7f8f2120a1a703795504ecf0c2",
"assets/assets/proyectos/iot/7.png": "7c9346ac14183559418b4947a343356d",
"assets/assets/proyectos/iot/8.png": "8f1930c274710e4d6eb33871384953eb",
"assets/assets/proyectos/iot/9.png": "1badabe4d7971c17fca75c4a6289b24e",
"assets/assets/proyectos/iot/main.png": "5e8c2d9b6eeab648257b8c742a91eabc",
"assets/assets/proyectos/smartBooking/1.jpg": "e21ba13857e559a737e0c079d5a20001",
"assets/assets/proyectos/smartBooking/10.jpg": "557cd95b4b0de4d8aa57a0c52ae4f6b2",
"assets/assets/proyectos/smartBooking/11.jpg": "4243904b67984efecc62291949d08578",
"assets/assets/proyectos/smartBooking/12.jpg": "9691b7cd63423767b3ca9d3204480308",
"assets/assets/proyectos/smartBooking/13.jpg": "4626ded389780ceec238800b3df3d045",
"assets/assets/proyectos/smartBooking/14.jpg": "4ff9d1ace85c78aafb087e0a2d81dbbe",
"assets/assets/proyectos/smartBooking/15.jpg": "c8b767819801315efe80fae3ed9c76ba",
"assets/assets/proyectos/smartBooking/16.jpg": "4c11f32b1c71496d011d1f3d8fe9a45c",
"assets/assets/proyectos/smartBooking/2.jpg": "ae6cda107fd18b8fe9c3ec1637de10be",
"assets/assets/proyectos/smartBooking/3.jpg": "f5fe07652792f408b9f161ddad001b87",
"assets/assets/proyectos/smartBooking/4.jpg": "d9b87fa3b611c101e556ba5235d3e082",
"assets/assets/proyectos/smartBooking/5.jpg": "1125b9294f25cc5feb165a69f67c3d17",
"assets/assets/proyectos/smartBooking/6.jpg": "6d22994feede563e0eac2cc886777943",
"assets/assets/proyectos/smartBooking/7.jpg": "da0ead62c086b51b262d816f228eeae0",
"assets/assets/proyectos/smartBooking/8.jpg": "43f5c229211b4f1d9e9a305aefba610b",
"assets/assets/proyectos/smartBooking/9.jpg": "4372920b867cf637665d2bd539ab6637",
"assets/assets/proyectos/smartBooking/main.jpg": "a611d0e86db2d35c097a5cae03db05a6",
"assets/assets/proyectos/smartRestaurant/1.jpg": "6515e11013d52df509d487c89f87e731",
"assets/assets/proyectos/smartRestaurant/10.jpg": "85af8896ae2493b5c64a4a59bd10cbe9",
"assets/assets/proyectos/smartRestaurant/11.jpg": "c7d0a5e58fb8b6c40ebf61643cbd0088",
"assets/assets/proyectos/smartRestaurant/12.jpg": "aeac9813bd4a8040f2db14743e6dc9f1",
"assets/assets/proyectos/smartRestaurant/13.jpg": "079ef4fcb1efd15d62be10c86cf9062b",
"assets/assets/proyectos/smartRestaurant/14.jpg": "6d3be3223603a298f2a90a88b9176be3",
"assets/assets/proyectos/smartRestaurant/15.jpg": "0bc146e7a9230f182577e0cc3f0020c3",
"assets/assets/proyectos/smartRestaurant/16.jpg": "38821e59367e51053e99f88c2ea12620",
"assets/assets/proyectos/smartRestaurant/17.jpg": "63552488c01b53f9a5a74161d95bbec9",
"assets/assets/proyectos/smartRestaurant/18.jpg": "63894bbcce729532fc6310753a3e99ae",
"assets/assets/proyectos/smartRestaurant/19.jpg": "72e88bf7323e45aab55bc4377512de22",
"assets/assets/proyectos/smartRestaurant/2.jpg": "797194a09e34a79dae749f449f9f7096",
"assets/assets/proyectos/smartRestaurant/20.jpg": "53566074dcf2686b3166e5093fb72013",
"assets/assets/proyectos/smartRestaurant/21.jpg": "6228efb8a13ed821f3e86c7e571bb646",
"assets/assets/proyectos/smartRestaurant/22.jpg": "6e575eb9e45bf7eb4b37e4bbe6617a57",
"assets/assets/proyectos/smartRestaurant/23.jpg": "4defd879f28b7c0b8ffec8c9118d07e0",
"assets/assets/proyectos/smartRestaurant/24.jpg": "2db7d89ab9dbd7e9b37f93981a48b9d9",
"assets/assets/proyectos/smartRestaurant/25.jpg": "988a4e74ce47c248ab0ae3df9f77c13a",
"assets/assets/proyectos/smartRestaurant/26.jpg": "d4b59c26ea487b3f0d107fc0423d427f",
"assets/assets/proyectos/smartRestaurant/27.jpg": "7f5b70a8e4716f00771d6418559279f4",
"assets/assets/proyectos/smartRestaurant/28.jpg": "391108996a91d221ae5a9c2e8d839ce1",
"assets/assets/proyectos/smartRestaurant/29.jpg": "b4b87fc129ff11e1b670efa7fc03d573",
"assets/assets/proyectos/smartRestaurant/3.jpg": "e61899b95ec958909db7fd252b818ecf",
"assets/assets/proyectos/smartRestaurant/4.jpg": "e3c5f5a701a9dd1fded04aa9bfa1ffeb",
"assets/assets/proyectos/smartRestaurant/5.jpg": "85d2c7c67510607afad26757e9af10bd",
"assets/assets/proyectos/smartRestaurant/6.jpg": "e9bf254274fc6a30a155a25573334b4c",
"assets/assets/proyectos/smartRestaurant/7.jpg": "84453ab2cf772a5c90e7c61c6df589ef",
"assets/assets/proyectos/smartRestaurant/8.jpg": "212500d2efae9bbc3b4959f0c7228b29",
"assets/assets/proyectos/smartRestaurant/9.jpg": "15a234f319b10489972818b3ced75c84",
"assets/assets/proyectos/smartRestaurant/main.jpg": "4a2cb44b606be78e045d826b06307db3",
"assets/assets/proyectos/tomacita/1.png": "48359ec93cd8c356ce11b22b765f6b49",
"assets/assets/proyectos/tomacita/2.png": "ff254731ab4b32657b7761fbc31cd4d8",
"assets/assets/proyectos/tomacita/3.png": "5ae0029247f05fda8174f87425de30ca",
"assets/assets/proyectos/tomacita/tomacita.png": "fca88f2293c7ceb4ffc672a09083799c",
"assets/assets/skills/angular.png": "2fb0a23ae38ff99569c176bd96191629",
"assets/assets/skills/csharp.png": "876afbe5e38c58cb01ccd6e2a789cc47",
"assets/assets/skills/css.png": "5e7e28ebe25c3d4bd6cfb0d37db05850",
"assets/assets/skills/dart.png": "fbae7586a98090afb20a657a80d4cd12",
"assets/assets/skills/docker.png": "3f7967d5a59d54766bd834febd1933c8",
"assets/assets/skills/english.png": "7ff5dacab96414cb75fff06a6be3064e",
"assets/assets/skills/excel.png": "89b40f03eadd93c8b80eb304fdf3a9e2",
"assets/assets/skills/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/skills/flutter.png": "0f690cfa7748a6487168893597ff3202",
"assets/assets/skills/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/skills/gitlab.png": "bc3c1f14326a57e9d3a22c523d420488",
"assets/assets/skills/html.png": "fe947724b122f585bb1bd2b8e1fb9198",
"assets/assets/skills/javascript.png": "f402850a3832b09a8273b2994c8c2444",
"assets/assets/skills/jira.png": "4b19de4182b852aa45f24fcf295f33f8",
"assets/assets/skills/matlab.png": "cf28632239db6e02bc09bcca6bf5360f",
"assets/assets/skills/microsofttodo.png": "f4bad5b3a0d8811f9bcef118aba6b8f8",
"assets/assets/skills/mongodb.png": "e5eee315a17de0d7f56117077eb71fa9",
"assets/assets/skills/mysql.png": "51fcab8705ee70a51035126df56798f3",
"assets/assets/skills/nestjs.png": "755c387e2c390086af54a320255a1ed2",
"assets/assets/skills/nodejs.png": "a74d8440d0bf4844b2de28ab4e2f5caf",
"assets/assets/skills/numpy.png": "8cf99950d6755a6544a278408425861e",
"assets/assets/skills/opencv.png": "591dbc0fb4f609461beaae0951c0362b",
"assets/assets/skills/pandas.png": "a128ff7400a7e553d3387cf4da1cd7a2",
"assets/assets/skills/powerbi.png": "aad357e0eaafeb2fe2c651f867288131",
"assets/assets/skills/prisma.png": "aa44134e3fe92fb508f6b0c8ea360914",
"assets/assets/skills/python.png": "d3c746b2baa87534de255e2da8d49620",
"assets/assets/skills/pytorch.png": "f006806312dbf953a01945bc57c25740",
"assets/assets/skills/scikitlearn.png": "c0a9f5fc8b903e980bbde755cac18c2a",
"assets/assets/skills/social.png": "e91212c78af693eedaaa6937f03e9212",
"assets/assets/skills/socketio.png": "35851b9881f191c26e778e1bc19055db",
"assets/assets/skills/spanish.png": "1bc5800bf3502ed68ad5ae250d9cf0cc",
"assets/assets/skills/sqlserver.png": "a548af089c0645540673dfe0906f2045",
"assets/assets/skills/trello.png": "e51930722c98211010394cf449ca84f8",
"assets/assets/skills/typescript.png": "0d27acfc9e0690a5b594a5bfb744a941",
"assets/assets/skills/valenciano.png": "6436df0a67c55f9491bd9bf1e0f8a400",
"assets/assets/skills/vb.png": "0346ee611387b7102cf99e7de982bfca",
"assets/assets/skills/winforms.png": "89aa4bed2c4db91b7f1ce7069dd1474e",
"assets/assets/social/linkedin.png": "9f2abaca158adf946e30f5dc5d2d8114",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2cd97d1fe783ab6440239b406adc582c",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7de9be296408a62018146dc09c4c88b5",
"/": "7de9be296408a62018146dc09c4c88b5",
"main.dart.js": "e8cb504dc997d029df9f434c5f83f71a",
"manifest.json": "47c9e587487d9b6ae9a1dee24f5b6b2a",
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
