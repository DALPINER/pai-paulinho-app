/* ================================================================
   SANTUÁRIO DE VELAS VIRTUAIS
   Lógica de Interatividade, Persistência e Privacidade
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('velaForm');
  const colorSelector = document.getElementById('colorSelector');
  const colorTitle = document.getElementById('colorTitle');
  const colorText = document.getElementById('colorText');
  const formSuccessMsg = document.getElementById('formSuccessMsg');
  const muralGrid = document.getElementById('muralGrid');

  // Constante de 24 horas em milissegundos
  const VINTE_E_QUATRO_HORAS = 24 * 60 * 60 * 1000;
  const CHAVE_LOCAL_STORAGE = 'SANTUARIO_VELAS';

  // Banco de Dados de Cores
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

  // ----- INTERATIVIDADE DO SELETOR DE COR -----
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

  // ----- FUNÇÕES DE TEMPO E FORMATAÇÃO -----
  function getRelativeTime(timestamp) {
    const agora = Date.now();
    const diff = agora - timestamp;
    
    if (diff < 60000) return 'Acesa há poucos segundos';
    
    const minutos = Math.floor(diff / 60000);
    if (minutos < 60) return `Acesa há ${minutos} minuto${minutos !== 1 ? 's' : ''}`;
    
    const horas = Math.floor(minutos / 60);
    return `Acesa há ${horas} hora${horas !== 1 ? 's' : ''}`;
  }

  // ----- RENDERIZAÇÃO E MURAL -----
  function loadVelas() {
    // Busca do LocalStorage
    let velas = JSON.parse(localStorage.getItem(CHAVE_LOCAL_STORAGE)) || [];
    const agora = Date.now();

    // Filtra velas ativas (menos de 24 horas)
    const velasAtivas = velas.filter(vela => (agora - vela.timestamp) < VINTE_E_QUATRO_HORAS);

    // Se houve remoção de expiradas, salva o novo array limpo
    if (velasAtivas.length !== velas.length) {
      localStorage.setItem(CHAVE_LOCAL_STORAGE, JSON.stringify(velasAtivas));
    }

    // Limpa o mural
    muralGrid.innerHTML = '';

    // Renderiza cada vela. Ordenando pelas mais novas primeiro
    velasAtivas.sort((a, b) => b.timestamp - a.timestamp).forEach(vela => renderVela(vela));
  }

  function renderVela(vela) {
    // Estrutura HTML da vela
    const wrapper = document.createElement('div');
    wrapper.className = `vela-wrapper vela-${vela.cor}`;

    const info = colorDB[vela.cor];
    let orixa = 'Força Divina';
    
    if (info) {
      const parentesesMatch = info.titulo.match(/\((.*?)\)/);
      if (parentesesMatch) {
        orixa = parentesesMatch[1].trim();
      } else {
        orixa = info.titulo;
      }
    }

    const tempoAcesa = getRelativeTime(vela.timestamp);

    wrapper.innerHTML = `
      <div class="vela-glow"></div>
      <div class="vela-chama"></div>
      <div class="vela-corpo"></div>
      <div class="vela-tooltip">
        <strong>${orixa}</strong>
        <span>${tempoAcesa}</span>
      </div>
    `;

    muralGrid.appendChild(wrapper);
  }

  // ----- ENVIO DO FORMULÁRIO -----
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Regra Crítica: O nome e a oração nunca serão expostos ao público.
    // Nem sequer salvamos eles no localStorage para máxima privacidade.
    
    const corSelecionada = document.querySelector('input[name="velaCor"]:checked').value;
    
    const novaVela = {
      id: 'vela_' + Date.now() + Math.random().toString(36).substr(2, 9),
      cor: corSelecionada,
      timestamp: Date.now()
    };

    // Salva no LocalStorage
    let velas = JSON.parse(localStorage.getItem(CHAVE_LOCAL_STORAGE)) || [];
    velas.push(novaVela);
    localStorage.setItem(CHAVE_LOCAL_STORAGE, JSON.stringify(velas));

    // Exibe sucesso
    formSuccessMsg.classList.remove('hidden');
    form.reset();
    
    // Reseta o painel de cor para a branca (padrão)
    document.querySelector('input[name="velaCor"][value="branca"]').checked = true;
    colorTitle.textContent = colorDB['branca'].titulo;
    colorText.textContent = colorDB['branca'].texto;

    setTimeout(() => {
      formSuccessMsg.classList.add('hidden');
    }, 4000);

    // Atualiza o mural imediatamente com a nova vela
    loadVelas();
  });

  // ----- ATUALIZAÇÃO EM TEMPO REAL -----
  // Atualiza as tooltips (tempo decorrido) a cada 1 minuto e varre as expiradas
  setInterval(() => {
    loadVelas();
  }, 60000);

  // ----- INICIALIZAÇÃO -----
  loadVelas();
});
