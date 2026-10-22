# architecture/ — Camada 1: POPs (Procedimentos Operacionais Padrão)

> Esta pasta contém os POPs técnicos escritos em Markdown.
> Define **objetivos, entradas, lógica de ferramentas e casos de borda**.
>
> ⚠️ **Regra de Ouro:** Se a lógica mudar, atualize o POP **antes** de atualizar o código em `tools/`.

---

## Estrutura

Cada POP deve ser nomeado como: `POP_[numero]_[descricao].md`

Exemplo:
- `POP_01_coleta_de_dados.md`
- `POP_02_processamento.md`
- `POP_03_entrega_do_payload.md`

---

Escopo vigente: site público com conteúdo nos arquivos do projeto e agendamento pelo WhatsApp. Não há painel, autenticação, avisos conectados ou banco de dados.

- Funcionamento público: [POP_01_site_publico.md](POP_01_site_publico.md).
- Registro de retirada do painel em 22/10/2026: [POP_02_admin_panel.md](POP_02_admin_panel.md).
- Contato e assistente de agendamento: [POP_03_whatsapp_payload.md](POP_03_whatsapp_payload.md).
- Limites para uma futura integração: [database/README.md](../database/README.md).

Revisão e limpeza dos rastros de funcionalidades removidas: [auditoria histórica de 19/10/2026](AUDITORIA_CODIGO_2026-10-19.md). As referências nela ao painel e a conexões desativadas descrevem o estado anterior à retirada de 22/10/2026; não são instruções para restaurá-los.
