# gemini.md — Constituição do Projeto
> **Lei máxima do projeto.** Atualize este arquivo somente quando: um esquema mudar, uma regra for adicionada ou a arquitetura for modificada.

---

## 🗺️ Identidade do Projeto

- **Nome:** Terreira Paulinho App
- **Piloto:** Antigravity (V.L.A.E.G.)
- **Protocolo Ativo:** V.L.A.E.G. — Fase atual: `⚙️ FASE A — ARQUITETURA (Blueprint aguardando aprovação)`
- **Última atualização:** 2026-06-04
- **Nicho:** Empresa religiosa / Direcionamento Espiritual (Umbanda/Candomblé)
- **Persona:** Pai Paulinho de Xangô Aganjú
- **Slogan:** "Direcionamento espiritual, uma palavra de conforto, um abraço amigo, e a força dos guias abrindo seus caminhos. Aqui você encontra luz, acolhimento e verdade."

---

## 🏗️ Arquitetura A.N.T. (3 Camadas)

| Camada | Diretório | Responsabilidade |
|--------|-----------|-----------------|
| **1 — Architecture** | `architecture/` | POPs em Markdown (o "como fazer") |
| **2 — Navigation** | *(raciocínio do agente)* | Roteamento de dados entre POPs e Ferramentas |
| **3 — Tools** | `tools/` | Scripts Python determinísticos e atômicos |

---

## 📐 Schemas de Dados

### Perguntas de Descoberta — Status

| # | Pergunta | Resposta | Status |
|---|----------|----------|--------|
| 1 | Estrela Guia | Site/app completo para empresa religiosa — Pai Paulinho de Xangô Aganjú | ✅ Respondida |
| 2 | Integrações | WhatsApp (link wa.me) | ✅ Respondida |
| 3 | Fonte da Verdade | Painel Admin separado para gerenciar conteúdo | ✅ Respondida |
| 4 | Payload de Entrega | Resposta estruturada via WhatsApp | ✅ Respondida |
| 5 | Regras Comportamentais | Tom totalmente amigo, acolhedor, espiritual | ✅ Respondida |

### JSON Data Schema — DEFINIDO ✅

```json
{
  "projeto": "terreira-paulinho-app",
  "tipo": "site_landing_page + admin_panel + integracao_whatsapp",

  "input": {
    "admin": {
      "sobre_pai_paulinho": "string (texto longo, história e missão)",
      "servicos": [
        {
          "nome": "string",
          "descricao": "string",
          "icone": "string (emoji ou ícone)"
        }
      ],
      "depoimentos": [
        {
          "nome_cliente": "string",
          "texto": "string",
          "estrelas": "integer (1-5)"
        }
      ],
      "mensagem_espiritual_do_dia": "string",
      "whatsapp_numero": "string (formato: 5511999999999)",
      "redes_sociais": {
        "instagram": "string (url)",
        "facebook": "string (url)"
      }
    }
  },

  "output": {
    "site_publico": {
      "secoes": [
        "hero",
        "sobre_pai_paulinho",
        "servicos",
        "mensagem_espiritual",
        "depoimentos",
        "agendamento_whatsapp",
        "rodape"
      ]
    },
    "whatsapp_payload": {
      "mensagem_boas_vindas": "string (enviada ao clicar em Agendar)",
      "formato": "texto estruturado com saudação espiritual"
    }
  },

  "armazenamento": {
    "tipo": "localStorage (MVP) → migrar para backend/DB quando necessário",
    "admin_url": "/admin",
    "protecao": "senha simples no admin panel"
  }
}
```

---

## 📋 Regras Comportamentais

1. **Dados Primeiro:** Nenhuma ferramenta é construída sem schema definido aqui.
2. **Determinismo:** Toda lógica de negócio vive em `tools/` (Python), nunca no raciocínio do agente.
3. **Sem Adivinhação:** Se a lógica não estiver clara, perguntar ao usuário.
4. **Loop de Reparo:** Falhas → Analisar → Corrigir → Testar → Atualizar `architecture/`.
5. **POP Primeiro:** Se a lógica mudar, atualizar o POP antes de atualizar o código.
6. **Payload na Nuvem:** Projeto só está "Concluído" quando o payload está no destino final.
7. **Tom:** Totalmente amigo, acolhedor, espiritual — nunca frio ou técnico para o usuário final.

---

## 🔒 Invariantes Arquiteturais

- `gemini.md` é a fonte da verdade — nunca contradizer este arquivo.
- `.env` guarda todos os segredos — jamais hardcodar credenciais em código.
- `.tmp/` é efêmero — nenhum entregável final vive aqui.
- `tools/` é atômico e testável — cada script faz UMA coisa.
- O painel admin é protegido por senha — nunca acessível sem autenticação.

---

## 📡 Log de Manutenção

| Data | Fase | Evento |
|------|------|--------|
| 2026-06-04 | Protocolo 0 | Inicialização do projeto — arquivos de memória criados |
| 2026-06-04 | Fase V | 5/5 Perguntas de Descoberta respondidas — Fase V CONCLUÍDA ✅ |
| 2026-06-04 | Fase A | JSON Data Schema definido — Blueprint criado para aprovação |
| 2026-06-08 | Fase E | Melhorias UI/UX místicas avançadas (Lightbox, Vórtice de Partículas, Border Beam, Shimmer, Redes Animadas e Correção Estrutural de Viewport do Menu Mobile) |
| 2026-06-11 | Fase E | Refatoração absoluta da Engenharia de Relatórios (PDF). Abandono de canvas bugados em favor de 'Página de Impressão Nativa' via transferência de memória offline (`localStorage`). Fim dos bugs de corte e fim dos bugs de conexão do banco de dados no mobile. |
| 2026-06-18 | Fase E | Fix & Otimização Final | Expurgo de testes 4D pesados (WebGL, Audio 8D, SVG Shaders) para blindar a performance. Correção de Stacking Context no Spatial Drawer isolando o Header. Remoção de conflitos CSS no Layout Master-Detail de Estudos. Reversão do Oráculo ao estado 2D Físico Perfeito via ocultação de divs, abolindo o Z-Depth e o CSS 3D-Flip. Código purificado de bugs. |
