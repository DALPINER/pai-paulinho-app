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

function getCorHex(corObj) {
  if (!corObj || !corObj.top) return '#ccc';
  const c = corObj.top.toLowerCase();
  switch (c) {
    case 'white': return '#aaaaaa'; // Branco com contorno para aparecer na impressão
    case 'red': return '#dc2626';
    case 'blue': return '#2563eb';
    case 'green': return '#16a34a';
    case 'yellow': return '#ca8a04';
    case 'purple': return '#9333ea';
    case 'pink': return '#db2777';
    case 'black': return '#171717';
    case 'brown': return '#78350f';
    case 'orange': return '#ea580c';
    case 'lightblue': return '#38bdf8';
    default: return '#ccc';
  }
}

function formatarNomeCor(corObj) {
  if (!corObj || !corObj.top) return 'Indefinida';
  if (corObj.isBicolor && corObj.bottom) {
    return traduzirCor(corObj.top) + ' / ' + traduzirCor(corObj.bottom);
  }
  return traduzirCor(corObj.top);
}

function traduzirCor(corEn) {
  const map = {
    'white': 'Branca', 'red': 'Vermelha', 'blue': 'Azul', 'green': 'Verde',
    'yellow': 'Amarela', 'purple': 'Roxa', 'pink': 'Rosa', 'black': 'Preta',
    'brown': 'Marrom', 'orange': 'Laranja', 'lightblue': 'Azul Claro'
  };
  return map[corEn.toLowerCase()] || corEn;
}

function formatarOrixaDaCor(forca) {
  if (!forca) return 'Orixá/Força não definida';
  return forca.charAt(0).toUpperCase() + forca.slice(1);
}
