/* Conteúdo do blog. Cada post é renderizado por pages/blog-post.jsx,
   que lê window.BLOG_SLUG (mesmo padrão de EXAMES + pages/exame.jsx).
   "body" é uma lista de blocos simples — h2, p ou ul — pra manter o
   template de renderização (e o head gerado por _build/gen.ps1) sem
   precisar entender HTML livre. */

const BLOG_POSTS = [
  {
    slug: "melhor-preco-ressonancia-magnetica-altamira",
    title: "Melhor Preço de Ressonância Magnética em Altamira: Como Funciona e Como Agendar",
    date: "2026-09-15",
    icon: "activity",
    excerpt: "Quem procura ressonância magnética em Altamira quer duas coisas: um preço justo e um aparelho confiável. Veja como funciona o orçamento na Maxxi Saúde e como marcar pelo WhatsApp.",
    examSlug: "ressonancia-magnetica",
    body: [
      { type: "p", text: "Se você está pesquisando \"melhor preço de ressonância magnética em Altamira\", a resposta curta é: o preço muda de acordo com o tipo de exame (crânio, coluna, joelho, abdômen…) e se você tem convênio ou vai pagar particular. Por isso não tem uma tabela fixa que sirva pra todo mundo — o jeito certo de saber o valor do seu exame é mandar uma mensagem no WhatsApp contando o que o seu médico pediu." },
      { type: "h2", text: "O aparelho faz diferença no resultado" },
      { type: "p", text: "A Maxxi Saúde tem ressonância magnética de alto campo (1.5T) em Altamira. Isso importa porque aparelhos de campo mais alto produzem imagens mais nítidas, o que ajuda o médico a enxergar detalhes menores — em exames de coluna, joelho, ombro, cérebro e abdômen, por exemplo." },
      { type: "h2", text: "Convênio ou particular?" },
      { type: "p", text: "Atendemos vários convênios (veja a lista completa em Convênios) e também exames particulares. Se você tem plano de saúde, mande o nome do convênio no WhatsApp que a equipe confirma a cobertura na hora. Se for particular, a recepção passa o valor certinho do exame que você precisa, sem letra miúda." },
      { type: "h2", text: "Como marcar" },
      { type: "p", text: "É simples: toque no botão do WhatsApp, mande o pedido médico (pode ser foto) e o nome do exame. A equipe responde com o preço ou a cobertura do convênio e já combina o melhor horário. A clínica fica na Tv. Coronel Tancredo, 45, Centro, Altamira/PA, com atendimento de segunda a sábado, das 7h às 19h." },
    ],
  },
  {
    slug: "tomografia-24-horas-altamira",
    title: "Onde Encontrar Tomografia 24 Horas em Altamira/PA",
    date: "2026-09-15",
    icon: "scan-line",
    excerpt: "Precisa de tomografia fora do horário comercial em Altamira? Entenda como funciona o plantão de tomografia e raio-X 24 horas da Maxxi Saúde.",
    examSlug: "tomografia-computadorizada",
    body: [
      { type: "p", text: "Emergência não escolhe horário. Por isso a Maxxi Saúde mantém plantão de tomografia e raio-X 24 horas por dia, todos os dias, em Altamira/PA — inclusive de madrugada, fim de semana e feriado." },
      { type: "h2", text: "O aparelho: tomógrafo de 128 canais" },
      { type: "p", text: "A tomografia é feita no nosso tomógrafo de 128 canais, o único em clínica particular da região do Xingu. Na prática isso significa exame mais rápido (a maior parte leva menos de 15 minutos) e menor dose de radiação do que em aparelhos mais antigos — importante especialmente em atendimento de urgência." },
      { type: "h2", text: "Quando o plantão costuma ser procurado" },
      { type: "ul", items: [
        "Encaminhamento do pronto-socorro ou hospital para investigar dor, trauma ou suspeita de AVC.",
        "Pedido médico urgente que não pode esperar até o próximo dia útil.",
        "Viajantes ou pacientes de fora de Altamira que precisam do resultado rápido.",
      ] },
      { type: "p", text: "Em todos os casos, quem indica a necessidade do exame de urgência é o médico — a nossa equipe cuida da parte de realizar a tomografia e entregar o resultado o quanto antes." },
      { type: "h2", text: "O que levar" },
      { type: "p", text: "Leve o pedido médico (pode ser foto no celular) e um documento com foto. Se tiver convênio, a carteirinha também. Na dúvida, chame no WhatsApp antes de vir — a equipe do plantão explica o que é preciso pro seu caso." },
      { type: "h2", text: "Endereço e contato" },
      { type: "p", text: "Tv. Coronel Tancredo, 45, Centro, Altamira/PA. Atendimento geral de segunda a sábado, das 7h às 19h, com plantão de tomografia e raio-X funcionando 24 horas, todos os dias." },
    ],
  },
  {
    slug: "mamografia-altamira-quando-fazer-onde-marcar",
    title: "Mamografia em Altamira: Quando Fazer e Onde Marcar",
    date: "2026-09-15",
    icon: "ribbon",
    excerpt: "A mamografia ajuda a encontrar sinais de câncer de mama bem no início. Veja como é o exame, o preparo e onde marcar em Altamira.",
    examSlug: "mamografia-digital",
    body: [
      { type: "p", text: "A mamografia é o exame que procura sinais de câncer de mama bem no começo, quando ainda não dá para sentir com a mão. Quanto mais cedo um sinal é encontrado, mais simples costuma ser o tratamento — por isso é um dos exames de imagem mais importantes na rotina de saúde da mulher." },
      { type: "h2", text: "Com que frequência fazer?" },
      { type: "p", text: "A idade certa pra começar e a frequência ideal variam de pessoa pra pessoa — depende de histórico familiar, idade e orientação do seu ginecologista ou mastologista. Se você ainda não sabe quando fazer a sua, essa é uma pergunta pra levar na próxima consulta." },
      { type: "h2", text: "Como é o exame na Maxxi Saúde" },
      { type: "p", text: "Fazemos mamografia 100% digital. O aparelho aperta a mama por alguns segundos pra tirar a imagem — incomoda um pouco, mas passa rápido. Quem lê o resultado é um médico radiologista especialista." },
      { type: "h2", text: "Preparo pro dia do exame" },
      { type: "ul", items: [
        "Não use desodorante, talco ou creme nas mamas e nas axilas no dia do exame.",
        "Se já fez mamografia antes, traga o exame anterior para comparação.",
        "Leve o pedido médico e um documento com foto.",
      ] },
      { type: "h2", text: "Onde marcar" },
      { type: "p", text: "A Maxxi Saúde fica na Tv. Coronel Tancredo, 45, Centro, Altamira/PA, atendimento de segunda a sábado, das 7h às 19h. Pra marcar, mande uma mensagem no WhatsApp — pode ser por áudio — e a equipe confirma o valor ou a cobertura do seu convênio." },
    ],
  },
];
