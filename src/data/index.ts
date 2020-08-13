export default {
  heroes: [
    {
      name: 'Homem Aranha',
      alterEgo: 'Peter Parker',
      imagePath: require('../assets/chars/spider-man.png'),
      biography:
        'Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos. Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.',
      caracteristics: {
        birth: '1990',
        weight: {
          value: 78,
          unity: 'kg',
        },
        height: {
          value: 1.8,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 70,
        'Inteligência': 65,
        'Agilidade': 90,
        'Resistência': 60,
        'Velocidade': 80,
      },
      movies: [
        require('../assets/movies/captain-america-3.jpg'),
        require('../assets/movies/spider-man-homecoming.jpg'),
        require('../assets/movies/avengers-3.jpg'),
        require('../assets/movies/avengers-4.jpg'),
        require('../assets/movies/spider-man-far-from-home.jpg'),
      ],
    },
    {
      name: 'Pantera Negra',
      alterEgo: "T'Challa",
      imagePath: require('../assets/chars/black-panther.png'),
      biography:
        'O Pantera Negra é o título cerimonial atribuído ao chefe da Tribo Pantera da avançada nação africana de Wakanda. Além de governar o país, ele também é chefe de suas várias tribos (coletivamente conhecida como Wakandas). O uniforme do Pantera é um símbolo oficial (chefe de estado) e é usado mesmo durante missões diplomáticas. O Pantera é um título hereditário, mas ainda é preciso ganhar um desafio. No passado distante, um enorme meteorito maciço composto de vibranium - elemento que absorve o som, entre outras propriedades especiais - caiu em Wakanda, e é desenterrado uma geração antes dos eventos do presente.',
      caracteristics: {
        birth: '1973',
        weight: {
          value: 91,
          unity: 'kg',
        },
        height: {
          value: 1.83,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 65,
        'Inteligência': 60,
        'Agilidade': 95,
        'Resistência': 60,
        'Velocidade': 80,
      },
      movies: [
        require('../assets/movies/captain-america-3.jpg'),
        require('../assets/movies/black-panther.jpg'),
        require('../assets/movies/avengers-3.jpg'),
        require('../assets/movies/avengers-4.jpg'),
      ],
    },
    {
      name: 'Homem de Ferro',
      alterEgo: 'Tony Stark',
      imagePath: require('../assets/chars/iron-man.png'),
      biography:
        'Durante a guerra do Vietnã, o inventor e empresário Tony Stark foi vítima de uma explosão de granada. Stark sobreviveu à explosão mas estilhaços do explosivo se alojaram próximo ao seu coração, ameaçando sua vida. Ele foi capturado e levado até o líder Wong Chu, que o forçou a criar uma poderosa arma, mas ele criou algo que o mantivesse vivo e permitisse derrotar os captores. O Homem de Ferro enfrentou os soldados e os derrotou. Sua armadura resistia aos disparos contra ele. Wong Chu tentou fugir e o Homem de Ferro incendiou o galpão de munições fazendo com que a explosão o matasse.',
      caracteristics: {
        birth: '1970',
        weight: {
          value: 102,
          unity: 'kg',
        },
        height: {
          value: 1.85,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 75,
        'Inteligência': 90,
        'Agilidade': 70,
        'Resistência': 50,
        'Velocidade': 80,
      },
      movies: [
        require('../assets/movies/iron-man-1.jpg'),
        require('../assets/movies/iron-man-2.jpg'),
        require('../assets/movies/hulk.jpg'),
        require('../assets/movies/avengers-1.jpg'),
        require('../assets/movies/iron-man-3.jpg'),
        require('../assets/movies/avengers-2.jpg'),
        require('../assets/movies/captain-america-3.jpg'),
        require('../assets/movies/spider-man-homecoming.jpg'),
        require('../assets/movies/avengers-3.jpg'),
        require('../assets/movies/avengers-4.jpg'),
      ],
    },
  ],
  villains: [
    {
      name: 'Caveira Vermelha',
      alterEgo: 'Jöhann Schmidt',
      imagePath: require('../assets/chars/red-skull.png'),
      biography:
        'Jöhann Schmidt é filho de um camponês analfabeto e bêbado. Sua mãe morreu ao lhe dar a luz e seu pai, que tentou afogá-lo por causa disso em uma bacia e foi contido pelo obstetra, logo em seguida suicídou-se. Schmidt fugiu aos sete anos do orfanato onde foi criado, cresceu nas ruas da Alemanha, sendo preso várias vezes por pequenos crimes. Hitler encontrou Schmidt quando ele trabalhava como camareiro em um hotel no qual o líder nazista se hospedou. Hitler o treinou pessoalmente, oferecendo ao final do processo uma máscara vermelha no formato de um crânio e o nome que carrega até hoje.',
      caracteristics: {
        birth: '1941',
        weight: {
          value: 91,
          unity: 'kg',
        },
        height: {
          value: 1.88,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 75,
        'Inteligência': 60,
        'Agilidade': 70,
        'Resistência': 65,
        'Velocidade': 80,
      },
      movies: [
        require('../assets/movies/captain-america-1.jpg'),
        require('../assets/movies/avengers-4.jpg'),
      ],
    },
    {
      name: 'Doutor Destino',
      alterEgo: 'Victor Von Doom',
      imagePath: require('../assets/chars/dr-doom.png'),
      biography:
        'Victor nasceu em Haasenstadt, um vilarejo que fica na Latvéria, filho de Werner von Doom, um conhecido curandeiro cigano, e Cynthia von Doom, que diziam ser uma bruxa. Sua mãe foi morta quando ele ainda era uma criança. Ela tentara adquirir poder para proteger sua tribo cigana da perseguição que sofriam por parte do governo vigente sobre a Latvéria. Cynthia tentou obter esse poder através de um trato com o demônio Mephisto. Victor von Doom ficou aos cuidados de Bóris, um dos membros da comunidade cigana de que pertencia. Victor jurou que faria o mundo todo pagar pela morte de seus pais.',
      caracteristics: {
        birth: '1962',
        weight: {
          value: 188,
          unity: 'kg',
        },
        height: {
          value: 1.92,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 80,
        'Inteligência': 85,
        'Agilidade': 75,
        'Resistência': 60,
        'Velocidade': 70,
      },
      movies: [
        require('../assets/movies/fantastic-four-1.jpg'),
        require('../assets/movies/fantastic-four-2.jpg'),
      ],
    },
    {
      name: 'Duende Verde',
      alterEgo: 'Norman Osborn',
      imagePath: require('../assets/chars/green-goblin.png'),
      biography:
        'Filho do rico empresário Amberson Osborn, Norman foi vítima de abuso quando o pai perdeu seu dinheiro e se tornou alcóolatra e violento, o que iniciou suas tendências homicidas e o desejo de ser um chefe de família melhor. Norman estudou química, administração e engenharia elétrica na faculdade, onde conheceu sua futura esposa Emily, mãe de seu filho Harry Osborn. Após formar, Norman se uniu a seu professor Mendel Stromm para fundar a empresa química Oscorp, que logo o tornaria milionário de novo, porém quando Emily morre Norman fica abalado a ponto de focar mais e mais no trabalho, neglicenciando a criação do filho.',
      caracteristics: {
        birth: '1974',
        weight: {
          value: 174,
          unity: 'kg',
        },
        height: {
          value: 1.93,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 75,
        'Inteligência': 80,
        'Agilidade': 70,
        'Resistência': 50,
        'Velocidade': 65,
      },
      movies: [require('../assets/movies/spider-man-1.jpg')],
    },
  ],
  antiHeroes: [
    {
      name: 'Deadpool',
      alterEgo: 'Wade Wilson',
      imagePath: require('../assets/chars/deadpool.png'),
      biography:
        'O jovem Wade saiu do controle quando sua mãe morreu de câncer quando ele tinha 6 anos de idade, tornando-o um garoto solitário e atormentado, sem nenhuma explicação. Seu pai – que era um bêbado do exército – o espancava e o tratava mal. Assim, com uma vida desestruturada, Wade tornou-se um delinquente na adolescência. Um dia chegou a agredir friamente seu pai com uma garrafa mostrando alguns traços de insanidade, matando-o no processo. Depois disso, Wade iniciou sua carreira de mercenário. Ele aceitava assassinar apenas aqueles merecedores da morte.',
      caracteristics: {
        birth: '1991',
        weight: {
          value: 95,
          unity: 'kg',
        },
        height: {
          value: 1.88,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 80,
        'Inteligência': 60,
        'Agilidade': 85,
        'Resistência': 90,
        'Velocidade': 70,
      },
      movies: [
        require('../assets/movies/deadpool-1.jpg'),
        require('../assets/movies/deadpool-2.jpg'),
      ],
    },
    {
      name: 'Venom',
      alterEgo: 'Eddie Brock',
      imagePath: require('../assets/chars/venom.png'),
      biography:
        "Venom é o ser resultante da simbiose entre uma criatura alienígena e o jornalista Eddie Brock. Apesar de já ter tido minisséries próprias, a maioria de suas aparições é como inimigo do personagem Homem Aranha. A característica marcante de Venom, além do uniforme negro, é a desproporcional e assustadora mandíbula. Antes de fundir-se ao simbionte e tornar-se o Venom, Eddie Brock era um repórter do jornal Clarim Diário. A origem do simbionte alienígena foi mostrada no evento intitulado Guerras Secretas, quando foi usado como 'uniforme' pelo próprio Homem Aranha.",
      caracteristics: {
        birth: '1986',
        weight: {
          value: 104,
          unity: 'kg',
        },
        height: {
          value: 1.92,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 90,
        'Inteligência': 60,
        'Agilidade': 70,
        'Resistência': 80,
        'Velocidade': 75,
      },
      movies: [require('../assets/movies/venom.jpg')],
    },
    {
      name: 'Justiceiro',
      alterEgo: 'Francis Castle',
      imagePath: require('../assets/chars/punisher.png'),
      biography:
        'O Justiceiro é um vigilante, que considera crimes como assassinato, sequestro e tortura aceitáveis como táticas de combate ao crime. Motivado pela morte de sua família, que foi morta pelos capangas do mafioso Costa, quando testemunharam uma execução proveniente de uma guerra entre gangues no Central Park, em Nova York. O Justiceiro pode ser considerado um homem-guerra entre todos os criminosos em geral, conhecendo quase todo o tipo de armamento. Como veterano de guerra, Castle é um mestre em táticas furtivas e emboscadas, bem como o manuseio de várias armas.',
      caracteristics: {
        birth: '1974',
        weight: {
          value: 95,
          unity: 'kg',
        },
        height: {
          value: 1.87,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 75,
        'Inteligência': 70,
        'Agilidade': 80,
        'Resistência': 60,
        'Velocidade': 65,
      },
      movies: [require('../assets/movies/punisher.jpg')],
    },
  ],
  aliens: [
    {
      name: 'Thanos',
      alterEgo: 'Deviant',
      imagePath: require('../assets/chars/thanos.png'),
      biography:
        "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. O primeiro tinha o poder de estimular os centros de prazer de seres vivos sencientes. O outro, entretanto, era bem mais poderoso e almejava ainda mais. Assim, Thanos se voltou contra seu pai e contra o reino, forçando Mentor a procurar Kronos. Este criou Drax, o Destruidor, para que ele eliminasse Thanos. Mas o Destruidor falhou de modo que Thanos conseguiu conquistar o trono de Titã. Em seguida, partiu pela Via Láctea, com o intuito de apoderar-se do Cubo Cósmico, um objeto que satisfaz quaisquer desejos de seu possuidor.",
      caracteristics: {
        birth: '1973',
        weight: {
          value: 447,
          unity: 'kg',
        },
        height: {
          value: 2.15,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 90,
        'Inteligência': 85,
        'Agilidade': 70,
        'Resistência': 95,
        'Velocidade': 80,
      },
      movies: [
        require('../assets/movies/guardians-of-the-galaxy-1.jpg'),
        require('../assets/movies/avengers-3.jpg'),
        require('../assets/movies/avengers-4.jpg'),
      ],
    },
    {
      name: 'Ronan',
      alterEgo: 'Kree',
      imagePath: require('../assets/chars/ronan.png'),
      biography:
        "Ronan nasceu no planeta Hala, capital do Império alienígena Kree na Grande Nuvem de Magalhães; é membro do 'Conselho dos Acusadores', que são o equivalente a governadores, militares e juristas. Sua ascensão na hierarquia foi extraordinária, logo acabou se tornando o terceiro mais poderoso do Império Kree. A entidade conhecida como: 'Inteligência Suprema' o nomeou a 'Supremo Acusador do Império Kree', e neste cargo ele ficou conhecido simplesmente como Ronan, o Acusador. Mais tarde, Ronan foi enviado à Terra para investigar a derrota do robô Sentry - 459 para Quarteto Fantástico.",
      caracteristics: {
        birth: '1967',
        weight: {
          value: 85,
          unity: 'kg',
        },
        height: {
          value: 1.9,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 80,
        'Inteligência': 70,
        'Agilidade': 65,
        'Resistência': 85,
        'Velocidade': 75,
      },
      movies: [
        require('../assets/movies/captain-marvel.jpg'),
        require('../assets/movies/guardians-of-the-galaxy-1.jpg'),
      ],
    },
    {
      name: 'Talos',
      alterEgo: 'Skrull',
      imagePath: require('../assets/chars/talos.png'),
      biography:
        "Talos, considerado um Mutante pelo seu povo, é um Skrull que nasceu sem a capacidade de moldar a mudança. Ele compensou ao tornar-se um dos Skrulls mais temidos do seu planeta, ganhando o título de Talos, o Indomado, devido à sua natureza selvagem e sinistra. Contudo, depois de ter sido capturado pelos Kree, recusou-se a cometer suicídio na esperança de ganhar glória para pela sua sobrevivência. Em vez disso, foi ridicularizado e renomeado como o mais humilhante 'Talos, o Domado'. Talos foi chamado ao planeta Godthab Omega por Glorian, onde acabou lutando contra Devos, o Devastador.",
      caracteristics: {
        birth: '1994',
        weight: {
          value: 298,
          unity: 'kg',
        },
        height: {
          value: 1.93,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 75,
        'Inteligência': 90,
        'Agilidade': 70,
        'Resistência': 50,
        'Velocidade': 80,
      },
      movies: [require('../assets/movies/captain-marvel.jpg')],
    },
  ],
  humans: [
    {
      name: 'Howard Stark',
      alterEgo: 'Homem de Ferro',
      imagePath: require('../assets/chars/howard-stark.png'),
      biography:
        "O filho do Sr. Howard Stark, Howard Stark nasceu em Richford, Nova York. Um inventor ávido e genial desde pequeno, ele foi um cientista brilhante ao longo de sua vida. Ele e seu pai trabalharam em vários projetos e, mais tarde fundaram as Indústrias Stark. Ao longo de sua idade adulta, Stark trabalhou em vários projetos governamentais, como o projeto do Capitão América na Primeira Guerra Mundial com John Crowe Ransom; O Projeto Manhattan na Segunda Guerra Mundial; e os robôs 'Arsenal', escondidos no subsolo de sua mansão. Durante a década de 1950, Stark foi um agente da Shield, em parceria com Nathaniel Richards.",
      caracteristics: {
        birth: '1970',
        weight: {
          value: 82,
          unity: 'kg',
        },
        height: {
          value: 1.77,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 40,
        'Inteligência': 90,
        'Agilidade': 45,
        'Resistência': 50,
        'Velocidade': 30,
      },
      movies: [
        require('../assets/movies/captain-america-1.jpg'),
        require('../assets/movies/iron-man-1.jpg'),
        require('../assets/movies/iron-man-2.jpg'),
        require('../assets/movies/captain-america-2.jpg'),
        require('../assets/movies/ant-man.jpg'),
        require('../assets/movies/captain-america-3.jpg'),
      ],
    },
    {
      name: 'Mary Jane',
      alterEgo: 'Homem Aranha',
      imagePath: require('../assets/chars/mary-jane.png'),
      biography:
        "Mary Jane é retratada como uma ruiva extremamente bonita, de olhos verdes e foi o principal interesse romântico de Peter Parker durante a maior parte do tempo. Inicialmente, ela competiu com outras pelo afeto de Peter, com destaque para Gwen Stacy e a Gata Negra. As primeiras edições de O Incrível Homem Aranha apresentavam uma piada correndo sobre Peter se esquivando das tentativas de sua tia May de lhe arranjar 'aquela simpática garota Watson do lado', que Peter ainda não tinha conhecido e assumiu que não seria o seu tipo, já que sua tia gostava dela. Mais tarde Peter começa a namorar com Mary Jane.",
      caracteristics: {
        birth: '1965',
        weight: {
          value: 54,
          unity: 'kg',
        },
        height: {
          value: 1.72,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 30,
        'Inteligência': 60,
        'Agilidade': 35,
        'Resistência': 40,
        'Velocidade': 25,
      },
      movies: [
        require('../assets/movies/spider-man-1.jpg'),
        require('../assets/movies/spider-man-2.jpg'),
        require('../assets/movies/spider-man-3.jpg'),
      ],
    },
    {
      name: 'Happy Hogan',
      alterEgo: 'Homem de Ferro',
      imagePath: require('../assets/chars/happy-hogan.png'),
      biography:
        "Happy Hogan é um ex-campeão de boxe que salvou Tony Stark durante acidente numa corrida de 'stock car'. Em retribuição, Stark o contratou como seu motorista e guarda-costas pessoal. No início, Hogan era um personagem cômico, tanto física quanto psicologicamente. Tinha um aspecto 'bronco', típicos de um boxeador, com orelhas em formato couve-flor e pescoço largo. Com o tempo, os autores foram suavizando sua figura. Seu visual “leão de chácara ”foi sendo abandonado e ele se tornou mais magro, mais inteligente e boa-pinta. O apelido irônico 'Happy' vem da época em que ele lutava boxe, porque nunca sorria.",
      caracteristics: {
        birth: '1963',
        weight: {
          value: 90,
          unity: 'kg',
        },
        height: {
          value: 1.85,
          unity: 'meters',
        },
        universe: 'Terra 616',
      },
      abilities: {
        'força': 45,
        'Inteligência': 65,
        'Agilidade': 35,
        'Resistência': 40,
        'Velocidade': 50,
      },
      movies: [
        require('../assets/movies/iron-man-1.jpg'),
        require('../assets/movies/iron-man-2.jpg'),
        require('../assets/movies/iron-man-3.jpg'),
        require('../assets/movies/spider-man-homecoming.jpg'),
        require('../assets/movies/avengers-3.jpg'),
        require('../assets/movies/avengers-4.jpg'),
        require('../assets/movies/spider-man-far-from-home.jpg'),
      ],
    },
  ],
};
