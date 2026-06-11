const velasGrid = document.getElementById('velasGrid');

document.addEventListener('DOMContentLoaded', () => {
  // Lógica de botões
  document.getElementById('btnVoltar').addEventListener('click', () => {
    window.close(); // Fecha a aba
  });

  document.getElementById('btnImprimir').addEventListener('click', () => {
    window.print(); // Chama a janela nativa de impressão/Salvar PDF
  });

  // Busca inicial das velas diretamente da memória (Infalível contra RLS/Sessões)
  carregarVelasDaMemoria();
});

function carregarVelasDaMemoria() {
  try {
    const dataStr = localStorage.getItem('velas_print_data');
    if (!dataStr) {
      velasGrid.innerHTML = `<div style="color:red; text-align:center; width:100%; padding:2rem;">Nenhum dado encontrado. Por favor, volte ao painel e clique em Gerar Relatório novamente.</div>`;
      return;
    }

    const lista = JSON.parse(dataStr);
    renderVelas(lista);
    
    // Opcional: Limpa a memória após ler para não ocupar espaço
    // localStorage.removeItem('velas_print_data');
  } catch (err) {
    console.error('Erro ao ler velas da memória:', err);
    velasGrid.innerHTML = `<div style="color:red; text-align:center; width:100%; padding:2rem;">Erro ao montar o relatório. Tente novamente pelo painel.</div>`;
  }
}

function renderVelas(lista) {
  if (lista.length === 0) {
    velasGrid.innerHTML = `<div style="text-align:center; width:100%; padding:2rem;">Nenhuma vela acesa nas últimas 24h.</div>`;
    return;
  }

  let html = '';
  lista.forEach(vela => {
    const corHex = getCorHex(vela.cor_vela);
    const dataStr = new Date(vela.created_at).toLocaleString('pt-BR');
    
    html += `
      <div class="vela-card" style="border-left-color: ${corHex};">
        <div class="vela-header">
          <span class="vela-nome">${escapeHTML(vela.nome)}</span>
          <span class="vela-data">${dataStr}</span>
        </div>
        <div class="vela-intencao">"${escapeHTML(vela.intencao)}"</div>
        <div class="vela-footer">
          Cor: ${formatarNomeCor(vela.cor_vela)} &nbsp;|&nbsp; ${formatarOrixaDaCor(vela.categoria_intencao)}
        </div>
      </div>
    `;
  });

  velasGrid.innerHTML = html;
}

// Utilitários Locais
function escapeHTML(str = '') {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag]));
}

function getCorHex(corName) {
  if (!corName) return '#ccc';
  const c = corName.toLowerCase();
  switch (c) {
    case 'branca': return '#aaaaaa'; // Cinza claro para aparecer no papel branco
    case 'vermelha': return '#dc2626';
    case 'amarela': return '#ca8a04';
    case 'azul-clara': return '#38bdf8';
    case 'verde': return '#16a34a';
    case 'preta-vermelha': return '#171717'; // Preto
    default: return '#ccc';
  }
}

function formatarNomeCor(corName) {
  if (!corName) return 'Branca';
  const map = {
    'branca': 'Branca', 'amarela': 'Amarela', 'vermelha': 'Vermelha',
    'azul-clara': 'Azul-Clara', 'verde': 'Verde', 'preta-vermelha': 'Preta/Vermelha'
  };
  return map[corName.toLowerCase()] || corName;
}

function formatarOrixaDaCor(corName) {
  if (!corName) return 'Força Espiritual';
  const map = {
    'branca': 'Oxalá / Pretos Velhos',
    'amarela': 'Oxum / Iansã',
    'vermelha': 'Ogum / Pomba Gira',
    'azul-clara': 'Iemanjá / Crianças',
    'verde': 'Oxóssi / Caboclos',
    'preta-vermelha': 'Exu'
  };
  return map[corName.toLowerCase()] || 'Força Espiritual';
}
