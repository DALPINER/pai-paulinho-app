# POP_01 — Site público

Atualizado em 22/10/2026.

## Objetivo

Apresentar Pai Paulinho e a casa com navegação simples, conteúdo acessível e contato pelo WhatsApp. O site funciona com conteúdo publicado nos próprios arquivos, sem painel administrativo, autenticação ou conexão com banco.

## Conteúdo e dados

- Início, Orientação de Luz, apresentação pessoal, documentário e galeria de trinta anos. A Orientação de Luz aparece logo após a abertura, antes de “O Pai Paulinho”.
- Serviços, reflexões de fé por tema, dúvidas frequentes, localização e contato.
- Orientação de Luz: o visitante recebe uma reflexão ao clicar em “Receber a orientação de hoje”. O conjunto contém 48 textos locais, alternados entre quatro temas, sem assinatura pessoal, personalização por visitante ou garantias de resultado.
- A mensagem depende da data no fuso de São Paulo. Após recebê-la, o navegador salva somente o dia em `pai_paulinho_reflection_received_day`. Nas próximas visitas, o site mostra “Você já recebeu sua orientação de hoje” e convida a voltar amanhã. A leitura já aberta permanece visível nesta página; não há seletor de temas ou botão de nova mensagem.
- O controle é local por navegador, sem cadastro ou banco; outro navegador ou a limpeza dos dados pode liberar a leitura. Se o armazenamento for bloqueado, o controle funciona apenas na página aberta. Não tratar esse lembrete como autenticação ou limite por pessoa.
- Abas sincronizam o registro, preservando a leitura que já estiver aberta. Retornar pelo histórico reconsulta o estado. A virada do dia libera o botão sem revelar a próxima mensagem automaticamente. A sequência de textos repete após 48 dias.
- Os novos textos incluem referências devocionais a Exus, Pombagiras, ancestralidade e família de axé. São reflexões editoriais, não falas de entidades. A outra tradição praticada pela casa ainda aguarda confirmação do proprietário; os artigos de estudos não comprovam essa filiação. Referência de contexto: [pesquisa etnográfica sobre Quimbanda no Rio Grande do Sul](https://www.scielo.br/j/ra/a/gzLdkRv4fdP3dMtV8th9D3x/?lang=pt).
- Atendimentos: descrições curtas e ícones de contorno. A primeira dúvida frequente explica como iniciar o contato e oferece acesso ao agendamento.
- Antes dos serviços, uma faixa apresenta experiência, escuta e cuidado com tipografia destacada e ícones decorativos. No celular, os três itens ficam em linhas, sem rolagem lateral ou contadores animados.
- Estudos com títulos diretos, introduções, termos explicados e próxima leitura.
- Serviços, número do WhatsApp e redes sociais usam os dados publicados em `app.js` e `estudos.js`. A antiga leitura de `terreira_data` foi retirada; dados salvos pelo painel antigo não substituem o conteúdo publicado.
- Apresentação pessoal e demais textos fixos ficam no HTML; os artigos ficam em `estudos.js` e `estudos-guia.js`.
- Localização: endereço completo em linhas curtas, aviso de atendimento com hora marcada, acesso ao Google Maps e agendamento da visita pelo assistente existente. No celular, as informações aparecem antes do mapa.
- Convite final “Abra seus caminhos hoje”: painel claro, caminhos abstratos decorativos e agendamento pelo mesmo assistente. O raio foi retirado dessa seção; o desenho não representa um símbolo ritual.

## Funcionamento

1. `app.js` inicia navegação, galeria automática, galeria ampliada, reflexão diária, perguntas e links de contato.
2. `site-ui.js` controla o vídeo atual de boas-vindas e ajustes da interface.
3. `agendamento.js` prepara preferências para o WhatsApp; não registra agendamento no banco.
4. Os estudos iniciam sua própria ampliação de imagens uma única vez, com nome diferente do inicializador da galeria principal.
5. As animações atuais usam CSS e IntersectionObserver. O canvas de partículas e o sorteio animado do antigo oráculo foram retirados, junto de seus estilos exclusivos. GSAP, ScrollTrigger, VanillaTilt, partículas do início e a antiga tela de entrada também foram retirados.
6. O service worker atualiza HTML, CSS e JavaScript pela rede e preserva as proteções contra arquivos aposentados.

## Limpeza e compatibilidade

- Não restaurar a seta de voltar ao topo, o botão flutuante do WhatsApp, o antigo menu que escurecia a página ou as imagens retiradas da apresentação. O agendamento permanece nos botões integrados às seções.
- As páginas antigas do santuário e `admin.html` redirecionam para o início. Seus arquivos aposentados recebem tratamento próprio no cache.
- O painel, os links de engrenagem do rodapé, seus scripts e estilos, o login e o sistema de avisos foram retirados. `backend-config.js` também foi retirado; não existe cliente Supabase ou Firestore no código vigente.
- Não restaurar o painel, os avisos ou a leitura do armazenamento legado ao atualizar conteúdo. Qualquer retomada exige novo escopo confirmado pelo proprietário.

## Verificação

- Conferir início, estudos, perguntas, vídeo, agendamento e galerias no computador e no celular.
- Abrir, fechar e reabrir uma imagem dos estudos: deve existir uma única camada e a rolagem deve voltar ao fechar.
- Conferir continuidade da leitura, menu sem escurecimento, galeria automática e ausência de rolagem horizontal.
- Receber uma orientação, conferir a leitura e recarregar: deve aparecer o aviso de que já recebeu hoje. Validar outra aba, retorno por histórico, armazenamento bloqueado e liberação na virada do dia de São Paulo. Abrir o agendamento pela reflexão e conferir serviço pré-selecionado ao iniciar pelos cartões de atendimento.
- Conferir a ausência de engrenagens e telas de login; abrir `admin.html` deve levar ao início.
- Consultar `database/README.md` antes de propor qualquer banco. O site atual não exige um.
