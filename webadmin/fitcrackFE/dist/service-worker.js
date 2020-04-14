"use strict";var precacheConfig=[["index.html","74ee68d59717fea37eafd21d2044310f"],["service-worker.js","22680ae78f86c479e85a6e047ab76ad2"],["static/configuration.js","85d6dda12c88391e482c20da4a6ba342"],["static/css/app.831f1f3ac2fcbca1fec914c673ae1ad6.css","8bc46a59f3827cb4130f75c4a34bca89"],["static/js/0.c645ddbfa45ac6c875e0.js","2f1cf93b323370ef00e8b86a1c2da988"],["static/js/1.856ef7e6a7b49c08f039.js","348a6d3193ea4170eca060b122cd7b25"],["static/js/10.b263346feb6f88a2f0f2.js","0d43a8bdd042ce3129f446baa28f459a"],["static/js/11.86c282e8eec2b9be9e8f.js","b3e408ee3c539874a1d7d8455dc53339"],["static/js/12.3cfcb5a5353719f9874c.js","80646cd7d28b06c3bfbc8d278141acbc"],["static/js/13.23483f41dbff43ae4a28.js","244089c6a9036fbcb0c020c1370927ec"],["static/js/14.d2a6009b9bee0c087afc.js","813fe07883067677ed6b6b6c21707bb0"],["static/js/15.bbc75f3e24c6e940abc1.js","5817a7350aa301ed33e1cdf1f6e5533d"],["static/js/16.ab0a145a89195abfd4bb.js","554960ca8c084083bfdc71a69888ff6a"],["static/js/17.f9739a7b9740dfa34616.js","0bec0e28a0a1debc655141938726755b"],["static/js/18.68b6f5035b0fb52cae06.js","fa1377f4c06becfce522e8cb0c939a1b"],["static/js/19.0f81afd7a8e4e7492348.js","cc6b6912b5926fce02fb39a6fa97bbbe"],["static/js/2.56c5c2043242c6a0e904.js","4f11343ec64499b88af5443ea7576919"],["static/js/20.fd9c1419cf5c7c4abbec.js","e783288bb20b6bd933bd02452ab06a04"],["static/js/21.6af7fa7b1506261b8213.js","f309a1c2f10a6a997550d6039dfb3688"],["static/js/22.87d7bdc6f9e5c6d6a737.js","07f6aa87e7f89b0f763dabf506e7a2c8"],["static/js/23.a59fc5419b3ee42997e5.js","aa892236152ccf5b3765c43c7c3b36c4"],["static/js/24.63b54d3e9db5fa1744a8.js","d2516063fb46a2dba1091e777bf7dccc"],["static/js/25.74c9b4ef59193f316b1e.js","37119f0b9d34cbf689fe86f5ab3f3857"],["static/js/26.2bdb40d45ea8860d72b7.js","b36374fbf252d385b052724d4ed9ae22"],["static/js/27.42e1dc931aa2ee125881.js","e5ca73935003bfd1d678612a42a27006"],["static/js/3.0d088d2d448edac5e604.js","aae8d7cda2683f21c620436745b2f726"],["static/js/4.c80df7721dfc9313d8ba.js","d0d4f045d959785476364f44ec370636"],["static/js/5.7b11dde6178114d2bf28.js","355387e4b1f415a1a3a39dd2ea7be46d"],["static/js/6.5ad296f96d2f59c0bd70.js","0a987afb46a03b2b5ee963ebda5221d3"],["static/js/7.0cd31e5423b6dfdc68dc.js","8e8f92a5fb7150f0eced045f5ae9e7dc"],["static/js/8.cf83e39e95e0b60eede5.js","3b7e2a250d4c1f417602786ce2266e8a"],["static/js/9.aee2f4bb9bc80b706045.js","70dc0c9c27d94efd92ca51bfed99128e"],["static/js/app.9a18bb28650ec682a482.js","691198968a52c737463430b2dcce8342"],["static/js/manifest.fa5410b73972a2de50a7.js","18399840a7b3bcf060bd6ae0e2cfad4e"],["static/js/vendor.2ca4b52c5544651b8068.js","07828ef601a18a27914cc6e9084cbdf0"]],cacheName="sw-precache-v3-Fitcrack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});