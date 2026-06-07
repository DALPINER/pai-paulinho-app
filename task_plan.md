# task_plan.md — Plano de Tarefas

> **Memória de planejamento** do projeto Terreira Paulinho App.
> Atualizado a cada fase concluída.

---

## 🟢 PROTOCOLO 0 — INICIALIZAÇÃO

- [x] Criar `gemini.md` (Constituição do Projeto)
- [x] Criar `task_plan.md` (este arquivo)
- [x] Criar `findings.md` (Descobertas e Pesquisas)
- [x] Criar `progress.md` (Registro de Progresso)
- [x] Aguardar respostas das Perguntas de Descoberta (Fase V)
- [x] Definir JSON Data Schema em `gemini.md`
- [ ] Obter aprovação do Blueprint antes de escrever scripts em `tools/`

---

## 🏗️ FASE V — VISÃO (Concluída)

- [x] Coletar resposta: **Estrela Guia** (resultado único desejado)
- [x] Coletar resposta: **Integrações** (serviços externos + chaves)
- [x] Coletar resposta: **Fonte da Verdade** (onde vivem os dados primários)
- [x] Coletar resposta: **Payload de Entrega** (como/onde entregar o resultado)
- [x] Coletar resposta: **Regras Comportamentais** (tom, restrições, proibições)
- [x] Definir JSON Schema (Entrada/Saída) em `gemini.md`

---

## ⚡ FASE L — LINK (Em Andamento / Fallback Pronto)

- [x] Verificar todas as conexões de API e credenciais do `.env`
- [x] Construir scripts mínimos de handshake em `tools/` (Fallback para localStorage pronto, suporte a Firestore embutido)

---

## ⚙️ FASE A — ARQUITETURA (Aguardando Aprovação do Blueprint)

> Aguardando aprovação do Blueprint pelo usuário.

- [x] Criar POPs em `architecture/`
- [ ] Construir scripts determinísticos em `tools/`
- [x] Criar estrutura `.tmp/` para intermediários

---

## ✨ FASE E — ESTILO (Aguardando Validação)

- [ ] Formatar outputs (Slack blocks, Notion, HTML, etc.)
- [ ] Implementar UI/UX se aplicável (Estilos premium aplicados e micro-interações ativas)
- [ ] Coletar feedback do usuário

---

## 🛰️ FASE G — GATILHO (Aguardando Implantação)

- [ ] Mover lógica para produção em nuvem (Integração opcional com Firebase Firestore pronta no código)
- [ ] Configurar gatilhos (Cron, Webhooks, Listeners)
- [x] Finalizar Log de Manutenção em `gemini.md`

---

## 📊 Status Geral

| Fase | Status |
|------|--------|
| Protocolo 0 | ✅ Concluído |
| V — Visão | ✅ Concluído |
| L — Link | ⚙️ Em Andamento (Fallback ativo) |
| A — Arquitetura | ⏳ Aguardando aprovação do Blueprint |
| E — Estilo | 🔒 Bloqueada |
| G — Gatilho | 🔒 Bloqueada |

