# Site de Pai Paulinho

Site público estático, sem banco de dados e sem painel administrativo. O agendamento prepara uma mensagem para o visitante enviar pelo WhatsApp. A orientação diária guarda somente a data de leitura no navegador.

## Publicação no Cloudflare Pages

- Repositório: `DALPINER/pai-paulinho-app`, branch `main`.
- Build: `node scripts/build-site.mjs`.
- Framework: nenhum. Diretório de saída: `dist`.
- A integração existente do Cloudflare Pages com o GitHub publica os commits da branch `main`; não é necessário criar um token de API para a build.
- Arquivos públicos: pasta `dist`, gerada pela build e ignorada pelo Git.
- Domínio desejado: `paipaulinhors.com.br`.

A build usa uma lista explícita de páginas e scripts públicos, além das imagens e do vídeo em `assets`. Não publica `.env`, anotações, documentação de banco ou arquivos de desenvolvimento. Não configure a raiz inteira do repositório como pasta pública.

Os endereços antigos do santuário e do administrador redirecionam ao início. Os sistemas retirados não devem ser reativados durante a publicação. Não há SQL a executar nem credenciais de banco a configurar.

Para visualizar localmente: `python -m http.server 8000 --bind 127.0.0.1` na raiz do projeto.
