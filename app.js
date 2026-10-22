/* Site público — navegação, serviços, galeria, reflexões e contato. */

'use strict';

/* Reflexões locais de fé e acolhimento, sem atribuição pessoal. */
const REFLECTIONS = {
  "amor": {
    "label": "Amor e relações",
    "messages": [
      "Que a fé em Pombagiras inspire você a reconhecer seu próprio valor. Afeto também se expressa em liberdade, respeito e escolhas conscientes; não precisa ser demonstrado pela renúncia à sua dignidade.",
      "A devoção a Exus e Pombagiras pode acompanhar um olhar honesto para suas relações. Observe atitudes, não apenas promessas, e reserve lugar para o diálogo que respeita ambas as pessoas.",
      "Na família de axé, o carinho ganha forma quando há espaço para diferenças. Escutar alguém mais novo, acolher uma dúvida e reconhecer um limite são maneiras concretas de fortalecer a convivência.",
      "Na sua fé em Exus e Pombagiras, reconheça a força de permanecer inteiro nas relações. Honre sua ancestralidade e faça escolhas que preservem sua dignidade e o respeito por quem caminha ao seu lado.",
      "Que a fé inspire relações com mais respeito e cuidado. Observe como você se sente, reconheça seus limites e dê espaço ao diálogo.",
      "Acolher o outro também pede cuidado consigo. Relações podem ser construídas com escuta, sinceridade e respeito ao tempo de cada pessoa.",
      "Na sua caminhada, reserve espaço para o afeto que se expressa em atitudes. Uma conversa tranquila pode ser um primeiro passo para compreender melhor o outro.",
      "Entre pessoas da mesma família, o afeto nem sempre aparece da mesma maneira. Perguntar como alguém gostaria de ser acolhido pode aproximar mais do que tentar adivinhar suas necessidades.",
      "Pedir desculpas ganha sentido quando vem acompanhado de disposição para mudar. Reconhecer um gesto que machucou não diminui ninguém; pode ser um começo honesto para reconstruir uma relação.",
      "Reserve um momento para reconhecer quem esteve ao seu lado. Um agradecimento simples, uma visita combinada ou uma mensagem atenciosa podem expressar o carinho que às vezes fica guardado.",
      "Em uma conversa difícil, procure compreender antes de preparar a resposta. Você pode discordar sem humilhar e dizer o que sente sem transformar a diferença em uma disputa.",
      "Gostar de alguém não exige concordar com tudo. Cultivar uma relação respeitosa inclui aceitar escolhas diferentes e perceber quando uma distância é necessária para preservar a dignidade de cada pessoa."
    ]
  },
  "caminhos": {
    "label": "Caminhos e escolhas",
    "messages": [
      "Ao encontrar inspiração na Quimbanda, leve suas perguntas com sinceridade. A coragem de escolher pode caminhar junto da humildade para aprender e da responsabilidade de considerar as consequências dos próprios atos.",
      "Que sua fé em Exus acompanhe a coragem de encarar uma decisão adiada. Examine o que depende de você, reconheça o que ainda precisa compreender e escolha sem atropelar outras pessoas.",
      "A história de uma casa de axé carrega trabalho, memória e dedicação de muitas pessoas. Escute quem preserva essas trajetórias e reconheça o valor de aprender com respeito antes de seguir seus próprios passos.",
      "Ao buscar força na devoção a Pombagiras, dê atenção também à sua própria voz. Reconheça o que deseja, examine seus motivos e converse com honestidade sobre os caminhos que pretende seguir.",
      "A fé pode acompanhar os pequenos passos. Olhe para o que está ao seu alcance hoje e escolha uma atitude que faça sentido para a sua caminhada.",
      "Diante de uma mudança, permita-se ouvir, perguntar e aprender. Caminhar com responsabilidade também é reconhecer quando precisamos de orientação.",
      "Nem toda escolha precisa ser feita com pressa. Reflita sobre o que importa para você e siga com respeito à sua história e aos seus valores.",
      "Antes de assumir um novo compromisso, considere o tempo e a atenção que você realmente tem. Escolher com honestidade ajuda a cuidar também daquilo que já faz parte da sua vida.",
      "Quando algo novo parecer complicado, comece por entender uma parte de cada vez. Pergunte sem vergonha e reconheça o que aprendeu; ninguém precisa chegar sabendo para poder participar.",
      "Um plano pode mudar sem apagar o valor do esforço que veio antes. Rever uma decisão, depois de conhecer melhor a situação, também é uma forma de caminhar com responsabilidade.",
      "Reconhecer um erro permite escolher o próximo gesto com mais atenção. Em vez de tentar esconder o ocorrido, pense no que pode ser reparado e no aprendizado que deseja levar.",
      "Sua caminhada não precisa repetir a de outra pessoa. Observe as comparações que trazem pressão e volte às perguntas que importam: o que faz sentido para você, hoje, com o tempo que tem?"
    ]
  },
  "paz": {
    "label": "Paz e equilíbrio",
    "messages": [
      "Na sua aproximação com a Quimbanda, permita que a escuta venha antes da pressa. Acolher uma orientação também é dar tempo para compreender seu sentido, respeitando a casa e a sua própria caminhada.",
      "O respeito a quem veio antes pode conviver com perguntas sinceras. Na família religiosa, aprender não precisa ser uma disputa; ouvir com atenção também inclui reconhecer quando algo ainda não ficou claro.",
      "Que a fé em Exus e Pombagiras acompanhe um momento de recolhimento e honestidade consigo. Você pode reconhecer o que sente sem transformar cada dificuldade numa cobrança por respostas imediatas.",
      "Encontre na fé um espaço para baixar a pressa e reconhecer seu momento. Na família de axé, oferecer presença e escuta também é uma forma de cuidar de quem compartilha a caminhada.",
      "Que a fé nos orixás inspire um momento de serenidade. Dê espaço ao descanso, à escuta e ao cuidado com aquilo que você sente.",
      "Você não precisa encontrar todas as respostas de uma vez. Faça uma pausa e permita-se conversar com alguém de confiança sobre o seu momento.",
      "O cuidado também está nas pequenas escolhas do dia. Respeitar o seu ritmo e acolher seus sentimentos pode abrir espaço para uma caminhada mais serena.",
      "Diminua por alguns minutos o barulho das telas e das conversas apressadas. Escolha um momento tranquilo para estar presente no que faz, sem exigir que essa pausa resolva tudo.",
      "Nem todo silêncio pede uma resposta. Às vezes, oferecer companhia sem perguntas é uma maneira delicada de acolher alguém. Pergunte se a pessoa prefere conversar ou apenas ter você por perto.",
      "Há dias em que a disposição é diferente, e isso merece ser reconhecido. Ajuste as expectativas quando for possível e procure tratar suas dificuldades com a mesma gentileza que oferece aos outros.",
      "Se a rotina estiver cheia, escolha o que realmente precisa da sua atenção neste momento. Algumas tarefas podem esperar, e outras podem ser divididas com quem está disposto a ajudar.",
      "Uma casa acolhedora também se constrói na convivência: pedir licença, respeitar o descanso e cuidar dos espaços comuns. Gestos discretos podem tornar o dia mais agradável para quem vive ao seu lado."
    ]
  },
  "protecao": {
    "label": "Proteção e firmeza",
    "messages": [
      "Que a devoção a Exus e Pombagiras inspire firmeza nas suas atitudes. Sustente uma palavra honesta, respeite os limites alheios e reconheça o direito de cuidar dos seus próprios limites.",
      "Preservar a memória da família religiosa também é cuidar das pessoas presentes. Compartilhe histórias com respeito, peça licença antes de expor uma experiência e reconheça o que pertence à intimidade de alguém.",
      "Na devoção aos guardiões, reflita sobre a firmeza que você deseja cultivar. Proteger sua dignidade também passa por reconhecer seus limites, agir com responsabilidade e buscar orientação sem entregar suas escolhas à pressa.",
      "Sua fé pode acompanhar a coragem de dizer uma verdade difícil sem ferir de propósito. Escolha palavras claras, reconheça sua responsabilidade e procure apoio quando uma conversa exigir mais cuidado.",
      "Firmeza também é agir com respeito e verdade. Cuide dos seus limites e procure cultivar relações que tenham espaço para o diálogo.",
      "Na fé de Xangô, a justiça convida à responsabilidade. Antes de agir, considere suas escolhas e o cuidado com você e com as outras pessoas.",
      "Fortalecer a sua caminhada pode começar com atitudes simples: honrar seus valores, cuidar da sua casa e buscar apoio quando precisar.",
      "Cuidar da sua intimidade é escolher com quem compartilhar cada parte da sua história. Você pode guardar assuntos pessoais e recusar perguntas que não deseja responder, sem precisar se justificar.",
      "Ao discordar de alguém, preserve o respeito que deseja receber. A firmeza de uma posição não depende de gritos ou ameaças; pode aparecer numa fala clara e numa atitude coerente.",
      "Respeitar uma pessoa não significa aceitar qualquer tratamento. Quando uma situação ultrapassar seus limites, procure apoio de alguém em quem confia e pense no que precisa para se sentir respeitado.",
      "A firmeza pode ser cultivada nos compromissos cotidianos: cumprir uma palavra, reconhecer uma falha e agir com honestidade. A fé pode acompanhar essas escolhas, junto da responsabilidade pelos próprios atos.",
      "Na comunidade, o cuidado cresce quando ninguém precisa enfrentar todas as tarefas sozinho. Ofereça ajuda dentro das suas possibilidades e aceite colaboração; pertencer também é poder contar com outras pessoas."
    ]
  }
};

/* ================================================================
   DADOS LOCAIS DO SITE
   ================================================================ */
const DEFAULT_DATA = {
  servicos: [
  {
    "id": "1",
    "nome": "Consulta Espiritual",
    "descricao": "Uma conversa com escuta e respeito para compreender seu momento e buscar orientação espiritual.",
    "icone": "conversa"
  },
  {
    "id": "2",
    "nome": "Jogo de Búzios",
    "descricao": "Consulta por meio dos búzios para conversar sobre suas questões e receber orientação espiritual.",
    "icone": "buzios"
  },
  {
    "id": "3",
    "nome": "Limpeza Espiritual",
    "descricao": "Atendimento voltado ao cuidado espiritual e à busca de equilíbrio no dia a dia.",
    "icone": "folha"
  },
  {
    "id": "4",
    "nome": "Abertura de Caminhos",
    "descricao": "Orientação espiritual para momentos de mudança, escolhas e novos passos na sua caminhada.",
    "icone": "caminho"
  },
  {
    "id": "5",
    "nome": "Proteção Espiritual",
    "descricao": "Cuidado espiritual para você, sua casa ou seu trabalho, com atenção à sua situação.",
    "icone": "protecao"
  },
  {
    "id": "6",
    "nome": "Trabalhos de Harmonização",
    "descricao": "Acolhimento e orientação para buscar mais diálogo, respeito e harmonia nas relações.",
    "icone": "coracao"
  }
],

  whatsapp_numero: '5555999176726',
  redes_sociais: {
    instagram: 'https://www.instagram.com/paulogandor',
    facebook:  'https://www.facebook.com/babalorixapaulinho.dexangoaganju'
  }
};

/* ================================================================
   WHATSAPP HELPER — POP_03
   ================================================================ */
function buildWhatsAppURL(numero, servico = '') {
  const interesse = servico.trim();
  const pedido = interesse
    ? `Vim pelo site e gostaria de saber mais sobre o atendimento: ${interesse}.\nComo funciona e quais são os horários disponíveis?`
    : 'Vim pelo site e gostaria de agendar uma consulta espiritual.';
  const msg = `🙏 Olá, Pai Paulinho!\n${pedido}\nQue os orixás me guiem até você! ✨`;
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}

function setupWhatsAppButtons(numero) {
  // Configura todos os botões/links com classe .whatsapp-trigger
  document.querySelectorAll('.whatsapp-trigger').forEach(btn => {
    if (!numero) {
      btn.style.opacity       = '0.5';
      btn.style.pointerEvents = 'none';
      btn.title               = 'WhatsApp em breve';
    } else {
      const servico = btn.closest('.servico-card')?.querySelector('.sc-title')?.textContent || '';
      btn.href   = buildWhatsAppURL(numero, servico);
      btn.target = '_blank';
      btn.rel    = 'noopener noreferrer';
      btn.removeAttribute('style');
    }
  });


}

const SERVICE_ICON_PATHS = {
  conversa: '<path d="M20 11.5a7.7 7.7 0 0 1-7.7 7.7 7.6 7.6 0 0 1-3.4-.8L4 20l1.6-4.9a7.6 7.6 0 0 1-.8-3.4A7.7 7.7 0 0 1 12.5 4a7.7 7.7 0 0 1 7.5 7.5Z"/><path d="M9 10h7M9 13.5h4"/>',
  buzios: '<path d="M17.5 4.5c3 3 2.5 8.5-1.5 12.5s-8.5 4-11.5 1-2.5-8.5 1.5-12.5 8.5-4 11.5-1Z"/><path d="M7 17 17 7M9 13l2 2M12 10l2 2M15 7l2 2M6 16l2 2"/>',
  folha: '<path d="M5 19c10 1 15-5 14-14C10 4 4 9 5 19ZM5 19 15 9M10 14h5M10 14V9"/>',
  caminho: '<path d="M4 20h5a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h12M16 4l4 4-4 4"/>',
  protecao: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/>',
  coracao: '<path d="M20.2 5.8a4.8 4.8 0 0 0-6.8 0L12 7.2l-1.4-1.4a4.8 4.8 0 0 0-6.8 6.8L12 21l8.2-8.4a4.8 4.8 0 0 0 0-6.8Z"/>'
};

function serviceIcon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" focusable="false">${SERVICE_ICON_PATHS[name] || SERVICE_ICON_PATHS.conversa}</svg>`;
}

function renderServicos(servicos) {
  const grid = document.getElementById('servicosGrid');
  if (!grid) return;

  if (!servicos?.length) {
    grid.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;">Serviços em breve. 🙏</p>`;
    return;
  }

  grid.innerHTML = servicos.map(s => `
    <article class="servico-card reveal" aria-label="${escapeHTML(s.nome)}">
      <div class="service-symbol" aria-hidden="true">${serviceIcon(s.icone)}</div>
      <h3 class="sc-title">${escapeHTML(s.nome)}</h3>
      <p class="sc-desc">${escapeHTML(s.descricao)}</p>
      <a class="sc-cta whatsapp-trigger" href="#"
         aria-label="Conversar sobre ${escapeHTML(s.nome)} pelo WhatsApp">Consultar atendimento</a>
    </article>`).join('');
  observeRevealElements();
}

function renderSociais(redes) {
  const footer = document.getElementById('footerSocial');
  if (!footer) return;

  // Usa os dados publicados como padrão para campos vazios.
  const ig = (redes?.instagram || '').trim() || DEFAULT_DATA.redes_sociais.instagram;
  const fb = (redes?.facebook  || '').trim() || DEFAULT_DATA.redes_sociais.facebook;

  const links = [];
  if (ig && ig !== '#') links.push(`<a href="${ig}" target="_blank" rel="noopener noreferrer" class="footer-social-link">Instagram</a>`);
  if (fb && fb !== '#') links.push(`<a href="${fb}" target="_blank" rel="noopener noreferrer" class="footer-social-link">Facebook</a>`);

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

function renderAll(data) {
  renderServicos(data.servicos);
  renderSociais(data.redes_sociais);
  renderSobreSociais(data.redes_sociais);
  setupWhatsAppButtons(data.whatsapp_numero);

  // Re-observa elementos recém-criados
  observeRevealElements();

}

/* A mensagem segue a data da casa; o acesso registra apenas o dia no navegador. */
const REFLECTION_TIME_ZONE = 'America/Sao_Paulo';
const DAILY_REFLECTIONS = [];
const reflectionTopics = Object.values(REFLECTIONS);
for (let index = 0; reflectionTopics.some(topic => topic.messages[index]); index++) {
  reflectionTopics.forEach(topic => {
    if (topic.messages[index]) DAILY_REFLECTIONS.push({ category: topic.label, message: topic.messages[index] });
  });
}

function getDailyReflection(now = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: REFLECTION_TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(now).filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
  const dayNumber = Math.floor(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)) / 86400000);
  const index = ((dayNumber % DAILY_REFLECTIONS.length) + DAILY_REFLECTIONS.length) % DAILY_REFLECTIONS.length;
  return {
    ...DAILY_REFLECTIONS[index],
    dayKey: `${parts.year}-${parts.month}-${parts.day}`,
    dateLabel: new Intl.DateTimeFormat('pt-BR', { timeZone: REFLECTION_TIME_ZONE, dateStyle: 'long' }).format(now)
  };
}

// Guarda apenas o dia em que a orientação foi recebida neste navegador.
const REFLECTION_RECEIVED_KEY = 'pai_paulinho_reflection_received_day';

function createReflectionAccess(storage) {
  let openedDay = '';
  let receivedInMemory = '';

  function stateFor(dayKey) {
    if (openedDay === dayKey) return 'reading';
    if (receivedInMemory === dayKey) return 'received';
    try {
      if (storage?.getItem(REFLECTION_RECEIVED_KEY) === dayKey) return 'received';
    } catch { /* Continua funcionando se o navegador bloquear o armazenamento. */ }
    return 'ready';
  }

  return {
    stateFor,
    receive(dayKey) {
      const state = stateFor(dayKey);
      if (state !== 'ready') return state;
      openedDay = dayKey;
      receivedInMemory = dayKey;
      try { storage?.setItem(REFLECTION_RECEIVED_KEY, dayKey); } catch { /* Mantém o controle nesta página. */ }
      return 'reading';
    },
    revisit() { openedDay = ''; }
  };
}

function initReflections() {
  const container = document.getElementById('reflectionAccess');
  const ready = document.getElementById('reflectionReady');
  const reading = document.getElementById('reflectionReading');
  const received = document.getElementById('reflectionReceived');
  const receive = document.getElementById('reflectionReceive');
  const message = document.getElementById('reflectionMessage');
  const category = document.getElementById('reflectionCategory');
  const date = document.getElementById('reflectionDate');
  if (!container || !ready || !reading || !received || !receive || !message || !category || !date) return;

  let storage;
  try { storage = window.localStorage; } catch { /* O visitante pode bloquear o armazenamento. */ }
  const access = createReflectionAccess(storage);
  let renderedDay = '';
  let renderedState = '';

  function render(reflection = getDailyReflection()) {
    const state = access.stateFor(reflection.dayKey);
    if (reflection.dayKey === renderedDay && state === renderedState) return;
    renderedDay = reflection.dayKey;
    renderedState = state;
    container.dataset.state = state;
    date.dateTime = reflection.dayKey;
    date.textContent = reflection.dateLabel;
    ready.hidden = state !== 'ready';
    reading.hidden = state !== 'reading';
    received.hidden = state !== 'received';
    receive.disabled = state !== 'ready';
    category.textContent = state === 'reading' ? reflection.category : '';
    message.textContent = state === 'reading' ? reflection.message : '';
  }

  receive.addEventListener('click', () => {
    const reflection = getDailyReflection();
    if (!reflection.message) return;
    access.receive(reflection.dayKey);
    render(reflection);
    if (!reading.hidden) {
      message.tabIndex = -1;
      message.focus({ preventScroll: true });
    }
  });

  render();
  setInterval(() => { if (!document.hidden) render(); }, 60000);
  window.addEventListener('pageshow', event => {
    if (event.persisted) access.revisit();
    render();
  });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });
  window.addEventListener('storage', event => {
    if (event.key === REFLECTION_RECEIVED_KEY || event.key === null) render();
  });
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
   NAVEGAÇÃO — cabeçalho fixo e menu
   ================================================================ */
function initNav() {
  const header = document.getElementById('siteHeader');
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  function setMenu(open, restoreFocus = false) {
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navLinks.classList.toggle('open', open);
    if (restoreFocus) hamburger.focus();
  }
  hamburger.addEventListener('click', () => {
    setMenu(hamburger.getAttribute('aria-expanded') !== 'true');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('click', event => {
    if (!navLinks.classList.contains('open')) return;
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) setMenu(false, true);
  });
  header?.addEventListener('focusout', event => {
    if (navLinks.classList.contains('open') && !header.contains(event.relatedTarget)) setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1120 && navLinks.classList.contains('open')) setMenu(false);
  }, { passive: true });
  function syncScroll() {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', syncScroll, { passive: true });
  syncScroll();
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
  const gallery = document.querySelector('.galeria-carrossel');
  if (!gallery || gallery.dataset.automatic) return;
  gallery.dataset.automatic = 'true';
  const originals = [...gallery.children];
  if (originals.length < 2) return;
  originals.forEach(item => {
    const copy = item.cloneNode(true);
    copy.dataset.galleryClone = 'true';
    copy.setAttribute('aria-hidden', 'true');
    copy.addEventListener('click', () => item.click());
    gallery.appendChild(copy);
  });
  let visible = false;
  let touching = false;
  let last = 0;
  let position = gallery.scrollLeft;
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(gallery);
  gallery.addEventListener('pointerdown', () => { touching = true; });
  window.addEventListener('pointerup', () => { touching = false; position = gallery.scrollLeft; });
  window.addEventListener('pointercancel', () => { touching = false; });
  gallery.addEventListener('scroll', () => { if (touching) position = gallery.scrollLeft; }, { passive: true });
  function move(direction) {
    const gap = parseFloat(getComputedStyle(gallery).gap) || 0;
    gallery.scrollLeft += direction * (originals[0].getBoundingClientRect().width + gap);
    position = gallery.scrollLeft;
  }
  document.querySelector('.galeria-nav-btn.prev')?.addEventListener('click', () => move(-1));
  document.querySelector('.galeria-nav-btn.next')?.addEventListener('click', () => move(1));
  function tick(time) {
    const elapsed = last ? Math.min(time - last, 50) : 0;
    last = time;
    const lightboxOpen = document.getElementById('galeriaLightbox')?.classList.contains('active');
    if (visible && !touching && !document.hidden && !lightboxOpen) {
      const distance = gallery.children[originals.length].offsetLeft - originals[0].offsetLeft;
      if (distance > 0) {
        position = (position + elapsed * 0.035) % distance;
        gallery.scrollLeft = position;
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
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
  "13": "Pai Paulinho conduzindo com dedicação e amor as bênçãos para nossa comunidade.",
  "14": "O Axé que emana das pedreiras sagradas e se espalha para o coração de cada filho.",
  "15": "Celebração das três décadas de dedicação ao sagrado com profunda reverência à ancestralidade.",
  "16": "A beleza do Altar que irradia as vibrações elevadas de paz, saúde e tranquilidade.",
  "18": "Momento solene de gratidão pela jornada de luz iniciada há trinta anos.",
  "19": "Flores e oferendas em reverência à pureza das mães das águas doces e salgadas.",
  "20": "A energia mística das ervas sagradas que descarregam o peso e devolvem a leveza.",
  "21": "Pai Paulinho de Xangô Aganjú: trinta anos estendendo a mão para trazer luz e conforto."
};

function initGalleryLightbox() {
  const lightbox = document.getElementById('galeriaLightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  
  const items = Array.from(document.querySelectorAll('.galeria-item:not([data-gallery-clone]) img'));
  if (!lightbox || !img || !caption || !items.length || lightbox.dataset.initialized) return;
  lightbox.dataset.initialized = 'true';
  
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
   INICIALIZAÇÃO PRINCIPAL
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Inicializa o PWA
  initPWA();

  // — Features que não dependem de dados —
  initNav();
  // Botões estáveis para facilitar a interação.
  initReflections();
  initGalleryScroll();
  initGalleryLightbox();
  initFAQ();
  initAccordion();
  observeRevealElements();

  // — Renderiza o conteúdo publicado do site —
  renderAll(DEFAULT_DATA);

});

