# POP_01 — Site Público

**Versão:** 1.0  
**Data:** 2026-06-04  
**Status:** ✅ Ativo

---

## Objetivo

Renderizar o site público do Pai Paulinho de Xangô Aganjú, lendo dados do `localStorage` com fallback para dados padrão, exibindo todas as 7 seções ao usuário final.

---

## Entradas

| Campo | Tipo | Origem |
|-------|------|--------|
| `sobre_pai_paulinho` | string | localStorage `terreira_data` |
| `servicos` | array de objetos | localStorage `terreira_data` |
| `depoimentos` | array de objetos | localStorage `terreira_data` |
| `mensagem_espiritual_do_dia` | string | localStorage `terreira_data` |
| `whatsapp_numero` | string | localStorage `terreira_data` |
| `redes_sociais` | objeto | localStorage `terreira_data` |

---

## Lógica de Ferramentas (app.js)

1. Ao carregar: ler `localStorage.getItem('terreira_data')`
2. Se nulo: usar `DEFAULT_DATA` embutido em `app.js`
3. Renderizar cada seção com os dados carregados
4. Construir URL do WhatsApp: `https://wa.me/{numero}?text={mensagem}`
5. Inicializar canvas de partículas no hero
6. Ativar IntersectionObserver para animações de scroll
7. Ativar carrossel de depoimentos (auto-play 5s)

---

## Seções

| # | ID | Conteúdo |
|---|----|----------|
| 1 | `#hero` | Nome, slogan, CTA WhatsApp, partículas animadas |
| 2 | `#sobre` | Texto sobre Pai Paulinho |
| 3 | `#servicos` | Grid de cards de serviços |
| 4 | `#mensagem` | Mensagem/oração espiritual do dia |
| 5 | `#depoimentos` | Carrossel de depoimentos |
| 6 | `#contato` | CTA final com botão WhatsApp |
| 7 | `#rodape` | Redes sociais, links, copyright |

---

## Casos de Borda

- Se `whatsapp_numero` estiver vazio: botão desabilitado com texto "Em breve"
- Se `servicos` estiver vazio: exibir mensagem "Em breve"
- Se `depoimentos` estiver vazio: ocultar seção
- Se `redes_sociais` forem `#` ou vazias: ocultar ícone correspondente
