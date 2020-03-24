'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/config": "9f7f2f90306cfbfe21b4ed42faa2457f",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
"/.git/index": "3dcec6ca0fdd9429d1e1a02c7ef5b8ed",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "8ffc7a570ebaf523b06315fd2b4617ae",
"/.git/logs/refs/heads/master": "8ffc7a570ebaf523b06315fd2b4617ae",
"/.git/logs/refs/remotes/origin/HEAD": "8ffc7a570ebaf523b06315fd2b4617ae",
"/.git/objects/pack/pack-a21b1636c3e57c164fbb03e78599eb564074a304.idx": "fd396b8624128a8f7b2129dfcbcc7001",
"/.git/objects/pack/pack-a21b1636c3e57c164fbb03e78599eb564074a304.pack": "49214bfa7a4991474c47cb6f59a395f6",
"/.git/packed-refs": "707490f5cca506a6ecfeeb584590f895",
"/.git/refs/heads/master": "badc4cc447a97aa311440ae1a222da99",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "a5a2ac14d31d6da525211a9325bd63f0",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "f38e4cacb2892c7721d185a9faf72209",
"/main.dart.js": "653b7008af3dcbb4593414dd7a4c38a4",
"/manifest.json": "f179aec9f83d0c06300a953d2a9c52bb"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
