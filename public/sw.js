"use strict";

var cacheName = "sw-first",
  urlsToCache = [
    "/",
    "index.html",
    "static/js/bundle.js",
    "static/media/logo.5d5d9eef.svg"
  ];

self.addEventListener("install", function(event) {
  console.log("Installed");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("opened cache", cache);
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function() {
  console.log("Activated");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
