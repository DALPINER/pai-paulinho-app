/* ================================================================
   SANTUÁRIO DE VELAS VIRTUAIS (SUPABASE REALTIME)
   Lógica de Interatividade, Nuvem em Tempo Real e Privacidade
   ================================================================ */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// COLOQUE SUAS CHAVES DO SUPABASE AQUI
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';

let supabase = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('velaForm');
  const colorSelector = document.getElementById('colorSelector');
  const colorTitle = document.getElementById('colorTitle');
  const colorText = document.getElementById('colorText');
  const formSuccessMsg = document.getElementById('formSuccessMsg');
  const muralGrid = document.getElementById('muralGrid');

  // Banco de Dados de Cores e Forças
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
  function getRelativeTime(dateString) {
    const timestamp = new Date(dateString).getTime();
    const agora = Date.now();
    const diff = agora - timestamp;
    
    if (diff < 60000) return 'Acesa há poucos segundos';
    
    const minutos = Math.floor(diff / 60000);
    if (minutos < 60) return `Acesa há ${minutos} minuto${minutos !== 1 ? 's' : ''}`;
    
    const horas = Math.floor(minutos / 60);
    return `Acesa há ${horas} hora${horas !== 1 ? 's' : ''}`;
  }

  // Controle de estado local para manter as velas na tela e atualizar os tooltips
  let velasAtivas = [];

  function extrairOrixaDaCategoria(categoria) {
    const info = colorDB[categoria];
    if (!info) return 'Força Divina';
    const parentesesMatch = info.titulo.match(/\((.*?)\)/);
    return parentesesMatch ? parentesesMatch[1].trim() : info.titulo;
  }

  function renderGrid() {
    muralGrid.innerHTML = '';
    // Mais recentes aparecem primeiro no grid (DOM)
    velasAtivas.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .forEach(vela => renderVelaElement(vela));
  }

  // Gera o HTML de uma vela garantindo sigilo: nome e intencao NUNCA tocam o DOM
  function renderVelaElement(vela) {
    const wrapper = document.createElement('div');
    wrapper.className = `vela-wrapper vela-${vela.cor_vela}`;

    const orixa = extrairOrixaDaCategoria(vela.categoria_intencao);
    const tempoAcesa = getRelativeTime(vela.created_at);

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

  // Adiciona a vela ao estado e re-renderiza
  function addVelaToState(vela) {
    const exists = velasAtivas.find(v => v.id === vela.id);
    if (!exists) {
      velasAtivas.push(vela);
      renderGrid();
    }
  }

  // ----- INTEGRAÇÃO SUPABASE -----
  if (!supabase) {
    muralGrid.innerHTML = '<p style="color: #a65d37; width: 100%; text-align: center;">Servidor de Luz indisponível no momento. Por favor, adicione as chaves do Supabase.</p>';
  } else {
    try {
      // 1. Carrega velas ativas das últimas 24h
      const vinteQuatroHorasAtras = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      
      const { data, error } = await supabase
        .from('velas_virtuais')
        .select('id, cor_vela, categoria_intencao, created_at') // omitindo nome/intencao propositalmente
        .gte('created_at', vinteQuatroHorasAtras);

      if (!error && data) {
        velasAtivas = data;
        renderGrid();
      }

      // 2. Escuta mudanças em tempo real (Realtime Channel)
      supabase.channel('public:velas_virtuais')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'velas_virtuais' }, payload => {
          const newVela = payload.new;
          addVelaToState({
            id: newVela.id,
            cor_vela: newVela.cor_vela,
            categoria_intencao: newVela.categoria_intencao,
            created_at: newVela.created_at
          });
        })
        .subscribe();

    } catch (err) {
      console.error('Erro na conexão com Supabase:', err);
    }
  }

  // ----- ENVIO DO FORMULÁRIO (INSERT) -----
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!supabase) {
      alert("Conecte o Supabase (chaves pendentes) para firmar sua vela.");
      return;
    }

    const submitBtn = form.querySelector('.santuario-submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '✨ Firmando...';

    const inputNome = document.getElementById('velaNome').value;
    const inputIntencao = document.getElementById('velaIntencao').value;
    const corSelecionada = document.querySelector('input[name="velaCor"]:checked').value;

    try {
      // Os campos 'nome' e 'intencao' vão direto para o backend e nunca retornam na query do painel
      const { error } = await supabase
        .from('velas_virtuais')
        .insert([{
          nome: inputNome,
          intencao: inputIntencao,
          cor_vela: corSelecionada,
          categoria_intencao: corSelecionada // simplificamos para usar a mesma key da cor
        }]);

      if (error) throw error;

      // Exibe sucesso e limpa form
      formSuccessMsg.classList.remove('hidden');
      form.reset();
      
      // Reseta painel
      document.querySelector('input[name="velaCor"][value="branca"]').checked = true;
      colorTitle.textContent = colorDB['branca'].titulo;
      colorText.textContent = colorDB['branca'].texto;

      setTimeout(() => {
        formSuccessMsg.classList.add('hidden');
      }, 4000);

    } catch (err) {
      console.error('Erro ao firmar vela:', err);
      alert('Houve uma falha astral de conexão. Tente novamente em alguns instantes.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="btn-icon">🕯️</span> Firmar Pensamento e Acender Vela';
    }
  });

  // Atualiza tooltips periodicamente
  setInterval(() => {
    renderGrid();
  }, 60000);
});
