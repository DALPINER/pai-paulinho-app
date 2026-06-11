/* ================================================================
   TERREIRA PAULINHO APP — admin-velas.js
   Área Segura para Leitura e Impressão das Velas (Supabase Auth)
   ================================================================ */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Estas chaves devem ser idênticas às do santuario.js
const SUPABASE_URL = 'https://damdszytfqwgpfghffgo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbWRzenl0ZnF3Z3BmZ2hmZmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNDI2MTgsImV4cCI6MjA5NjcxODYxOH0.i9Vsih5_OKiUWLYXAeuLZmLVtgTqMB9ZCf6KYLIiphA';

let supabase = null;
let realtimeChannel = null;

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
      setupRealtime();
    });
  }

  // --- Lógica de Carregamento e Realtime ---

  let velasLocais = [];

  async function carregarVelasSeguras() {
    if (!supabase) return;
    adminVelasList.innerHTML = '<p style="color: #9e9389; padding: 1rem;">⏳ Buscando intenções sagradas no banco de dados...</p>';

    try {
      const vinteQuatroHorasAtras = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      
      const { data, error } = await supabase
        .from('velas_virtuais')
        .select('id, nome, intencao, cor_vela, categoria_intencao, created_at') 
        .gte('created_at', vinteQuatroHorasAtras)
        .order('created_at', { ascending: false });

      if (error) throw error;

      velasLocais = data || [];
      renderVelasSeguras();

    } catch (err) {
      console.error('Erro ao buscar velas seguras:', err);
      adminVelasList.innerHTML = '<p style="color: red;">❌ Erro ao buscar dados. Autenticação JWT falhou ou sessão expirada.</p>';
    }
  }

  function setupRealtime() {
    if (!supabase || realtimeChannel) return;

    realtimeChannel = supabase.channel('admin_velas_virtuais')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'velas_virtuais' }, payload => {
        velasLocais.unshift(payload.new); // Adiciona no início
        renderVelasSeguras();
      })
      .subscribe();
  }

  function renderVelasSeguras() {
    if (velasLocais.length === 0) {
      adminVelasList.innerHTML = '<p style="color: #9e9389; padding: 1rem;">Não há nenhuma vela acesa nas últimas 24 horas.</p>';
      return;
    }

    let html = '';
    
    velasLocais.forEach(vela => {
      const dataFormatada = new Date(vela.created_at).toLocaleString('pt-BR');
      
      html += `
        <div class="vela-admin-card" style="border-left-color: ${getCorHex(vela.cor_vela)};">
          <div class="vela-admin-header">
            <strong>${escapeHTML(vela.nome)}</strong>
            <span class="vela-admin-data">${dataFormatada}</span>
          </div>
          <p class="vela-admin-intencao">"${escapeHTML(vela.intencao)}"</p>
          <div class="vela-admin-footer">
            Cor: ${formatarNomeCor(vela.cor_vela)} | Força: ${formatarOrixaDaCor(vela.categoria_intencao)}
          </div>
        </div>
      `;
    });

    adminVelasList.innerHTML = html;
  }

  // --- Função de Impressão (Desktop) ---
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --- Opções Globais do PDF ---
  const pdfOpt = {
    margin:       10,
    filename:     'velas-virtuais-pai-paulinho.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: 'css', avoid: '.pdf-card' }
  };

  // Monta um HTML limpo exclusivo para o PDF
  function getPdfContent() {
    let content = `
      <div style="font-family: Helvetica, Arial, sans-serif; color: #000; background: #fff;">
        <h2 style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
          Relatório de Velas Virtuais
        </h2>
    `;
    
    velasLocais.forEach(vela => {
      const dataStr = new Date(vela.created_at).toLocaleString('pt-BR');
      content += `
        <div class="pdf-card" style="border: 1px solid #ccc; border-left: 5px solid ${getCorHex(vela.cor_vela)}; padding: 12px; margin-bottom: 15px; page-break-inside: avoid; border-radius: 4px;">
          <div style="border-bottom: 1px solid #eee; padding-bottom: 6px; margin-bottom: 8px; display: flex; justify-content: space-between;">
            <strong style="font-size: 16px;">${escapeHTML(vela.nome)}</strong>
            <span style="font-size: 12px; color: #555;">${dataStr}</span>
          </div>
          <div style="font-size: 14px; font-style: italic; margin-bottom: 10px; line-height: 1.4;">
            "${escapeHTML(vela.intencao)}"
          </div>
          <div style="font-size: 12px; font-weight: bold; color: #333; text-transform: uppercase;">
            Cor: ${formatarNomeCor(vela.cor_vela)} &nbsp;|&nbsp; Força: ${formatarOrixaDaCor(vela.categoria_intencao)}
          </div>
        </div>
      `;
    });

    content += `</div>`;
    return content;
  }

  // --- Função: Baixar PDF ---
  const downloadBtn = document.getElementById('downloadPdfBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', async () => {
      const originalText = downloadBtn.innerHTML;
      downloadBtn.innerHTML = '<span>⏳</span> Baixando...';
      downloadBtn.disabled = true;

      try {
        await html2pdf().set(pdfOpt).from(getPdfContent()).save();
      } catch (err) {
        console.error('Erro ao baixar PDF:', err);
        alert('Falha ao baixar o arquivo PDF.');
      } finally {
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
      }
    });
  }

  // --- Função: Compartilhar PDF (WhatsApp) ---
  const shareBtn = document.getElementById('sharePdfBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const originalText = shareBtn.innerHTML;
      shareBtn.innerHTML = '<span>⏳</span> Gerando...';
      shareBtn.disabled = true;

      try {
        const pdfBlob = await html2pdf().set(pdfOpt).from(getPdfContent()).output('blob');
        const file = new File([pdfBlob], pdfOpt.filename, { type: 'application/pdf' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'Velas Virtuais - Pai Paulinho',
            text: 'Segue o relatório de velas para oração no Congá.'
          });
        } else {
          alert('O seu celular/navegador não suporta o envio direto de arquivos. Por favor, use o botão de Baixar PDF e envie manualmente.');
        }
      } catch (err) {
        console.error('Erro ao compartilhar PDF:', err);
        alert('Falha ao compartilhar o arquivo PDF.');
      } finally {
        shareBtn.innerHTML = originalText;
        shareBtn.disabled = false;
      }
    });
  }

  // Utilitários Locais
  function escapeHTML(str = '') {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function getCorHex(corStr) {
    const cores = {
      'branca': '#999999',
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

  function formatarOrixaDaCor(corStr) {
    const orixas = {
      'branca': 'Oxalá',
      'vermelha': 'Ogum / Xangô / Boiadeiros',
      'azul-clara': 'Iemanjá',
      'amarela': 'Oxum',
      'verde': 'Oxóssi / Caboclos',
      'preta-vermelha': 'Esquerda / Quimbanda'
    };
    return orixas[corStr] || 'Força Divina';
  }
});
