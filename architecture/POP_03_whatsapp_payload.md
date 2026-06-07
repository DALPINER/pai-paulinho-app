# POP_03 — WhatsApp Payload

**Versão:** 1.0  
**Data:** 2026-06-04  
**Status:** ✅ Ativo

---

## Objetivo

Construir e entregar a mensagem pré-formatada ao WhatsApp do Pai Paulinho quando o usuário clicar em qualquer botão de contato/agendamento no site.

---

## Entradas

| Campo | Tipo | Origem |
|-------|------|--------|
| `whatsapp_numero` | string | localStorage `terreira_data` (ex: `5511999999999`) |
| Mensagem padrão | string | Hardcoded no `app.js` |

---

## Formato do Payload

```
🙏 Olá, Pai Paulinho!
Vim pelo site e gostaria de agendar uma consulta espiritual.
Que os orixás me guiem até você! ✨
```

---

## Lógica de Construção

```javascript
function buildWhatsAppURL(numero) {
  const mensagem = `🙏 Olá, Pai Paulinho!\nVim pelo site e gostaria de agendar uma consulta espiritual.\nQue os orixás me guiem até você! ✨`;
  const encoded = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${encoded}`;
}
```

---

## Pontos de Entrega (CTAs no site)

| Localização | ID do Elemento |
|-------------|---------------|
| Hero principal | `#heroWhatsApp` |
| Seção Sobre | `#sobreWhatsApp` |
| Seção CTA final | `#ctaWhatsApp` |

---

## Casos de Borda

- Número vazio ou inválido: botões exibem "Em breve" e são desabilitados
- Número sem código do país: exibir aviso no admin panel para incluir `55` na frente
