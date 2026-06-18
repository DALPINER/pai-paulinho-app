/* ============================================================
   TERREIRA PAULINHO APP — app.js (v2.0)
   Fase E: Oráculo Interativo + Micro-interações + Firestore
   Piloto: Antigravity V.L.A.E.G.
   ============================================================ */

'use strict';

/* ================================================================
   TASK 1 — ORÁCULO: 20 Mensagens Espirituais
   ================================================================ */
const ORACLE_MESSAGES_BY_CATEGORY = {
  amor: [
    "Oraieiêô, Mamãe Oxum! As águas doces da cachoeira limpam e curam a alma. O amor verdadeiro só floresce onde há solo fértil de amor-próprio e respeito. Cure as feridas do passado, perdoe-se e compreenda que você não precisa aceitar migalhas afetivas. O amor que é seu te cobrirá de ouro e paz.",
    "O amor não prende, não sufoca e não machuca. Oxum sussurra que a responsabilidade afetiva começa consigo mesmo. Antes de buscar o abraço do outro, acolha a si mesmo. Quando a sua própria fonte transbordar, o afeto de verdade chegará sem esforço para somar à sua felicidade.",
    "Nas águas de Oxum reside a alquimia do afeto. Curar o próprio coração é um processo paciente, feito gota a gota. Não tenha pressa em preencher espaços vazios. Deixe o rio fluir naturalmente. O amor de qualidade exige maturidade e cura mútua.",
    "A doçura de Oxum não deve ser confundida com fraqueza. Amar exige limites. Proteja a sua energia e não permita que drenem a sua paz em nome de um afeto incompleto. Seja assertivo em suas relações. O verdadeiro direcionamento amoroso vem de quem se valoriza primeiro.",
    "O rio de Oxum sempre encontra o oceano, não importa o caminho. O amor sincero e curador chegará no momento exato em que você estiver pronto para receber a reciprocidade. Cure o que dói no silêncio e confie na doçura dos orixás para reerguer a sua vida afetiva."
  ],
  caminhos: [
    "Sob a força de Ogum que empunha a espada da lei, nenhuma barreira ficará de pé diante do seu avanço. Os caminhos não apenas se abrirão: você está sendo preparado para liderar e prosperar. Mantenha o foco em seus objetivos e lembre-se de que a vitória é de quem tem coragem de dar o primeiro passo.",
    "Laroyé, Exu! A boca do mundo fala quando o mensageiro da encruzilhada se move. Abertura financeira não é sorte, é merecimento e movimento. Saia da inércia. As chaves das portas que pareciam trancadas já estão em suas mãos, basta ter a determinação de girá-las com fé e sabedoria.",
    "A força de Ogum abre as matas da indecisão. Se as finanças pareciam travadas, compreenda que o reajuste energético exige que você limpe a sua mente de crenças limitantes. Você é merecedor da abundância da terra. Foque na ação e o axé guiará os seus negócios.",
    "Ogum não vence batalhas no silêncio da dúvida, ele vence marchando. A prosperidade que você busca demanda atitude e clareza de intenções. Não espere pelas circunstâncias perfeitas. Inicie o que precisa hoje e os guias abrirão os atalhos invisíveis para o seu sucesso.",
    "O mensageiro das encruzilhadas avisa: o dinheiro é energia fluida que corre para quem respeita o trabalho e sabe pedir licença. Exu abre os caminhos de quem age com verdade e ética. Mantenha a cabeça erguida, livre-se da autopiedade e avance em direção ao seu destino financeiro."
  ],
  paz: [
    "Odoyá, Iemanjá! Epa Babá, Oxalá! Deite a sua mente ansiosa no mar de leite e deixe que as ondas limpem a perturbação do seu espírito. A paz que você procura não está nas respostas externas, mas na calma que você cultiva no silêncio. Entregue os seus anseios e confie no manto branco protetor.",
    "As águas de Iemanjá lavam o peito apertado e a mente cansada. Respire fundo e sinta o acolhimento da mãe de todas as cabeças (Ori). A ansiedade é o medo do amanhã, mas o amanhã é guardado pelo olhar terno de Oxalá. Acalme o seu coração; nada de ruim vai te acontecer.",
    "Oxalá derrama a sua luz branca e pacífica sobre o seu pensamento acelerado. Quando o barulho do mundo estiver ensurdecedor, feche os olhos e peça licença para silenciar. A paz é uma escolha de entrega aos orixás. Deixe que a calma guie as suas decisões.",
    "Iemanjá acalma as marés mais tempestuosas da sua mente. Confie que a angústia que hoje aperta o seu peito é passageira. O oceano leva embora todas as cargas e traz de volta a lucidez. Mantenha a maré firme e vista-se com a serenidade dos sábios.",
    "No colo de Iemanjá e sob a coroa de Oxalá, a sua cabeça encontra o descanso necessário para recobrar as forces. Não tente carregar o peso do mundo nas suas costas. Entregue o controle ao fluxo do sagrado e permita-se viver em paz."
  ],
  protecao: [
    "Kaô Kabecilê! A justiça de Xangô Aganjú é como o raio que corta a tempestade: implacável e verdadeira. Na firmeza da pedreira, nenhuma inveja ou maldade disfarçada de amizade tem poder para te derrubar. Deixe que o tribunal divino pese as ações de cada um. Você está blindado pelo machado da lei.",
    "Xangô Aganjú sustenta a rocha onde você apoia os seus pés. Quando os ventos da maledicência e do olho gordo soprarem forte, mantenha-se em silêncio. A lei do retorno é exata e age no tempo certo. O escudo invisível dos seus guias bloqueia as setas enviadas contra a sua estabilidade.",
    "Nenhum mal resiste ao calor do fogo purificador de Xangô. Se o momento exige vigilância, saiba que a sua proteção está garantida desde que você ande na retidão. A inveja alheia é apenas um reflexo da incapacidade do outro de gerar sua própria luz. Siga firme na justiça divina.",
    "A rocha não se move com o vento. Da mesma forma, a sua proteção espiritual está calcada na força ancestral de Xangô Aganjú. A inveja tenta perturbar, mas o seu axé é um escudo intransponível. A verdade sempre prevalecerá e os seus inimigos cairão por terra.",
    "O julgamento de Xangô é calmo, justo e absoluto. Confie a ele os seus temores e as injustiças que sofreu. Concentre-se em fazer o bem e a sua casa espiritual estará guardada. O mal que te desejaram se transformará em combustível para o seu crescimento pessoal."
  ]
};

/* ================================================================
   DADOS PADRÃO (fallback se Firestore não estiver configurado)
   ================================================================ */
const DEFAULT_DATA = {
  servicos: [
    { id: '1', nome: 'Consulta Espiritual',  descricao: 'Um momento de escuta atenta, respeito e direcionamento espiritual para acalmar seu coração e trazer clareza para suas decisões de vida.', icone: '🔮' },
    { id: '2', nome: 'Jogo de Búzios',       descricao: 'Leitura acolhedora e precisa dos búzios para encontrar respostas claras e iluminar as áreas da sua jornada que parecem travadas.', icone: '🐚' },
    { id: '3', nome: 'Limpeza Espiritual',   descricao: 'Um reequilíbrio energético suave para afastar a ansiedade, retirar cargas negativas acumuladas e devolver a leveza à sua alma.', icone: '🕯️' },
    { id: '4', nome: 'Abertura de Caminhos', descricao: 'Trabalhos direcionados sob a luz dos guias para remover obstáculos invisíveis, permitindo que a prosperidade, o amor e a saúde fluam livremente.', icone: '🌟' },
    { id: '5', nome: 'Proteção Espiritual',  descricao: 'Rituais de fortalecimento espiritual para proteger você, seu lar ou seu negócio contra inveja e energias negativas.', icone: '🛡️' },
    { id: '6', nome: 'Trabalhos de Harmonização', descricao: 'Realizados com alta ética e responsabilidade para restabelecer o entendimento nas relações, promovendo a paz e a harmonia familiar.', icone: '❤️' },
  ],



  mensagem_espiritual_do_dia: 'Que Xangô Aganjú ilumine os seus passos e que os orixás abram os caminhos da prosperidade, da saúde e do amor em sua vida.',
  whatsapp_numero: '5555999176726',
  redes_sociais: {
    instagram: 'https://www.instagram.com/paulogandor',
    facebook:  'https://www.facebook.com/babalorixapaulinho.dexangoaganju'
  }
};

/* ================================================================
   TASK 3 — FIRESTORE MANAGER (Real-time listener)
   ================================================================ */
const FirestoreManager = {
  COLLECTION: 'site_config',
  DOCUMENT:   'dados',

  /**
   * Inicia um listener em tempo real no Firestore.
   * @param {Function} onData — callback chamado a cada atualização
   * @returns {boolean} true se o listener foi iniciado
   */
  listenToChanges(onData) {
    if (!window.FIREBASE_CONFIGURED || !window.db) return false;

    try {
      window.db
        .collection(this.COLLECTION)
        .doc(this.DOCUMENT)
        .onSnapshot(
          snap => {
            const data = snap.exists
              ? { ...DEFAULT_DATA, ...snap.data() }
              : { ...DEFAULT_DATA };
            onData(data);
          },
          err => {
            console.warn('[Firestore] onSnapshot erro — usando padrão.', err.message);
            onData({ ...DEFAULT_DATA });
          }
        );
      return true;
    } catch (e) {
      console.error('[Firestore] Falha ao iniciar listener:', e.message);
      return false;
    }
  }
};

/* ================================================================
   DATA MANAGER — localStorage (fallback quando Firestore não configurado)
   ================================================================ */
const DataManager = {
  KEY: 'terreira_data',

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return { ...DEFAULT_DATA };
      const saved = JSON.parse(raw);
      // Deep merge: objetos aninhados (ex: redes_sociais) são mesclados campo a campo
      // para que DEFAULT_DATA preencha campos vazios do localStorage antigo
      return {
        ...DEFAULT_DATA,
        ...saved,
        redes_sociais: {
          ...DEFAULT_DATA.redes_sociais,
          ...(saved.redes_sociais || {})
        }
      };
    } catch (e) {
      console.warn('[LocalStorage] Dados corrompidos — usando padrão.', e);
      return { ...DEFAULT_DATA };
    }
  }
};

/* ================================================================
   WHATSAPP HELPER — POP_03
   ================================================================ */
function buildWhatsAppURL(numero) {
  const msg = `🙏 Olá, Pai Paulinho!\nVim pelo site e gostaria de agendar uma consulta espiritual.\nQue os orixás me guiem até você! ✨`;
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}

function setupWhatsAppButtons(numero) {
  const url = buildWhatsAppURL(numero);

  // Configura todos os botões/links com classe .whatsapp-trigger
  document.querySelectorAll('.whatsapp-trigger').forEach(btn => {
    if (!numero) {
      btn.style.opacity       = '0.5';
      btn.style.pointerEvents = 'none';
      btn.title               = 'WhatsApp em breve';
    } else {
      btn.href   = url;
      btn.target = '_blank';
      btn.rel    = 'noopener noreferrer';
      btn.removeAttribute('style');
    }
  });

  // Configura o FAB flutuante (não é um <a>, usa data-href)
  const fab = document.getElementById('whabFab');
  if (fab) {
    if (!numero) {
      fab.dataset.href = '';
      fab.style.opacity = '0.5';
    } else {
      fab.dataset.href = url;
      fab.removeAttribute('style');
    }
  }
}

/* ================================================================
   RENDERERS — Preenche o DOM com os dados
   ================================================================ */

function renderSobre(texto) {
  const el = document.getElementById('sobreCorpo');
  if (!el) return;
  el.innerHTML = texto.trim().split('\n\n').filter(Boolean)
    .map(p => `<p>${p.trim()}</p>`).join('');
}

function renderServicos(servicos) {
  const grid = document.getElementById('servicosGrid');
  if (!grid) return;

  if (!servicos?.length) {
    grid.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;">Serviços em breve. 🙏</p>`;
    return;
  }

  /* Metadados de marketing por posição (alinhado com DEFAULT_DATA.servicos) */
  const meta = [
    {
      featured: true,
      badge: '⭐ Mais procurado',
      demand: 95, demandLabel: 'Altíssima procura',
      tags: ['Online', 'Presencial'],
      scarcity: '📅 ÚItimas vagas desta semana',
      proof: true, particles: true
    },
    { demand: 88, demandLabel: 'Alta procura',    tags: ['Presencial'] },
    { demand: 82, demandLabel: 'Alta procura',    tags: ['Online', 'Presencial'] },
    { demand: 90, demandLabel: 'Alta procura',    tags: ['Presencial'] },
    { demand: 78, demandLabel: 'Muito procurado', tags: ['Online', 'Presencial'] },
    { demand: 85, demandLabel: 'Alta procura',    tags: ['Online', 'Presencial'] },
  ];

  const totalCards = servicos.length;

  grid.innerHTML = servicos.map((s, i) => {
    const m        = meta[i] || {};
    const delay    = Math.min(i * 90, 450);
    const isLast   = i === totalCards - 1;
    const isFeatured = !!m.featured;

    /* --- Partes reutilizáveis --- */
    const tagsHtml = (m.tags || []).map(t => `<span class="sc-tag">${t}</span>`).join('');

    const demandHtml = `
      <div class="sc-demand">
        <div class="sc-demand-bar">
          <div class="sc-demand-fill" style="--demand:${m.demand || 80}%"></div>
        </div>
        <span class="sc-demand-label">${m.demandLabel || 'Procurado'}</span>
      </div>`;

    const statusHtml = (label = 'Disponível') => `
      <div class="sc-status">
        <span class="sc-dot"></span>
        <span>${label}</span>
      </div>`;

    const iconHtml = `
      <div class="sc-icon-wrap">
        <span class="sc-icon-ring" aria-hidden="true"></span>
        <span class="sc-icon" aria-hidden="true">${s.icone || '🌟'}</span>
      </div>`;

    /* --- Card FEATURED --- */
    if (isFeatured) {
      return `
        <div class="servico-card sc-featured reveal"
             style="transition-delay:${delay}ms"
             role="article" aria-label="${escapeHTML(s.nome)}">
          <div class="sc-particles" aria-hidden="true">
            <span class="sc-particle"></span><span class="sc-particle"></span>
            <span class="sc-particle"></span><span class="sc-particle"></span>
            <span class="sc-particle"></span><span class="sc-particle"></span>
          </div>
          ${statusHtml('Disponível agora')}
          ${iconHtml}
          <span class="sc-badge">${m.badge}</span>
          <h3 class="sc-title">${escapeHTML(s.nome)}</h3>
          ${demandHtml}
          <p class="sc-desc">${escapeHTML(s.descricao)}</p>
          <div class="sc-social-proof">
            <div class="sc-avatars" aria-hidden="true">
              <span class="sc-av">M</span><span class="sc-av">J</span>
              <span class="sc-av">A</span><span class="sc-av">🙏</span>
            </div>
            <p class="sc-proof-text">Mais de <strong><span id="scCounter">0</span>+</strong> atendimentos</p>
          </div>
          <div class="sc-scarcity">
            <span class="sc-scarcity-dot"></span>
            <span>${m.scarcity}</span>
          </div>
          <div class="sc-tags">${tagsHtml}</div>
          <a class="sc-cta sc-cta-primary whatsapp-trigger" href="#"
             aria-label="Agendar ${escapeHTML(s.nome)} via WhatsApp">Agendar minha consulta</a>
        </div>`;
    }

    /* --- Card HORIZONTAL (6º — full width) --- */
    if (isLast) {
      return `
        <div class="servico-card reveal"
             style="transition-delay:${delay}ms"
             role="article" aria-label="${escapeHTML(s.nome)}">
          ${iconHtml}
          <div class="sc-body">
            ${statusHtml()}
            <h3 class="sc-title">${escapeHTML(s.nome)}</h3>
            ${demandHtml}
            <p class="sc-desc">${escapeHTML(s.descricao)}</p>
            <div class="sc-tags">${tagsHtml}</div>
          </div>
          <a class="sc-cta whatsapp-trigger" href="#"
             aria-label="Agendar ${escapeHTML(s.nome)} via WhatsApp">Saber mais</a>
        </div>`;
    }

    /* --- Card REGULAR --- */
    return `
      <div class="servico-card reveal"
           style="transition-delay:${delay}ms"
           role="article" aria-label="${escapeHTML(s.nome)}">
        ${statusHtml()}
        ${iconHtml}
        <h3 class="sc-title">${escapeHTML(s.nome)}</h3>
        ${demandHtml}
        <p class="sc-desc">${escapeHTML(s.descricao)}</p>
        <div class="sc-tags">${tagsHtml}</div>
        <a class="sc-cta whatsapp-trigger" href="#"
           aria-label="Agendar ${escapeHTML(s.nome)} via WhatsApp">Saber mais</a>
      </div>`;
  }).join('');

  setTimeout(() => {
    observeRevealElements();
    initServiceCards();
  }, 80);
}

/* ================================================================
   INTERAÇÕES PREMIUM DOS CARDS
   Tilt 3D (desktop) + Counter animado (featured)
   ================================================================ */
function initServiceCards() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  document.querySelectorAll('.servico-card').forEach(card => {
    if (card.dataset.scInit) return;
    card.dataset.scInit = '1';

    if (!isTouch) {
      card.addEventListener('mousemove', e => {
        const r  = card.getBoundingClientRect();
        const rX = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -4;
        const rY = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  4;
        card.style.transform =
          `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(8px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    }
  });

  /* Counter animado para prova social */
  const counterEl = document.getElementById('scCounter');
  if (counterEl && !counterEl.dataset.animated) {
    counterEl.dataset.animated = '1';
    const featuredCard = counterEl.closest('.sc-featured');
    if (featuredCard) {
      const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          animateScCounter(counterEl, 500);
          obs.disconnect();
        }
      }, { threshold: 0.3 });
      obs.observe(featuredCard);
    }
  }
}

function animateScCounter(el, target, duration = 1800) {
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}



function renderSociais(redes) {
  const footer = document.getElementById('footerSocial');
  if (!footer) return;

  // Usa DEFAULT_DATA como fallback para campos vazios (ex: localStorage antigo)
  const ig = (redes?.instagram || '').trim() || DEFAULT_DATA.redes_sociais.instagram;
  const fb = (redes?.facebook  || '').trim() || DEFAULT_DATA.redes_sociais.facebook;

  const links = [];
  if (ig && ig !== '#') links.push(`<a href="${ig}" target="_blank" rel="noopener noreferrer"><span>📸</span> Instagram</a>`);
  if (fb && fb !== '#') links.push(`<a href="${fb}" target="_blank" rel="noopener noreferrer"><span>📘</span> Facebook</a>`);

  if (links.length) {
    footer.innerHTML = links.join('');
  }
}

function renderSobreSociais(redes) {
  const container = document.getElementById('sobreRedes');
  if (!container) return;

  const ig = (redes?.instagram || '').trim() || DEFAULT_DATA.redes_sociais.instagram;
  const fb = (redes?.facebook  || '').trim() || DEFAULT_DATA.redes_sociais.facebook;

  const elements = [];
  if (ig && ig !== '#') {
    elements.push(`
      <a href="${ig}" target="_blank" rel="noopener noreferrer" class="sobre-rede-link instagram" aria-label="Acessar Instagram de Pai Paulinho">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    `);
  }
  if (fb && fb !== '#') {
    elements.push(`
      <a href="${fb}" target="_blank" rel="noopener noreferrer" class="sobre-rede-link facebook" aria-label="Acessar Facebook de Pai Paulinho">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
    `);
  }

  container.innerHTML = elements.join('');
}

/* ================================================================
   renderAll — Orquestra todos os renderers com um único dataset
   ================================================================ */
let _carouselReady = false;

function renderAll(data) {
  renderServicos(data.servicos);
  renderSociais(data.redes_sociais);
  renderSobreSociais(data.redes_sociais);
  setupWhatsAppButtons(data.whatsapp_numero);

  // Re-observa elementos recém-criados
  observeRevealElements();

  // Acopla a Física 3D Magnética aos Cartões de Serviço
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".servico-card"), {
      max: 12,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
      scale: 1.02,
    });
  }
}

/* ================================================================
   MOTOR IN-APP NOTIFICATIONS (SUPABASE REST API)
   ================================================================ */
async function fetchAndShowAvisosInApp() {
  const SUPABASE_URL = 'https://damdszytfqwgpfghffgo.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbWRzenl0ZnF3Z3BmZ2hmZmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNDI2MTgsImV4cCI6MjA5NjcxODYxOH0.i9Vsih5_OKiUWLYXAeuLZmLVtgTqMB9ZCf6KYLIiphA';
  
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/avisos_inapp?select=*&order=id.desc&limit=1`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if(!res.ok) return;
    const data = await res.json();
    if(data && data.length > 0) {
      const aviso = data[0];
      if (aviso.ativo === true) {
         // Verifica se o usuário já leu esse aviso
         const lido = localStorage.getItem('aviso_lido_' + aviso.id);
         if (!lido) {
            renderAvisoInApp(aviso);
         }
      }
    }
  } catch(e) {
    console.log("Sistema de avisos descansando.");
  }
}

function renderAvisoInApp(aviso) {
  const overlay = document.createElement('div');
  overlay.className = 'inapp-overlay';
  overlay.innerHTML = `
    <div class="inapp-modal">
      <div class="inapp-badge">🔔 Aviso Oficial</div>
      <h3 class="inapp-title">${aviso.titulo}</h3>
      <p class="inapp-msg">${aviso.mensagem.replace(/\n/g, '<br>')}</p>
      <button class="inapp-btn">Entendido</button>
    </div>
  `;
  document.body.appendChild(overlay);
  
  // Pequeno delay para a animação CSS pegar
  setTimeout(() => overlay.classList.add('show'), 800);
  
  overlay.querySelector('.inapp-btn').onclick = () => {
    localStorage.setItem('aviso_lido_' + aviso.id, 'true');
    overlay.classList.remove('show');
    setTimeout(() => overlay.remove(), 400); // Tempo da transição
  };
}

/* ================================================================
   TASK 1 — ORÁCULO INTERATIVO (GUIADO POR INTENÇÃO)
   ================================================================ */
function initOracle() {
  const chips    = document.querySelectorAll('.intention-chip');
  const btnAgain = document.getElementById('oracleBtnAgain');
  const card     = document.getElementById('oracleCard');
  const ctaEl    = document.getElementById('oracleCta');
  const resultEl = document.getElementById('oracleResult');
  const footerEl = document.getElementById('oracleFooter');
  const msgEl    = document.getElementById('oracleMsgText');

  if (!chips.length || !card || !msgEl) return;

  function runOracle(category) {
    const messages = ORACLE_MESSAGES_BY_CATEGORY[category];
    if (!messages || !messages.length) return;

    // Sorteia a mensagem final da categoria correspondente
    const chosen = messages[Math.floor(Math.random() * messages.length)];

    // — Desabilitar todos os chips para evitar cliques múltiplos —
    chips.forEach(btn => btn.disabled = true);
    if (btnAgain) btnAgain.disabled = true;

    // — Dispara a mudança de tema e física do Canvas de partículas —
    if (typeof window.setOracleTheme === 'function') {
      window.setOracleTheme(category);
    }

    // — Ativar animação de brilho e pulso no card —
    card.classList.add('oracle-shining');

    // — Transição suave: esconde os chips, mostra resultado —
    ctaEl.classList.add('hidden');
    if (footerEl) footerEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    msgEl.classList.add('cycling');

    // — Slot Machine / Giro Etéreo: embaralha mensagens com desfoque —
    let cycles  = 0;
    const TOTAL = 22;

    function cycle() {
      // Exibe mensagem aleatória da mesma categoria no giro
      msgEl.textContent = messages[Math.floor(Math.random() * messages.length)];
      cycles++;

      if (cycles < TOTAL) {
        const progress = cycles / TOTAL;
        // Desaceleração exponencial (freio no giro etéreo)
        const delay = 50 + (progress > 0.55 ? Math.pow((progress - 0.55) * 2.2, 2.8) * 380 : 0);
        setTimeout(cycle, delay);
      } else {
        // — Revelação final com fade-in e desfoque removido —
        card.classList.remove('oracle-shining');
        msgEl.classList.remove('cycling');
        msgEl.textContent = chosen;
        msgEl.classList.add('oracle-animate-in');

        setTimeout(() => {
          msgEl.classList.remove('oracle-animate-in');

          if (footerEl) {
            footerEl.classList.remove('hidden');
            footerEl.classList.add('oracle-animate-in');
            setTimeout(() => footerEl.classList.remove('oracle-animate-in'), 700);
          }

          chips.forEach(btn => btn.disabled = false);
          if (btnAgain) btnAgain.disabled = false;
        }, 650);
      }
    }

    cycle();
  }

  // Cliques nos chips de intenção
  chips.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      runOracle(cat);
    });
  });

  // Reset para nova orientação (retorna ao menu de chips)
  btnAgain?.addEventListener('click', () => {
    // Retorna as partículas para o estado flutuante padrão
    if (typeof window.setOracleTheme === 'function') {
      window.setOracleTheme('default');
    }

    // Fade out suave do resultado
    resultEl.classList.add('hidden');
    msgEl.textContent = '';
    
    // Mostra os chips novamente
    ctaEl.classList.remove('hidden');
    ctaEl.classList.add('oracle-animate-in');
    setTimeout(() => ctaEl.classList.remove('oracle-animate-in'), 600);
  });
}

/* ================================================================
   TASK 2 — EFEITO MAGNÉTICO no botão WhatsApp do Hero
   Física: o botão é "atraído" pelo cursor com inércia suave
   ================================================================ */
function initMagneticBtn() {
  const btn = document.getElementById('heroWhatsApp');
  if (!btn || window.matchMedia('(pointer: coarse)').matches) return; // Sem efeito em touch

  const STRENGTH = 0.32; // intensidade do magnetismo (0 = nada, 1 = segue cursor)
  let leaving     = false;

  btn.addEventListener('mousemove', e => {
    if (leaving) return;
    const r  = btn.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) * STRENGTH;
    const dy = (e.clientY - (r.top  + r.height / 2)) * STRENGTH;

    btn.style.transition = 'transform 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    btn.style.transform  = `translate(${dx}px, ${dy}px) scale(1.05)`;
  });

  btn.addEventListener('mouseleave', () => {
    leaving = true;
    // Efeito "mola" ao soltar: ultrapassa um pouco e volta
    btn.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    btn.style.transform  = 'translate(0, 0) scale(1)';
    setTimeout(() => {
      btn.style.transition = '';
      btn.style.transform  = '';
      leaving = false;
    }, 600);
  });

  // Feedback de click
  btn.addEventListener('mousedown', () => {
    btn.style.transform  = 'scale(0.94)';
    btn.style.transition = 'transform 0.1s ease';
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform  = 'scale(1)';
    btn.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
}

/* ================================================================
   CANVAS PARTICLES — Partículas douradas no Hero
   ================================================================ */
function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x       = Math.random() * canvas.width;
      this.y       = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.size    = Math.random() * 1.8 + 0.4;
      this.speedY  = Math.random() * 0.8 + 0.3;
      this.speedX  = (Math.random() - 0.5) * 0.4;
      this.alpha   = Math.random() * 0.7 + 0.2;
      this.life    = 0;
      this.maxLife = Math.random() * 260 + 120;
      this.gold    = Math.random() > 0.3;
    }
    update() {
      this.x += this.speedX;
      this.y -= this.speedY;
      this.life++;
      if (this.life > this.maxLife * 0.72) this.alpha -= 0.008;
      if (this.y < -15 || this.alpha <= 0) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      const c = this.gold ? '#c9a84c' : '#e8c96a';
      ctx.shadowColor = c;
      ctx.shadowBlur  = 6;
      ctx.fillStyle   = c;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function initPool() { particles = Array.from({ length: 90 }, () => new Particle()); }
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener('resize', () => { resize(); initPool(); }, { passive: true });
  initPool();
  tick();
}

/* ================================================================
   ORACLE CANVAS PARTICLES — Partículas dinâmicas e interativas no Oráculo
   ================================================================ */
function initOracleParticles() {
  const canvas = document.getElementById('oracleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let currentCategory = 'default';
  let forceFieldCenter = { x: 0, y: 0 };
  let isVortexActive = false;

  const COLORS = {
    default:   ['#c9a84c', '#e8c96a', '#b5923b'],
    amor:      ['#8b1c1c', '#ff5a5a', '#ff85a1', '#e29578'],
    caminhos:  ['#c9a84c', '#ffb703', '#ffd166', '#ffffff'],
    paz:       ['#ffffff', '#cbd5e1', '#b0c4de', '#f0f8ff'],
    protecao:  ['#2a9d8f', '#a65d37', '#52796f', '#e76f51']
  };

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    forceFieldCenter.x = canvas.width / 2;
    forceFieldCenter.y = canvas.height / 2;
  }

  class OracleParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 15;
      this.size = Math.random() * 2.2 + 0.6;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.baseAlpha = this.alpha;
      this.life = 0;
      this.maxLife = Math.random() * 200 + 150;
      
      this.speedY = Math.random() * 0.4 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.3;
      
      const dx = this.x - forceFieldCenter.x;
      const dy = this.y - forceFieldCenter.y;
      this.radius = Math.sqrt(dx * dx + dy * dy);
      this.angle = Math.atan2(dy, dx);
      this.orbitSpeed = (Math.random() * 0.01 + 0.004) * (Math.random() > 0.5 ? 1 : -1);

      const palette = COLORS[currentCategory] || COLORS.default;
      this.color = palette[Math.floor(Math.random() * palette.length)];
    }

    update() {
      this.life++;
      
      if (isVortexActive) {
        this.angle += this.orbitSpeed * 1.5;
        this.radius -= 0.6;
        if (this.radius < 5) {
          this.reset(false);
          this.radius = Math.max(canvas.width, canvas.height) * 0.6;
        }
        this.x = forceFieldCenter.x + Math.cos(this.angle) * this.radius;
        this.y = forceFieldCenter.y + Math.sin(this.angle) * this.radius;
      } else {
        this.x += this.speedX;
        this.y -= this.speedY;
        
        if (this.orbitSpeed) {
          this.x += Math.cos(this.life * 0.02) * 0.15;
        }
      }

      if (this.life > this.maxLife * 0.8) {
        this.alpha -= 0.01;
      }
      
      if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20 || this.alpha <= 0) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function initPool() {
    particles = Array.from({ length: 65 }, () => new OracleParticle());
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(tick);
  }

  resize();
  initPool();
  tick();

  window.addEventListener('resize', () => {
    resize();
    initPool();
  }, { passive: true });

  window.setOracleTheme = function(category) {
    currentCategory = category;
    if (category === 'default') {
      isVortexActive = false;
    } else {
      isVortexActive = true;
      setTimeout(() => {
        isVortexActive = false;
      }, 3500);
    }
    
    particles.forEach(p => {
      const palette = COLORS[currentCategory] || COLORS.default;
      p.color = palette[Math.floor(Math.random() * palette.length)];
      if (isVortexActive) {
        const dx = p.x - forceFieldCenter.x;
        const dy = p.y - forceFieldCenter.y;
        p.radius = Math.sqrt(dx * dx + dy * dy);
        p.angle = Math.atan2(dy, dx);
      }
    });
  };
}

/* ================================================================
   TASK 2 — SCROLL REVEAL via IntersectionObserver
   Elementos surgem de baixo para cima com opacidade 0→1
   ================================================================ */
function observeRevealElements() {
  const elements = document.querySelectorAll('.reveal:not(.observed)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:  0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach((el, i) => {
    el.classList.add('observed');
    // Staggered delay por grupo (não acumula delay entre chamadas)
    if (!el.style.transitionDelay) {
      el.style.transitionDelay = `${(i % 6) * 70}ms`;
    }
    observer.observe(el);
  });
}



/* ================================================================
   NAVEGAÇÃO — sticky header + menu dropdown/tela-cheia + back-to-top
   ================================================================ */
function initNav() {
  const header    = document.getElementById('siteHeader');
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');
  const backToTop = document.getElementById('backToTop');

  if (!hamburger || !navLinks) return;

  const isMobile = () => window.innerWidth <= 640;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('open');
    // No mobile, bloqueia scroll e expande o header em tela cheia
    if (isMobile()) {
      header?.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    header?.classList.remove('menu-open');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Fecha ao clicar em qualquer link do menu
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });

  // Fecha ao clicar fora (apenas no dropdown desktop)
  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('open')) return;
    const clickedInsideMenu = navLinks.contains(e.target);
    const clickedHamburger  = hamburger.closest('.nav-actions')?.contains(e.target);
    if (!clickedInsideMenu && !clickedHamburger) closeMenu();
  });

  // Fecha ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
  });

  // Fecha ao redimensionar para desktop se estava aberto no mobile
  window.addEventListener('resize', () => {
    if (navLinks.classList.contains('open')) closeMenu();
  }, { passive: true });

  // Scroll: header sticky + botão voltar ao topo
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backToTop?.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
}

/* ================================================================
   UTILITÁRIO
   ================================================================ */
function escapeHTML(str = '') {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ================================================================
   VIDEO PRELOADER (TELA DE INTRODUÇÃO RESPONSIVA)
   ================================================================ */
function initVideoPreloader() {
  const preloader     = document.getElementById('video-preloader');
  const portal        = document.getElementById('portal-entrada');
  const enterBtn      = document.getElementById('enterBtn');
  const videoWrapper  = document.getElementById('videoWrapper');
  const introVideo    = document.getElementById('introVideo');
  const skipBtn       = document.getElementById('skipIntro');
  if (!preloader) return;

  const portalContent = portal?.querySelector('.portal-content');
  const avatarWrapper = portal?.querySelector('.portal-avatar-wrapper');

  let hidden = false;
  let fallbackTimer;

  function hidePreloader() {
    if (hidden) return;
    hidden = true;
    clearTimeout(fallbackTimer);

    // Para o vídeo para evitar áudio fantasma
    if (introVideo) introVideo.pause();

    preloader.classList.add('hide-preloader');
  }

  // Evento de clique para Pular Introdução
  if (skipBtn) {
    skipBtn.addEventListener('click', hidePreloader);
  }

  // Fluxo de transição cinematográfica
  if (enterBtn && portal && videoWrapper && introVideo) {
    enterBtn.addEventListener('click', () => {
      // 1. Toca o vídeo IMEDIATAMENTE e de forma síncrona para herdar o gesto do usuário
      // Isso impede que navegadores (como Chrome e Safari) bloqueiem a reprodução com áudio ativo
      introVideo.muted = false;
      introVideo.volume = 1.0;

      introVideo.play()
        .then(() => {
          console.log('[Preloader] Vídeo de boas-vindas iniciado síncronamente com áudio.');
        })
        .catch(err => {
          console.warn('[Preloader] Autoplay com áudio bloqueado pelo navegador. Tentando reproduzir sem som...', err);
          introVideo.muted = true;
          introVideo.play().catch(e => {
            console.error('[Preloader] Falha crítica de reprodução:', e);
            hidePreloader(); // Se falhar totalmente, pula a intro
          });
        });

      // 2. Oculta o portal de entrada e exibe o contêiner do vídeo de forma instantânea
      portal.classList.add('hidden');
      videoWrapper.classList.remove('hidden');
      introVideo.classList.add('active');

      // Ocultar preloader quando o vídeo de boas-vindas terminar (com proteção contra encerramento precoce)
      introVideo.addEventListener('ended', () => {
        if (introVideo.currentTime > 6) {
          hidePreloader();
        } else {
          console.warn('[Preloader] O vídeo disparou ended precocemente em:', introVideo.currentTime);
          setTimeout(hidePreloader, 6500); // Garante a exibição mínima do vídeo completo
        }
      }, { once: true });

      // Fallback global de segurança ampliado para 25 segundos
      fallbackTimer = setTimeout(hidePreloader, 25000);
    });
  } else {
    // Fallback genérico caso faltem elementos
    if (introVideo) {
      introVideo.muted = true;
      introVideo.play().catch(() => {});
      introVideo.addEventListener('ended', () => {
        if (introVideo.currentTime > 6) {
          hidePreloader();
        } else {
          setTimeout(hidePreloader, 6500);
        }
      }, { once: true });
    }
    fallbackTimer = setTimeout(hidePreloader, 8000);
  }
}

/* ================================================================
   PWA INSTALLATION & SERVICE WORKER
   ================================================================ */
function initPWA() {
  // 1. Registro do Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('[PWA] Service Worker registrado com sucesso:', reg.scope);
          // Força a busca por atualizações no Service Worker
          reg.update().catch(() => {});
        })
        .catch(err => console.error('[PWA] Falha ao registrar Service Worker:', err));
    });
  }

  // 2. Fluxo de Instalação Personalizado
  const installLi  = document.getElementById('installAppLi');
  const installBtn = document.getElementById('installAppBtn');
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if (installLi) {
      installLi.classList.remove('hidden');
    }
    console.log('[PWA] Evento beforeinstallprompt capturado. Botão de instalação visível.');
  });

  if (installBtn) {
    installBtn.addEventListener('click', e => {
      e.preventDefault();
      if (!deferredPrompt) return;

      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('[PWA] Usuário aceitou a instalação do app.');
          if (installLi) installLi.classList.add('hidden');
        } else {
          console.log('[PWA] Usuário rejeitou a instalação do app.');
        }
        deferredPrompt = null;
      });
    });
  }

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] Aplicativo instalado com sucesso.');
    if (installLi) installLi.classList.add('hidden');
    deferredPrompt = null;
  });
}

/* ================================================================
   GALERIA HORIZONTAL — drag-to-scroll, wheel-scroll e navegação por setas
   ================================================================ */
function initGalleryScroll() {
  const carrossel = document.querySelector('.galeria-carrossel');
  const btnPrev = document.querySelector('.galeria-nav-btn.prev');
  const btnNext = document.querySelector('.galeria-nav-btn.next');
  if (!carrossel) return;

  // 1. Navegação pelas setas laterais
  const cardWidth = 290 + 29; // 290px + gap (aprox 29px)

  btnPrev?.addEventListener('click', () => {
    carrossel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  btnNext?.addEventListener('click', () => {
    carrossel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  // 2. Comportamento Drag-to-Scroll (arrastar com o mouse)
  let isDown = false;
  let startX;
  let scrollLeft;

  carrossel.addEventListener('mousedown', (e) => {
    isDown = true;
    carrossel.classList.add('dragging');
    startX = e.pageX - carrossel.offsetLeft;
    scrollLeft = carrossel.scrollLeft;
    carrossel.style.scrollSnapType = 'none';
  });

  carrossel.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      carrossel.classList.remove('dragging');
      carrossel.style.scrollSnapType = 'x mandatory';
    }
  });

  carrossel.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      carrossel.classList.remove('dragging');
      carrossel.style.scrollSnapType = 'x mandatory';
    }
  });

  carrossel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrossel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carrossel.scrollLeft = scrollLeft - walk;
  });

  // 3. Wheel Scroll Horizontal Inteligente (roda do mouse vertical vira horizontal)
  carrossel.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      const isAtStart = carrossel.scrollLeft <= 2;
      const isAtEnd = carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 5;
      
      if ((e.deltaY < 0 && !isAtStart) || (e.deltaY > 0 && !isAtEnd)) {
        e.preventDefault();
        carrossel.scrollLeft += e.deltaY * 0.9;
      }
    }
  }, { passive: false });
}

/* ================================================================
   GALERIA LIGHTBOX — Visualização 4K e Legendas Poéticas
   ================================================================ */
const GALERIA_CAPTIONS = {
  "1": "O fogo que purifica a alma e consagra trinta anos de caminhada sob as bênçãos de Xangô.",
  "3": "A doçura de Oxum guiando e abraçando cada filho que busca uma palavra de esperança.",
  "4": "Caminhos abertos e corações renovados pela força mística e pelo calor do nosso terreiro.",
  "5": "A energia das oferendas sagradas que abrem portais de amor, prosperidade e proteção.",
  "6": "União e axé: a grande família unida no propósito sagrado da caridade e do acolhimento.",
  "7": "A firmeza e a lei de Xangô Aganjú estruturando nossos passos sobre a rocha da justiça.",
  "8": "Direcionamento místico sob as luzes das velas que iluminam nossas preces e intenções.",
  "9": "Sorrisos e a força dos guias abrindo caminhos para todos os que aqui encontram luz.",
  "10": "A caridade silenciosa e acolhedora que abraça, cura e acalma os aflitos.",
  "11": "Ritual sagrado de purificação e fortalecimento espiritual da nossa egrégora mística.",
  "12": "Sob o olhar protetor dos orixás, nossa fé se renova a cada comemoração de amor.",
  "13": "Sacerdote Paulo conduzindo com dedicação e amor as bênçãos para nossa comunidade.",
  "14": "O Axé que emana das pedreiras sagradas e se espalha para o coração de cada filho.",
  "15": "Celebração das três décadas de dedicação ao sagrado com profunda reverência à ancestralidade.",
  "16": "A beleza do Altar que irradia as vibrações elevadas de paz, saúde e tranquilidade.",
  "18": "Momento solene de gratidão pela jornada de luz iniciada há trinta anos.",
  "19": "Flores e oferendas em reverência à pureza das mães das águas doces e salgadas.",
  "20": "A energia mística das ervas sagradas que descarregam o peso e devolvem a leveza.",
  "21": "Pai Paulinho de Xangô Aganjú: trinta anos estendendo a mão para trazer luz e conforto."
};

function initLightbox() {
  const lightbox = document.getElementById('galeriaLightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  
  const items = Array.from(document.querySelectorAll('.galeria-item img'));
  if (!lightbox || !img || !caption || !items.length) return;
  
  let currentIndex = 0;
  
  function openLightbox(index) {
    currentIndex = index;
    lightbox.classList.remove('hidden');
    lightbox.offsetWidth; // Força reflow
    lightbox.classList.add('active');
    updateContent();
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightbox.classList.add('hidden');
    }, 500);
  }
  
  function updateContent() {
    const currentImg = items[currentIndex];
    if (!currentImg) return;
    
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      img.src = currentImg.src;
      img.alt = currentImg.alt;
      
      const filename = currentImg.src.substring(currentImg.src.lastIndexOf('/') + 1);
      const num = filename.split('.')[0];
      
      caption.textContent = GALERIA_CAPTIONS[num] || currentImg.alt || 'Celebração de Três Décadas';
      
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 200);
  }
  
  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateContent();
  }
  
  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateContent();
  }
  
  items.forEach((item, index) => {
    item.parentElement.style.cursor = 'pointer';
    item.parentElement.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });
  
  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

/* ================================================================
   FAQ — DÚVIDAS FREQUENTES (Accordion)
   ================================================================ */
function initFAQ() {
  const triggers = document.querySelectorAll('.faq-trigger');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      
      // Opcional: Fecha todos antes de abrir (accordion clássico)
      // triggers.forEach(t => {
      //   t.setAttribute('aria-expanded', 'false');
      //   const content = document.getElementById(t.getAttribute('aria-controls'));
      //   if (content) content.setAttribute('aria-hidden', 'true');
      // });
      
      trigger.setAttribute('aria-expanded', !isExpanded);
      const content = document.getElementById(trigger.getAttribute('aria-controls'));
      if (content) {
        content.setAttribute('aria-hidden', isExpanded);
      }
    });
  });
}

/* ================================================================
   ACORDEÃO DOCUMENTAL (LER MAIS)
   ================================================================ */
function initAccordion() {
  const trigger = document.querySelector('.accordion-trigger');
  const content = document.getElementById('accordion-content');
  if (!trigger || !content) return;

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    
    // Toggle dos atributos de acessibilidade
    trigger.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);
    
    // Toggle das classes visuais
    trigger.classList.toggle('active');
    content.classList.toggle('active');
  });
}

/* ================================================================
   WHATSAPP FAB FLUTUANTE — Drag-and-Snap Engine
   Regras:
   1. Arrastável via mouse (mousedown/move/up) e touch (touchstart/move/end)
   2. Ao soltar, snap instantâneo para lateral mais próxima (esquerda ou direita)
   3. Nunca posicionado no meio da tela horizontalmente
   4. Margem de segurança de 16px de cada borda
   5. Limite vertical: nunca sai da área visível (16px top/bottom)
   6. Posição Y e lado (left/right) são salvos no localStorage
   7. Clique simples (sem arrastar) abre WhatsApp
   8. O link do WhatsApp é injetado pelo setupWhatsAppButtons
   ================================================================ */
function initWhatsAppFab() {
  const fab = document.getElementById('whabFab');
  if (!fab) return;

  const MARGIN    = 16;          // px de margem das bordas
  const STORAGE_Y = 'whab_y';    // chave localStorage para posição Y
  const STORAGE_S = 'whab_side'; // chave localStorage para o lado

  let isDragging  = false;
  let hasMoved    = false;       // distingue clique de drag
  let startX      = 0;
  let startY      = 0;
  let startTop    = 0;
  let fabTop      = 0;
  let currentSide = 'right';     // 'left' | 'right'

  /* --- Helpers de posicionamento --- */

  function getViewport() {
    // clientWidth no document evita que o elemento fique escondido pela scrollbar em desktops
    return { 
      w: document.documentElement.clientWidth || window.innerWidth, 
      h: window.innerHeight 
    };
  }

  function getSize() {
    // O tamanho do botão é dinâmico (60px desktop, 56px mobile)
    return fab.offsetWidth || 60;
  }

  function clampY(y) {
    const { h } = getViewport();
    const size = getSize();
    return Math.max(MARGIN, Math.min(h - size - MARGIN, y));
  }

  /**
   * Aplica snap para a lateral correta.
   * IMPORTANTE: usa SEMPRE a propriedade `left` para que o CSS possa
   * animar a transição suavemente nos dois sentidos (esquerda e direita).
   * Usar `right` vs `left` alternadamente quebra a animação por serem
   * propriedades distintas e incompatíveis com CSS transition.
   */
  function snapToSide(side, y, animate = true) {
    currentSide = side;
    fabTop = clampY(y);

    const { w } = getViewport();
    const size = getSize();
    // Calcula sempre em termos de `left`
    const targetLeft = side === 'left'
      ? MARGIN
      : w - size - MARGIN;

    if (animate) fab.classList.add('snapping');

    // Remove `right` se existir — usamos APENAS `left` daqui em diante
    fab.style.removeProperty('right');
    fab.style.left   = targetLeft + 'px';
    fab.style.top    = fabTop + 'px';
    fab.style.bottom = 'auto';
    fab.dataset.side = side;

    // Persistência
    try {
      localStorage.setItem(STORAGE_Y, fabTop);
      localStorage.setItem(STORAGE_S, side);
    } catch (_) {}

    if (animate) {
      setTimeout(() => fab.classList.remove('snapping'), 420);
    }
  }

  /** Determina para qual lado snapear com base na posição X do centro do botão */
  function decideSide(fabCenterX) {
    return fabCenterX < getViewport().w / 2 ? 'left' : 'right';
  }

  /* --- Inicializa posição (localStorage ou padrão) --- */
  function initPosition() {
    let savedY    = parseFloat(localStorage.getItem(STORAGE_Y));
    let savedSide = localStorage.getItem(STORAGE_S) || 'right';

    const { h } = getViewport();
    const size = getSize();
    if (isNaN(savedY) || savedY < MARGIN || savedY > h - size - MARGIN) {
      savedY = h * 0.75 - size / 2; // padrão: 75% da tela verticalmente
    }

    snapToSide(savedSide, savedY, false);
  }

  initPosition();
  
  // Garantia: se os estilos/fontes demorarem a carregar o offsetWidth, reposiciona ao concluir a carga
  window.addEventListener('load', () => initPosition());

  /* --- Atualiza posição ao redimensionar janela --- */
  window.addEventListener('resize', () => {
    snapToSide(currentSide, fabTop, false);
  }, { passive: true });

  /* ================================================================
     ENGINE DE DRAG — Mouse
     ================================================================ */
  fab.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // apenas botão esquerdo
    e.preventDefault();

    isDragging = false;
    hasMoved   = false;
    startX     = e.clientX;
    startY     = e.clientY;
    startTop   = fabTop;

    function onMouseMove(e) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (!isDragging && Math.abs(dx) + Math.abs(dy) > 4) {
        isDragging = true;
        hasMoved   = true;
        fab.classList.add('dragging');
      }

      if (!isDragging) return;

      // Move verticalmente (horizontal é só para determinar o lado no soltar)
      const newTop = clampY(startTop + dy);
      fab.style.top    = newTop + 'px';
      fab.style.bottom = 'auto';
      fabTop = newTop;

      // Atualiza posição horizontal livre durante o drag
      const size = getSize();
      const newLeft = e.clientX - size / 2;
      fab.style.removeProperty('right');
      fab.style.left = Math.max(MARGIN, Math.min(getViewport().w - size - MARGIN, newLeft)) + 'px';
    }

    function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup',   onMouseUp);

      if (isDragging) {
        fab.classList.remove('dragging');
        const centerX = e.clientX;
        snapToSide(decideSide(centerX), fabTop);
        isDragging = false;
      }
      // Se não houve movimento: é um clique — o href do link cuida do WhatsApp
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup',   onMouseUp);
  });

  /* ================================================================
     ENGINE DE DRAG — Touch
     ================================================================ */
  fab.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    isDragging  = false;
    hasMoved    = false;
    startX      = touch.clientX;
    startY      = touch.clientY;
    startTop    = fabTop;
  }, { passive: true });

  fab.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const dx    = touch.clientX - startX;
    const dy    = touch.clientY - startY;

    if (!isDragging && Math.abs(dx) + Math.abs(dy) > 6) {
      isDragging = true;
      hasMoved   = true;
      fab.classList.add('dragging');
    }

    if (!isDragging) return;
    e.preventDefault(); // previne scroll da página durante drag

    const newTop  = clampY(startTop + dy);
    fab.style.top    = newTop + 'px';
    fab.style.bottom = 'auto';
    fabTop = newTop;

    const size = getSize();
    const newLeft = touch.clientX - size / 2;
    fab.style.removeProperty('right');
    fab.style.left = Math.max(MARGIN, Math.min(getViewport().w - size - MARGIN, newLeft)) + 'px';
  }, { passive: false });

  fab.addEventListener('touchend', (e) => {
    fab.classList.remove('dragging');

    if (isDragging) {
      const touch = e.changedTouches[0];
      snapToSide(decideSide(touch.clientX), fabTop);
      isDragging = false;
    }
    // Se não houve drag, o click handler do FAB cuidará da navegação
  });

  /* ================================================================
     CLICK — Abre WhatsApp (só se não foi um drag)
     ================================================================ */
  fab.addEventListener('click', (e) => {
    if (hasMoved) { hasMoved = false; return; } // era drag, ignora
    const href = fab.dataset.href;
    if (href) window.open(href, '_blank', 'noopener,noreferrer');
  });

  /* Teclado: Enter/Space ativa o WhatsApp */
  fab.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const href = fab.dataset.href;
      if (href) window.open(href, '_blank', 'noopener,noreferrer');
    }
  });
}

/* ================================================================
   MOTOR GSAP: SCROLL 3D PROGRESSIVO
   ================================================================ */
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Parallax Spatial (Scale-Down, Blur & Tilt profundo)
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    gsap.to(heroContent, {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      },
      y: 200,
      scale: 0.75,
      rotationX: -15,
      opacity: -0.2,
      filter: "blur(18px)",
      ease: "power2.inOut"
    });
  }

  // 2. 3D Unfold de Cartões com Deep Z-Translation e Y-Rotation
  gsap.set(".servicos-grid", { perspective: 2000 });
  
  setTimeout(() => {
    const servicos = document.querySelectorAll('.servico-card');
    servicos.forEach((card, index) => {
      // Cria uma alternância direcional sutil baseada em par/ímpar
      const rotY = index % 2 === 0 ? -12 : 12;

      gsap.fromTo(card, 
        { 
          rotationX: 25, 
          rotationY: rotY, 
          z: -400, 
          scale: 0.85, 
          opacity: 0, 
          y: 120, 
          transformOrigin: "50% 50%", 
          filter: "blur(12px)" 
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 110%",
            end: "top 55%",
            scrub: 2
          },
          rotationX: 0,
          rotationY: 0,
          z: 0,
          scale: 1,
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "expo.out"
        }
      );
    });

    // 3. Reveal Genérico Suave e Aprofundado
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      if (el.classList.contains('servico-card') || el.classList.contains('hero-content')) return;

      gsap.fromTo(el,
        { opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 70%",
            scrub: 1.5
          },
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "power3.out"
        }
      );
    });
  }, 100);
}

/* ================================================================
   INICIALIZAÇÃO PRINCIPAL
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Inicializa o Video Preloader (introdução de 10s)
  initVideoPreloader();

  // Inicializa o PWA
  initPWA();

  // Inicializa o Mural de Avisos da Casa (Motor Supabase In-App)
  fetchAndShowAvisosInApp();

  // — Features que não dependem de dados —
  initParticles();
  initOracleParticles();
  initNav();
  initWhatsAppFab(); // FAB flutuante de WhatsApp
  initMagneticBtn();
  initOracle();
  initGalleryScroll();
  initLightbox();
  initFAQ();
  initAccordion();
  // Substituindo a animação antiga pelo Motor GSAP 3D Scroll-Driven
  initGSAPAnimations();

  // — Renderiza Dados do LocalStorage —
  renderAll(DataManager.load());

  console.log(
    '%c⚡ Terreira Paulinho v2.0 🙏\nOráculo + Motor In-App Dourado + Micro-interações',
    'color:#c9a84c;font-weight:bold;font-family:serif;font-size:13px'
  );
});

