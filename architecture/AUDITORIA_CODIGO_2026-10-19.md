# Auditoria de rastros de funcionalidades removidas

Data: 19/10/2026.

## Limpeza aplicada em 19/10/2026

- Corrigida a colisão global da ampliação de imagens: a galeria usa `initGalleryLightbox` e os estudos usam `initStudyLightbox`, ambos com proteção contra inicialização repetida.
- Os estudos agora restauram foco e rolagem ao fechar a imagem; o fechamento também funciona pelo teclado.
- Retiradas as inclusões de VanillaTilt, GSAP e ScrollTrigger nas duas páginas.
- Removidos os inicializadores sem uso, a antiga entrada por vídeo, as partículas do início e a lógica da seta de voltar ao topo.
- Removidos 125 blocos repetidos e 82 regras de componentes retirados da folha principal, além de 17 regras antigas do painel. Corrigidos dois fragmentos de declarações soltas no CSS.
- Removidos os acessos e assinaturas Firestore, os campos OneSignal, o reset antigo e o salvamento administrativo apenas local.
- Serviços e contato ficam somente para consulta no painel até a implementação de leitura e gravação no futuro banco. A autenticação continua bloqueada com o banco desativado.
- Atualizados os procedimentos do site, do painel, o escopo do futuro banco e o texto sobre armazenamento e serviços externos.
- Atualizados os endereços versionados dos arquivos e o cache para `v29`. Mantidos os redirecionamentos e bloqueios de cache do santuário.

### Verificação realizada

- Sintaxe de todos os arquivos JavaScript e equilíbrio dos blocos CSS: aprovados.
- Referências locais a scripts, estilos e arquivos de configuração: existentes.
- Menu móvel sem escurecimento e sem transbordamento horizontal nas páginas verificadas.
- Agendamento até a revisão, reprodução do vídeo e perguntas frequentes: conferidos.
- Galeria com movimento automático, ampliação e fechamento: conferidos.
- Estudos com uma única camada de imagem, fechamento por botão e Escape, reabertura por teclado, próxima leitura e escolha de assunto no celular: conferidos.
- Estilos calculados de 14 elementos de referência do início: iguais antes e depois da limpeza nas dimensões de celular e computador conferidas.
- Painel com campos de login bloqueados e sem controles retirados.
- Nenhum erro ou aviso nos consoles das três páginas durante os testes.

Não há banco conectado; gravação remota, autenticação real e políticas do futuro banco ainda precisam ser implementadas e testadas quando esse trabalho for iniciado. Nenhum banco foi criado, ativado ou modificado nesta limpeza.

Uma cópia dos arquivos anteriores à limpeza está fora da raiz publicada, em `../_revisao_codigo_2026-10-19_0p7jc6wx/`.

## Histórico da inspeção inicial

As referências de linhas e recomendações abaixo descrevem o estado anterior à limpeza.

## Escopo e resultado

Inspeção dos arquivos públicos, scripts, estilos, referências locais e preparação do banco. A ampliação de imagens dos estudos também foi verificada no navegador.

Foram encontrados trechos sem uso, bibliotecas desnecessárias e um conflito real na ampliação de imagens. O resultado das correções e dos testes está registrado no início deste documento.

## 1. Corrigir primeiro: ampliação de imagens iniciada duas vezes

- `app.js:1063` e `estudos.js:2169` declaram a mesma função global, `initLightbox`.
- Os dois arquivos chamam esse nome em seus eventos de carregamento.
- Como os estudos carregam depois, sua função substitui a anterior; ela acaba sendo chamada duas vezes.

**Verificação no navegador:** a página de estudos cria duas camadas `.lightbox-overlay`. Ao ampliar uma imagem, ambas ficam ativas. Fechar a camada visível deixa a outra aberta, enquanto a rolagem da página já é liberada.

**Correção indicada:** dar nomes distintos aos inicializadores da galeria e dos estudos e impedir a criação repetida de uma mesma camada.

## 2. Bibliotecas carregadas sem uso atual

As duas páginas carregam VanillaTilt, GSAP e ScrollTrigger:

- `index.html:563–567`.
- `estudos.html:253–257`.

Não há chamadas ativas para VanillaTilt. Os usos de GSAP/ScrollTrigger estão dentro de `initGSAPAnimations` e `initEstudosGSAP`, que não são chamadas.

**Impacto:** três inclusões externas desnecessárias por página, com transferências e processamento evitáveis.

**Limpeza indicada:** remover as seis inclusões e as duas funções abandonadas em conjunto, preservando as animações atuais que usam outros mecanismos.

## 3. JavaScript de recursos retirados

### Página principal — app.js

| Trecho | Situação |
| --- | --- |
| `renderSobre` | Somente definição; apresentação atual está no HTML. |
| `initServiceCards` | Somente definição. |
| `animateScCounter` | Chamada apenas pelo inicializador de serviços sem uso. |
| `initMagneticBtn` | Somente definição. |
| `initGSAPAnimations` | Somente definição. |
| `FirestoreManager` | Objeto sem consumidores no código atual. |
| `_carouselReady` | Variável sem uso. |
| `initParticles` | Ainda chamada, mas retorna porque `heroCanvas` não existe. |
| `initVideoPreloader` | Ainda chamada, mas o HTML da antiga entrada foi removido. |
| `backToTop` em `initNav` | Busca e eventos opcionais do botão de voltar ao topo já removido. |

O vídeo atual “Boas-vindas de Pai Paulinho” usa `introPresentation`, `introOpen` e `site-ui.js`. Ele continua necessário e é independente do antigo preloader.

### Estudos — estudos.js

| Trecho | Situação |
| --- | --- |
| `initStudyAccordion` | Função vazia ainda chamada no carregamento. |
| `initRevealAnimations` | Somente definição. |
| `initTopicRevealAnimations` | Somente definição. |
| `initEstudosGSAP` | Somente definição. |

A navegação atual dos artigos, explicações iniciais, termos e continuidade de leitura permanece em uso.

## 4. Estilos antigos e repetidos

Em `style.css`, uma comparação estrutural das regras simples identificou 176 regras distintas repetidas, totalizando 180 ocorrências adicionais. Isso não equivale a uma medição de CSS sem uso: ordem, contexto e sobrescritas precisam ser preservados durante a limpeza.

Exemplos de duplicação exata:

- `.intention-chip`: linhas 2579 e 4127.
- `.portal-btn`: linhas 2862 e 4410.
- `.whab-label`: linhas 3658 e 5206.
- `.oracle-front, .oracle-back`: linhas 3810 e 5358.

Também restam estilos de elementos removidos:

- `.back-to-top`.
- `#video-preloader` e a antiga entrada.
- `.sobre-image-frame`, `.sobre-img` e `.sobre-badge`.
- Estados do antigo menu `spatial-drawer-open`, incluindo escurecimento e transformações.
- Compensações desses estados antigos em `site-ui.css`.

**Limpeza indicada:** remover estilos ligados a elementos inexistentes e consolidar duplicações, conferindo o resultado no celular e no computador. Algumas classes antigas, como `.hero-title`, ainda aparecem na página de privacidade; a limpeza deve considerar todas as páginas.

## 5. Preparação do banco e painel: legado que precisa ser alinhado

O banco está desativado em `backend-config.js`, com URL e chave vazias. Não foi encontrada uma conexão ativa do antigo banco. A documentação já informa que a integração futura está pendente.

Pontos para revisar antes de ativar um banco:

- `app.js` ainda contém o objeto Firestore sem consumidores.
- `admin.js` conserva operações legadas de Firestore para serviços e contato, com alternativa em armazenamento local.
- `estudos.js:2121` conserva um listener opcional de Firestore, atualmente inativo.
- O login administrativo foi preparado para Supabase. Essa autenticação não torna as antigas operações Firestore compatíveis com Supabase.
- `admin.js:289–292` ainda procura campos OneSignal inexistentes: `osAppId` e `osApiKey`.
- `admin.js:432` ainda registra um evento opcional para o botão removido `resetarDados`.

**Orientação:** manter o banco desativado e definir uma única integração para autenticação, leitura e gravação antes da ativação. Preservar o escopo de `database/README.md`, que exclui velas, intenções e relatórios do futuro banco.

## 6. Documentação que ficou para trás

- `architecture/POP_01_site_publico.md` ainda descreve partes removidas, como partículas do início e carrossel de depoimentos.
- `index.html` mantém um exemplo comentado de Google Analytics com identificador fictício.
- A página de privacidade menciona Analytics, embora essa implementação não esteja ativa; o texto deve acompanhar os recursos realmente publicados.
- Arquivos históricos de progresso podem conservar menções antigas sem representar código executável.

## 7. Referências que devem permanecer

As seguintes ocorrências do santuário têm função de compatibilidade:

- `santuario.html`, `imprimir-velas.html` e `relatorio-velas.html` são redirecionamentos sem o módulo de velas.
- `sw.js:77–83` trata páginas e arquivos aposentados, evitando que cópias antigas do cache reativem a funcionalidade.
- O arquivo de referência do santuário fica fora da raiz publicada, em `../_arquivo_santuario_2026-10-17/`.
- `backend-config.js` desativado e a documentação do futuro banco têm finalidade atual.

As referências locais a scripts e folhas de estilo dos HTMLs foram conferidas: os arquivos apontados existem.

## Ordem recomendada de trabalho

1. Corrigir a inicialização duplicada das imagens dos estudos.
2. Retirar bibliotecas externas e funções comprovadamente sem uso.
3. Limpar estilos de componentes removidos e consolidar duplicações com conferência visual.
4. Atualizar a documentação do site.
5. Revisar a integração do painel antes de criar e conectar o novo banco.

Limite da análise: encontrar código sem uso não demonstra, por si só, falha visível. O conflito das imagens foi reproduzido; os demais itens foram classificados por suas referências e condições de execução atuais.
