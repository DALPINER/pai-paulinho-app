/* ============================================================
   TERREIRA PAULINHO APP — estudos.js v2.0
   Lógica e Banco de Dados para a Plataforma de E-Learning Espiritual (Focus Mode)
   Vanilla JS puro / Zero-Dependency
   ============================================================ */

'use strict';

// ===== BANCO DE DADOS DINÂMICO DE ESTUDOS =====
const ESTUDOS_DB = {

  // ============================================================
  // --- Módulo 1: Fundamentos ---
  // ============================================================

  'umbanda-candomble': {
    modulo: 'Módulo 1: Fundamentos',
    tag: 'Módulo 1 · Fundamentos e Diferenças',
    titulo: 'Umbanda vs. Candomblé: O Entendimento Respeitoso',
    imagem: './assets/estudos/umbanda_candomble.png',
    legenda: 'A união dos tambores celebra a riqueza ancestral sob diferentes ritos.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the unity of African-Brazilian religions, sacred drums, white clothes, warm spiritual glow.',
    htmlCorpo: `
      <p class="capitular">Para compreender a espiritualidade de matriz africana com a profundidade que ela merece, o primeiro passo é desfazermos as generalizações que séculos de intolerância e desinformação construíram. Embora compartilhem o respeito profundo pela ancestralidade africana e a conexão sagrada com as forças da natureza, a <strong>Umbanda</strong> e o <strong>Candomblé</strong> são religiões distintas em sua história, em seus ritos e nas estruturas do culto que praticam.</p>

      <p>O <strong>Candomblé</strong> é uma religião de base tradicionalista, cujas raízes foram trazidas diretamente da África Subsaariana pelos africanos escravizados que cruzaram o Atlântico. Ao longo dos séculos, os diferentes grupos étnicos — Yoruba (nação Ketu), Ewe-Fon (Jeje) e Bantu (Angola e Congo) — formaram suas casas e tradições no Brasil, preservando idiomas litúrgicos, músicas sagradas e sistemas de adivinhação com notável integridade. No Candomblé, o culto é voltado exclusivamente para os Orixás, Voduns ou Inquices, vistos como forças puras da natureza que nunca se encarnaram como seres humanos. O iniciado entra em transe sagrado para que o Orixá dance no terreiro e irradie seu Axé sobre toda a comunidade.</p>

      <p>A <strong>Umbanda</strong>, por sua vez, é uma religião genuinamente brasileira, nascida da síntese espiritual que só o Brasil poderia gestar. Foi anunciada publicamente em Niterói (RJ) no dia 15 de novembro de 1908, revelada pelo espírito do Caboclo das Sete Encruzilhadas, manifestando-se pelo médium Zélio Fernandino de Moraes. A missão central era clara: espíritos de africanos escravizados, indígenas brasileiros, caboclos e outras almas elevadas desejavam trabalhar pelo povo simples, em sua própria língua, de forma acessível e gratuita. A Umbanda integra o culto aos Orixás com a doutrina espírita de evolução e a herança africana, gerando um culto caridoso, plural e profundamente brasileiro.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">As Principais Diferenças Práticas</h3>
        <p>Compreender as diferenças ajuda o aprendiz a respeitar cada tradição sem confundi-las ou hierarquizá-las:</p>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Incorporação:</strong> No Candomblé, incorporam-se os Orixás puros. Na Umbanda, incorporam-se Guias e Entidades — espíritos humanos desencarnados em evolução.</li>
          <li class="artigo-lista-item"><strong>Finalidade do Culto:</strong> No Candomblé, o rito fortalece o vínculo coletivo com o Orixá. Na Umbanda, o atendimento individual caridoso e a cura do consulente são o centro.</li>
          <li class="artigo-lista-item"><strong>Língua Litúrgica:</strong> O Candomblé mantém cantigas em Iorubá, Fon ou Kimbundu. A Umbanda opera em português brasileiro.</li>
          <li class="artigo-lista-item"><strong>Processo Iniciático:</strong> O Candomblé exige um longo processo de iniciação (feitura de santo). A Umbanda tem um desenvolvimento mediúnico mais acessível.</li>
          <li class="artigo-lista-item"><strong>Sincretismo:</strong> A Umbanda incorporou historicamente elementos do catolicismo e do kardecismo. O Candomblé contemporâneo tende à reafricanização das práticas.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Candomblé e Umbanda não são rivais — são irmãos de Axé de caminhos diferentes. O Candomblé é a raiz profunda e o tronco ancestral. A Umbanda é o galho que cresceu em terra brasileira para dar sombra e acolhimento a quem mais precisava. Respeitar um é honrar o outro."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>É igualmente importante compreender que nem o Candomblé nem a Umbanda praticam o que o senso comum chama de "magia negra". Ambas são religiões com teologias, éticas e visões de mundo sofisticadas. O preconceito religioso, alimentado por séculos de colonização e pela criminalização das práticas africanas no Brasil, ainda gera um estigma profundamente injusto. Conhecer é o primeiro e mais poderoso ato de respeito.</p>

      <p>A convivência harmoniosa e o estudo humilde das duas tradições é o caminho que Pai Paulinho trilha e recomenda. Em nossa Terreira, o Axé é uno: o que fortalece a raiz africana, fortalece o galho brasileiro. Que os Orixás iluminem os seus estudos com sabedoria e amor verdadeiros.</p>
    `
  },

  'orixas-entidades': {
    modulo: 'Módulo 1: Fundamentos',
    tag: 'Módulo 1 · Fundamentos e Diferenças',
    titulo: 'Orixás vs. Entidades: Compreendendo a Linha de Lei',
    imagem: './assets/estudos/axe_criacao.png',
    legenda: 'O Orixá brilha no topo como energia pura; a Entidade atua na terra estendendo a mão.',
    prompt: 'Cinematic 4K photography, spiritual hierarchy, abstract light representing pure deity on top, warm glowing human-like spirit extending helping hand below.',
    htmlCorpo: `
      <p class="capitular">Um dos conceitos mais fundamentais e frequentemente mal compreendidos por quem inicia a caminhada espiritual é a distinção entre a vibração de um Orixá e a atuação de uma Entidade de Umbanda. Ambos são canais do sagrado e condutores de Axé, mas operam em planos evolutivos, de frequência e de missão radicalmente diferentes — e compreender essa diferença é a base de todo o estudo espiritual sério.</p>

      <p>Os <strong>Orixás</strong> são as grandes forças da criação, extensões diretas da vontade de Olorum (Deus Supremo) ou Zambi. Eles representam as leis divinas e as forças físicas que mantêm o equilíbrio do universo: a força do raio, o movimento das águas, o sopro do vento, o calor do fogo, a profundidade da terra. Na teologia da Umbanda e do Candomblé, os Orixás jamais encarnaram como seres humanos comuns na Terra. Eles são energias arquetípicas cósmicas. Quando um médium "incorpora" a energia de um Orixá, está na verdade sintonizando seu campo áurico com um feixe canalizado dessa força elemental pura — uma experiência de altíssimo nível espiritual.</p>

      <p>As <strong>Entidades</strong> (também chamadas de Guias de Trabalho ou Guias Espirituais) são espíritos que já viveram vidas humanas na Terra. Elas passaram pelas provações da matéria, cometeram erros, aprenderam virtudes e, após desencarnarem, escolheram continuar sua evolução através do serviço caridoso no plano astral. Elas se apresentam em formas arquetípicas reconhecíveis — o ancião sábio de cachimbo, o guerreiro índio destemido, a senhora alegre — para criar uma ponte de identidade e afeto com quem buscam ajudar. Sua linguagem é acessível, humana e direta.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Quadro Comparativo: Orixás e Entidades</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Natureza:</strong> Orixás são forças cósmicas nunca encarnadas. Entidades são espíritos de humanos desencarnados.</li>
          <li class="artigo-lista-item"><strong>Comunicação:</strong> Orixás comunicam-se pela força do transe e dos ritos sagrados. Entidades conversam diretamente com o consulente em português.</li>
          <li class="artigo-lista-item"><strong>Atuação:</strong> Orixás regem as leis da natureza e o destino das almas. Entidades oferecem aconselhamento, limpeza energética e passes magnéticos.</li>
          <li class="artigo-lista-item"><strong>Frequência Vibracional:</strong> A frequência dos Orixás é altíssima. As Entidades vibram em frequência intermediária, mais próxima da vibração humana.</li>
          <li class="artigo-lista-item"><strong>Relação:</strong> As Entidades trabalham sob a regência e a permissão dos Orixás que governam sua linha de trabalho.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando eu digo que Xangô me rege, estou dizendo que a justiça, a rocha e o fogo são a minha essência. Quando os guias da nossa Casa falam com você, são almas irmãs, que já sofreram, que já amaram e aprenderam — e é exatamente por isso que elas sabem encontrar as palavras certas para o seu coração."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Na prática de uma Terreira de Umbanda, os dois planos atuam em perfeita harmonia e hierarquia. O Orixá regente da casa — no nosso caso, Xangô Aganjú — preside toda a cerimônia de uma instância superior, enquanto suas falanges de entidades descem ao Congá para o trabalho caridoso concreto. É uma divisão sagrada de funções que garante ordem, eficiência espiritual e proteção a todos os presentes.</p>

      <p>Respeitar essa hierarquia não significa diminuir a importância das Entidades — muito pelo contrário. Os Pretos Velhos que sofreram nas senzalas carregam uma sabedoria que transcende o sofrimento físico. Sua paciência e humildade os elevaram a vibrações que poucas almas humanas atingem. São, em verdade, verdadeiros Mestres espirituais que escolheram permanecer próximos à humanidade por puro e inabalável amor.</p>
    `
  },

  // ============================================================
  // --- Módulo 2: Panteão dos Orixás ---
  // ============================================================

  'exu-orixa': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Forças da Natureza',
    titulo: 'Exu: O Senhor do Movimento, dos Caminhos e da Comunicação',
    imagem: './assets/estudos/exu_orixa.png',
    legenda: 'Um tridente rústico de ferro na encruzilhada abre os caminhos materiais.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Exu Orixa, glowing aura of fire and red dust, holding a keys and trident, ethereal background.',
    htmlCorpo: `
      <p class="capitular">Laroyé, Exu! Antes de qualquer estudo sobre os demais Orixás, é preciso saudar e compreender Exu, pois sem ele nenhum trabalho espiritual se move, nenhuma prece chega ao seu destino e nenhum caminho se abre. Ele é a primeira e a última energia invocada em qualquer ritual de Umbanda e Candomblé, e o equívoco histórico de associá-lo ao demônio cristão é uma das maiores injustiças que o preconceito colonial impôs às religiões africanas.</p>

      <p>Na teologia ioruba, Exu (também chamado de Elegbá, Legbá ou Bará) é o princípio do movimento e da comunicação entre os mundos. Ele é o mensageiro divino que transita livremente entre o Orun (plano espiritual) e o Ayê (plano material), garantindo que as preces humanas cheguem aos Orixás e que as bênçãos dos Orixás alcancem os humanos. É a energia que coloca tudo em fluxo. Sem Exu, o universo estagnaria. Por isso, sua personalidade é dinâmica, jovial, criativa e imprevisível — pois o movimento real não segue padrões fixos.</p>

      <p>Exu governa as encruzilhadas, as estradas, os portões e os começos. Ele é o Orixá do livre-arbítrio: não pune nem recompensa por iniciativa própria, mas garante que a lei do retorno — a consequência natural de cada escolha humana — siga seu curso justo e preciso. Quando você age com honestidade e ética, Exu abre seus caminhos. Quando você age com má-fé, ele simplesmente deixa que as consequências de suas próprias escolhas retornem multiplicadas.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Exu</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Laroyé! / Mojubá!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Vermelho e preto (ou vermelho e branco, dependendo da nação)</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7 e seus múltiplos</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Segunda-feira</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Terra e fogo</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Ogó (cajado ritual), tridente de ferro, chave</li>
          <li class="artigo-lista-item"><strong>Oferenda (Padê):</strong> Farinha de mandioca com azeite de dendê ou mel, cachaça, charutos</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> Santo Antônio e São Bartolomeu</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Exu é o primeiro que saudamos porque ele é a energia que torna possível qualquer comunicação com o sagrado. Ignorá-lo não é devoção — é ignorância. Na nossa Casa, Exu é tratado com todo o respeito que merece um Orixá guardião dos caminhos e da verdade."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>É fundamental distinguir Exu, o Orixá, dos Exus que trabalham como entidades da Esquerda na Umbanda. O Orixá Exu é uma força cósmica universal, enquanto os Exus da Esquerda (como Exu Caveira, Exu Tranca-Rua, Exu Sete Encruzilhadas) são espíritos desencarnados que trabalham sob a regência do Orixá Exu, atuando nas energias mais densas do plano material para proteger e abrir caminhos aos consulentes. São distintos em natureza, mas unidos pela mesma vibração de movimento e verdade.</p>

      <p>Que Exu Laroyé abra os seus caminhos de estudo, de prosperidade e de paz. Que a sua chave gire com suavidade na fechadura dos destinos que o Axé reservou para você. Laroyé!</p>
    `
  },

  'ogum': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Forças da Natureza',
    titulo: 'Ogum: A Força do Ferro, do Trabalho e da Coragem Inabalável',
    imagem: './assets/estudos/ogum_orixa.png',
    legenda: 'A espada forjada e as folhas de São Jorge simbolizam a defesa inabalável.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Ogum, glowing aura of blue iron and metal sparks, highly detailed, sacred, majestic, ethereal background.',
    htmlCorpo: `
      <p class="capitular">Patacori Ogum! O Orixá do ferro, das ferramentas e da guerra justa é aquele que desbrava o caminho à força de sua espada para que todos os demais Orixás e seus filhos possam avançar. Ele é o pioneiro, o construtor, o trabalhador incansável — e sua energia é a matéria-prima de todo progresso humano que não se envergonha do suor nem da luta.</p>

      <p>Na mitologia ioruba, Ogum é um dos mais antigos Orixás, filho de Iemanjá e irmão de Xangô e Oxóssi, entre outros. Ele governa o ferro em todas as suas manifestações: as ferramentas agrícolas que alimentam a família, os instrumentos do artesão que constroem a cidade, as armas que defendem o povo das injustiças e os instrumentos cirúrgicos que curam o corpo. Diz a tradição que Ogum foi o primeiro a abrir as matas primordiais com seu facão, permitindo que a vida humana se organizasse e prosperasse. Sem Ogum, não haveria civilização.</p>

      <p>Sua personalidade é direta, impaciente com a falsidade e absolutamente leal às causas que abraça. Ele não admite covardia ou desonestidade — e quando um filho de Ogum trai seus próprios valores, o Orixá os confronta com a força e a clareza de sua espada. Ogum não é um Orixá da diplomacia: é o Orixá da ação concreta, da coragem de levantar e começar, da disciplina de terminar o que se começa com honra.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Ogum</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Patacori Ogum! / Ogum Iê!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Azul-marinho e verde (ou apenas verde, dependendo da nação)</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Terça-feira</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Metal e terra</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Espada de ferro, facão, enxada, marreta, foice</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Feijão-preto com dendê, inhame, frutas robustas, cachaça seca</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> São Jorge (mais comum) e Santo Antônio Abade</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Ogum não nos dá o caminho pronto — ele nos dá a espada e a coragem para abri-lo. Se você está travado nos seus projetos ou sentindo que os seus esforços não avançam, peça licença a Ogum. Ele não promete facilidade; promete que, com ética e determinação, o caminho será aberto a golpes de machado se for preciso."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Na prática espiritual da Umbanda, a energia de Ogum é invocada especialmente em situações de bloqueio profissional, falta de emprego, disputas judiciais que envolvam a defesa da justiça, proteção física em situações de perigo e para cortar laços energéticos negativos que impedem o avanço material. Os Caboclos que trabalham na linha de Ogum trazem essa vibração guerreira de forma mais próxima ao consulente, traduzindo a força do Orixá em orientações práticas e passes magnéticos de alto poder desbloqueador.</p>

      <p>Para se conectar com a energia de Ogum, cultive a disciplina no trabalho, a honestidade nas suas relações e a coragem de defender o que é justo, mesmo quando isso seja inconveniente. Que a espada de Ogum abra os caminhos que o Axé reservou para a sua prosperidade. Patacori!</p>
    `
  },

  'oxossi': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Forças da Natureza',
    titulo: 'Oxóssi: O Caçador Sagrado da Fartura, do Saber e da Providência',
    imagem: './assets/estudos/oxossi_orixa.png',
    legenda: 'O Ofá de bronze no coração da floresta traz a fartura espiritual e material.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Oxossi, glowing aura of green forest leaves and bow, highly detailed, majestic, ethereal background.',
    htmlCorpo: `
      <p class="capitular">Okê Arô, Oxóssi! O rei das florestas, senhor das matas primordiais e guardião de todos os que buscam o conhecimento e a fartura. Oxóssi não é apenas o caçador que alimenta o corpo com os frutos da floresta — ele é o caçador que, com uma única flecha certeira, alimenta também a alma com o saber profundo das coisas da terra e do espírito.</p>

      <p>Na tradição ioruba, Oxóssi é o rei do reino de Ketu, uma das nações africanas que mais influenciou o Candomblé brasileiro. Ele é o caçador por excelência: aquele que acorda antes do amanhecer, aguça seus sentidos, elimina distrações e lança apenas uma flecha — porque a precisão vale mais que a quantidade. Essa filosofia do "uma flecha, um alvo" é a grande lição de Oxóssi: não desperdice energia. Foco, paciência e determinação são as virtudes do grande caçador da vida.</p>

      <p>Oxóssi governa a fartura em todas as suas dimensões: a fartura do alimento que nunca falta à mesa, a fartura do conhecimento que ilumina a mente, a fartura da saúde que emana das ervas sagradas que ele conhece e a fartura espiritual que vem de uma vida vivida em equilíbrio com a natureza. Seus filhos são frequentemente dotados de grande inteligência, agilidade mental, curiosidade intelectual e um amor profundo pelos animais e pelas matas.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Oxóssi</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Okê Arô! / Okê Caboclo!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Verde e azul (ou azul-turquesa, dependendo da corrente)</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7 (em harmonia com Ogum, seu irmão)</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Quinta-feira</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Floresta, vegetação e ar fresco</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Ofá (arco e flecha de metal), ferramentas de caça</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Milho, inhame, canjica, frutas da mata, mel de abelha</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> São Sebastião (flechado, como a flecha de Oxóssi)</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Oxóssi nos ensina que a fartura começa dentro de você. Quando você cultiva o seu conhecimento, aguça seus dons e age com o foco de um caçador que nunca desperdiça sua flecha — a providência dos Orixás encontra o caminho até a sua vida. A mata sempre tem alimento para quem sabe buscar com respeito."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Na Umbanda, a energia de Oxóssi é especialmente invocada para atrair prosperidade material, abrir caminhos para novos empregos e negócios, fortalecer o estudo e o aprendizado, recuperar a saúde física e restabelecer o equilíbrio com a natureza em pessoas que vivem em grandes centros urbanos e perderam o contato com o mundo natural.</p>

      <p>Para se conectar com Oxóssi, cultive a paciência, a precisão no que você faz e o amor ao estudo. Uma caminhada ao ar livre, uma planta cuidada com amor ou um momento de silêncio na natureza já são oferendas genuínas que Oxóssi reconhece. Okê Arô!</p>
    `
  },

  'xango': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Forças da Natureza',
    titulo: 'Xangô Aganjú: A Justiça do Trovão, a Força da Pedreira Sagrada',
    imagem: './assets/estudos/xango_orixa.png',
    legenda: 'O Oxê duplo cravado na pedreira sob a força do raio simboliza a lei justa.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Xango, glowing aura of hot lava and volcano stones, highly detailed, red and bronze clothes, majestic, holding axe.',
    htmlCorpo: `
      <p class="capitular">Kaô Kabecilê! Xangô é o Orixá do raio, do trovão, da justiça divina e das pedreiras sagradas. Ele é o patrono desta Terreira e o regente espiritual de Pai Paulinho, sendo o Orixá mais presente em nosso Congá e em nossos corações. Sua energia é como o trovão: poderosa, inequívoca e purificadora — desfaz a escuridão com uma luz que não pede licença.</p>

      <p>Na mitologia ioruba, Xangô foi o terceiro Aláàfin (rei) de Oyó, um dos maiores reinos da África Ocidental. Sua história é de grandeza, excesso, arrependimento e glorificação. Rei guerreiro, dançarino magistral e senhor dos tambores sagrados (Batá), Xangô personifica a ambivalência humana: pode ser generoso e protetor, ou implacável e destruidor — sempre conforme a balança da justiça exige. Ele pesa as ações humanas com seu machado duplo (Oxê) e distribui as consequências com absoluta precisão.</p>

      <p>Xangô Aganjú é uma das principais qualidades (manifestações) do Orixá Xangô. Aganjú é o nome do deserto e do vulcão — um Xangô mais antigo, mais telúrico e mais próximo das forças primordiais da terra. A energia de Aganjú é intensa, como a lava que destrói o que não serve para criar solo fértil para o novo. É a transformação que dói, mas que é necessária. É a crise que precisa acontecer para que o crescimento real seja possível.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Xangô</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Kaô Kabecilê! / Saravá Xangô!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Vermelho e branco (alternados); marrom e branco (qualidade Aganjú)</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 6 e seus múltiplos</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Quarta-feira e sábado</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Fogo, pedra e raio</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Oxê (machado duplo), pedras de raio (meteoritos e quartzos), Edun Ara</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Amalá (quiabo com azeite de dendê e farinha), carneiro, acaçá</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> São Jerônimo e Santa Bárbara (pela simbologia do raio)</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Xangô Aganjú não pede desculpas pela justiça que ele faz. Ele não é cruel — ele é exato. Quando você age com honestidade, com trabalho e com respeito ao próximo, o machado de Xangô vira escudo. Quando você age com falsidade, ele vira instrumento da lei do retorno. Na nossa Casa, pedimos a Xangô que sempre nos mostre a verdade, mesmo que ela doa."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia de Xangô é especialmente invocada para resolver disputas judiciais, buscar proteção contra injustiças e perseguições, fortalecer a mente contra a inveja e o "olho gordo", e para dar coragem e firmar o caráter de quem está sendo tentado a agir desonestamente. Xangô não é conivente com a fraqueza moral — mas é infinitamente justo e compassivo com quem peca por fraqueza e busca se corrigir de coração.</p>

      <p>Em nossa Terreira, a saudação a Xangô ecoa nas paredes de pedra do Congá a cada cerimônia. Que o trovão de Xangô Aganjú limpe o seu Ori de toda injustiça e que o brilho do seu raio ilumine os seus caminhos de prosperidade, de saúde e de verdade. Kaô Kabecilê!</p>
    `
  },

  'oxumare': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Forças da Natureza',
    titulo: 'Oxumarê: A Serpente Arco-Íris do Ciclo Infinito e da Renovação',
    imagem: './assets/estudos/oxumare_orixa.png',
    legenda: 'A névoa da cachoeira e o arco-íris anunciam tempos de transformação.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Oxumare, glowing aura of rainbow and serpent scales, highly detailed, majestic, ethereal background.',
    htmlCorpo: `
      <p class="capitular">Arroboboi, Oxumarê! A divindade da serpente cósmica, do arco-íris que une a terra ao céu e da renovação perpétua dos ciclos da existência. Oxumarê nos ensina que nada na vida é permanente — nem o sofrimento, nem a alegria — e que a sabedoria está em aprender a fluir graciosamente pelos processos de transformação sem resistir ao que é necessário.</p>

      <p>Na cosmologia ioruba, Oxumarê (ou Dan, na nação Jeje) é a grande serpente que circunda o mundo, mordendo a própria cauda num símbolo que a filosofia ocidental mais tarde chamaria de Ouroboros — o círculo do eterno retorno. Ele é o responsável por garantir que as energias do cosmos não estagnem. Onde há bloqueio, Oxumarê traz movimento. Onde há excesso, ele traz equilíbrio. Ele transita entre o céu e a terra como o arco-íris, sendo a ponte entre o plano espiritual e o plano material.</p>

      <p>Oxumarê é um Orixá de dualidade de gênero que passa metade do ano como masculino e metade como feminino — ensinando-nos que as polaridades não se excluem, mas se completam. O arco-íris representa a promessa visível no céu de que o ciclo de chuva (dificuldade) passou e o ciclo de claridade (oportunidade) se inaugura. Quando você avista um arco-íris, é uma mensagem de que Oxumarê está presente, anunciando recomeços.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Oxumarê</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Arroboboi! / Arrô Boi!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Amarelo e verde (representando as cores do arco-íris); às vezes todas as cores do espectro</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7 e 17</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Sábado</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Água, ar e as forças da transformação cíclica</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Serpente de metal ou tecido, representações do arco-íris</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Milho cozido com mel, abóbora, inhame, frutas coloridas</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> São Bartolomeu</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando tudo parece estar se desfazendo, lembre-se de Oxumarê: ele é a prova de que toda serpente que perde a pele não está morrendo — está renascendo. As fases difíceis da sua vida não são o fim. São a muda necessária para que você surja renovado e mais forte do que jamais foi."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Na prática espiritual, a energia de Oxumarê é especialmente invocada para auxiliar pessoas que estão passando por períodos de transição intensa: mudanças de emprego, fim de relacionamentos, processos de cura de vícios ou qualquer situação em que a resistência ao novo está gerando sofrimento desnecessário. Ele ajuda a dissolver a resistência e a cultivar a flexibilidade interior que permite atravessar as mudanças com graciosidade.</p>

      <p>Se você está em uma fase de transformação, saúde o arco-íris quando o vir no céu. Diga de coração: "Arroboboi, Oxumarê! Eu me rendo ao que precisa mudar em mim." Essa pequena oração carrega mais força espiritual do que você imagina. Arroboboi!</p>
    `
  },

  'ossaim': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Forças da Natureza',
    titulo: 'Ossaim: O Segredo Sagrado das Folhas e da Medicina do Axé',
    imagem: './assets/estudos/ossaim_orixa.png',
    legenda: 'O cajado com o pássaro de ferro e as folhas curativas de Ossaim.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Ossaim, glowing aura of magical green herbs and roots, highly detailed, majestic, ethereal background.',
    htmlCorpo: `
      <p class="capitular">Ewê Assá! Ossaim é o Orixá mais misterioso e reservado do panteão africano. Ele habita o interior mais profundo das matas, longe dos olhares curiosos dos que não merecem ainda seus segredos, e guarda em suas mãos o maior tesouro que a natureza nos deu: o conhecimento das folhas sagradas que curam o corpo, equilibram o espírito e consagram os rituais sagrados de toda a tradição de matriz africana.</p>

      <p>Na tradição ioruba, existe um axioma fundamental que rege todo o sistema ritualístico: <em>"Kosi ewê, kosi Orixá"</em> — sem folha, não há Orixá. Isso significa que toda cerimônia sagrada, todo banho de purificação, todo amaci de consagração, toda limpeza energética e toda oferenda aos Orixás depende diretamente da licença e do Axé de Ossaim. Ele é o portal vegetal pelo qual toda a energia sagrada pode fluir do mundo espiritual para o mundo material. Sem suas folhas, os rituais perdem força e significado.</p>

      <p>A personalidade de Ossaim reflete a complexidade de sua missão. Ele é representado como um ser com apenas um olho, um braço e uma perna — metáfora profunda que nos ensina que o conhecimento sagrado nunca é dado em sua totalidade. Sempre haverá um mistério além do que vemos, uma camada mais profunda da realidade que só a humildade e a dedicação genuína podem revelar com o tempo.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Ossaim</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Ewê Assá! / Ossain!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Verde e branco</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Quinta-feira (em harmonia com as matas)</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> A mata, o ar, a vegetação sagrada</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Cajado de ferro com pássaro no topo (Agere Ossaim)</li>
          <li class="artigo-lista-item"><strong>Folhas fundamentais:</strong> Arruda, guiné, pinhão-roxo, espada-de-são-jorge, alfazema, erva-santa</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> São Benedito (em algumas regiões)</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando preparo um banho de ervas para um filho espiritual, estou pedindo licença a Ossaim para acessar a medicina que ele guarda. As ervas não são ingredientes — são portais sagrados. O respeito com que colhemos, preparamos e oferecemos cada folha determina o poder de cura que ela vai liberar."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Na prática da Umbanda e do Candomblé, a energia de Ossaim é invocada para todas as preparações rituais que envolvem ervas: banhos de descarga, banhos de atrair prosperidade, amacis de consagração mediúnica, defumações com ervas sagradas e a preparação dos assentamentos dos Orixás. Nenhum pai ou mãe de santo sério trabalha sem buscar a licença de Ossaim antes de tocar nas folhas.</p>

      <p>Se você deseja se aproximar de Ossaim, comece por respeitar as plantas ao seu redor. Não arranque ervas sem pedir licença. Não desperdice folhas sagradas. Cultive uma plantinha em casa e a cuide com amor. O porteiro das matas abre seus mistérios apenas para aqueles que demonstram, no cotidiano, o respeito que a natureza merece. Ewê Assá!</p>
    `
  },

  'omulu': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Forças da Natureza',
    titulo: 'Obaluaiê / Omulu: O Senhor da Saúde e o Mistério da Transmutação',
    imagem: './assets/estudos/omulu_orixa.png',
    legenda: 'A palha da costa e as flores de pipoca consagram a transmutação e a saúde.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Omulu Obaluaie, covered in straw armor, glowing warm spiritual light from underneath straw, majestic.',
    htmlCorpo: `
      <p class="capitular">Atotô! Pedimos licença e respeito profundo para falar do senhor mais temido e mais amado do panteão africano. Obaluaiê (em sua manifestação jovem) e Omulu (em sua manifestação ancião) são dois aspectos do mesmo Orixá: o senhor da terra profunda, das doenças, da cura e de tudo que se passa na fronteira entre a vida e a morte. Ele é simultaneamente o que adoece e o que cura — pois é o mesmo Orixá que conhece a doença que pode conhecer o seu remédio.</p>

      <p>A mitologia de Omulu/Obaluaiê é uma das mais comoventes do panteão ioruba. Ele nasceu coberto de feridas e marcas na pele — símbolo das enfermidades que ele conhece tão intimamente. Foi rejeitado por sua mãe ainda criança e criado por Oxum com todo o amor materno que o mundo lhe negara. Essa história de rejeição e superação forja o caráter de seu Axé: ele é o Orixá que mais compreende o sofrimento humano, porque o viveu profundamente. Por isso, sua cura é a mais profunda e a mais transformadora de todo o panteão.</p>

      <p>Ele é coberto da cabeça aos pés pela palha da costa (Azê) — e isso não é por acidente. A tradição diz que a palha esconde um brilho tão intenso que mortais comuns não suportariam ver. Sob o véu da aparente simplicidade de suas vestimentas, habita uma das vibrações mais elevadas do cosmos. É a lição da humildade: as maiores almas muitas vezes aparecem diante de nós nas roupagens mais simples.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Obaluaiê / Omulu</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Atotô! / Saluba Omulu!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Preto e branco; roxo e branco; marrom terra</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7 e 17</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Segunda-feira e sexta-feira</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Terra, o cemitério como espaço sagrado de transformação</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Xaxará (vassoura ritual de palha com búzios e contas)</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Pipoca branca (símbolo de cura), azeite de dendê, vinho tinto</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> São Lázaro e São Roque (associados à cura de doenças)</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Muita gente tem medo de Omulu porque ele fala de doença e de morte. Mas quem já buscou Omulu em um momento de enfermidade grave sabe: ele é o médico mais generoso que existe. Ele não apenas cura o corpo — ele purifica o espírito, remove o que estava podre na sua alma e te devolve mais inteiro do que você era antes de adoecer."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia de Omulu/Obaluaiê é invocada para a cura de doenças físicas graves (especialmente as de pele e sistema imunológico), para a proteção contra epidemias, para a eliminação de energias de morte e decomposição que estejam aderidas ao campo áurico, e para a aceitação serena das perdas e dos processos de mudança que envolvem "mortes simbólicas".</p>

      <p>A pipoca branca que se espalha no chão em honra de Omulu representa a explosão e a dispersão das doenças, que se abrem e se desfazem sob a força curativa do Orixá. Que Omulu afaste toda enfermidade da sua vida e que sua saúde floresça como a pipoca ao calor do amor sagrado. Atotô!</p>
    `
  },

  'oxum': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Águas e Femininos',
    titulo: 'Oxum: O Rio Dourado da Prosperidade, do Amor e da Fertilidade',
    imagem: './assets/estudos/oxum_orixa.png',
    legenda: 'O Abebê de latão dourado flutua sobre as águas doces e lírios amarelos.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Oxum, glowing aura of gold water and waterfalls, highly detailed, beautiful, majestic, golden crown.',
    htmlCorpo: `
      <p class="capitular">Oraieiêô, Mamãe Oxum! A rainha das águas doces, senhora de todas as cachoeiras, rios e lagos de águas serenas. Oxum é a beleza que torna a vida suportável, o amor que torna a vida digna e a prosperidade que transforma a sobrevivência em plenitude. Ela é a mais sedutora e a mais poderosa das Orixás femininas — e seus filhos e filhas carregam em suas almas a marca indelével de sua graça e de sua intensidade emocional.</p>

      <p>Na mitologia ioruba, Oxum é a segunda esposa de Xangô e a responsável por salvar a humanidade da extinção numa das mais belas histórias do panteão africano. Quando todos os Orixás masculinos falharam em convencer a terra a ser fértil novamente, Oxum dançou, sorriu, utilizou sua magia das águas doces e sua beleza sem igual — e a terra respondeu com abundância. Essa história revela a essência de Oxum: a suavidade que supera a força bruta; a sedução que resolve o que o poder não consegue.</p>

      <p>Seus filhos e filhas são frequentemente pessoas de grande beleza interior e exterior, altamente sensíveis às emoções do ambiente, dotadas de intuição poderosa, amorosas até o excesso e com uma relação complexa com o amor-próprio. A lição mais importante de Oxum é que a doçura não é fraqueza — mas ela também ensina que o amor por si mesmo deve vir antes do amor pelo outro. Aquela que não se valoriza deixa que as águas de sua vida sirvam de espelho para outros, enquanto ela mesma seca por dentro.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Oxum</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Oraieiêô! / Ora Iê Iê Oxum!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Amarelo-ouro e dourado</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 5 e seus múltiplos</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Sábado</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Água doce (cachoeiras, rios, lagos)</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Abebê (espelho circular dourado), adornos de ouro, leque</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Mel (sua oferenda mais sagrada), acarajé, banana, camarão seco, canjica amarela</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> Nossa Senhora Aparecida e Nossa Senhora das Candeias</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Oxum me ensinou que o amor verdadeiro começa dentro de nós. Antes de pedir que o Orixá mande o amor que você quer, pergunte-se: você está amando a si mesmo com a mesma intensidade que deseja ser amado? A água de Oxum só enche o copo de quem primeiro aprendeu a segurar o próprio copo com dignidade."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia de Oxum é invocada para a cura de feridas emocionais e do coração, para atrair relacionamentos afetivos saudáveis e recíprocos, para resolver problemas relacionados à fertilidade e à gestação, para destravar o fluxo financeiro quando ele está bloqueado, e para recuperar a autoestima e o amor-próprio em pessoas que sofreram abusos ou rejeições profundas.</p>

      <p>Para se aproximar de Oxum, cultive sua própria beleza interior: cuide-se, respeite-se, aja com gentileza. Leve flores amarelas para uma cachoeira ou curso d'água limpo, mergulhe seus pés nas águas com gratidão e deixe que o fluxo do rio leve embora o que já não serve. Oraieiêô, Mamãe Oxum!</p>
    `
  },

  'iansa': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Águas e Femininos',
    titulo: 'Iansã: O Vento da Coragem, o Raio da Transformação Necessária',
    imagem: './assets/estudos/iansa_orixa.png',
    legenda: 'A espada de cobre e o Eruxim reluzem sob céus avermelhados de tempestade.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Iansa Oya, glowing aura of copper winds and lightning, highly detailed, fierce and majestic, red/copper clothes.',
    htmlCorpo: `
      <p class="capitular">Eparrei, Iansã! A rainha dos ventos, das tempestades e dos raios. Iansã — cujo nome ioruba é Oyá, a que rasgou — é a Orixá que não pede permissão: ela chega como a tempestade, sem aviso, transformando tudo o que toca. Ela é a força feminina que não aceita a passividade, que recusa o aprisionamento e que mostra ao mundo que o vento não se prende em jaulas.</p>

      <p>Na mitologia ioruba, Iansã foi a grande esposa guerreira de Xangô. Ela é a única Orixá que não teme os eguns (espíritos dos mortos) — pelo contrário, ela os conduz, os organiza e os direciona. Por isso, nos funerais e nas cerimônias de despedida dos desencarnados, é Iansã quem preside os rituais de passagem. Ela é a fronteira entre o mundo dos vivos e o mundo dos mortos, e sua coragem ao transitar nessa fronteira a torna uma das Orixás mais poderosas e mais respeitadas do panteão.</p>

      <p>A personalidade de Iansã é apaixonada, intensa, impaciente com a mediocridade e intolerante com a injustiça. Ela ama com a força de um furacão e quebra com a precisão de um raio. Seus filhos e filhas têm em comum a intensidade emocional, a capacidade de iniciativa e a força de recomeçar do zero quantas vezes forem necessárias. São pessoas que aprendem sobre si mesmas nas tempestades, não nas calmarias.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Iansã</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Eparrei! / Eparrei Oyá!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Vermelho, rosa-choque e cobre (alternados)</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 9 e seus múltiplos</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Quarta-feira e sexta-feira</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Vento, tempestade, raio e fogo</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Eruexim (espanador de rabo de animal), espada de cobre, coroa com 9 pontas</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Acarajé, acaçá, quiabo, quindim, vinho tinto</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> Santa Bárbara (pela associação com a tempestade e o raio)</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Iansã não nos deixa estagnar. Quando a sua vida parece completamente parada, quando o medo de mudar está te aprisionando — é ela quem chega como vento forte para remexer tudo e te forçar a voar. Às vezes, precisamos que a tempestade derrube o que estava podre antes que a leveza do novo possa chegar."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia de Iansã é invocada para superar o medo do novo, para impulsionar recomeços necessários, para afastar espíritos obsessores estagnados ao redor de uma pessoa ou ambiente, para cortar laços emocionais tóxicos e para trazer o movimento de volta a projetos e relacionamentos que entraram em letargia.</p>

      <p>Se você precisa de coragem para mudar algo que está te aprisionando, acenda uma vela vermelha para Iansã e diga de coração: "Eparrei, Minha Mãe! Venha com seus ventos de transformação e me ajude a voar além do medo." Ela ouve, e ela age — muitas vezes mais rápido do que esperamos. Eparrei!</p>
    `
  },

  'iemanja': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Águas e Femininos',
    titulo: 'Iemanjá: A Mãe dos Oceanos, Guardiã do Equilíbrio Mental',
    imagem: './assets/estudos/iemanja_orixa.png',
    legenda: 'Pérolas, conchas e um espelho prateado sob o luar na praia sagrada.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Iemanja, glowing aura of blue ocean water, highly detailed, beautiful and serene, silver crown, majestic.',
    htmlCorpo: `
      <p class="capitular">Odoyá, Iemanjá! A grande mãe de todos, rainha das águas do mar e senhora de todas as cabeças (Ori). Iemanjá é o acolhimento absoluto: o abraço que não julga, as ondas que limpam sem cobrar, o horizonte azul que diz ao coração exausto que ainda existe imenso espaço para o recomeço. Nenhum Orixá cuida da saúde mental humana com a profundidade e o carinho silencioso de Iemanjá.</p>

      <p>Na mitologia ioruba, Iemanjá (Yemọja — "mãe cujos filhos são como peixes") é a mãe de quase todos os Orixás, o ventre primordial de onde a vida abundante brotou. Ela governa as águas salgadas do mar e, por extensão, toda a imensidão que protege e desafia ao mesmo tempo. O mar de Iemanjá é a metáfora perfeita para as profundezas da psique humana: belo e sereno na superfície calma, mas poderoso e capaz de tudo transformar quando suas tempestades internas são ignoradas.</p>

      <p>Seus filhos e filhas têm uma tendência natural ao cuidado com o outro, à maternidade espiritual, ao altruísmo e à sensibilidade profunda ao estado emocional dos que os rodeiam. São pessoas que absorvem as emoções do ambiente — o que os torna curandeiros naturais, mas também os expõe ao risco de acumular as dores alheias como se fossem suas. A principal lição de Iemanjá: cuide dos outros com o mesmo amor com que cuida de si mesmo, não ao invés de.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Iemanjá</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Odoyá! / Salve Iemanjá!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Azul-claro e branco (ou azul e prata)</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Sábado</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Água salgada (mar, oceanos)</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Abebê prateado (espelho do mar), coroa de conchas</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Melancia, coco, arroz com leite, flores brancas (jogadas ao mar)</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> Nossa Senhora dos Navegantes e Imaculada Conceição</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando alguém chega até mim com o peito apertado e a mente em caos, a primeira coisa que faço é pedir a Iemanjá que abra seu manto sobre aquela alma. Ela é a grande psicóloga do Axé. Suas ondas não apenas limpam o que está pesado — elas devolvem a memória de que você é amado desde antes de nascer."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia de Iemanjá é especialmente invocada para tratamento de depressão profunda, ansiedade crônica, transtornos emocionais, situações de luto e perda, conflitos familiares (especialmente os que envolvem a figura materna) e problemas com vínculos afetivos. Suas oferendas são levadas ao mar no dia 2 de fevereiro em todo o Brasil — uma das festas populares mais bonitas que o sincretismo afro-brasileiro nos deu.</p>

      <p>Para se conectar com Iemanjá, vá até um corpo d'água. Sente-se à beira das águas em silêncio e deixe as ondas carregar seus pensamentos mais pesados. Respire fundo e sinta o acolhimento da mãe primordial. Que o manto de Iemanjá envolva seu Ori com paz e equilíbrio. Odoyá!</p>
    `
  },

  'nana': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Águas e Femininos',
    titulo: 'Nanã Buruquê: A Anciã Primordial, a Lama da Criação e o Descanso das Almas',
    imagem: './assets/estudos/nana_orixa.png',
    legenda: 'O feixe do Ibiri repousa junto a raízes ancestrais sobre as águas do pântano.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Nana Buruquê, elderly face, glowing aura of dark mud and waterlilies, highly detailed, majestic, purple clothes.',
    htmlCorpo: `
      <p class="capitular">Saluba Nanã! A mais velha de todos os Orixás, a avó ancestral do panteão africano. Nanã Buruquê é a senhora da lama dos pântanos e lagos parados, das águas que não correm mas que guardam — e em seu silêncio profundo, ela carrega a sabedoria de tudo que foi, de tudo que é e de tudo que virá. Antes de existir o primeiro ser humano, Nanã já estava lá, aguardando com a paciência que só os verdadeiramente antigos possuem.</p>

      <p>Na cosmogonia africana, foi Nanã quem forneceu a lama primordial com a qual Oxalá modelou o primeiro corpo humano. Por isso, ela é considerada a avó de toda a humanidade — mais antiga que a própria civilização. Ela governa as águas paradas, os pântanos, o barro e tudo que retorna à terra após completar seu ciclo. No ciclo da vida espiritual, é ela quem recebe a alma após o desencarne, lavando suas memórias dolorosas com a água de seus pântanos e preparando o espírito, com ternura materna, para um novo ciclo de encarnações.</p>

      <p>A personalidade de Nanã é a de uma avó que já passou por tudo e que, por isso mesmo, raramente eleva a voz. Ela é suave na forma, mas absoluta na essência. Ela não aceita o ferro em seus rituais — apenas o bambu e a palha são usados em seu culto, pois o ferro é o metal que feriu a humanidade através das guerras e da escravidão. Seus filhos têm em comum a sabedoria além da idade e uma relação direta com a memória ancestral e o passado familiar.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Nanã</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Saluba Nanã! / Nanã Buruquê!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Lilás, roxo e branco</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 7</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Sábado</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Lama, água parada dos pântanos</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Ibiri (feixe de palha com búzios), sem nenhum objeto de ferro</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Inhame branco, cará, carurú (sem azeite de dendê), milho branco</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> Sant'Ana (avó de Jesus na tradição cristã)</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Nanã nos ensina que há um tipo de sabedoria que só o tempo pode dar. Não é possível correr pela vida e chegar à sabedoria de Nanã. É preciso parar, sentir a lama do passado sob os pés e compreender que é dela — e não apesar dela — que a nova vida floresce. Os seus erros passados são o húmus da sua transformação futura."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia de Nanã é invocada para processos de cura profunda relacionados ao passado: traumas de infância, padrões familiares repetitivos de gerações, a dificuldade de se despedir do que já morreu (pessoas, relacionamentos, fases da vida) e para a compreensão e a aceitação da própria mortalidade como parte natural do ciclo sagrado.</p>

      <p>Para se aproximar de Nanã, cultive a paciência com o seu próprio processo de cura. Honre os seus ancestrais. Escreva cartas para os que já partiram. Deixe-se chorar quando o choro pede passagem — pois as lágrimas são as águas de Nanã lavando o que ainda dói. Saluba Nanã!</p>
    `
  },

  'oxala': {
    modulo: 'Módulo 2: O Panteão dos Orixás',
    tag: 'Módulo 2 · Orixás · Criação e Sabedoria',
    titulo: 'Oxalá: O Manto Branco da Paz Universal e da Fé Inabalável',
    imagem: './assets/estudos/oxala_orixa.png',
    legenda: 'A luz branca e o Opaxorô de prata de Oxalá consagram a concórdia.',
    prompt: 'Ultra-realistic 4K portrait, cinematic lighting, representing the African deity Oxala, glowing aura of pure white light, highly detailed, serene face, majestic, ethereal white background.',
    htmlCorpo: `
      <p class="capitular">Epa Babá, Oxalá! O regente supremo da paz universal, da paciência divina e da criação da vida. Oxalá é o Orixá mais venerado em toda a tradição ioruba — e não é por acaso. Ele é o pai de todos os outros Orixás, o escultor que modelou o corpo humano na lama sagrada de Nanã, o arquiteto do mundo tal como ele existe. Sua cor branca não é ausência de cor: é a soma de todas as cores — a síntese de toda a criação.</p>

      <p>Oxalá tem duas manifestações principais: o Oxaguian (Oxalá jovem), associado ao acaçá, à fertilidade e ao movimento; e o Oxalufan (Oxalá velho), associado ao andar lento com o Opaxorô (cajado de prata), à sabedoria que veio com os anos e à bênção que vem do silêncio. A convivência dessas duas energias num mesmo Orixá nos ensina que a juventude e a velhice não são opostos — são fases de um mesmo processo sagrado de crescimento e amadurecimento espiritual.</p>

      <p>A paciência é o dom mais característico de Oxalá. A mitologia ioruba conta que Exu pregou uma série de armadilhas a Oxalá ao longo de sua jornada, fazendo-o ser preso injustamente por sete anos. Em nenhum momento Oxalá perdeu a calma, reclamou ou buscou vingança. Quando finalmente foi liberto, não havia rancor em seu coração — apenas a tranquilidade de quem sabe que a justiça sempre encontra seu momento. Essa história é um dos ensinamentos mais poderosos sobre a força do desapego e da fé.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Atributos Sagrados de Oxalá</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Saudação:</strong> Epa Babá! / Xirê Oxalá!</li>
          <li class="artigo-lista-item"><strong>Cores:</strong> Branco absoluto</li>
          <li class="artigo-lista-item"><strong>Número sagrado:</strong> 8 e 16</li>
          <li class="artigo-lista-item"><strong>Dia da semana:</strong> Sexta-feira (dia sagrado de respeito e silêncio)</li>
          <li class="artigo-lista-item"><strong>Elemento:</strong> Ar e luz</li>
          <li class="artigo-lista-item"><strong>Ferramentas (Igbás):</strong> Opaxorô (cajado de prata com pomba no topo), pombas brancas</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Acaçá, ekó (bolo de milho branco), coco sem casca, inhame branco cozido</li>
          <li class="artigo-lista-item"><strong>Sincretismo histórico:</strong> Nosso Senhor do Bonfim (Bahia) e Jesus Cristo</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Na sexta-feira, nossa Casa descansa em branco — é o dia de Oxalá. Oxalá nos ensina que não há renovação sem descanso, não há criação sem silêncio e não há fé verdadeira que não tenha sido testada pela paciência. Se você está cansado de esperar, fale com Oxalá — ele conhece a dor de esperar melhor do que qualquer outro Orixá."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia de Oxalá é invocada para trazer paz aos ambientes de conflito, recuperar a harmonia em famílias desestruturadas, fortalecer a fé de quem está em dúvida espiritual, auxiliar em processos de reconciliação após discussões graves e proteger recém-nascidos. Oxalá é a calmaria após a tempestade de Iansã, o perdão depois da justiça de Xangô.</p>

      <p>Para honrar Oxalá, vista branco toda sexta-feira, evite discussões nesse dia e cultive o silêncio e a meditação. Que o manto branco de Oxalá envolva a sua vida com a paz que transcende qualquer compreensão humana. Epa Babá!</p>
    `
  },

  // ============================================================
  // --- Módulo 3: As Entidades ---
  // ============================================================

  'pretos-velhos': {
    modulo: 'Módulo 3: As Entidades',
    tag: 'Módulo 3 · Entidades · Linhas de Trabalho',
    titulo: 'Pretos Velhos: A Sabedoria da Senzala, o Amor que Venceu o Ódio',
    imagem: './assets/estudos/pretovelho.jpg',
    legenda: 'O Preto Velho transmite a sabedoria e a doçura de um abraço curador.',
    prompt: 'Retrato ultra-realista de um ancião negro (Preto Velho) com um rosto profundamente marcado pela sabedoria e bondade. Iluminação quente e acolhedora em tons de âmbar. Fotorrealismo 8K, cinematic lighting.',
    htmlCorpo: `
      <p class="capitular">Adorei as Almas! Os Pretos e Pretas Velhos são, para muitos filhos de Umbanda, os guias mais amados e mais presentes. Eles representam o impossível que se tornou possível: a alma que passou pelo inferno da escravidão e, em vez de endurecer no ódio, se suavizou na compaixão. São o maior testemunho de que o amor pode superar qualquer forma de sofrimento — e que a liberdade verdadeira é aquela que se conquista no espírito, não no corpo.</p>

      <p>Os Pretos Velhos são espíritos de africanos escravizados no Brasil colonial, que trabalharam nas senzalas, nos canaviais e nos cafezais sob as piores condições que o ser humano pode impor a outro. Durante séculos, eles mantiveram vivas as tradições espirituais de suas origens africanas nas sombras da repressão colonial. Quando desencarnaram, em vez de usar sua experiência de sofrimento para a obstinação ou para o desejo de vingança, eles escolheram um caminho infinitamente mais nobre: permanecer no plano astral para servir de conselheiros e curadores dos que ainda sofrem na matéria.</p>

      <p>Sua forma de se apresentar no terreiro é sempre de grande humildade: curvados, com o cajado de madeira, o cachimbo de barro, sentados no chão ao nível dos consulentes. Essa postura não é fraqueza — é a expressão mais pura da lição espiritual que eles encarnam: a grandeza se manifesta na simplicidade. Eles não curam com poder ou glamour. Eles curam com uma palavra dita no momento certo, com um olhar que enxerga além da aparência, com um passe magnético de mãos calejadas que diz silenciosamente: "eu sei o que você está sentindo, porque eu já senti."</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Como Reconhecer e Trabalhar com um Preto Velho</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Tom de Voz:</strong> Suave, pausado, com formas de falar que remetem ao Brasil antigo. Nunca gritam; sempre acolhem.</li>
          <li class="artigo-lista-item"><strong>Postura:</strong> Sentados, curvados, com gestos lentos e precisos de quem tem todo o tempo do mundo para ouvir.</li>
          <li class="artigo-lista-item"><strong>Ferramentas:</strong> Cachimbo de barro (com ervas como alfazema e arruda), cajado, rosário, vela branca.</li>
          <li class="artigo-lista-item"><strong>Especialidade:</strong> Cura de depressão, conselheiros de vida, quebradores de energias de sofrimento acumulado e bloqueios emocionais crônicos.</li>
          <li class="artigo-lista-item"><strong>Oferenda:</strong> Feijão-preto, vinho tinto, charuto ou cachimbo, velas brancas e pretas, rosas brancas e amarelas.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando o Vô Benedito ou a Vó Catarina chegam na nossa gira, eu vejo as pessoas mais racionais e céticas se curvando com lágrimas nos olhos. Não é porque eles fazem nada grandioso — é porque eles falam com a alma. A sabedoria de quem sobreviveu ao insuportável e permaneceu amoroso é a vibração mais poderosa que conheço."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A principal missão dos Pretos Velhos na Umbanda é a cura das dores da alma — especialmente aquelas que a medicina convencional não consegue tocar: a solidão profunda, a sensação de não ser amado, a depressão que não tem nome, o cansaço existencial de quem carrega todos os outros e esqueceu de cuidar de si mesmo. Eles curam com a erva da arruda que afasta o negativo, com as palavras que organizam o que está caótico dentro da mente, e com o cachimbo que purifica o ambiente com sua fumaça santa.</p>

      <p>Se você nunca sentou diante de um Preto Velho numa gira de Umbanda, saiba que essa experiência pode mudar o curso de sua vida — não porque eles fazem milagres, mas porque eles falam a verdade com tanto amor que ela não dói. E muitas vezes, é exatamente disso que a nossa alma mais precisa. Adorei as Almas!</p>
    `
  },

  'caboclos': {
    modulo: 'Módulo 3: As Entidades',
    tag: 'Módulo 3 · Entidades · Linhas de Trabalho',
    titulo: 'Caboclos: A Força Guerreira das Matas e o Passe de Cura Vigoroso',
    imagem: './assets/estudos/caboclo.jpg',
    legenda: 'O Caboclo sustenta a firmeza do arco nas matas da cura.',
    prompt: 'Retrato majestoso de um espírito indígena brasileiro (Caboclo) no meio de uma floresta densa iluminada por raios de sol verdes e dourados. Fotorrealismo 8K, cinematic lighting.',
    htmlCorpo: `
      <p class="capitular">Okê Caboclo! Os Caboclos e Caboclas são os guerreiros da Umbanda: espíritos de indígenas brasileiros, curandeiros da mata, caçadores e pajés que viveram em profunda harmonia com a natureza antes do processo de colonização. Ao desencarnarem, trouxeram para o plano espiritual toda a força e o conhecimento das matas, dos rios e do mundo natural — e colocaram tudo isso a serviço da cura e da proteção espiritual da humanidade.</p>

      <p>A incorporação de um Caboclo num terreiro de Umbanda é inconfundível: brados fortes, postura altiva, passo firme. Eles chegam como o vento nas matas — anunciam sua presença. Diferentemente dos Pretos Velhos, que curam com a suavidade da palavra, os Caboclos curam com a força dos passes magnéticos: suas mãos se movem com vigor sobre o corpo do consulente, desfazendo bloqueios energéticos com uma potência que pode se sentir fisicamente. Sua terapia é a do guerreiro que desembaraça o que está preso.</p>

      <p>Os Caboclos trabalham sob a regência primária de Oxóssi (o grande caçador) e de Ogum (o guerreiro das matas abertas). Cada Caboclo tem seu nome específico — Caboclo Sete Flechas, Caboclo Ubirajara, Cabocla Jurema, Caboclo Pena Branca — e cada nome revela algo sobre a sua missão espiritual e as qualidades energéticas que ele carrega.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Linhas de Trabalho dos Caboclos</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Linha de Oxóssi (Mata):</strong> Especialistas em abundância, caça de energias negativas, cura física e proteção das crianças.</li>
          <li class="artigo-lista-item"><strong>Linha de Ogum (Estrada):</strong> Desbravadores de caminhos, quebradores de barreiras profissionais, especialistas em proteção física e espiritual.</li>
          <li class="artigo-lista-item"><strong>Linha de Oxumarê (Renovação):</strong> Mestres em transições e transformações, especialistas em cura de vícios e padrões repetitivos.</li>
          <li class="artigo-lista-item"><strong>Caboclas da Linha de Oxum:</strong> Especialistas em cura emocional e fertilidade, trabalham com as ervas das matas e rios sagrados.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando o Caboclo bate no Ori do consulente com as mãos, ele está literalmente desfazendo os nós energéticos que se acumularam. Não é violência — é o ajuste de um mecânico experiente que sabe exatamente onde o motor está travado. A força do Caboclo é proporcional à necessidade de cura que o consulente carrega."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia dos Caboclos é especialmente invocada para desbloqueio de caminhos profissionais, cura de doenças do sistema musculoesquelético e imunológico, proteção física de lares e pessoas, afastamento de perseguições espirituais e para fortalecer a determinação de quem está prestes a desistir de um sonho legítimo.</p>

      <p>Quando ouvir o brado "Okê Caboclo!" num terreiro, sinta a vibração que ele carrega. É a mata respondendo ao chamado. É a natureza lembrando que ainda existe um guerreiro que cuida dos humanos com a força que eles muitas vezes perderam de si mesmos. Okê Caboclo!</p>
    `
  },

  'baianos': {
    modulo: 'Módulo 3: As Entidades',
    tag: 'Módulo 3 · Entidades · Linhas de Trabalho',
    titulo: 'Baianos: A Gingada da Resistência, a Alegria como Medicina',
    imagem: './assets/estudos/baiano.jpg',
    legenda: 'O sorriso e a ginga do Baiano trazem alegria e descarrego das dores.',
    prompt: 'Retrato carismático e forte de um Baiano de Umbanda. Um homem negro ou pardo com um sorriso leve e acolhedor, usando um chapéu de palha desfiado. Fotorrealismo 8K, cinematic lighting.',
    htmlCorpo: `
      <p class="capitular">É da Bahia! Os Baianos e Baianas de Umbanda chegam com o axé do povo nordestino na voz e na ginga: alegres, diretos, levemente irônicos — mas portadores de uma sabedoria vivida no corpo, no suor e na fé. São espíritos do povo simples do Nordeste brasileiro que, ao longo de suas vidas difíceis, aprenderam a arte suprema de sobreviver com dignidade sem perder o sorriso.</p>

      <p>Diferente do Preto Velho que cura na quietude, o Baiano cura na gargalhada. Sua ginga desarmante faz o consulente baixar a guarda, soltar a rigidez do ego e sorrir — e é exatamente no momento em que o sorriso vence o choro que o Axé do Baiano trabalha mais eficientemente. Eles são especialistas em desfazer os nós da autocomiseração e das histórias em que o consulente se fez de vítima por tempo demais.</p>

      <p>Os Baianos trabalham prioritariamente sob a regência de Xangô e Oxum. Sua alegria não é superficialidade — é a sabedoria de quem passou pela seca, pela fome e pela injustiça e descobriu que a alegria é um ato de resistência política e espiritual. Desistir da alegria é dar aos seus problemas um poder que eles não merecem ter sobre a sua vida.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Especialidades Espirituais dos Baianos</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Caminhos Profissionais:</strong> Especialistas em destravar oportunidades de emprego e negócios travados por energias de estagnação.</li>
          <li class="artigo-lista-item"><strong>Autoestima:</strong> Trabalhadores da alegria de viver — combatem depressão leve e o padrão da autopiedade crônica.</li>
          <li class="artigo-lista-item"><strong>Proteção de Festas:</strong> Garantem proteção energética em momentos de celebração, evitando que energias invejosas estraguem alegrias legítimas.</li>
          <li class="artigo-lista-item"><strong>Relações Humanas:</strong> Resolvem conflitos entre conhecidos com bom humor e sabedoria prática do dia a dia.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "O Baiano que trabalha na nossa Casa não deixa ninguém sair de cabeça baixa. Ele pode dizer uma verdade dura — mas vai dizer com um sorriso que transforma a dor em alavanca. É da Bahia mesmo: a vida pode ser pesada, mas a leveza é sempre o caminho de volta para si mesmo."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Se você está em um período em que tudo parece pesado demais, considere pedir uma orientação com os Baianos. Eles talvez não te digam nada de "profundo" na forma — mas a verdade que dizem, dita com aquela ginga característica e um sorriso no canto da boca, tem o dom de reorganizar toda a sua perspectiva sobre a vida. É da Bahia, e do Axé também!</p>
    `
  },

  'boiadeiros': {
    modulo: 'Módulo 3: As Entidades',
    tag: 'Módulo 3 · Entidades · Linhas de Trabalho',
    titulo: 'Boiadeiros: Os Laçadores das Energias Densas do Campo Áurico',
    imagem: './assets/estudos/boiadeiro.jpg',
    legenda: 'O Boiadeiro laça as energias negativas e protege a retidão espiritual.',
    prompt: 'Retrato imponente de um Boiadeiro (sertanejo). Um homem de feições rústicas e fortes, usando um chapéu de couro. Fotorrealismo 8K, cinematic lighting.',
    htmlCorpo: `
      <p class="capitular">Getruá, Boiadeiro! Os Boiadeiros são os vaqueiros e lavradores do cerrado e do sertão que, com suas vidas de lida dura no campo, forjaram um código de honra simples e absoluto: a palavra dada vale mais que qualquer contrato, e a justiça se faz com as próprias mãos quando o direito não chega. Ao desencarnarem, trouxeram para o plano espiritual essa mesma objetividade e força para trabalhar pela humanidade.</p>

      <p>Os Boiadeiros chegam ao terreiro com o andar firme de quem conhece cada palmo da terra, com o aroma sutil de couro, erva do campo e vento. Seu trabalho espiritual é um dos mais físicos e enérgicos entre todas as entidades: eles literalmente "laçam" com seus gibões e chicotes astrais as energias obsessoras, as larvas mentais e os espíritos perturbadores que se agarraram ao campo energético do consulente. É uma limpeza direta, sem cerimônia, eficaz como a lida do campo.</p>

      <p>Trabalham principalmente sob a regência de Iansã (a força que limpa e afasta) e de Ogum (a espada que corta o que não serve). Sua especialidade é o serviço de desobsessão — a remoção de influências espirituais que perturbam a saúde mental, o sono e o comportamento dos consulentes, muitas vezes sem que eles mesmos saibam a origem de seus sofrimentos.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Quando Buscar os Boiadeiros</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item">Quando você sente que "não é você" em determinados comportamentos ou reações emocionais.</li>
          <li class="artigo-lista-item">Quando há distúrbios persistentes no sono sem causa médica explicável.</li>
          <li class="artigo-lista-item">Quando a sua vontade de agir está bloqueada e você sente resistência inexplicável a tomar decisões.</li>
          <li class="artigo-lista-item">Quando há histórico de trabalhos espirituais contrários realizados por terceiros.</li>
          <li class="artigo-lista-item">Quando você herdou padrões de comportamento destrutivos de familiares que parecem além do seu controle.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "O Boiadeiro não pergunta duas vezes. Ele olha para você, olha para o que está agarrado em você e age. É direto como o sertão: no campo não tem espaço para enrolação. E espiritualmente também não. Se tem uma energia te prejudicando, o laço do Boiadeiro vai pegá-la antes que ela perceba."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>A energia dos Boiadeiros também é muito invocada para fortalecer a retidão moral: pessoas que estão sendo tentadas a agir desonestamente por pressão do ambiente encontram neles uma voz firme que os lembra do valor de sua própria integridade. Getruá, Boiadeiro!</p>
    `
  },

  'marinheiros': {
    modulo: 'Módulo 3: As Entidades',
    tag: 'Módulo 3 · Entidades · Linhas de Trabalho',
    titulo: 'Marinheiros: O Balanço das Ondas que Limpa o Peito Apertado',
    imagem: './assets/estudos/marinheiro.jpg',
    legenda: 'O Marinheiro navega nas águas das emoções para acalmar a tormenta.',
    prompt: 'Retrato sereno de um Marinheiro espiritual. Um homem de expressão nostálgica e pacífica, vestindo um uniforme naval branco clássico. Fotorrealismo 8K, cinematic lighting.',
    htmlCorpo: `
      <p class="capitular">Quem vem do mar! Os Marinheiros chegam com o balanço das ondas nos pés e a nostalgia do largo no olhar. São espíritos de homens do mar — pescadores, navegadores, aqueles que passaram a vida lidando com as forças imensas e imprevisíveis do oceano — e trouxeram para o plano espiritual o equilíbrio único de quem aprendeu a se mover com as ondas em vez de lutar contra elas.</p>

      <p>O andar cambaleante dos Marinheiros incorporados não é desequilíbrio — é a memória do corpo que aprendeu a equilibrar em decks que se movem. É exatamente essa metáfora que sintetiza seu trabalho espiritual: eles ensinam ao consulente a arte de se equilibrar nas oscilações inevitáveis da vida emocional, sem afundar nas tempestades nem negar que elas existem.</p>

      <p>Trabalham sob a vibração das águas de Iemanjá e de Oxum. Sua especialidade é a cura das profundezas emocionais: depressões profundas, vícios (especialmente o alcoolismo), lutos não elaborados e a angústia dos corações que nunca souberam como se despedir do que amaram. Eles conversam de forma amorosa e levemente melancólica — e essa melancolia não é fraqueza; é empatia total pelo sofrimento humano.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Especialidades dos Marinheiros</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Cura do Luto:</strong> Auxiliam no processo de despedida e aceitação da perda de pessoas queridas.</li>
          <li class="artigo-lista-item"><strong>Vícios:</strong> Especialistas em trabalhos de cura de dependência química e emocional.</li>
          <li class="artigo-lista-item"><strong>Angústia existencial:</strong> Trabalham com pessoas que se sentem sem propósito ou sentido de vida.</li>
          <li class="artigo-lista-item"><strong>Cura emocional:</strong> Limpeza do campo emocional sobrecarregado por anos de emoções reprimidas e não expressas.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "O Marinheiro sabe o que é estar longe do lar por tempo demais, com saudade que aperta o peito e sem ver o horizonte de chegada. Se você está nesse mar há muito tempo, deixe-o se sentar com você. A conversa de um Marinheiro reorganiza o coração de forma que nem sempre as palavras conseguem explicar."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Quem vem do mar vem com a força do oceano e a leveza da brisa. Que os Marinheiros que trabalham em nossa Casa possam guiar o seu barco com suavidade nas águas da vida. Quem vem do mar!</p>
    `
  },

  'eres': {
    modulo: 'Módulo 3: As Entidades',
    tag: 'Módulo 3 · Entidades · Linhas de Trabalho',
    titulo: 'Erês e Crianças: A Pureza que Dissolve o que a Seriedade não Alcança',
    imagem: './assets/estudos/ere.jpg',
    legenda: 'A pureza e o sorriso do Erê renovam a alegria de viver.',
    prompt: 'Fotografia angelical e pura de uma criança (Erê) afro-descendente sorrindo docemente, sentada em um jardim mágico cheio de flores coloridas. Fotorrealismo 8K, cinematic lighting.',
    htmlCorpo: `
      <p class="capitular">Ibejada! Os Erês (ou Crianças) são talvez os seres mais subestimados e ao mesmo tempo mais poderosos de toda a Umbanda. Sua aparência lúdica e brincalhona, seus pedidos de bala e refrigerante, sua linguagem infantil e suas risadas contagiantes criam uma ilusão fatal: a de que são menos sérios do que as outras entidades. Mas basta um Erê colocar sua mãozinha sobre o Ori de alguém para que a profundidade de sua cura se revele — e ela é das mais profundas que existem.</p>

      <p>Os Erês são espíritos infantis de altíssima evolução espiritual que escolheram se manifestar na forma da criança para acessar as partes da alma humana que a razão adulta não consegue alcançar. A criança acessa o que o adulto não pode — pois o ego do adulto tem defesas, racionalizações e armaduras. A energia de uma criança espiritual pura simplesmente atravessa todas essas barreiras, tocando diretamente no núcleo emocional mais verdadeiro do consulente.</p>

      <p>Do ponto de vista energético, a vibração dos Erês é extraordinariamente alta e luminosa. Eles pertencem à linha de Ibeji (os Orixás gêmeos do prazer e da inocência) e trabalham sob a regência de Oxum e Oxalá. Sua pureza energética é tão intensa que pode desfazer magias de baixa frequência que nem os guerreiros Caboclos conseguem limpar — pois as energias densas fogem da luz pura da inocência como a escuridão foge da chama de uma vela.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">O Poder Espiritual dos Erês</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Purificação Profunda:</strong> Limpam o campo áurico de energias densas que resistiram a outras formas de trabalho espiritual.</li>
          <li class="artigo-lista-item"><strong>Restauração da Alegria:</strong> Reativam a capacidade de sentir alegria genuína em adultos que perderam contato com essa dimensão.</li>
          <li class="artigo-lista-item"><strong>Cura da Criança Interior:</strong> Acessam traumas de infância de forma suave e não ameaçadora, iniciando processos de cura que a mente racional havia bloqueado.</li>
          <li class="artigo-lista-item"><strong>Clareza Espiritual:</strong> Revelam, na linguagem simples da criança, verdades que os adultos ao redor do consulente estavam escondendo.</li>
          <li class="artigo-lista-item"><strong>Proteção das Crianças:</strong> São os protetores naturais das crianças do lar, especialmente as que apresentam mediunidade precoce.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando o Erê chega e começa a brincar, os adultos ficam constrangidos — 'mas onde está o trabalho espiritual?' E é justamente no sorriso que brota sem permissão que o trabalho acontece. A inocência de um Erê tem o poder de desfazer em minutos o que anos de seriedade construíram como muros ao redor do coração."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Se você está passando por um período em que sente que perdeu o contato com a alegria de viver, com a curiosidade e com a leveza do brincar — os Erês têm uma mensagem para você. A cura que você precisa talvez esteja num momento de riso genuíno, de brincadeira sem propósito, de alegria sem justificativa. Ibejada!</p>
    `
  },

  'guardioes-esquerda': {
    modulo: 'Módulo 3: As Entidades',
    tag: 'Módulo 3 · Entidades · Linhas de Trabalho',
    titulo: 'Os Guardiões da Esquerda: Desmistificando Exu e Pombagira',
    imagem: './assets/estudos/guardioes.png',
    legenda: 'A elegância e o mistério dos Guardiões da Esquerda na proteção da lei.',
    prompt: 'Retrato cinematográfico de extrema elegância, respeito e mistério (Sem NENHUM elemento demoníaco). Um homem de terno escuro impecável e uma mulher deslumbrante em veludo vermelho escuro. Fotorrealismo 8K, cinematic lighting.',
    htmlCorpo: `
      <p class="capitular">Laroyé! É hora de clarear as mentes contra séculos de preconceito religioso alimentado pela intolerância colonial. Os Guardiões da Esquerda na Umbanda — os Exus e as Pombagiras — são espíritos de lei que atuam no plano de energia mais densa da criação para garantir a proteção dos consulentes e a abertura dos caminhos materiais. Eles não são o demônio cristão. Eles não fazem o mal por prazer. Eles são guardiões escolhidos.</p>

      <p>A associação dos Exus umbandistas com o demônio é um dos produtos mais danosos do colonialismo religioso no Brasil. A Igreja Católica, ao criminalizar as práticas africanas, associou deliberadamente as figuras que trabalhavam nas energias mais densas (a noite, a encruzilhada, a sexualidade, a matéria) com o diabo de sua própria teologia. Mas nas tradições ioruba e umbandista, não existe um princípio do mal absoluto equivalente ao diabo cristão. O que existe são forças que trabalham em frequências diferentes, todas com suas funções sagradas no grande equilíbrio cósmico.</p>

      <p>Os Exus da Umbanda são espíritos que em vida operaram nas margens da sociedade — malandros, ciganos, homens que conheceram a noite e o submundo. Ao desencarnarem, eles levaram esse conhecimento das sombras para o serviço da luz. Eles conhecem os caminhos que os outros espíritos mais elevados não frequentam — e é por isso que são os guardiões mais eficazes contra as forças que atuam nessas mesmas trevas. O remédio que enfrenta a doença precisa conhecê-la.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Pombagira: A Guardiã da Autoestima Feminina</h3>
        <p>As Pombagiras são as contrapartes femininas dos Exus, e talvez as entidades mais incompreendidas de toda a Umbanda. Apresentando-se com elegância e uma franqueza desconcertante sobre os assuntos humanos mais delicados, elas desestabilizam o ego do consulente para revelar verdades que ele se recusava a enxergar.</p>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Especialidade principal:</strong> Cura da autoestima feminina, resolução de conflitos amorosos com franqueza, abertura de caminhos para relações saudáveis.</li>
          <li class="artigo-lista-item"><strong>Mensagem central:</strong> "Você merece amor e respeito. Pare de aceitar migalhas afetivas."</li>
          <li class="artigo-lista-item"><strong>Quem busca Pombagira:</strong> Pessoas que sofreram abusos emocionais, que perderam a autoconfiança em relacionamentos destrutivos ou que precisam reafirmar seus próprios limites com clareza.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Na nossa Casa, tratamos os Exus e as Pombagiras com o mesmo respeito que tratamos qualquer outro Orixá ou guia. Eles são os nossos guardiões da porteira, os soldados que mantêm as energias negativas afastadas do nosso Congá. Quem os desrespeita não os conhece — e quem não os conhece não compreende verdadeiramente a Umbanda."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Na prática espiritual, os Exus são invocados para a abertura de caminhos materiais (emprego, finanças, negócios), para a proteção de lares e pessoas contra ataques espirituais, para o afastamento de inimigos ocultos e para a desobstrução de situações que parecem impossíveis de resolver por meios convencionais. Sua eficácia nos planos mais densos da matéria é sem paralelo entre as entidades da Umbanda.</p>

      <p>O respeito que se deve a um Exu ou Pombagira é o mesmo que se deve a qualquer ser de luz: honestidade nas intenções, lisura nos pedidos e gratidão pelos serviços prestados. Quem os busca com intenção limpa e coração honesto encontrará proteção e abertura de caminhos como não imagina. Laroyé!</p>
    `
  },

  // ============================================================
  // --- Módulo 4: Rituais e Práticas ---
  // ============================================================

  'firmeza-espiritual': {
    modulo: 'Módulo 4: Rituais e Práticas',
    tag: 'Módulo 4 · Rituais · Práticas Sagradas',
    titulo: 'Firmeza Espiritual: Fixando o Axé e Protegendo o Lar',
    imagem: './assets/estudos/firmeza.jpg',
    legenda: 'As velas, as pedras e os elementos sagrados que ancoraram o Axé no mundo material.',
    htmlCorpo: `
      <p class="capitular">Na tradição umbandista e candomblecista, a firmeza espiritual é o ato ritual de fixar, ancorar e consolidar a energia sagrada de um Orixá ou de um Guia em um determinado ponto, objeto ou espaço físico. É o processo que transforma um local comum em um local sagrado, e um objeto comum em um instrumento de Axé. Sem firmeza, a energia espiritual circula livremente sem ponto de ancoragem — o que gera dispersão e ineficácia ritual.</p>

      <p>A firmeza mais conhecida e acessível para pessoas em início de caminhada é a <strong>firmeza de velas</strong>: o ato de acender uma vela de cor específica ao Orixá ou entidade que se deseja homenagear ou invocar, em um local limpo e energeticamente preparado, com uma intenção clara e uma oração sincera do coração. A chama da vela não é mera decoração — ela é o ponto de convergência da energia espiritual, um farol que atrai a atenção dos guias para a sua intenção.</p>

      <p>Os <strong>assentamentos</strong> são firmezas de nível mais avançado, realizadas pelos sacerdotes iniciados. Eles consistem na montagem de um conjunto específico de elementos naturais — pedras, metais, ervas, alimentos, símbolos — que representa e ancora a força de um Orixá num recipiente consagrado. Um assentamento bem construído e bem cuidado torna-se um ponto de energia constante na casa, irradiando a proteção e o Axé do Orixá correspondente para todos os moradores.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Tipos de Firmeza e seus Usos</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Firmeza de velas:</strong> A mais simples e acessível. Combina cor da vela ao Orixá, intenção clara e oração sincera.</li>
          <li class="artigo-lista-item"><strong>Firmeza com pemba:</strong> O uso de giz sagrado para riscar pontos e símbolos no chão ou em objetos, fixando a energia de entidades específicas.</li>
          <li class="artigo-lista-item"><strong>Firmeza de ervas:</strong> A disposição de plantas e folhas específicas num ambiente para criar um escudo energético natural.</li>
          <li class="artigo-lista-item"><strong>Assentamentos de Orixás:</strong> Realizado por sacerdotes iniciados, ancora a força do Orixá num conjunto sagrado de elementos naturais.</li>
          <li class="artigo-lista-item"><strong>Firmeza de pontos de força:</strong> A identificação e o cuidado dos pontos de convergência de Axé numa propriedade (portões, cantos, altares).</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando alguém me pede para firmar uma casa, o que eu faço não é magia — é organização espiritual. É colocar cada energia no seu lugar correto, limpar o que foi acumulado de negativo e criar condições para que a proteção dos Orixás flua com clareza. É como organizar a casa material: quando ela está em ordem, a vida dentro dela melhora."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Para quem está iniciando sua caminhada, a maneira mais segura e respeitosa de praticar a firmeza é a firmeza de velas, sempre feita com intenção limpa, em local limpo e com oração sincera ao Orixá ou guia de sua devoção. Nunca realize firmezas para prejudicar outros — a lei do retorno é exata, e o que se envia sempre volta multiplicado para quem enviou.</p>

      <p>A firmeza espiritual não substitui a ação no mundo material. Os Orixás abrem os caminhos — mas é você quem precisa caminhar por eles. A vela firma a intenção; o trabalho realiza o destino. Que os Orixás firmem os seus caminhos com luz, prosperidade e paz verdadeira.</p>
    `
  },

  'jogo-buzios': {
    modulo: 'Módulo 4: Rituais e Práticas',
    tag: 'Módulo 4 · Rituais · Práticas Sagradas',
    titulo: 'O Jogo de Búzios: O Oráculo Sagrado dos Orixás',
    imagem: './assets/estudos/buzios.jpg',
    legenda: 'Os búzios revelam ao sacerdote iniciado a mensagem dos Orixás para cada consulente.',
    htmlCorpo: `
      <p class="capitular">O jogo de búzios (Dilogum no Candomblé; Merindilogun em Ioruba) é o sistema de adivinhação sagrado mais importante das religiões de matriz africana. Não se trata de "adivinhação" no sentido popular e pejorativo do termo — é um sistema sofisticado de consulta às forças espirituais que regem o destino de uma pessoa, utilizando os búzios (conchas do cauri africano) como interface entre o mundo dos Orixás e o mundo dos humanos. É um oráculo — uma escuta formal e ritualizada da voz dos ancestrais.</p>

      <p>A origem do jogo de búzios remonta à África Ocidental, especialmente ao povo Ioruba da atual Nigéria. Historicamente, apenas os babalorixás e ialorixás mais experientes, após anos de estudo e iniciação, recebiam a autorização para realizar o jogo. No Brasil, o jogo adaptou-se mantendo sua essência sagrada. Em mãos de um sacerdote sério e responsável, o jogo de búzios é uma ferramenta de autoconhecimento profundo — raramente traz respostas que o consulente não sabia que existiam; frequentemente confirma o que o coração já sentia, mas a mente racional se recusava a aceitar.</p>

      <p>O funcionamento básico envolve a queda de 16 búzios sobre uma superfície plana. A combinação de búzios que caem com a "boca aberta" versus os que caem com a "boca fechada" gera um dos 16 Odus (configurações sagradas), cada um com um conjunto específico de mensagens, histórias míticas (Patakis) e orientações. O sacerdote lê os Odus não como um resultado automático, mas como um poema que precisa ser interpretado à luz da vida específica de quem está diante dele.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Sobre o Sigilo e o Respeito ao Jogo</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Sigilo absoluto:</strong> O que o búzio revela fica entre o sacerdote, o consulente e os Orixás. Nunca se compartilha o conteúdo de um jogo de búzios com terceiros.</li>
          <li class="artigo-lista-item"><strong>Quem pode jogar:</strong> Apenas sacerdotes devidamente iniciados e com autorização dos Orixás. Desconfie de quem joga búzios sem iniciação formal.</li>
          <li class="artigo-lista-item"><strong>Com que frequência:</strong> O jogo não é para consulta frequente — é para momentos de dúvida genuína e decisões importantes de vida.</li>
          <li class="artigo-lista-item"><strong>O que revelam:</strong> O Orixá regente (dono da cabeça), Orixás complementares, indicações sobre saúde, caminhos profissionais e orientações espirituais.</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Quando os búzios caem, o que eu escuto não é o som da concha — é a voz de Xangô orientando o seu filho sobre o próximo passo da caminhada. O jogo de búzios não prevê o futuro: ele mapeia as energias do presente e revela quais caminhos estão abertos e quais ainda precisam de cuidado espiritual para se abrirem. É um GPS do Axé."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Se você sente que está num momento de dúvida genuína sobre os caminhos da sua vida — profissional, afetivo, espiritual — uma consulta séria com um sacerdote habilitado pode trazer a clareza que você busca. Em nossa Casa, o jogo de búzios é realizado com toda a seriedade ritual e o compromisso ético que o sagrado exige. Agende uma consulta com Pai Paulinho e deixe que os Orixás falem diretamente para você.</p>
    `
  },

  'limpeza-espiritual': {
    modulo: 'Módulo 4: Rituais e Práticas',
    tag: 'Módulo 4 · Rituais · Práticas Sagradas',
    titulo: 'Limpeza Espiritual: O Reequilíbrio do Corpo, da Mente e do Axé',
    imagem: './assets/estudos/axe_criacao.png',
    legenda: 'O passe magnético e as ervas sagradas devolvem o equilíbrio ao campo áurico.',
    htmlCorpo: `
      <p class="capitular">O ser humano é um campo de energia em constante interação com o ambiente ao redor. Nosso campo áurico — a camada de energia que envolve o corpo físico — absorve e emite vibrações continuamente: o estresse do trabalho, a tristeza das pessoas ao nosso redor, a energia de ambientes carregados, as palavras negativas que nos dirigem. Quando esse campo acumula energia densa demais, o corpo responde: cansaço inexplicável, irritabilidade, sensação de peso, baixa imunidade, falta de foco. É quando a limpeza espiritual se faz necessária.</p>

      <p>Na Umbanda e no Candomblé, a limpeza espiritual não é superstição — é um processo fundamentado numa visão holística do ser humano que reconhece que saúde física, equilíbrio emocional e harmonia espiritual são inseparáveis. Quando uma dessas dimensões está desequilibrada, as outras são afetadas. A limpeza espiritual trabalha no campo energético para restaurar o equilíbrio que se perdeu, complementando e nunca substituindo os cuidados da medicina convencional.</p>

      <p>Existem várias formas de limpeza espiritual, cada uma indicada para diferentes tipos de desequilíbrio e com diferentes graus de profundidade. As mais comuns e acessíveis incluem os <strong>banhos de ervas</strong>, as <strong>defumações</strong>, o <strong>passe magnético</strong> e as <strong>limpezas com ovos</strong>. Todas têm em comum a intenção sagrada de reorganizar e purificar o campo energético do indivíduo, devolvendo leveza, foco e vitalidade.</p>

      <div class="artigo-subsecao">
        <h3 class="artigo-subtitulo">Principais Formas de Limpeza Espiritual</h3>
        <ul class="artigo-lista">
          <li class="artigo-lista-item"><strong>Banho de ervas (Descarrego):</strong> Preparado com plantas específicas (arruda, guiné, alecrim, espada-de-são-jorge), remove energias negativas acumuladas no campo áurico. Realizado do pescoço para baixo, com oração sincera.</li>
          <li class="artigo-lista-item"><strong>Banho de atrair (Prosperidade):</strong> Preparado com ervas de energias positivas (rosas, canela, cravo, manjericão, mel), atrai abundância, amor e equilíbrio energético.</li>
          <li class="artigo-lista-item"><strong>Defumação:</strong> Queima de ervas e resinas sagradas (incenso, mirra, copal, alfazema, palo santo) para purificar ambientes e campos energéticos.</li>
          <li class="artigo-lista-item"><strong>Passe magnético:</strong> Realizado por médiuns treinados, que canalizam a energia dos Orixás e guias através das mãos sobre o campo áurico do paciente, reorganizando e desbloqueando o fluxo energético.</li>
          <li class="artigo-lista-item"><strong>Limpeza com ovo:</strong> O ovo cru absorve as energias densas do campo áurico ao ser passado com intenção sobre o corpo. Após o ritual, é descartado adequadamente (enterrado ou em água corrente).</li>
        </ul>
      </div>

      <blockquote class="artigo-citacao">
        "Fazer uma limpeza espiritual não é sinal de fraqueza — é higiene energética. Da mesma forma que você toma banho para limpar o corpo físico das impurezas do dia, a limpeza espiritual cuida do que o banho comum não alcança. Eu recomendo ao menos um banho de ervas por semana para todos os que vivem em ambientes de alto stress energético."
        <span class="artigo-citacao-autor">— Pai Paulinho de Xangô Aganjú</span>
      </blockquote>

      <p>Uma das perguntas mais frequentes é: "Como sei se preciso de uma limpeza espiritual?" Os sinais mais comuns incluem: sensação de cansaço constante que o descanso não resolve, sonhos perturbadores frequentes, sensação de que "nada dá certo" por um período prolongado, irritabilidade sem causa aparente, e a percepção de que as energias de um ambiente ou relacionamento estão te drenando mais do que te nutrindo.</p>

      <p>Se você reconheceu algum desses sinais, considere agendar uma consulta de limpeza espiritual com Pai Paulinho. Venha com o coração aberto e a intenção clara de se renovar. Os Orixás e os guias de nossa Casa estão prontos para cuidar de você com toda a ética, o amor e a responsabilidade espiritual que você merece. Saravá!</p>
    `
  }

};

// ===== DICIONÁRIO DO AXÉ (expandido de 5 para 15 termos) =====
const DICIONARIO_DB = [
  { termo: 'Axé', desc: 'A força vital sagrada que permeia todos os seres vivos, objetos e locais do universo na cosmologia afro-brasileira. O Axé é transmitido de ser para ser, de geração em geração, e é o que confere poder espiritual e vitalidade a uma pessoa, a um ritual ou a um local sagrado. Um terreiro com "muito Axé" é aquele onde a energia espiritual é intensa e bem cuidada.' },
  { termo: 'Congá', desc: 'O altar sagrado do terreiro de Umbanda. É o ponto focal de concentração de energia do templo, onde ficam dispostas as imagens dos Orixás e santos sincréticos, as guias de miçangas, as velas e as oferendas de flores. É o coração espiritual da casa, de onde toda a energia do trabalho espiritual irradia para os presentes.' },
  { termo: 'Firmeza', desc: 'O ato ritualístico de fixar e ancorar a energia de um Guia protetor ou Orixá em determinado objeto ou local. Pode ser feita acendendo uma vela de cor específica, riscando um ponto sagrado com pemba (giz ritual) ou montando assentamentos com elementos da natureza. Sem firmeza, a energia espiritual circula sem ponto de ancoragem.' },
  { termo: 'Amaci', desc: 'Líquido sagrado preparado à base de ervas frescas trituradas e maceradas em água limpa, consagrado ao Orixá regente do médium. É derramado na cabeça (Ori) do iniciado em rituais de consagração mediúnica. O amaci "desperta" e "firma" a mediunidade, fortalecendo a ligação entre o médium e seus guias espirituais.' },
  { termo: 'Padê', desc: 'Alimento ritual oferecido a Exu antes de qualquer cerimônia, para pedir proteção e caminhos abertos. É preparado misturando farinha de mandioca crua com azeite de dendê, mel ou cachaça, servido em alguidar de barro. O Padê é o respeito formal ao guardião que, ao ser honrado, garante que a cerimônia aconteça sem interferências negativas.' },
  { termo: 'Bori', desc: 'Do iorubá "Bo Ori" (alimentar a cabeça). Um dos rituais mais importantes do culto aos Orixás, destinado a harmonizar e nutrir espiritualmente o Ori (a cabeça sagrada) do indivíduo. O Bori oferece alimentos e energia diretamente ao Orixá pessoal do consulente, fortalecendo o seu destino e equilíbrio mental.' },
  { termo: 'Ori', desc: 'Do iorubá, significa literalmente "cabeça". Na teologia afro-brasileira, o Ori é muito mais do que o órgão físico: é a sede da alma individual, o guardião pessoal que cada ser humano traz consigo ao encarnar. O Ori é o Orixá mais próximo de cada pessoa — aquele que sempre está presente, que nunca se afasta, e que acompanha o ser humano por todas as vidas.' },
  { termo: 'Gira', desc: 'A cerimônia principal da Umbanda, na qual os médiuns incorporam seus guias espirituais para o trabalho de cura e orientação dos consulentes. O nome "gira" vem do movimento circular que os médiuns realizam durante os rituais, representando a roda da vida e do Axé em movimento. Cada gira tem uma linha de trabalho temática.' },
  { termo: 'Pemba', desc: 'Giz ritual sagrado usado para riscar os "pontos riscados" — símbolos geométricos sagrados que representam e invocam a presença de Orixás e entidades específicas. Cada entidade tem seu ponto riscado único, como uma assinatura espiritual. A pemba é fabricada com ingredientes naturais como mandioca ou osso de animal e consagrada ritualmente.' },
  { termo: 'Defumação', desc: 'Ritual de purificação que utiliza a fumaça de ervas, resinas e incensos sagrados para limpar o campo energético de pessoas e ambientes. A fumaça sagrada tem a propriedade de romper campos de energia densa, afastar vibrações negativas e preparar o espaço para o trabalho espiritual. É realizada no início de toda cerimônia séria.' },
  { termo: 'Desobsessão', desc: 'Trabalho espiritual específico destinado a afastar espíritos perturbadores (obsessores) que estejam influenciando o campo energético de uma pessoa, prejudicando sua saúde mental, comportamento e equilíbrio emocional. Requer médiuns experientes e devidamente protegidos para realizar o trabalho com segurança e eficácia espiritual.' },
  { termo: 'Eguns', desc: 'Os espíritos dos mortos. Na tradição africana, os eguns são os ancestrais desencarnados que continuam existindo no plano espiritual e que têm influência sobre os vivos. Distintos das entidades de trabalho (que evoluíram e escolheram servir), alguns eguns podem ser perturbadores quando não recebem as devidas honras e orações dos familiares vivos.' },
  { termo: 'Orun', desc: 'O plano espiritual na cosmologia ioruba — o "outro lado", o mundo invisível onde habitam os Orixás, os ancestrais e os espíritos desencarnados. O Orun e o Ayê (mundo material) coexistem e se interpenetram constantemente. Os rituais das religiões afro-brasileiras são precisamente as tecnologias espirituais que facilitam essa comunicação entre os dois planos.' },
  { termo: 'Initiação (Feitura de Santo)', desc: 'O processo formal pelo qual uma pessoa é apresentada, consagrada e vinculada ao seu Orixá de cabeça no Candomblé. É um processo longo (pode durar de 7 a 21 dias de reclusão), complexo e profundamente transformador. Após a iniciação, o iniciado recebe um novo nome espiritual e uma nova identidade como filho do Axé.' },
  { termo: 'Obrigação', desc: 'Ritual de renovação e fortalecimento do vínculo entre o iniciado e seus Orixás, realizado em intervalos regulares (geralmente 1 ano, 3 anos, 7 anos após a iniciação). Durante a obrigação, são realizadas oferendas, banhos de purificação e rituais específicos para alimentar o Axé do iniciado e renovar o contrato espiritual com seus Orixás e guias.' }
];

// ===== RENDERIZADOR E CONTROLADOR DA PLATAFORMA =====
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStudyAccordion();
  initStudyPlatform();
  initDynamicData();
});

/* ============================================================
   1. MENU HAMBÚRGUER RESPONSIVO PRINCIPAL
   ============================================================ */
function initMobileMenu() {
  const header = document.getElementById('siteHeader');
  const navHamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  if (!navHamburger || !navLinks) return;

  navHamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navHamburger.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (header && header.classList.contains('menu-open') && !header.contains(e.target)) {
      closeMenu();
    }
  });

  function openMenu() {
    navHamburger.classList.add('open');
    navLinks.classList.add('open');
    if (header) header.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navHamburger.classList.remove('open');
    navLinks.classList.remove('open');
    if (header) header.classList.remove('menu-open');
    document.body.style.overflow = '';
  }

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });
}

/* ============================================================
   2. PLATAFORMA DE ESTUDOS DINÂMICA (FOCUS MODE)
   ============================================================ */
function initStudyPlatform() {
  const sidebar = document.getElementById('livroSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const btnToggleSidebar = document.getElementById('btnToggleSidebar');
  const btnCloseSidebar = document.getElementById('btnCloseSidebar');
  
  const topicoBtns = document.querySelectorAll('.topico-btn');
  const moduloTriggers = document.querySelectorAll('.modulo-trigger');
  
  const palcoWrap = document.getElementById('leituraPalco');
  const tagEl = document.getElementById('leituraTag');
  const tituloEl = document.getElementById('leituraTitulo');
  const imgWrapperEl = document.getElementById('leituraImagemWrapper');
  const imgEl = document.getElementById('leituraImagem');
  const legendaEl = document.getElementById('leituraImagemLegenda');
  const corpoEl = document.getElementById('leituraCorpo');

  if (!palcoWrap || !corpoEl) return;

  // --- Função para renderizar o tópico selecionado ---
  function carregarTopico(topicoId, scroll = true) {
    const data = ESTUDOS_DB[topicoId];
    if (!data) return;

    // Inicia animação de fade-out do palco de leitura
    palcoWrap.classList.add('fade-out');

    setTimeout(() => {
      // Atualiza textos
      tagEl.textContent = data.tag;
      tituloEl.textContent = data.titulo;
      
      // Atualiza imagem
      if (data.imagem) {
        imgEl.src = data.imagem;
        imgEl.alt = data.titulo;
        legendaEl.textContent = data.legenda || '';
        imgWrapperEl.style.display = 'block';
      } else {
        imgWrapperEl.style.display = 'none';
      }

      // Injeta o corpo de texto
      // Se for a aba bônus do Dicionário, monta a estrutura HTML com acordeão
      if (topicoId === 'capitulobonus') {
        corpoEl.innerHTML = data.htmlCorpo;
      } else {
        corpoEl.innerHTML = data.htmlCorpo;
      }

      // Adiciona classe capitular ao primeiro parágrafo do texto de leitura
      const primeiroP = corpoEl.querySelector('p');
      if (primeiroP) {
        primeiroP.classList.add('capitular');
      }

      // Se for o Dicionário do Axé, ativa acordeões dinâmicos internos
      if (topicoId === 'capitulobonus') {
        renderDicionarioInterno();
      }

      // Remove fade-out (inicia fade-in suave)
      palcoWrap.classList.remove('fade-out');

      // Aplica animações de scroll aos elementos do artigo
      initTopicRevealAnimations();

      // Rola a tela para o topo da área de leitura
      if (scroll) {
        const offset = window.innerWidth <= 992 ? 140 : 100;
        const rect = palcoWrap.getBoundingClientRect();
        const topPosition = rect.top + window.scrollY - offset;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
        });
      }

    }, 380);

    // Sincroniza botões ativos na Sidebar
    topicoBtns.forEach(btn => {
      if (btn.dataset.topico === topicoId) {
        btn.classList.add('active');
        
        // Garante que o módulo pai esteja aberto
        const moduloPai = btn.closest('.modulo-item');
        if (moduloPai) {
          moduloPai.classList.add('open');
        }
      } else {
        btn.classList.remove('active');
      }
    });

    // Atualiza a hash na URL para links compartilháveis
    if (window.location.hash !== '#' + topicoId) {
      history.pushState(null, null, '#' + topicoId);
    }
  }

  // --- Função para renderizar o Dicionário de Termos no Palco de Leitura ---
  function renderDicionarioInterno() {
    let html = `<p>Se você está iniciando a sua caminhada de estudos na Umbanda ou no Candomblé, é comum encontrar palavras de origem Iorubá, Banto ou Fon que parecem estranhas ao vocabulário diário. Criamos este glossário interativo para ajudar você a compreender as expressões sagradas usadas em nossa casa:</p>
                <div class="dic-accordion-list" style="margin-top: 2rem;">`;

    DICIONARIO_DB.forEach((item, index) => {
      html += `
        <div class="dic-accordion-item">
          <button class="dic-accordion-trigger" aria-expanded="false" data-index="${index}">
            <span class="dic-term"><span class="dic-term-icon">✦</span> ${item.termo}</span>
            <span class="dic-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          <div class="dic-accordion-content">
            <div class="dic-accordion-inner">
              ${item.desc}
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    corpoEl.innerHTML = html;

    // Ativa cliques dos acordeões recém-injetados
    const items = corpoEl.querySelectorAll('.dic-accordion-item');
    items.forEach(item => {
      const trigger = item.querySelector('.dic-accordion-trigger');
      if (trigger) {
        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          items.forEach(i => i.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // Adiciona a rota do dicionário no banco de dados para unificação
  ESTUDOS_DB['capitulobonus'] = {
    modulo: 'Módulo 4: Rituais e Práticas',
    tag: 'Estudos · Glossário Sagrado',
    titulo: 'O Dicionário do Axé',
    imagem: './assets/estudos/dicionario.jpg',
    legenda: 'Preservando as palavras sagradas que dão voz ao nosso axé.',
    prompt: 'Cinematic 4K photography, ancient sacred book on table, light rays shining on pages, temple background, warm acolhedor lighting, spiritual glow.',
    htmlCorpo: '' // Montado programaticamente acima
  };

  // --- Gerenciamento da Sidebar Sanfona (Módulos) ---
  moduloTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.modulo-item');
      if (item) {
        item.classList.toggle('open');
      }
    });
  });

  // --- Cliques nos botões de tópicos ---
  topicoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const topicoId = btn.dataset.topico;
      carregarTopico(topicoId);
      
      // Fecha a gaveta (drawer) no mobile após selecionar
      if (sidebar.classList.contains('open')) {
        fecharDrawer();
      }
    });
  });

  // --- Lógica de Abertura/Fechamento do Drawer (Mobile) ---
  function abrirDrawer() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function fecharDrawer() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btnToggleSidebar) btnToggleSidebar.addEventListener('click', abrirDrawer);
  if (btnCloseSidebar) btnCloseSidebar.addEventListener('click', fecharDrawer);
  if (overlay) overlay.addEventListener('click', fecharDrawer);

  // --- Carregamento inicial de tópicos via Hash da URL ---
  function carregarDoHash() {
    const hash = window.location.hash.substring(1);
    if (hash && ESTUDOS_DB[hash]) {
      carregarTopico(hash, false);
      
      // Satura scroll do botão da sidebar ativa após renderizar
      setTimeout(() => {
        const activeBtn = document.querySelector(`.topico-btn[data-topico="${hash}"]`);
        if (activeBtn) {
          activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 500);
    } else {
      // Tópico padrão inicial
      carregarTopico('umbanda-candomble', false);
    }
  }

  // Inicializa o hash
  window.addEventListener('hashchange', carregarDoHash);
  carregarDoHash();
}

/* ============================================================
   3. ACORDEÕES DO DICIONÁRIO DO AXÉ (DEPRECATED: Tratado dinamicamente)
   ============================================================ */
function initStudyAccordion() {
  // Mantido para compatibilidade caso existam outros acordeões no DOM
}

/* ============================================================
   4. ANIMAÇÕES DE REVELAÇÃO FADE-IN (INTERSECTION OBSERVER)
   ============================================================ */
function initRevealAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Anima os elementos revelados dinamicamente injetados no palco de leitura
function initTopicRevealAnimations() {
  const palco = document.getElementById('leituraPalco');
  if (!palco) return;
  
  const imgs = palco.querySelectorAll('.artigo-imagem-wrapper');
  const quotes = palco.querySelectorAll('.artigo-citacao');
  const subs = palco.querySelectorAll('.artigo-subsecao');

  if (!('IntersectionObserver' in window)) {
    [...imgs, ...quotes, ...subs].forEach(el => el.classList.add('visible'));
    return;
  }

  const itemObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  [...imgs, ...quotes, ...subs].forEach(el => {
    el.classList.add('reveal');
    itemObserver.observe(el);
  });
}

/* ============================================================
   5. INTEGRAÇÃO DINÂMICA DO WHATSAPP E REDES SOCIAIS (FIRESTORE)
   ============================================================ */
function initDynamicData() {
  const DEFAULT_DATA = {
    whatsapp_numero: '5555999176726',
    redes_sociais: {
      instagram: 'https://www.instagram.com/paulogandor',
      facebook:  'https://www.facebook.com/babalorixapaulinho.dexangoaganju'
    }
  };

  let siteData = { ...DEFAULT_DATA };
  try {
    const raw = localStorage.getItem('terreira_data');
    if (raw) {
      const saved = JSON.parse(raw);
      siteData = {
        ...DEFAULT_DATA,
        ...saved,
        redes_sociais: {
          ...DEFAULT_DATA.redes_sociais,
          ...(saved.redes_sociais || {})
        }
      };
    }
  } catch (e) {
    console.warn('[LocalStorage] Erro ao carregar dados em estudos.js — usando padrão.', e);
  }

  applyDynamicData(siteData);

  if (window.FIREBASE_CONFIGURED && window.db) {
    try {
      window.db.collection('site_config').doc('dados')
        .onSnapshot(snap => {
          if (snap.exists) {
            const updatedData = { ...DEFAULT_DATA, ...snap.data() };
            applyDynamicData(updatedData);
          }
        }, err => {
          console.warn('[Firestore] Erro no listener em estudos.js:', err.message);
        });
    } catch (e) {
      console.error('[Firestore] Falha ao iniciar listener em estudos.js:', e.message);
    }
  }
}

function applyDynamicData(data) {
  const whatsappNum = data.whatsapp_numero || '5555999176726';
  const msg = `🙏 Olá, Pai Paulinho!\nVim pela plataforma de estudos e gostaria de agendar uma consulta espiritual. ✨`;
  const waUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(msg)}`;

  document.querySelectorAll('.whatsapp-trigger').forEach(btn => {
    btn.href = waUrl;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });

  const footerSocial = document.getElementById('footerSocial');
  if (footerSocial) {
    const ig = (data.redes_sociais?.instagram || '').trim() || 'https://www.instagram.com/paulogandor';
    const fb = (data.redes_sociais?.facebook || '').trim() || 'https://www.facebook.com/babalorixapaulinho.dexangoaganju';
    
    const links = [];
    if (ig && ig !== '#') links.push(`<a href="${ig}" target="_blank" rel="noopener noreferrer"><span>📸</span> Instagram</a>`);
    if (fb && fb !== '#') links.push(`<a href="${fb}" target="_blank" rel="noopener noreferrer"><span>📘</span> Facebook</a>`);
    
    if (links.length) {
      footerSocial.innerHTML = links.join('');
    }
  }
}
