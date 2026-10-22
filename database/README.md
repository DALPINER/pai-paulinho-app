# Escopo vigente e limites para um futuro banco

Atualizado em 22/10/2026.

## Estado atual

O banco anterior foi excluído. Não há banco conectado, script SQL de criação, cliente de autenticação ou arquivo de configuração de conexão neste projeto. O painel administrativo e os avisos foram retirados, incluindo `backend-config.js`.

O site usa seu conteúdo publicado nos arquivos e funciona sem banco. Este documento registra limites de escopo; não é um script executável nem uma solicitação para criar uma integração.

## Recursos públicos mantidos

| Recurso | Implementação atual | Necessidade de banco |
| --- | --- | --- |
| Estudos | Artigos e explicações em `estudos.js` e `estudos-guia.js` | Nenhuma para o funcionamento atual. |
| Serviços e contato | Conteúdo publicado em `app.js` e `estudos.js` | Nenhuma. A leitura do armazenamento legado `terreira_data` foi retirada. |
| Orientação de Luz | Reflexão definida pela data de São Paulo; o navegador guarda apenas o dia da última leitura para exibir o aviso de retorno amanhã | Nenhuma. |
| Agendamento | Preferências preparadas no navegador para envio por WhatsApp | Nenhuma. Abrir o WhatsApp não significa que um agendamento foi registrado ou confirmado. |

O cache de arquivos no navegador continua para carregamento e uso offline. Ele não representa um banco de cadastros ou de agendamentos.

O registro local `pai_paulinho_reflection_received_day` contém somente uma data. Não salva nome, pedido ou mensagem recebida e não é enviado ao servidor. O lembrete é por navegador, não um bloqueio autenticado por pessoa; não criar tabelas ou usuários para esse controle.

## Recursos retirados

- Painel administrativo, login, usuários administrativos e permissões associadas.
- Avisos in-app e sua integração com `avisos_inapp`.
- Santuário, mural, formulário, leitura de intenções e relatórios de velas. As referências do santuário estão arquivadas fora da raiz do repositório e da publicação, em `../_arquivo_santuario_2026-10-17/`.
- Acessos legados Firestore, OneSignal, comandos de reset e edição por armazenamento local.

Não criar tabelas, políticas, gatilhos, canais Realtime, tarefas de expiração, relatórios ou usuários para esses recursos com base em versões antigas. Isso inclui `velas_virtuais`, preces e `avisos_inapp`. Não importar nomes, intenções, credenciais ou dados antigos de impressão.

As páginas antigas do painel e do santuário são somente redirecionamentos de compatibilidade; não são módulos pendentes de configuração. A retirada foi feita nos arquivos do site, sem executar operações destrutivas em um banco existente.

## Caso haja uma nova decisão de usar banco

1. Confirmar com o proprietário uma necessidade concreta e definir os dados realmente necessários. O escopo atual não solicita banco nem painel.
2. Projetar a integração e suas permissões a partir do novo escopo, sem restaurar recursos retirados automaticamente.
3. Versionar migrações e testes; manter credenciais secretas somente no servidor e não permitir escrita pública irrestrita.
4. Validar leitura, gravação, autorização e falhas antes de publicar. Não tratar alterações locais como dados publicados ou registros salvos.
5. Atualizar a documentação e o cache. Não incluir a pasta arquivada no deploy.
