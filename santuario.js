/* ================================================================
   SANTUÁRIO DE VELAS VIRTUAIS
   Arquitetura em Tempo Real (Firebase Firestore SDK v9+)
   ================================================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ============================================================================
// 1. CONFIGURAÇÃO DO FIREBASE (Configure suas chaves aqui)
// ============================================================================
const firebaseConfig = {
  apiKey: "COLE_SUA_API_KEY_AQUI",
  authDomain: "COLE_SEU_PROJECT_ID.firebaseapp.com",
  projectId: "COLE_SEU_PROJECT_ID",
  storageBucket: "COLE_SEU_PROJECT_ID.appspot.com",
  messagingSenderId: "COLE_SEU_MESSAGING_SENDER_ID",
  appId: "COLE_SEU_APP_ID"
};

// Inicializa Firebase (Evite inicializar se as chaves forem placeholders)
let app, db;
const isConfigured = firebaseConfig.apiKey !== "COLE_SUA_API_KEY_AQUI";

if (isConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} else {
  console.warn("⚠️ Firebase não configurado. Substitua os placeholders no santuario.js para ativar o mural comunitário real-time.");
}

// ============================================================================
// 2. LÓGICA DE INTERFACE E CONSTANTES
// ============================================================================
const form = document.getElementById('velaForm');
const colorSelector = document.getElementById('colorSelector');
const colorTitle = document.getElementById('colorTitle');
const colorText = document.getElementById('colorText');
const formSuccessMsg = document.getElementById('formSuccessMsg');
const muralGrid = document.getElementById('muralGrid');

const VINTE_E_QUATRO_HORAS_MS = 24 * 60 * 60 * 1000;

const colorDB = {
  'branca': {
    titulo: 'Branca (Oxalá)',
    texto: 'Paz universal, cura espiritual, clareza mental e harmonia familiar.'
  },
  'vermelha': {
    titulo: 'Vermelha (Ogum / Xangô / Boiadeiros)',
    texto: 'Força de reação, coragem, execução da justiça e corte de demandas.'
  },
  'azul-clara': {
    titulo: 'Azul Clara (Iemanjá)',
    texto: 'Equilíbrio das emoções, alívio de angústias, depressão e proteção materna.'
  },
  'amarela': {
    titulo: 'Amarela / Dourada (Oxum)',
    texto: 'Prosperidade material, caminhos financeiros, amor-próprio e doçura.'
  },
  'verde': {
    titulo: 'Verde (Oxóssi / Caboclos)',
    texto: 'Fartura física e espiritual, cura de enfermidades e foco mental.'
  },
  'preta-vermelha': {
    titulo: 'Preta e Vermelha (Esquerda / Quimbanda)',
    texto: 'Proteção pesada, blindagem contra inveja e trancamento de ataques astrais.'
  }
};

// Atualiza painel visual de cores
colorSelector.addEventListener('change', (e) => {
  if (e.target.name === 'velaCor') {
    const corSelecionada = e.target.value;
    const info = colorDB[corSelecionada];
    if (info) {
      colorTitle.textContent = info.titulo;
      colorText.textContent = info.texto;
    }
  }
});

// Calcula tempo relativo (ex: "Acesa há 5 minutos")
function getRelativeTime(timestamp) {
  if (!timestamp) return 'Acesa neste momento';
  const agora = Date.now();
  const diff = agora - timestamp;
  
  if (diff < 60000) return 'Acesa há poucos segundos';
  
  const minutos = Math.floor(diff / 60000);
  if (minutos < 60) return `Acesa há ${minutos} minuto${minutos !== 1 ? 's' : ''}`;
  
  const horas = Math.floor(minutos / 60);
  return `Acesa há ${horas} hora${horas !== 1 ? 's' : ''}`;
}

// Renderiza a vela no DOM mantendo a privacidade
function createVelaElement(velaData) {
  const wrapper = document.createElement('div');
  wrapper.className = `vela-wrapper vela-${velaData.cor_vela}`;

  const info = colorDB[velaData.cor_vela];
  let orixa = velaData.categoria_intencao;
  
  if (!orixa && info) {
    const match = info.titulo.match(/\((.*?)\)/);
    orixa = match ? match[1].trim() : info.titulo;
  }

  const tempoAcesa = getRelativeTime(velaData.timestampMs);

  // Regra Crítica: Apenas dados litúrgicos e de tempo vão para o HTML
  wrapper.innerHTML = `
    <div class="vela-glow"></div>
    <div class="vela-chama"></div>
    <div class="vela-corpo"></div>
    <div class="vela-tooltip">
      <strong>${orixa || 'Força Divina'}</strong>
      <span class="vela-tempo">${tempoAcesa}</span>
    </div>
  `;

  return wrapper;
}

// ============================================================================
// 3. SINCRONIZAÇÃO EM TEMPO REAL (FIRESTORE)
// ============================================================================
let velasAtivasLocal = [];

if (isConfigured) {
  const limite24hDate = new Date(Date.now() - VINTE_E_QUATRO_HORAS_MS);
  
  // Query: trazer apenas velas criadas nas últimas 24h
  const q = query(
    collection(db, "velas_virtuais"),
    where("timestamp", ">=", limite24hDate)
  );

  // Escuta as alterações no banco globalmente
  onSnapshot(q, (snapshot) => {
    velasAtivasLocal = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      // Protege falhas se o serverTimestamp ainda não retornou tempo do servidor
      const timeMs = data.timestamp ? data.timestamp.toMillis() : Date.now();
      
      velasAtivasLocal.push({
        id: doc.id,
        cor_vela: data.cor_vela,
        categoria_intencao: data.categoria_intencao,
        timestampMs: timeMs
      });
    });

    // Ordena da mais nova para a mais antiga
    velasAtivasLocal.sort((a, b) => b.timestampMs - a.timestampMs);
    
    // Atualiza a interface
    muralGrid.innerHTML = '';
    velasAtivasLocal.forEach(vela => {
      muralGrid.appendChild(createVelaElement(vela));
    });
  }, (error) => {
    console.error("Erro na escuta das velas em tempo real: ", error);
  });
} else {
  // Placeholder estético caso não haja banco configurado
  muralGrid.innerHTML = `<p style="color: #a65d37; text-align:center; width: 100%; font-family: 'Lato';">A conexão mística com o painel comunitário aguarda a configuração das credenciais do Firebase.</p>`;
}

// ============================================================================
// 4. GRAVAÇÃO NO BANCO (SUBMIT)
// ============================================================================
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!isConfigured) {
    alert("O Banco de Dados ainda não foi configurado. Veja as instruções no código.");
    return;
  }

  // Captura dos dados sensíveis da memória (não injetamos no DOM)
  const nomePrivado = document.getElementById('velaNome').value.trim();
  const oracaoPrivada = document.getElementById('velaIntencao').value.trim();
  const corSelecionada = document.querySelector('input[name="velaCor"]:checked').value;
  
  // Extrai a categoria/Orixá associada
  const info = colorDB[corSelecionada];
  let categoriaExtraida = '';
  if (info) {
    const match = info.titulo.match(/\((.*?)\)/);
    categoriaExtraida = match ? match[1].trim() : info.titulo;
  }

  const payload = {
    nome: nomePrivado,
    intencao: oracaoPrivada,
    cor_vela: corSelecionada,
    categoria_intencao: categoriaExtraida,
    timestamp: serverTimestamp() // Tempo seguro ditado pelo servidor
  };

  try {
    // Insere direto na nuvem. A UI será atualizada automaticamente pelo onSnapshot!
    await addDoc(collection(db, "velas_virtuais"), payload);

    // UX: Limpa o form e mostra sucesso
    form.reset();
    document.querySelector('input[name="velaCor"][value="branca"]').checked = true;
    colorTitle.textContent = colorDB['branca'].titulo;
    colorText.textContent = colorDB['branca'].texto;
    
    formSuccessMsg.classList.remove('hidden');
    setTimeout(() => formSuccessMsg.classList.add('hidden'), 4000);

  } catch (error) {
    console.error("Erro ao firmar a vela na nuvem: ", error);
    alert("Houve um distúrbio na conexão. Tente acender sua vela novamente.");
  }
});

// ============================================================================
// 5. ATUALIZADOR RELÓGIO TOOLTIP (Front-end apenas)
// ============================================================================
// Apenas para atualizar visualmente os textos "Acesa há X minutos"
setInterval(() => {
  if (!isConfigured || velasAtivasLocal.length === 0) return;
  
  // Em vez de recriar o DOM inteiro, atualiza apenas o texto dos tooltips
  const tooltipsTempo = document.querySelectorAll('.vela-tempo');
  
  tooltipsTempo.forEach((span, index) => {
    // Como a ordem do DOM segue o array velasAtivasLocal, mapeamos pelo index
    const velaData = velasAtivasLocal[index];
    if (velaData) {
      span.textContent = getRelativeTime(velaData.timestampMs);
    }
  });
}, 60000); // Roda a cada 1 minuto
