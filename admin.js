/* ============================================================
   TERREIRA PAULINHO APP — admin.js (v2.0)
   TASK 3: CRUD completo via Firebase Firestore
   Fallback gracioso para localStorage quando não configurado
   ============================================================ */

'use strict';

/* ===== CONSTANTS ===== */
const DATA_KEY     = 'terreira_data';
const PASS_KEY     = 'terreira_admin_pass';
const SESSION_KEY  = 'terreira_admin_authed';
const DEFAULT_PASS = 'Paulinho2024';
const FS_COL       = 'site_config';
const FS_DOC       = 'dados';

/* ===== DEFAULT DATA (espelho do app.js) ===== */
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
   TASK 3 — FIRESTORE DB MANAGER
   CRUD: Create, Read, Update, Delete para site_config/dados
   ================================================================ */
const FirestoreDB = {
  docRef:  null,
  isReady: false,

  /* --- Inicializa a referência ao documento do Firestore --- */
  async init() {
    if (!window.FIREBASE_CONFIGURED || !window.db) {
      this.setStatus('localStorage', '⚡ Local');
      return false;
    }
    try {
      this.docRef  = window.db.collection(FS_COL).doc(FS_DOC);
      this.isReady = true;
      this.setStatus('firestore', '☁️ Firestore');
      console.log('[Admin] ✅ Firestore pronto para CRUD.');
      return true;
    } catch (e) {
      console.error('[Admin] Erro ao inicializar Firestore:', e.message);
      this.setStatus('error', '❌ Erro');
      return false;
    }
  },

  /* --- READ: busca todos os dados --- */
  async read() {
    if (!this.isReady || !this.docRef) return null;
    try {
      const snap = await this.docRef.get();
      return snap.exists ? { ...DEFAULT_DATA, ...snap.data() } : null;
    } catch (e) {
      console.error('[Firestore] READ erro:', e.message);
      return null;
    }
  },

  /* --- UPDATE: atualiza campos específicos (merge) --- */
  async update(fields) {
    if (!this.isReady || !this.docRef) throw new Error('Firestore não pronto');
    await this.docRef.set(fields, { merge: true });
  },

  /* --- CREATE / FULL SAVE: escreve o documento completo --- */
  async create(data) {
    if (!this.isReady || !this.docRef) throw new Error('Firestore não pronto');
    await this.docRef.set(data);
  },

  /* --- DELETE de item num array (ex: serviços, depoimentos) --- */
  async deleteFromArray(field, id) {
    if (!this.isReady || !this.docRef) throw new Error('Firestore não pronto');
    const snap = await this.docRef.get();
    if (!snap.exists) return;
    const current = snap.data()[field] || [];
    const updated  = current.filter(item => item.id !== id);
    await this.docRef.update({ [field]: updated });
  },

  /* --- Atualiza badge de status na sidebar --- */
  setStatus(type, label) {
    const el = document.getElementById('dbStatus');
    if (!el) return;
    el.textContent = label;
    el.className   = `sidebar-db-status db-${type}`;
  }
};

/* ================================================================
   LOCAL STORAGE MANAGER (fallback)
   ================================================================ */
const DataManager = {
  load() {
    try {
      const raw = localStorage.getItem(DATA_KEY);
      return raw ? { ...DEFAULT_DATA, ...JSON.parse(raw) } : { ...DEFAULT_DATA };
    } catch { return { ...DEFAULT_DATA }; }
  },
  save(data) { localStorage.setItem(DATA_KEY, JSON.stringify(data)); },
  reset()    { localStorage.setItem(DATA_KEY, JSON.stringify(DEFAULT_DATA)); }
};

/* --- Carrega dados: Firestore → localStorage → DEFAULT --- */
async function loadCurrentData() {
  const fsData = await FirestoreDB.read();
  if (fsData) {
    DataManager.save(fsData); // sincroniza localStorage
    return fsData;
  }
  return DataManager.load();
}

/* ================================================================
   AUTH MANAGER
   ================================================================ */
const Auth = {
  getPass()        { return localStorage.getItem(PASS_KEY) || DEFAULT_PASS; },
  setPass(newPass) { localStorage.setItem(PASS_KEY, newPass); },
  login(pass)      { const ok = pass === this.getPass(); if (ok) sessionStorage.setItem(SESSION_KEY, '1'); return ok; },
  logout()         { sessionStorage.removeItem(SESSION_KEY); },
  isLoggedIn()     { return sessionStorage.getItem(SESSION_KEY) === '1'; }
};

/* ================================================================
   TOAST
   ================================================================ */
let _toastTimer;
function showToast(msg, type = 'success') {
  const toast = document.getElementById('adminToast');
  if (!toast) return;
  clearTimeout(_toastTimer);
  toast.textContent = msg;
  toast.className   = `toast ${type} show`;
  _toastTimer = setTimeout(() => { toast.className = 'toast'; }, 3800);
}

/* ================================================================
   UTILS
   ================================================================ */
function escapeHTML(str = '') {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

/* ================================================================
   SAVE SECTION — Salva no Firestore e no localStorage como backup
   ================================================================ */
async function saveSection(section) {
  const currentData = await loadCurrentData();
  let updateFields  = {};

  switch (section) {
    case 'sobre': {
      const val = document.getElementById('sobreTexto')?.value.trim();
      if (!val) { showToast('O texto não pode estar vazio.', 'error'); return; }
      updateFields.sobre_pai_paulinho = val;
      break;
    }
    case 'servicos': {
      const servs = collectServicos();
      if (!servs.length) { showToast('Adicione pelo menos um serviço.', 'error'); return; }
      updateFields.servicos = servs;
      break;
    }
    case 'depoimentos':
      updateFields.depoimentos = collectDepoimentos();
      break;

    case 'mensagem': {
      const val = document.getElementById('mensagemDia')?.value.trim();
      if (!val) { showToast('A mensagem não pode estar vazia.', 'error'); return; }
      updateFields.mensagem_espiritual_do_dia = val;
      break;
    }
    case 'contato':
      updateFields.whatsapp_numero = document.getElementById('whatsappNumero')?.value.trim() || '';
      updateFields.redes_sociais   = {
        instagram: document.getElementById('instagramUrl')?.value.trim()  || '',
        facebook:  document.getElementById('facebookUrl')?.value.trim()   || ''
      };
      break;
  }

  try {
    if (FirestoreDB.isReady) {
      // Firestore: UPDATE (merge — não apaga outros campos)
      await FirestoreDB.update(updateFields);
      // Sincroniza localStorage como cache local
      DataManager.save({ ...currentData, ...updateFields });
      showToast('✅ Salvo no Firestore com sucesso!', 'success');
    } else {
      // Fallback: apenas localStorage
      DataManager.save({ ...currentData, ...updateFields });
      showToast('✅ Salvo localmente. Configure o Firebase para nuvem.', 'success');
    }
  } catch (e) {
    console.error('[Admin] Erro ao salvar:', e);
    showToast('❌ Erro ao salvar. Verifique o console.', 'error');
  }
}

/* ================================================================
   RENDER: SERVIÇOS
   ================================================================ */
function renderServicos(servicos = []) {
  const list = document.getElementById('servicosList');
  if (!list) return;
  list.innerHTML = '';
  servicos.forEach((s, i) => {
    const row = document.createElement('div');
    row.className  = 'item-row';
    row.dataset.id = s.id;
    row.innerHTML  = `
      <div class="item-row-header">
        <span class="item-row-label">Serviço ${i + 1}</span>
        <button class="item-row-remove" data-remove-servico="${s.id}" type="button">✕ Remover</button>
      </div>
      <div class="item-row-grid">
        <div class="form-group">
          <label class="form-label">Ícone</label>
          <input type="text" class="form-input" data-field="icone" value="${escapeHTML(s.icone)}" maxlength="4" placeholder="🔮">
        </div>
        <div class="form-group">
          <label class="form-label">Nome do Serviço</label>
          <input type="text" class="form-input" data-field="nome" value="${escapeHTML(s.nome)}" placeholder="Nome...">
        </div>
      </div>
      <div class="form-group item-row-full">
        <label class="form-label">Descrição</label>
        <textarea class="form-textarea" data-field="descricao" rows="2" placeholder="Descreva o serviço...">${escapeHTML(s.descricao)}</textarea>
      </div>
    `;
    list.appendChild(row);
  });
}

/* ================================================================
   RENDER: DEPOIMENTOS
   ================================================================ */
function renderDepoimentos(depoimentos = []) {
  const list = document.getElementById('depoimentosList');
  if (!list) return;
  list.innerHTML = '';
  depoimentos.forEach((d, i) => {
    const row = document.createElement('div');
    row.className  = 'item-row';
    row.dataset.id = d.id;
    row.innerHTML  = `
      <div class="item-row-header">
        <span class="item-row-label">Depoimento ${i + 1}</span>
        <button class="item-row-remove" data-remove-dep="${d.id}" type="button">✕ Remover</button>
      </div>
      <div class="form-group">
        <label class="form-label">Nome do Cliente</label>
        <input type="text" class="form-input" data-field="nome_cliente" value="${escapeHTML(d.nome_cliente)}" placeholder="Nome...">
      </div>
      <div class="form-group">
        <label class="form-label">Depoimento</label>
        <textarea class="form-textarea" data-field="texto" rows="3" placeholder="Texto do depoimento...">${escapeHTML(d.texto)}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Avaliação (estrelas)</label>
        <div class="estrelas-select">
          ${[1,2,3,4,5].map(n =>
            `<button type="button" class="estrela-btn${n <= (d.estrelas || 5) ? ' selected' : ''}" data-stars="${n}">★ ${n}</button>`
          ).join('')}
        </div>
      </div>
    `;
    list.appendChild(row);

    // Lógica das estrelas
    row.querySelectorAll('.estrela-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.estrela-btn').forEach(b =>
          b.classList.toggle('selected', +b.dataset.stars <= +btn.dataset.stars)
        );
      });
    });
  });
}

/* ================================================================
   COLLECT: Serializa formulários em objetos
   ================================================================ */
function collectServicos() {
  return Array.from(document.querySelectorAll('#servicosList .item-row'))
    .map(row => ({
      id:       row.dataset.id,
      icone:    row.querySelector('[data-field="icone"]')?.value.trim()     || '🌟',
      nome:     row.querySelector('[data-field="nome"]')?.value.trim()      || '',
      descricao:row.querySelector('[data-field="descricao"]')?.value.trim() || ''
    }))
    .filter(s => s.nome.trim());
}

function collectDepoimentos() {
  return Array.from(document.querySelectorAll('#depoimentosList .item-row'))
    .map(row => {
      const selected = [...row.querySelectorAll('.estrela-btn')].filter(b => b.classList.contains('selected'));
      return {
        id:           row.dataset.id,
        nome_cliente: row.querySelector('[data-field="nome_cliente"]')?.value.trim() || '',
        texto:        row.querySelector('[data-field="texto"]')?.value.trim()         || '',
        estrelas:     selected.length || 5
      };
    })
    .filter(d => d.nome_cliente.trim());
}

/* ================================================================
   POPULATE FORMS — Preenche o formulário com os dados carregados
   ================================================================ */
function populateForms(data) {
  const sobreTexto = document.getElementById('sobreTexto');
  if (sobreTexto) sobreTexto.value = data.sobre_pai_paulinho || '';

  const mensagemDia = document.getElementById('mensagemDia');
  if (mensagemDia) mensagemDia.value = data.mensagem_espiritual_do_dia || '';

  const wpp = document.getElementById('whatsappNumero');
  if (wpp) wpp.value = data.whatsapp_numero || '';

  const ig = document.getElementById('instagramUrl');
  if (ig) ig.value = (data.redes_sociais?.instagram !== '#' ? data.redes_sociais?.instagram : '') || '';

  const fb = document.getElementById('facebookUrl');
  if (fb) fb.value = (data.redes_sociais?.facebook !== '#' ? data.redes_sociais?.facebook : '') || '';

  renderServicos(data.servicos   || []);
  renderDepoimentos(data.depoimentos || []);
}

/* ================================================================
   TAB NAVIGATION
   ================================================================ */
function initTabs() {
  const buttons = document.querySelectorAll('.sidebar-btn[data-tab]');
  const tabs    = document.querySelectorAll('.admin-tab');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`)?.classList.add('active');
    });
  });
}

/* ================================================================
   INIT ADMIN PANEL — Ponto de entrada do painel
   ================================================================ */
async function initAdminPanel() {

  // Inicializa Firestore
  await FirestoreDB.init();

  // Carrega dados (Firestore → localStorage → DEFAULT)
  const data = await loadCurrentData();
  populateForms(data);

  initTabs();

  // — Botões Salvar (async) —
  document.querySelectorAll('.btn-save[data-section]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const origHTML = btn.innerHTML;
      btn.disabled   = true;
      btn.innerHTML  = '<span>⏳</span> Salvando...';
      try {
        await saveSection(btn.dataset.section);
      } finally {
        btn.disabled  = false;
        btn.innerHTML = origHTML;
      }
    });
  });

  // — Adicionar Serviço —
  document.getElementById('addServico')?.addEventListener('click', () => {
    const curr = DataManager.load();
    curr.servicos.push({ id: uid(), nome: '', descricao: '', icone: '🌟' });
    renderServicos(curr.servicos);
    document.querySelector('#servicosList .item-row:last-child [data-field="nome"]')?.focus();
  });

  // — Adicionar Depoimento —
  document.getElementById('addDepoimento')?.addEventListener('click', () => {
    const curr = DataManager.load();
    curr.depoimentos.push({ id: uid(), nome_cliente: '', texto: '', estrelas: 5 });
    renderDepoimentos(curr.depoimentos);
    document.querySelector('#depoimentosList .item-row:last-child [data-field="nome_cliente"]')?.focus();
  });

  // — Remove Serviço (delegado no container) —
  document.getElementById('servicosList')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-remove-servico]');
    if (btn) btn.closest('.item-row')?.remove();
  });

  // — Remove Depoimento (delegado no container) —
  document.getElementById('depoimentosList')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-remove-dep]');
    if (btn) btn.closest('.item-row')?.remove();
  });

  // — Alterar Senha —
  document.getElementById('alterarSenha')?.addEventListener('click', () => {
    const atual   = document.getElementById('senhaAtual')?.value;
    const nova    = document.getElementById('senhaNova')?.value;
    const confirm = document.getElementById('senhaConfirm')?.value;

    if (atual !== Auth.getPass())  { showToast('Senha atual incorreta.', 'error'); return; }
    if (!nova || nova.length < 6)  { showToast('Mínimo de 6 caracteres na nova senha.', 'error'); return; }
    if (nova !== confirm)          { showToast('As senhas não coincidem.', 'error'); return; }

    Auth.setPass(nova);
    ['senhaAtual', 'senhaNova', 'senhaConfirm'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    showToast('🔒 Senha alterada com sucesso!', 'success');
  });

  // — Resetar Dados (DELETE + CREATE padrão) —
  document.getElementById('resetarDados')?.addEventListener('click', async () => {
    const ok = window.confirm(
      '⚠️ Isso vai resetar TODOS os dados para o padrão do sistema.\n' +
      'Se o Firestore estiver configurado, o banco também será resetado.\n' +
      'Esta ação NÃO pode ser desfeita. Confirmar?'
    );
    if (!ok) return;

    try {
      if (FirestoreDB.isReady) {
        // CREATE: sobrescreve o documento inteiro com os dados padrão
        await FirestoreDB.create(DEFAULT_DATA);
      }
      DataManager.reset();
      populateForms(DEFAULT_DATA);
      showToast('🔄 Dados resetados para o padrão com sucesso.', 'success');
    } catch (e) {
      console.error('[Admin] Erro ao resetar:', e);
      showToast('❌ Erro ao resetar. Verifique o console.', 'error');
    }
  });

  // — Logout —
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    Auth.logout();
    location.reload();
  });
}

/* ================================================================
   LOGIN
   ================================================================ */
function initLogin() {
  const form    = document.getElementById('loginForm');
  const errorEl = document.getElementById('loginError');

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const senha = document.getElementById('loginSenha')?.value || '';

    if (Auth.login(senha)) {
      document.getElementById('loginScreen').classList.add('hidden');
      document.getElementById('adminPanel').classList.remove('hidden');
      initAdminPanel();
    } else {
      errorEl.textContent = '❌ Senha incorreta. Tente novamente.';
      const loginInput = document.getElementById('loginSenha');
      if (loginInput) { loginInput.value = ''; loginInput.focus(); }
    }
  });
}

/* ================================================================
   ENTRY POINT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (Auth.isLoggedIn()) {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
    initAdminPanel();
  } else {
    initLogin();
  }
});
