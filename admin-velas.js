/* ================================================================
   TERREIRA PAULINHO APP — admin-velas.js
   Área Segura para Leitura e Impressão das Velas (Supabase)
   ================================================================ */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Estas chaves devem ser idênticas às do santuario.js
const SUPABASE_URL = 'https://damdszytfqwgpfghffgo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbWRzenl0ZnF3Z3BmZ2hmZmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNDI2MTgsImV4cCI6MjA5NjcxODYxOH0.i9Vsih5_OKiUWLYXAeuLZmLVtgTqMB9ZCf6KYLIiphA';

let supabase = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

document.addEventListener('DOMContentLoaded', () => {
  const adminVelasList = document.getElementById('adminVelasList');
  const printBtn = document.getElementById('printVelasBtn');
  
  // Escutar clique na aba de Velas (gerenciado pelo admin.js)
  const btnAbaVelas = document.querySelector('.sidebar-btn[data-tab="velas"]');
  
  if (btnAbaVelas) {
    btnAbaVelas.addEventListener('click', () => {
      carregarVelasSeguras();
    });
  }

  async function carregarVelasSeguras() {
    // Verifica login
    const isLoggedIn = sessionStorage.getItem('terreira_admin_authed') === '1';
    if (!isLoggedIn) return;

    if (!supabase) {
      adminVelasList.innerHTML = '<p style="color: red;">Erro: Supabase não configurado no admin-velas.js</p>';
      return;
    }

    adminVelasList.innerHTML = '<p style="color: #9e9389; padding: 1rem;">⏳ Buscando intenções sagradas no banco de dados...</p>';

    try {
      // Busca as velas das últimas 24 horas
      const vinteQuatroHorasAtras = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      
      const { data, error } = await supabase
        .from('velas_virtuais')
        // Aqui sim fazemos o select do NOME e da INTENÇÃO!
        .select('nome, intencao, cor_vela, categoria_intencao, created_at') 
        .gte('created_at', vinteQuatroHorasAtras)
        .order('created_at', { ascending: false }); // mais recentes primeiro

      if (error) throw error;

      renderVelasSeguras(data);

    } catch (err) {
      console.error('Erro ao buscar velas seguras:', err);
      adminVelasList.innerHTML = '<p style="color: red;">❌ Erro ao buscar dados. Verifique a conexão com o Supabase e as regras RLS (SELECT).</p>';
    }
  }

  function renderVelasSeguras(velas) {
    if (!velas || velas.length === 0) {
      adminVelasList.innerHTML = '<p style="color: #9e9389; padding: 1rem;">Não há nenhuma vela acesa nas últimas 24 horas.</p>';
      return;
    }

    let html = '';
    
    velas.forEach(vela => {
      const dataFormatada = new Date(vela.created_at).toLocaleString('pt-BR');
      
      html += `
        <div class="vela-admin-card" style="border-left-color: ${getCorHex(vela.cor_vela)};">
          <div class="vela-admin-header">
            <strong>${escapeHTML(vela.nome)}</strong>
            <span class="vela-admin-data">${dataFormatada}</span>
          </div>
          <p class="vela-admin-intencao">"${escapeHTML(vela.intencao)}"</p>
          <div class="vela-admin-footer">
            Cor: ${formatarNomeCor(vela.cor_vela)} | Força: ${escapeHTML(vela.categoria_intencao)}
          </div>
        </div>
      `;
    });

    adminVelasList.innerHTML = html;
  }

  // --- Função de Impressão ---
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Utilitários Locais
  function escapeHTML(str = '') {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function getCorHex(corStr) {
    const cores = {
      'branca': '#999999', // cinza para contraste no branco
      'vermelha': '#c62828',
      'azul-clara': '#42a5f5',
      'amarela': '#ffca28',
      'verde': '#43a047',
      'preta-vermelha': '#000000'
    };
    return cores[corStr] || '#333';
  }

  function formatarNomeCor(corStr) {
    const formatadas = {
      'branca': 'Branca',
      'vermelha': 'Vermelha',
      'azul-clara': 'Azul Clara',
      'amarela': 'Amarela',
      'verde': 'Verde',
      'preta-vermelha': 'Preta e Vermelha'
    };
    return formatadas[corStr] || corStr;
  }
});
