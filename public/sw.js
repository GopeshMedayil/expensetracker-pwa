self.addEventListener("install", function() {
  console.log("Insatlled");
});
self.addEventListener("activate", function() {
  console.log("activated");
});
self.addEventListener("fetch", function() {
  console.log("fetched");
});
