# POP_02 — Painel Admin

**Versão:** 1.0  
**Data:** 2026-06-04  
**Status:** ✅ Ativo

---

## Objetivo

Permitir que o administrador (Pai Paulinho) edite o conteúdo do site sem precisar mexer no código, usando uma interface web protegida por senha.

---

## Entradas

| Campo | Tipo | Interface |
|-------|------|-----------|
| Senha de acesso | string | Tela de login (verificada contra `localStorage['terreira_admin_pass']`) |
| `sobre_pai_paulinho` | string | Textarea |
| `servicos` | array | Formulário dinâmico (adicionar/remover) |
| `depoimentos` | array | Formulário dinâmico (adicionar/remover) |
| `mensagem_espiritual_do_dia` | string | Textarea |
| `whatsapp_numero` | string | Input text |
| `redes_sociais.instagram` | string | Input URL |
| `redes_sociais.facebook` | string | Input URL |

---

## Lógica de Ferramentas (admin.js)

1. Ao carregar: verificar `localStorage.getItem('terreira_admin_authed')`
2. Se não autenticado: exibir tela de login
3. Validar senha contra `localStorage.getItem('terreira_admin_pass')` (default: `Paulinho2024`)
4. Se autenticado: carregar dados atuais do `localStorage.getItem('terreira_data')`
5. Preencher formulários com dados atuais
6. Ao salvar: serializar formulários e salvar em `localStorage.setItem('terreira_data', JSON.stringify(data))`
7. Exibir toast de confirmação "Salvo com sucesso!"

---

## Segurança

- Senha padrão: `Paulinho2024` (orientar admin a trocar no primeiro acesso)
- Sessão dura até fechar o navegador (`sessionStorage`)
- URL acessível via link discreto no rodapé do site

---

## Casos de Borda

- Senha incorreta: exibir erro "Senha incorreta. Tente novamente."
- Dados corrompidos no localStorage: resetar para `DEFAULT_DATA`
- Serviço sem nome: bloquear salvar com validação de campo
