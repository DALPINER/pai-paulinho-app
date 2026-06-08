/* ============================================================
   TERREIRA PAULINHO APP — sw.js (Service Worker PWA v3.0)
   Estratégia: Network-First para assets dinâmicos (JS/CSS/HTML)
               Cache-First para imagens e fontes estáticas
   Piloto: Antigravity V.L.A.E.G.
   ============================================================ */

// ⚠️ INCREMENTAR esta versão a cada deploy para forçar atualização
const CACHE_VERSION = 'v8';
const CACHE_NAME    = `terreira-paulinho-${CACHE_VERSION}`;

// Recursos pré-cacheados na instalação (shell do app)
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/pai_paulinho_portal.png',
];

/* ================================================================
   INSTALL — Pré-cacheia o shell do app e ativa imediatamente
   ================================================================ */
self.addEventListener('install', event => {
  console.log(`[SW ${CACHE_VERSION}] Instalando...`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => {
        console.log(`[SW ${CACHE_VERSION}] Instalado. Ativando imediatamente.`);
        return self.skipWaiting(); // Não espera fechar — ativa na hora
      })
  );
});

/* ================================================================
   ACTIVATE — Remove caches antigos e assume controle de todos os clientes
   ================================================================ */
self.addEventListener('activate', event => {
  console.log(`[SW ${CACHE_VERSION}] Ativado. Limpando caches antigos...`);
  event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => {
              console.log(`[SW] Removendo cache obsoleto: ${name}`);
              return caches.delete(name);
            })
        )
      )
      .then(() => self.clients.claim()) // Assume controle imediato de todas as abas abertas
  );
});

/* ================================================================
   FETCH — Estratégias diferenciadas por tipo de recurso
   ================================================================ */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // — Ignorar: admin, Firebase, métodos não-GET —
  if (
    url.pathname.includes('admin') ||
    url.origin.includes('firebase') ||
    url.hostname.includes('firestore') ||
    request.method !== 'GET'
  ) return;

  // — Ignorar: vídeos e áudios (Safari exige Range requests) —
  if (
    request.destination === 'video' ||
    request.destination === 'audio' ||
    url.pathname.endsWith('.mp4')
  ) return;

  // — NETWORK FIRST: HTML, JS, CSS —
  // Sempre busca a versão mais recente; usa cache apenas se offline
  if (
    request.mode === 'navigate' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.html')
  ) {
    event.respondWith(networkFirst(request));
    return;
  }

  // — CACHE FIRST: imagens, fontes (raramente mudam) —
  event.respondWith(cacheFirst(request));
});

/* ================================================================
   HELPERS DE ESTRATÉGIA
   ================================================================ */

/**
 * Network-First: tenta rede → atualiza cache → fallback para cache offline
 */
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone()); // Atualiza cache em segundo plano
    }
    return networkResponse;
  } catch {
    // Offline: serve do cache se disponível
    const cached = await cache.match(request);
    return cached || new Response('Você está offline. Conecte-se à internet.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

/**
 * Cache-First: serve do cache → fallback para rede → salva no cache
 */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const networkResponse = await fetch(request);
    if (
      networkResponse &&
      networkResponse.status === 200 &&
      (
        request.url.startsWith(self.location.origin) ||
        request.url.includes('fonts.gstatic.com') ||
        request.url.includes('fonts.googleapis.com')
      )
    ) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    return new Response('', { status: 408 });
  }
}
