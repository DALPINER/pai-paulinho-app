// Introduções e palavras de apoio para a leitura inicial.
const STUDY_TERMS = {
  "axe": [
    "Axé",
    "Palavra usada para falar da força espiritual presente na vida e nas práticas religiosas."
  ],
  "orixa": [
    "Orixá",
    "Divindade cultuada nas religiões de matriz africana, relacionada a aspectos da natureza e da vida. Cada tradição tem suas formas de compreender e cultuar."
  ],
  "entidade": [
    "Entidade ou guia",
    "Neste material, nome dado a um guia espiritual que participa dos trabalhos de orientação e acolhimento."
  ],
  "consulente": [
    "Consulente",
    "Pessoa que procura um atendimento ou uma orientação na casa."
  ],
  "terreiro": [
    "Terreiro ou casa",
    "Espaço onde uma comunidade se reúne para suas atividades religiosas."
  ],
  "incorporacao": [
    "Incorporação",
    "Termo usado para uma experiência de manifestação espiritual, compreendida de diferentes maneiras entre as tradições."
  ],
  "tradicao": [
    "Tradição",
    "Conjunto de ensinamentos e práticas transmitidos dentro de uma comunidade religiosa."
  ],
  "esquerda": [
    "Esquerda",
    "Nome religioso usado neste material para linhas de trabalho ligadas a Exu e Pombagira. Não se refere a uma posição política."
  ],
  "linha": [
    "Linha de trabalho",
    "Forma de agrupar guias e trabalhos espirituais dentro da organização religiosa apresentada."
  ],
  "ori": [
    "Ori",
    "Palavra de origem iorubá que significa cabeça. No contexto religioso, também tem um sentido espiritual."
  ],
  "rito": [
    "Rito ou ritual",
    "Prática religiosa com significado e forma próprios, conduzida conforme a tradição da casa."
  ],
  "oferenda": [
    "Oferenda",
    "Gesto religioso de homenagem ou agradecimento, realizado conforme a orientação da tradição."
  ],
  "classificacao": [
    "Classificação das ervas",
    "Forma tradicional de agrupar as ervas conforme os significados que recebem no contexto religioso."
  ],
  "descarrego": [
    "Descarrego",
    "Nome religioso dado a um trabalho de limpeza espiritual."
  ],
  "defumacao": [
    "Defumação",
    "Uso religioso da fumaça de ervas ou resinas em um ritual orientado pela casa."
  ],
  "ponto": [
    "Ponto de força",
    "Expressão usada no estudo para um lugar associado ao trabalho ou ao significado de uma linha espiritual."
  ],
  "calunga": [
    "Calunga",
    "Palavra com diferentes sentidos nas tradições afro-brasileiras. Neste assunto, é usada em relação ao cemitério e à ancestralidade."
  ],
  "ancestralidade": [
    "Ancestralidade",
    "Ligação com as pessoas, histórias e ensinamentos das gerações que vieram antes."
  ]
};

const STUDY_GUIDE = {
  "umbanda-candomble": {
    "titulo": "Umbanda e Candomblé: conheça as diferenças",
    "resumo": "Umbanda e Candomblé são religiões diferentes. Neste estudo, o Candomblé é apresentado pelo culto aos orixás e outras divindades; a Umbanda, pela relação com os orixás e pelo trabalho de guias espirituais. As práticas variam entre casas e tradições.",
    "termos": [
      "tradicao",
      "terreiro",
      "orixa"
    ]
  },
  "orixas-entidades": {
    "titulo": "O que são orixás e entidades?",
    "resumo": "Neste material, orixás são apresentados como divindades; entidades são apresentadas como guias espirituais. Essa diferença ajuda a acompanhar os próximos assuntos. Os significados e as formas de culto variam entre tradições.",
    "termos": [
      "orixa",
      "entidade",
      "incorporacao"
    ]
  },
  "capitulobonus": {
    "titulo": "Palavras e seus significados",
    "resumo": "Encontrou uma palavra desconhecida? Consulte esta lista. Toque no termo para abrir uma explicação curta e volte ao assunto que estava lendo.",
    "termos": [
      "axe",
      "terreiro"
    ]
  },
  "exu-orixa": {
    "titulo": "Exu como orixá",
    "resumo": "Conheça Exu no contexto do culto aos orixás e os temas de comunicação e movimento apresentados no estudo. Este assunto trata de Exu como orixá; as entidades são apresentadas em outros temas.",
    "termos": [
      "orixa",
      "entidade",
      "tradicao"
    ]
  },
  "ogum": {
    "titulo": "Conheça Ogum",
    "resumo": "O estudo apresenta Ogum por meio dos temas do trabalho, da coragem e dos caminhos. A leitura completa reúne os símbolos e significados religiosos descritos neste material.",
    "termos": [
      "orixa",
      "axe"
    ]
  },
  "oxossi": {
    "titulo": "Conheça Oxóssi",
    "resumo": "Conheça os temas da natureza, do conhecimento e da fartura associados a Oxóssi neste estudo. Comece pelos significados gerais e depois explore os símbolos apresentados.",
    "termos": [
      "orixa",
      "axe"
    ]
  },
  "xango": {
    "titulo": "Conheça Xangô Aganjú",
    "resumo": "Xangô Aganjú dá nome à casa de Pai Paulinho. Este estudo apresenta temas como justiça, equilíbrio e responsabilidade, junto dos símbolos religiosos relacionados a Xangô.",
    "termos": [
      "orixa",
      "axe"
    ]
  },
  "oxumare": {
    "titulo": "Conheça Oxumarê",
    "resumo": "Este assunto apresenta Oxumarê a partir dos temas dos ciclos e da renovação. O arco-íris e a serpente aparecem entre os símbolos explicados na leitura.",
    "termos": [
      "orixa",
      "tradicao"
    ]
  },
  "ossaim": {
    "titulo": "Conheça Ossaim",
    "resumo": "Conheça a relação de Ossaim com as folhas e com o conhecimento religioso das ervas. A proposta é compreender esses significados; o uso de ervas precisa de orientação da casa.",
    "termos": [
      "orixa",
      "rito"
    ]
  },
  "omulu": {
    "titulo": "Conheça Obaluaiê e Omulu",
    "resumo": "O estudo apresenta os nomes Obaluaiê e Omulu e os temas de cuidado, transformação e respeito à vida. As formas de compreender esses nomes e seus cultos variam entre tradições.",
    "termos": [
      "orixa",
      "tradicao"
    ]
  },
  "oxum": {
    "titulo": "Conheça Oxum",
    "resumo": "A leitura apresenta Oxum por meio dos temas do afeto, do cuidado e da prosperidade. Conheça os símbolos das águas doces e seus significados neste estudo.",
    "termos": [
      "orixa",
      "axe"
    ]
  },
  "iansa": {
    "titulo": "Conheça Iansã",
    "resumo": "Conheça os temas de coragem e transformação apresentados no estudo de Iansã. Os ventos e as tempestades aparecem entre os símbolos religiosos da leitura.",
    "termos": [
      "orixa",
      "tradicao"
    ]
  },
  "iemanja": {
    "titulo": "Conheça Iemanjá",
    "resumo": "Neste estudo, o mar é um dos símbolos usados para apresentar Iemanjá. A leitura aborda acolhimento, cuidado e os significados religiosos associados às águas.",
    "termos": [
      "orixa",
      "axe"
    ]
  },
  "nana": {
    "titulo": "Conheça Nanã",
    "resumo": "O estudo apresenta Nanã a partir do respeito aos mais velhos, da memória e dos ciclos da vida. Conheça esses temas e os símbolos usados na leitura.",
    "termos": [
      "orixa",
      "ancestralidade"
    ]
  },
  "oxala": {
    "titulo": "Conheça Oxalá",
    "resumo": "Conheça os temas de paz, paciência e fé presentes no estudo de Oxalá. A leitura completa apresenta símbolos e significados religiosos relacionados a esses ensinamentos.",
    "termos": [
      "orixa",
      "axe"
    ]
  },
  "pretos-velhos": {
    "titulo": "Conheça os Pretos Velhos",
    "resumo": "A leitura apresenta os Pretos Velhos como guias ligados à escuta, à sabedoria e ao acolhimento. Conheça o significado dessa linha e sua relação com a memória ancestral.",
    "termos": [
      "entidade",
      "linha",
      "ancestralidade"
    ]
  },
  "caboclos": {
    "titulo": "Conheça os Caboclos",
    "resumo": "Conheça como os Caboclos são apresentados neste material: guias ligados à natureza, à coragem e à orientação espiritual. As formas de trabalho variam conforme a casa.",
    "termos": [
      "entidade",
      "linha"
    ]
  },
  "baianos": {
    "titulo": "Conheça os Baianos",
    "resumo": "O estudo apresenta a linha dos Baianos e seus temas de alegria, resistência e acolhimento. Leia sobre os significados dessa apresentação religiosa e dos seus trabalhos.",
    "termos": [
      "entidade",
      "linha"
    ]
  },
  "boiadeiros": {
    "titulo": "Conheça os Boiadeiros",
    "resumo": "Conheça a linha dos Boiadeiros e os símbolos da vida no campo usados neste estudo. A leitura apresenta sua relação com firmeza, proteção e orientação espiritual.",
    "termos": [
      "entidade",
      "linha",
      "consulente"
    ]
  },
  "marinheiros": {
    "titulo": "Conheça os Marinheiros",
    "resumo": "A leitura apresenta os Marinheiros por meio dos símbolos do mar e das viagens. Conheça como esses elementos aparecem nos trabalhos espirituais descritos neste assunto.",
    "termos": [
      "entidade",
      "linha"
    ]
  },
  "eres": {
    "titulo": "Erês e linha das Crianças",
    "resumo": "O assunto reúne explicações sobre Erês e a linha das Crianças. Os termos e seus significados variam conforme a tradição; a leitura apresenta a abordagem deste material.",
    "termos": [
      "entidade",
      "tradicao"
    ]
  },
  "firmeza-espiritual": {
    "titulo": "O que é firmeza espiritual?",
    "resumo": "Firmeza é uma palavra usada para práticas de sustentação espiritual. Aqui você conhece seu significado religioso. A forma de realizar uma prática depende da orientação da casa.",
    "termos": [
      "axe",
      "rito",
      "oferenda"
    ]
  },
  "jogo-buzios": {
    "titulo": "O que é o jogo de búzios?",
    "resumo": "O jogo de búzios é apresentado aqui como uma forma religiosa de buscar orientação. Conheça o significado da consulta e o papel de quem conduz esse atendimento.",
    "termos": [
      "consulente",
      "orixa",
      "rito"
    ]
  },
  "limpeza-espiritual": {
    "titulo": "O que é limpeza espiritual?",
    "resumo": "Este assunto explica o sentido religioso de limpeza espiritual e apresenta práticas mencionadas no estudo. Para entender o que faz sentido em uma situação pessoal, converse com a casa.",
    "termos": [
      "descarrego",
      "consulente",
      "rito"
    ]
  },
  "ervas-quentes": {
    "titulo": "Ervas chamadas quentes",
    "resumo": "Conheça a classificação religiosa das chamadas ervas quentes e o significado de descarrego no estudo. A leitura é uma apresentação dos conceitos; a escolha e o uso das ervas pedem orientação.",
    "termos": [
      "classificacao",
      "descarrego",
      "defumacao"
    ]
  },
  "ervas-mornas": {
    "titulo": "Ervas chamadas mornas",
    "resumo": "Este assunto apresenta o grupo chamado de ervas mornas e os significados de equilíbrio atribuídos a ele no material. Procure orientação da casa para conhecer qualquer uso em uma prática.",
    "termos": [
      "classificacao",
      "rito"
    ]
  },
  "ervas-frias": {
    "titulo": "Ervas chamadas frias",
    "resumo": "Conheça o grupo chamado de ervas frias e os significados que recebe no estudo. As classificações podem variar entre tradições, e seu uso precisa de orientação.",
    "termos": [
      "classificacao",
      "tradicao"
    ]
  },
  "quimbanda-fundamentos": {
    "titulo": "Conhecendo a Quimbanda",
    "resumo": "Este assunto introduz a Quimbanda e os temas de Exu, Pombagira e linhas de trabalho apresentados no material. Leia primeiro o significado das palavras abaixo para acompanhar a explicação.",
    "termos": [
      "esquerda",
      "linha",
      "tradicao"
    ]
  },
  "guardioes-esquerda": {
    "titulo": "Exu e Pombagira como entidades",
    "resumo": "A leitura apresenta Exu e Pombagira no contexto das entidades e guias espirituais. Aqui, a palavra esquerda nomeia uma forma de organizar trabalhos religiosos.",
    "termos": [
      "entidade",
      "esquerda",
      "linha"
    ]
  },
  "esquerda-encruzilhada": {
    "titulo": "Povo da Encruzilhada",
    "resumo": "Conheça o significado da encruzilhada como símbolo de caminhos e escolhas neste material. A leitura reúne apresentações de guias relacionados a esse tema.",
    "termos": [
      "linha",
      "ponto"
    ]
  },
  "esquerda-calunga": {
    "titulo": "Povo da Calunga",
    "resumo": "Neste assunto, Calunga se refere ao contexto do cemitério e da ancestralidade. Conheça como o material apresenta essa linha e os guias nela reunidos.",
    "termos": [
      "calunga",
      "ancestralidade",
      "linha"
    ]
  },
  "esquerda-lira": {
    "titulo": "Povo da Lira",
    "resumo": "A leitura apresenta a chamada linha da Lira e os símbolos e nomes reunidos nesse grupo. As divisões e os nomes das linhas podem variar entre as casas.",
    "termos": [
      "linha",
      "entidade"
    ]
  },
  "esquerda-ciganos": {
    "titulo": "Linha dos Ciganos",
    "resumo": "Conheça como este material apresenta a linha dos Ciganos, seus símbolos e temas. A apresentação de uma linha espiritual não descreve todas as pessoas de um povo ou cultura.",
    "termos": [
      "linha",
      "entidade"
    ]
  },
  "esquerda-malandros": {
    "titulo": "Linha dos Malandros",
    "resumo": "O estudo apresenta a linha dos Malandros e temas como convivência, experiência de vida e orientação. Conheça os personagens e símbolos religiosos apresentados na leitura.",
    "termos": [
      "linha",
      "entidade",
      "consulente"
    ]
  },
  "esquerda-mirim": {
    "titulo": "Linha de Exu Mirim",
    "resumo": "Conheça como a linha de Exu Mirim é apresentada neste material. A leitura reúne nomes e símbolos dessa linha, cuja compreensão depende da tradição e da orientação da casa.",
    "termos": [
      "linha",
      "esquerda",
      "tradicao"
    ]
  }
};
