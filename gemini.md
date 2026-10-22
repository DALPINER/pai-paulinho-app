# gemini.md — Constituição do Projeto
> **Lei máxima do projeto.** Atualize este arquivo somente quando: um esquema mudar, uma regra for adicionada ou a arquitetura for modificada.

---

## 🗺️ Identidade do Projeto

- **Nome:** Terreira Paulinho App
- **Piloto:** Antigravity (V.L.A.E.G.)
- **Estado atual:** Site público estático com estudos e contato pelo WhatsApp; sem painel administrativo ou banco conectado.
- **Última atualização:** 2026-10-22
- **Nicho:** Casa religiosa de matriz africana / Direcionamento Espiritual. Quimbanda foi mencionada pelo proprietário; a outra tradição da casa aguarda confirmação.
- **Persona:** Pai Paulinho de Xangô Aganjú
- **Slogan:** "Direcionamento espiritual, uma palavra de conforto, um abraço amigo, e a força dos guias abrindo seus caminhos. Aqui você encontra luz, acolhimento e verdade."

---

## 🏗️ Arquitetura A.N.T. (3 Camadas)

| Camada | Diretório | Responsabilidade |
|--------|-----------|-----------------|
| **1 — Architecture** | `architecture/` | POPs em Markdown (o "como fazer") |
| **2 — Navigation** | *(raciocínio do agente)* | Roteamento de dados entre POPs e Ferramentas |
| **3 — Tools** | `tools/` | Scripts Python determinísticos e atômicos |

O site publicado é executado nos arquivos HTML, CSS e JavaScript da raiz. O painel administrativo, o login e os avisos foram retirados em 22/10/2026. Os POPs vigentes e `database/README.md` documentam esse escopo; os registros antigos abaixo são históricos.

---

## 📐 Schemas de Dados

### Perguntas de Descoberta — Status

| # | Pergunta | Resposta | Status |
|---|----------|----------|--------|
| 1 | Estrela Guia | Site/app completo para empresa religiosa — Pai Paulinho de Xangô Aganjú | ✅ Respondida |
| 2 | Integrações | WhatsApp (link wa.me) | ✅ Respondida |
| 3 | Fonte da Verdade | Conteúdo publicado nos arquivos do projeto, sem edição por painel | ✅ Atualizada em 22/10/2026 |
| 4 | Payload de Entrega | Resposta estruturada via WhatsApp | ✅ Respondida |
| 5 | Regras Comportamentais | Tom totalmente amigo, acolhedor, espiritual | ✅ Respondida |

### JSON Data Schema — DEFINIDO ✅

```json
{
  "projeto": "terreira-paulinho-app",
  "tipo": "site_publico_estatico + estudos + integracao_whatsapp",

  "input": {
    "conteudo_publicado": {
      "sobre_pai_paulinho": "string (texto longo, história e missão)",
      "servicos": [
        {
          "nome": "string",
          "descricao": "string",
          "icone": "string (emoji ou ícone)"
        }
      ],
      "orientacao_de_luz": "mensagens locais organizadas por intenção",
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
        "orientacao_de_luz",
        "sobre_pai_paulinho",
        "documentario_e_galeria",
        "servicos",
        "duvidas_frequentes",
        "localizacao",
        "agendamento_whatsapp",
        "rodape"
      ]
    },
    "whatsapp_payload": {
      "mensagem_preparada": "string (contato direto ou preferências revisadas no assistente)",
      "envio": "o visitante decide enviar no WhatsApp; não há registro de consulta no site"
    }
  },

  "armazenamento": {
    "conteudo": "arquivos publicados do projeto",
    "cache": "arquivos públicos no navegador para carregamento e uso offline",
    "banco_conectado": false,
    "registro_de_agendamento": false,
    "leitura_terreira_data": false
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
- Não há painel administrativo, autenticação ou avisos conectados. `admin.html` é somente um redirecionamento de compatibilidade para o início.
- Não restaurar painel, login, avisos ou santuário a partir de registros históricos. Qualquer retomada exige novo escopo confirmado pelo proprietário; consultar `database/README.md`.
- As escolhas do agendamento são preparadas no navegador para envio pelo WhatsApp, sem gravação em banco.

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
| 2026-10-22 | Manutenção | Retirados painel, engrenagens do rodapé, autenticação, avisos e configuração de banco; removida a leitura de dados legados do painel. Mantidos site público, estudos, oráculo, galerias e contato pelo WhatsApp. |
