/* ============================================================
   TERREIRA PAULINHO APP — app.js (v2.0)
   Fase E: Oráculo Interativo + Micro-interações + Firestore
   Piloto: Antigravity V.L.A.E.G.
   ============================================================ */

'use strict';

/* ================================================================
   TASK 1 — ORÁCULO: 20 Mensagens Espirituais
   ================================================================ */
const ORACLE_MESSAGES = [
  "Os caminhos se abrem para aquele que confia nos orixás. Sua hora chegará.",
  "Xangô traz justiça. O que é seu, ninguém toma. Aguarde com fé.",
  "Tempos de mudança chegam. Abrace-os com coragem — os guias te amparam.",
  "A luz que você busca já mora dentro de você. Confie no que sente.",
  "Não é fraqueza pedir ajuda. Os guias te esperam de braços abertos.",
  "O que parece bloqueio é uma proteção divina. Confie no processo sagrado.",
  "Sua ancestralidade te ampara. Você nunca está só nessa jornada.",
  "Um novo ciclo se inicia. Solte o que ficou para trás com amor e gratidão.",
  "A prosperidade flui para quem se mantém firme na fé e no axé.",
  "O amor que você dá ao mundo retorna multiplicado pelos orixás.",
  "Oxalá te cobre com seu manto de paz. Respira fundo — tudo passa.",
  "Iemanjá te guarda como mãe que zela por seus filhos. Você está amparado.",
  "O presente é sagrado. Viva cada momento com gratidão e presença plena.",
  "Seus sonhos não foram esquecidos pelos orixás. Eles trabalham por você.",
  "A cura vem em camadas. Tenha paciência com a sua própria jornada.",
  "Ogum abre o caminho. O que parecia difícil se tornará simples em breve.",
  "Seja gentil consigo. Você fez o melhor que pôde com o que tinha.",
  "A força dos seus ancestrais corre no seu sangue. Lembre-se sempre disso.",
  "Momentos de silêncio são necessários. Os guias falam no silêncio interior.",
  "O que for de Deus e dos orixás para você, nada e ninguém poderá tirar."
];

/* ================================================================
   DADOS PADRÃO (fallback se Firestore não estiver configurado)
   ================================================================ */
const DEFAULT_DATA = {
  sobre_pai_paulinho: `Com mais de 30 anos de caminhada dedicada à espiritualidade e ao acolhimento humano, Sacerdote Paulo Silveira Gandor é um orientador espiritual consagrado nas tradições de Umbanda e Candomblé. Sob a regência de Xangô Aganjú — o orixá da justiça, do equilíbrio e da sabedoria —, Paulo conduz seus atendimentos com profundo amor, ética e respeito pela ancestralidade.

Sua missão é estender a mão e ser um ponto de paz e conforto na vida de quem busca auxílio. Seja para encontrar clareza nos caminhos profissionais, proteção para a família ou simplesmente um ouvido amigo e uma palavra de luz nos momentos de incerteza, cada atendimento é realizado com acolhimento e total sigilo.

"Minha missão é trazer clareza e paz para o seu coração. Aqui você encontra escuta sincera, acolhimento e a força dos orixás iluminando sua vida."`,

  servicos: [
    { id: '1', nome: 'Consulta Espiritual',  descricao: 'Um momento de escuta atenta, respeito e direcionamento espiritual para acalmar seu coração e trazer clareza para suas decisões de vida.', icone: '🔮' },
    { id: '2', nome: 'Jogo de Búzios',       descricao: 'Leitura acolhedora e precisa dos búzios para encontrar respostas claras e iluminar as áreas da sua jornada que parecem travadas.', icone: '🐚' },
    { id: '3', nome: 'Limpeza Espiritual',   descricao: 'Um reequilíbrio energético suave para afastar a ansiedade, retirar cargas negativas acumuladas e devolver a leveza à sua alma.', icone: '🕯️' },
    { id: '4', nome: 'Abertura de Caminhos', descricao: 'Trabalhos direcionados sob a luz dos guias para remover obstáculos invisíveis, permitindo que a prosperidade, o amor e a saúde fluam livremente.', icone: '🌟' },
    { id: '5', nome: 'Proteção Espiritual',  descricao: 'Rituais de fortalecimento espiritual para proteger você, seu lar ou seu negócio contra inveja e energias negativas.', icone: '🛡️' },
    { id: '6', nome: 'Trabalhos de Harmonização', descricao: 'Realizados com alta ética e responsabilidade para restabelecer o entendimento nas relações, promovendo a paz e a harmonia familiar.', icone: '❤️' },
  ],

  depoimentos: [
    { id: '1', nome_cliente: 'Maria S.',  texto: 'Paulo Silveira Gandor mudou minha história! Após a consulta de orientação espiritual, meus caminhos se abriram de formas incríveis. Gratidão por tanta luz!', estrelas: 5 },
    { id: '2', nome_cliente: 'João R.',   texto: 'Um orientador espiritual de verdade. Acolhedor, honesto e cheio de axé. Senti uma paz e um acolhimento imenso desde a primeira conversa. Recomendo de coração!', estrelas: 5 },
    { id: '3', nome_cliente: 'Ana L.',    texto: 'Depois da limpeza espiritual com o Sacerdote Paulo, senti uma leveza inexplicável. Parecia que um peso enorme tinha saído das minhas costas. Muito grata!', estrelas: 5 },
    { id: '4', nome_cliente: 'Carlos M.', texto: 'Cheguei desanimado e sem rumo, mas saí fortalecido. A leitura dos búzios me trouxe a clareza e as respostas que eu precisava. Excelente orientação!', estrelas: 5 },
  ],

  mensagem_espiritual_do_dia: 'Que Xangô Aganjú ilumine os seus passos e que os orixás abram os caminhos da prosperidade, da saúde e do amor em sua vida.',
  whatsapp_numero: '',
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
      return raw ? { ...DEFAULT_DATA, ...JSON.parse(raw) } : { ...DEFAULT_DATA };
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
  document.querySelectorAll('.whatsapp-trigger').forEach(btn => {
    if (!numero) {
      btn.style.opacity       = '0.5';
      btn.style.pointerEvents = 'none';
      btn.title               = 'WhatsApp em breve';
    } else {
      btn.href   = buildWhatsAppURL(numero);
      btn.target = '_blank';
      btn.rel    = 'noopener noreferrer';
      btn.removeAttribute('style');
    }
  });
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

function renderDepoimentos(depoimentos) {
  const track = document.getElementById('depoimentosTrack');
  const dots  = document.getElementById('depDots');
  if (!track) return;

  if (!depoimentos?.length) {
    document.getElementById('depoimentos')?.style.setProperty('display', 'none');
    return;
  }

  track.innerHTML = depoimentos.map(d => `
    <div class="depoimento-slide">
      <div class="depoimento-card">
        <div class="depoimento-estrelas">${'★'.repeat(d.estrelas || 5)}</div>
        <p   class="depoimento-texto">${escapeHTML(d.texto)}</p>
        <div class="depoimento-autor">
          <div class="depoimento-avatar">${escapeHTML((d.nome_cliente || '?')[0])}</div>
          <span class="depoimento-nome">${escapeHTML(d.nome_cliente)}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (dots) {
    dots.innerHTML = depoimentos.map((_, i) =>
      `<button class="dep-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Depoimento ${i + 1}"></button>`
    ).join('');
  }
}

function renderSociais(redes) {
  const footer = document.getElementById('footerSocial');
  if (!footer) return;

  const links = [];
  const ig = redes?.instagram;
  const fb = redes?.facebook;

  if (ig && ig !== '#' && ig.trim()) links.push(`<a href="${ig}" target="_blank" rel="noopener noreferrer"><span>📸</span> Instagram</a>`);
  if (fb && fb !== '#' && fb.trim()) links.push(`<a href="${fb}" target="_blank" rel="noopener noreferrer"><span>📘</span> Facebook</a>`);
  footer.innerHTML = links.length ? links.join('') : `<p style="color:var(--text-muted);font-size:0.85rem;">Em breve</p>`;
}

/* ================================================================
   renderAll — Orquestra todos os renderers com um único dataset
   ================================================================ */
let _carouselReady = false;

function renderAll(data) {
  renderSobre(data.sobre_pai_paulinho);
  renderServicos(data.servicos);
  renderSociais(data.redes_sociais);
  setupWhatsAppButtons(data.whatsapp_numero);

  // Carrossel: inicializa apenas uma vez para evitar duplicar listeners
  if (!_carouselReady && data.depoimentos?.length) {
    renderDepoimentos(data.depoimentos);
    initCarousel(data.depoimentos.length);
    _carouselReady = true;
  }

  // Re-observa elementos recém-criados
  observeRevealElements();
}

/* ================================================================
   TASK 1 — ORÁCULO INTERATIVO
   Animação: brilho intenso nas velas (2s) + slot-machine de texto
   ================================================================ */
function initOracle() {
  const oracleBtn = document.getElementById('oracleBtn');
  const btnAgain  = document.getElementById('oracleBtnAgain');
  if (!oracleBtn) return;

  function runOracle() {
    const card     = document.getElementById('oracleCard');
    const ctaEl    = document.getElementById('oracleCta');
    const resultEl = document.getElementById('oracleResult');
    const footerEl = document.getElementById('oracleFooter');
    const msgEl    = document.getElementById('oracleMsgText');
    if (!card || !msgEl) return;

    // Sorteia a mensagem final
    const chosen = ORACLE_MESSAGES[Math.floor(Math.random() * ORACLE_MESSAGES.length)];

    // — Desabilitar controles —
    oracleBtn.disabled = true;
    if (btnAgain) btnAgain.disabled = true;

    // — Ativar animação de brilho —
    card.classList.add('oracle-shining');

    // — Trocar estados: esconde CTA, mostra área de resultado —
    ctaEl.classList.add('hidden');
    if (footerEl) footerEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    msgEl.classList.add('cycling');

    // — Slot Machine: embaralha mensagens com desaceleração —
    let cycles  = 0;
    const TOTAL = 22; // número de trocas antes do reveal

    function cycle() {
      // Exibe mensagem aleatória durante o embaralhamento
      msgEl.textContent = ORACLE_MESSAGES[Math.floor(Math.random() * ORACLE_MESSAGES.length)];
      cycles++;

      if (cycles < TOTAL) {
        // Desaceleração exponencial na segunda metade
        const progress = cycles / TOTAL;
        const delay    = 55 + (progress > 0.55 ? Math.pow((progress - 0.55) * 2.2, 2.8) * 380 : 0);
        setTimeout(cycle, delay);
      } else {
        // — Reveal final —
        card.classList.remove('oracle-shining');
        msgEl.classList.remove('cycling');
        msgEl.textContent = chosen;
        msgEl.classList.add('oracle-animate-in');

        // Remove classe de animação após completar (permite re-animar)
        setTimeout(() => {
          msgEl.classList.remove('oracle-animate-in');

          if (footerEl) {
            footerEl.classList.remove('hidden');
            footerEl.classList.add('oracle-animate-in');
            setTimeout(() => footerEl.classList.remove('oracle-animate-in'), 700);
          }

          oracleBtn.disabled = false;
          if (btnAgain) btnAgain.disabled = false;
        }, 650);
      }
    }

    cycle();
  }

  oracleBtn.addEventListener('click', runOracle);
  btnAgain?.addEventListener('click', runOracle);
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
   CARROSSEL DE DEPOIMENTOS
   ================================================================ */
function initCarousel(totalSlides) {
  if (!totalSlides) return;

  const track = document.getElementById('depoimentosTrack');
  const prev  = document.getElementById('depPrev');
  const next  = document.getElementById('depNext');
  if (!track) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    current = ((idx % totalSlides) + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dep-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  function startAuto()  { timer = setInterval(() => goTo(current + 1), 5500); }
  function restartAuto(){ clearInterval(timer); startAuto(); }

  prev?.addEventListener('click', () => { goTo(current - 1); restartAuto(); });
  next?.addEventListener('click', () => { goTo(current + 1); restartAuto(); });

  document.getElementById('depDots')?.addEventListener('click', e => {
    const dot = e.target.closest('[data-index]');
    if (dot) { goTo(+dot.dataset.index); restartAuto(); }
  });

  // Suporte a swipe (touch)
  let touchStartX = 0;
  const viewport = track.parentElement;
  viewport?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  viewport?.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); restartAuto(); }
  });

  startAuto();
}

/* ================================================================
   NAVEGAÇÃO — sticky header + mobile menu + back-to-top
   ================================================================ */
function initNav() {
  const header    = document.getElementById('siteHeader');
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks?.classList.toggle('open');
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

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
   INICIALIZAÇÃO PRINCIPAL
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Inicializa o Video Preloader (introdução de 10s)
  initVideoPreloader();

  // Inicializa o PWA
  initPWA();

  // — Features que não dependem de dados —
  initParticles();
  initNav();
  initMagneticBtn();
  initOracle();
  observeRevealElements();

  // — TASK 3: Dados em tempo real (Firestore → fallback localStorage) —
  const firestoreActive = FirestoreManager.listenToChanges(data => {
    renderAll(data);
  });

  if (!firestoreActive) {
    // Firebase não configurado: usa localStorage / dados padrão
    renderAll(DataManager.load());
  }

  console.log(
    '%c⚡ Terreira Paulinho v2.0 🙏\nOráculo + Firestore + Micro-interações + Preloader',
    'color:#c9a84c;font-weight:bold;font-family:serif;font-size:13px'
  );
});

