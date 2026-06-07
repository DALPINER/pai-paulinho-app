# tools/ — Camada 3: Scripts Python (Os "Motores")

> Esta pasta contém os **scripts Python determinísticos**.
> Cada script é **atômico e testável** — faz UMA coisa, faz bem feita.
>
> ⚠️ **Regra:** Nenhum script é criado antes de:
> 1. O JSON Data Schema estar definido em `gemini.md`
> 2. O POP correspondente estar criado em `architecture/`
> 3. O Blueprint ter aprovação do usuário

---

## Convenções

- Scripts nomeados como: `tool_[descricao].py`
- Variáveis de ambiente e tokens: sempre em `.env`, nunca hardcoded
- Dados intermediários: sempre em `.tmp/`
- Cada script deve ter: docstring, tratamento de erro, log de saída

---

*Nenhuma ferramenta criada ainda — aguardando Fase V (Visão) e aprovação do Blueprint.*
