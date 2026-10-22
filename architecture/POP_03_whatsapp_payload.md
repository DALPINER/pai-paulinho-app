# POP_03 — Contato e agendamento pelo WhatsApp

Atualizado em 22/10/2026.

## Objetivo

Preparar uma mensagem para conversar com Pai Paulinho e combinar um atendimento. A abertura do WhatsApp não confirma nem registra uma consulta no site.

## Entradas

| Campo | Origem |
| --- | --- |
| Número do WhatsApp | Conteúdo publicado em `app.js` e `estudos.js`, com país e DDD, somente dígitos. |
| Mensagem de contato direto | `buildWhatsAppURL` em `app.js`; mensagem própria dos estudos em `estudos.js`. |
| Preferências do assistente | Atendimento, modalidade, dia e período escolhidos no formulário, preparados por `agendamento.js`. |

Não há painel administrativo ou leitura de `terreira_data`. Mudanças no número devem ser feitas nos arquivos publicados e conferidas nas duas páginas.

## Fluxo

1. Os links recebem uma URL `https://wa.me/` com número e mensagem codificada por `encodeURIComponent`.
2. No clique comum, `agendamento.js` abre o assistente para os links `.whatsapp-trigger`, exceto o contato direto do rodapé. Cliques modificados seguem o link direto.
3. O visitante escolhe atendimento e preferências, revisa a mensagem e decide continuar no WhatsApp.
4. A mensagem solicita confirmação da modalidade e de um horário disponível. O envio ocorre no WhatsApp, por ação do visitante.

Se o navegador não suportar o diálogo, os links continuam disponíveis como contato direto pelo WhatsApp. As escolhas do formulário não são salvas em banco nem em armazenamento local.

## Pontos de acesso

| Localização | Elemento |
| --- | --- |
| Início | `#heroWhatsApp` |
| Apresentação | `#sobreWhatsApp` |
| Serviços | `.sc-cta.whatsapp-trigger` |
| Localização | `.location-booking` |
| Convite final | `#ctaWhatsApp` |
| Rodapé, contato direto | `#footerWhatsApp` |

## Verificação

- Conferir o número com país e DDD antes de publicar; não inserir espaços ou pontuação na URL.
- Conferir acentos e quebras de linha na mensagem preparada.
- Abrir, fechar e reabrir o assistente no celular e no computador, sem perder a rolagem da página.
- Revisar as escolhas antes de continuar e confirmar que o link final contém o número correto.
- Não exibir uma confirmação de reserva ou de gravação em banco apenas por abrir o WhatsApp.
