# POP_02 — Registro de retirada do painel administrativo

Atualizado em 22/10/2026.

## Estado vigente

O painel administrativo foi retirado do projeto. Não há tela de login, autenticação, edição administrativa, criação de usuários ou publicação de avisos pelo site.

## Retirada

- Removidos `admin.js`, `admin.css` e os links de engrenagem dos rodapés.
- `admin.html` permanece somente como redirecionamento mínimo para `index.html`, sem indexação, formulários ou scripts de autenticação.
- Removidos o cliente Supabase Auth, o sistema de avisos e `backend-config.js`.
- Retirada a leitura de `terreira_data` nas páginas públicas. Serviços e contato usam o conteúdo publicado nos arquivos do projeto.
- O service worker redireciona o endereço antigo e impede que scripts ou estilos administrativos aposentados retornem pelo cache.

As páginas antigas do santuário e de relatórios também permanecem somente como redirecionamentos. Nenhum leitor de nomes, preces ou velas faz parte do site vigente.

## Manutenção do conteúdo

Atualizar serviços e contato em `app.js` e `estudos.js`; textos fixos no HTML; artigos em `estudos.js` e `estudos-guia.js`. O assistente de agendamento apenas prepara uma mensagem para o WhatsApp e não salva registros no site.

## Limites para mudanças futuras

Consultar [database/README.md](../database/README.md) antes de propor qualquer integração. Não recriar painel, autenticação, avisos, tabelas ou permissões com base em documentação histórica. Uma retomada depende de nova decisão do proprietário e de um escopo próprio.
