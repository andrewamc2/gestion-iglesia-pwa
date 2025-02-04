const CACHE_NAME = "tabernc-v1";
const urlsToCache = [
    "index.html",
    "estadisticas_culto.html",
    "conteo_evangelismo.html",
    "ventas_jovenes.html",
    "css/styles.css",
    "js/conteo_evangelismo.js",
    "js/ventas_jovenes.js",
    "img/logo.png",
    "img/iglesia.jpg"
];

// Instalar Service Worker y cachear archivos
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Interceptar las solicitudes y responder desde la caché si es posible
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
