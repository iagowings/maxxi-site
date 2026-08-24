/* global window */
/* Maxxi Saúde — Specialty + doctor data
   All numbers and details come from the brief in m0001. */

/* Official Maxxi Saúde contact channels — all numbers in E.164 (digits only) for wa.me links. */
const RECEPCAO_WHATS = "5593991801155";   // WhatsApp da Recepção — agendamento, informações, ligações
const IA_WHATS       = "5593933003181";   // Atendimento de dúvidas gerais por IA — somente mensagens
const PLANTAO_WHATS  = "5593991071980";   // WhatsApp do Plantão 24h — emergências de tomografia e raio-x
const PHONE_FIXED         = "(93) 3515-1122";  // Telefone fixo — exibição
const PHONE_FIXED_TEL     = "+5593935151122";  // Telefone fixo — formato tel:

// Default WhatsApp used across the site (header, footer, CTAs, agendamento) — IA.
// First contact goes through IA: instant reply 24h, triage, then hands off to Recepção.
// The Recepção and Plantão channels are still used explicitly where they belong
// (WhatsApp bubble, contact page channel cards, header phone).
const GENERAL_WHATS = IA_WHATS;

/* Perfis oficiais. Deixe em branco para o ícone não aparecer no rodapé —
   link quebrado ("#") conta como página de destino ruim no Meta Ads. */
const SOCIAL = {
  instagram: "",
  facebook: "",
};

const SPECIALTIES = [
  {
    slug: "ginecologia",
    name: "Ginecologia",
    blurb: "Saúde da mulher em todas as fases — prevenção, exames e acompanhamento.",
    icon: "user",
    color: "rose",
    category: "mulher",
    doctor: { name: "Dra. Fernanda", title: "Ginecologista & Obstetra" },
    whatsapp: "5593991805990",
    directWhats: true,
    terms: ["ginecologista", "preventivo", "Papanicolau", "menopausa", "saúde da mulher"],
  },
  {
    slug: "mastologia",
    name: "Mastologia",
    blurb: "Acompanhamento e prevenção do câncer de mama, exames clínicos e laudos.",
    icon: "ribbon",
    color: "rose",
    category: "mulher",
    doctor: { name: "Dra. Viviane", title: "Mastologista" },
    whatsapp: "5593991805990",
    directWhats: true,
    terms: ["mastologista", "mamografia", "nódulo", "câncer de mama"],
  },
  {
    slug: "pediatria",
    name: "Pediatria",
    blurb: "Consultas, puericultura e vacinação infantil com cuidado humanizado.",
    icon: "baby",
    color: "sand",
    category: "crianca",
    doctor: { name: "Dra. Juliana", title: "Pediatra" },
    whatsapp: "5593991231277",
    directWhats: true,
    terms: ["pediatra", "bebê", "criança", "vacinação infantil"],
  },
  {
    slug: "cardiologia",
    name: "Cardiologia",
    blurb: "MAPA, Holter, ecocardiograma e acompanhamento de hipertensão.",
    icon: "heart-pulse",
    color: "blue",
    category: "geral",
    doctor: { name: "Dra. Angela", title: "Cardiologista" },
    whatsapp: "5593991065693",
    directWhats: true,
    terms: ["cardiologista", "coração", "MAPA", "Holter", "ecocardiograma", "hipertensão"],
  },
  {
    slug: "psiquiatria",
    name: "Psiquiatria",
    blurb: "Diagnóstico e tratamento de ansiedade, depressão, TDAH, insônia e mais.",
    icon: "head-side",
    color: "plum",
    category: "mental",
    doctor: { name: "Dra. Lorena Lorenzoni", title: "Psiquiatra" },
    whatsapp: "5593991282606",
    directWhats: true,
    terms: ["psiquiatra", "ansiedade", "depressão", "TDAH", "insônia"],
  },
  {
    slug: "odontologia",
    name: "Odontologia",
    blurb: "Limpeza, extração, canal e tratamentos restauradores em ambiente confortável.",
    icon: "tooth",
    color: "teal",
    category: "geral",
    doctor: null,
    whatsapp: "5593992107552",
    directWhats: true,
    terms: ["dentista", "odonto", "extração", "limpeza", "canal", "aparelho"],
  },
  {
    slug: "dermatologia",
    name: "Dermatologia",
    blurb: "Diagnóstico e tratamento de doenças da pele, cabelo e unhas.",
    icon: "sparkle",
    color: "green",
    category: "geral",
    doctor: { name: "Dra. Maria Eduarda", title: "Dermatologista" },
    whatsapp: "5593991801155",
    directWhats: true,
    schedule: "Atende terças e quintas",
    price: "Consulta: R$ 500",
    terms: ["dermatologista", "pele", "acne", "cabelo"],
  },
  {
    slug: "clinico-geral",
    name: "Clínico Geral",
    blurb: "Consulta de rotina, encaminhamento e acompanhamento do seu histórico.",
    icon: "stethoscope",
    color: "blue",
    category: "geral",
    doctor: null,
    whatsapp: GENERAL_WHATS,
    schedule: "Disponibilidade pelo WhatsApp",
    terms: ["clínico geral", "consulta geral"],
  },
  {
    slug: "neurologia",
    name: "Neurologia & Neurocirurgia",
    blurb: "Avaliação neurológica, exames complementares e acompanhamento cirúrgico.",
    icon: "brain",
    color: "plum",
    category: "mental",
    doctor: null,
    whatsapp: GENERAL_WHATS,
    schedule: "Disponibilidade pelo WhatsApp",
    terms: ["neurologista", "neurocirurgião", "cabeça", "nervos"],
  },
  {
    slug: "reumatologia",
    name: "Reumatologia",
    blurb: "Dor articular, inflamação, artrite e doenças reumáticas como o lúpus.",
    icon: "bone",
    color: "sand",
    category: "geral",
    doctor: null,
    whatsapp: GENERAL_WHATS,
    schedule: "Disponibilidade pelo WhatsApp",
    terms: ["reumatologista", "artrite", "lúpus", "dor articular"],
  },
  {
    slug: "pneumologia",
    name: "Pneumologia",
    blurb: "Pulmão, asma, bronquite, espirometria e avaliação respiratória.",
    icon: "lungs",
    color: "teal",
    category: "geral",
    doctor: null,
    whatsapp: GENERAL_WHATS,
    schedule: "Disponibilidade pelo WhatsApp",
    terms: ["pneumologista", "pulmão", "asma", "bronquite", "espirometria"],
  },
  {
    slug: "psicologia",
    name: "Psicologia",
    blurb: "Psicoterapia individual e apoio emocional, em sessões acolhedoras.",
    icon: "heart",
    color: "plum",
    category: "mental",
    doctor: null,
    whatsapp: GENERAL_WHATS,
    schedule: "Disponibilidade pelo WhatsApp",
    terms: ["psicólogo", "psicoterapia", "terapia", "apoio emocional"],
  },
];

const CATEGORIES = [
  { id: "todas",   label: "Todas" },
  { id: "mulher",  label: "Saúde da mulher" },
  { id: "crianca", label: "Crianças" },
  { id: "mental",  label: "Saúde mental & neuro" },
  { id: "geral",   label: "Atenção geral" },
];

const EQUIPMENT = [
  {
    slug: "tomografia-128",
    name: "Tomografia Computadorizada 128 Canais",
    short: "Tomografia 128",
    badge: "Única na cidade",
    summary: "O primeiro equipamento de 128 canais instalado em uma clínica privada da região Norte. Imagens de alta definição, exames em segundos e menor dose de radiação — mais informação para o médico que acompanha o seu caso.",
    bullets: [
      "Aquisição em até 0,33 s por rotação",
      "Reconstruções 3D de alta resolução para cardio, vascular e neuro",
      "Menor dose de radiação com algoritmos iterativos",
      "Plantão 24h em Altamira — atendimento de urgência",
    ],
    icon: "scan-line",
  },
  {
    slug: "ressonancia-alto-campo",
    name: "Ressonância Magnética de Alto Campo",
    short: "Ressonância 1.5T",
    summary: "Ressonância de alto campo (1.5 Tesla) para exames neurológicos, ortopédicos, abdominais e de coluna, com conforto e definição superior.",
    bullets: [
      "Imagens detalhadas de tecidos moles",
      "Protocolos otimizados para cabeça, coluna e articulações",
      "Cabine ampla, exames mais confortáveis",
    ],
    icon: "activity",
  },
  {
    slug: "mamografia-digital",
    name: "Mamografia Digital",
    short: "Mamografia Digital",
    summary: "Mamografia 100% digital, com menor compressão e imagens nítidas para detecção precoce do câncer de mama.",
    bullets: [
      "Detecção precoce com alta sensibilidade",
      "Menor desconforto durante o exame",
      "Laudo emitido por médicos especialistas",
    ],
    icon: "ribbon",
  },
];

const CONVENIOS = [
  "Fusex", "Saúde Caixa", "Amil", "Sul América", "Unimed", "Saúde Bradesco",
];

/* =============================================================
   EXAMES — one entry per /exames/<slug>/ page.
   Slugs MUST match the live site URLs so indexed links keep working:
   maxxisaude.com/exames/<slug>/
   ============================================================= */
const EXAMES = [
  {
    slug: "tomografia-computadorizada",
    name: "Tomografia Computadorizada",
    icon: "scan-line",
    badge: "128 canais · única na região",
    summary: "Tomografia de 128 canais — a única em clínica privada do Xingu. Imagens de altíssima definição em segundos, com menor dose de radiação.",
    description: "A tomografia computadorizada produz imagens detalhadas em cortes do corpo, essenciais no diagnóstico de doenças neurológicas, vasculares, abdominais, torácicas e ortopédicas. Na Maxxi Saúde o exame é feito no equipamento de 128 canais, com plantão 24h em Altamira.",
    prep: "Pode ser necessário jejum de 4h e exames de função renal (creatinina) para exames com contraste. Traga seus exames anteriores e o pedido médico.",
    keywords: ["tomografia computadorizada Altamira", "tomografia 128 canais", "tomografia Pará"],
  },
  {
    slug: "angiotomografia-128-canais",
    name: "Angiotomografia (128 canais)",
    icon: "activity",
    badge: "Vascular & cardíaca",
    summary: "Estudo dos vasos sanguíneos e do coração com a tomografia de 128 canais, com reconstruções 3D de alta resolução.",
    description: "A angiotomografia avalia artérias e veias — incluindo coronárias, aorta, vasos cerebrais e dos membros — com contraste iodado e reconstruções tridimensionais, permitindo detectar obstruções, aneurismas e malformações com precisão.",
    prep: "Jejum de 4h e avaliação da função renal (creatinina). Informe alergias a contraste e uso de metformina.",
    keywords: ["angiotomografia Altamira", "angio TC coronárias", "tomografia vascular"],
  },
  {
    slug: "ressonancia-magnetica",
    name: "Ressonância Magnética",
    icon: "activity",
    badge: "Alto campo 1.5T",
    summary: "Ressonância de alto campo (1.5 Tesla) para exames neurológicos, ortopédicos, abdominais e de coluna, com conforto e definição superior.",
    description: "A ressonância magnética usa campo magnético e ondas de rádio (sem radiação) para gerar imagens detalhadas de tecidos moles — cérebro, coluna, articulações e abdome. Ideal para diagnóstico de lesões, tumores e doenças inflamatórias.",
    prep: "Retire objetos metálicos. Informe a equipe sobre marca-passo, próteses, clipes cirúrgicos ou gestação. Alguns exames exigem jejum de 4h.",
    keywords: ["ressonância magnética Altamira", "ressonância 1.5T", "RM coluna"],
  },
  {
    slug: "mamografia-digital",
    name: "Mamografia Digital",
    icon: "ribbon",
    badge: "Detecção precoce",
    summary: "Mamografia 100% digital, com menor compressão e imagens nítidas para detecção precoce do câncer de mama.",
    description: "A mamografia digital é o principal exame de rastreamento do câncer de mama. Com alta sensibilidade e menor desconforto, permite identificar nódulos e microcalcificações antes mesmo de serem palpáveis. Laudo emitido por médicos especialistas.",
    prep: "Evite usar desodorante, talco ou cremes na região das mamas e axilas no dia do exame. Traga mamografias anteriores para comparação.",
    keywords: ["mamografia digital Altamira", "rastreamento câncer de mama", "mamografia Pará"],
  },
  {
    slug: "ultrassonografia",
    name: "Ultrassonografia",
    icon: "activity",
    badge: "Sem radiação",
    summary: "Ultrassom para abdome, pelve, obstetrícia, tireoide, mamas, articulações e Doppler vascular.",
    description: "A ultrassonografia usa ondas sonoras (sem radiação) para avaliar órgãos e estruturas em tempo real. Inclui exames obstétricos — como o ultrassom morfológico da gestante — abdominais, de tireoide, mamas e estudos Doppler de vasos.",
    prep: "Varia conforme a região: ultrassom de abdome total exige jejum; o de pelve/obstétrico pode pedir bexiga cheia. A equipe orienta no agendamento.",
    keywords: ["ultrassonografia Altamira", "ultrassom morfológico", "ultrassom Doppler"],
  },
  {
    slug: "radiografia-em-geral",
    name: "Radiografia em Geral (Raio-X)",
    icon: "scan-line",
    badge: "Plantão 24h",
    summary: "Raio-X digital para tórax, ossos, coluna e seios da face, com plantão 24h em Altamira.",
    description: "A radiografia (raio-X) é um exame rápido e amplamente usado para avaliar pulmões, ossos, articulações e coluna. Na Maxxi Saúde é digital, com plantão 24h para atendimento de urgências.",
    prep: "Não exige preparo na maioria dos casos. Informe a equipe em caso de gestação. Traga o pedido médico.",
    keywords: ["raio-x Altamira", "radiografia digital", "raio x 24 horas"],
  },
  {
    slug: "ecocardiograma",
    name: "Ecocardiograma",
    icon: "heart-pulse",
    badge: "Cardiologia",
    summary: "Ultrassom do coração para avaliar estrutura, válvulas e função cardíaca, com Doppler.",
    description: "O ecocardiograma é um ultrassom do coração que avalia o tamanho das cavidades, o funcionamento das válvulas e a capacidade de bombeamento. Fundamental no acompanhamento de hipertensão, sopros e doenças cardíacas.",
    prep: "Não exige preparo. Traga exames cardiológicos anteriores e o pedido médico.",
    keywords: ["ecocardiograma Altamira", "eco do coração", "cardiologia Pará"],
  },
  {
    slug: "densitometria-ossea",
    name: "Densitometria Óssea",
    icon: "bone",
    badge: "Osteoporose",
    summary: "Mede a densidade dos ossos para diagnóstico e acompanhamento de osteoporose.",
    description: "A densitometria óssea avalia a massa óssea — geralmente na coluna e no fêmur — para diagnosticar osteopenia e osteoporose e estimar o risco de fraturas. Exame rápido, indolor e com baixa dose de radiação.",
    prep: "Não tome suplementos de cálcio nas 24h anteriores. Evite exames com contraste nos dias próximos. Use roupas sem peças metálicas.",
    keywords: ["densitometria óssea Altamira", "exame de osteoporose", "densitometria Pará"],
  },
  {
    slug: "laboratorio-de-analises-clinicas",
    name: "Laboratório de Análises Clínicas",
    icon: "stethoscope",
    badge: "Coleta diária",
    summary: "Exames de sangue, urina, fezes e hormonais, com coleta diária e resultados no portal online.",
    description: "O laboratório de análises clínicas da Maxxi Saúde realiza hemograma, glicemia, perfil lipídico, exames hormonais, sorologias e muito mais. Resultados disponíveis no portal online, com login e senha entregues na coleta.",
    prep: "Muitos exames exigem jejum de 8 a 12h. Siga as orientações do pedido médico e da equipe de coleta.",
    keywords: ["laboratório análises clínicas Altamira", "exame de sangue Altamira", "coleta laboratório"],
  },
];

const FAQ = [
  {
    q: "Vocês atendem por convênio ou só particular?",
    a: "Atendemos diversos convênios e também consultas e exames particulares. Veja a lista de convênios aceitos na seção \"Convênios\" desta página — ou pergunte pelo WhatsApp; nossa equipe confirma cobertura na hora.",
  },
  {
    q: "Como faço para agendar uma consulta ou exame?",
    a: "É só clicar no botão \"Quero agendar\" em qualquer página do site ou na bolha verde do WhatsApp. Cada especialidade tem um número direto — você fala com a equipe certa desde a primeira mensagem.",
  },
  {
    q: "A Tomografia de 128 canais está disponível 24 horas?",
    a: "Sim. A Maxxi Saúde mantém plantão 24h para Tomografia e Raio-X, todos os dias da semana, inclusive feriados. É só procurar a clínica ou ligar — atendemos urgências.",
  },
  {
    q: "Preciso de pedido médico para fazer um exame?",
    a: "A maioria dos exames de imagem e laboratoriais exige pedido médico (com CID quando aplicável). Para algumas consultas e check-ups, o agendamento é direto. Se ficar em dúvida, mande uma foto do seu pedido pelo WhatsApp e a gente confirma.",
  },
  {
    q: "Como recebo o resultado do meu exame?",
    a: "Você pode retirar o laudo impresso na clínica ou acessar pelo nosso Portal de Resultados — disponível 24 horas, com login e senha entregues no momento do exame.",
  },
  {
    q: "Onde fica a clínica? Tem estacionamento?",
    a: "Estamos no centro de Altamira/PA. Veja localização, horários e como chegar na nossa página de Contato. Há estacionamento próximo e a clínica é acessível para cadeirantes.",
  },
  {
    q: "Crianças e bebês podem ser atendidos?",
    a: "Sim. Temos Pediatria com a Dra. Juliana, além de exames adaptados para o público infantil. Marque com tranquilidade pelo WhatsApp da Pediatria.",
  },
];

Object.assign(window, {
  SPECIALTIES, CATEGORIES, EQUIPMENT, EXAMES, CONVENIOS, FAQ, SOCIAL,
  GENERAL_WHATS, RECEPCAO_WHATS, IA_WHATS, PLANTAO_WHATS,
  PHONE_FIXED, PHONE_FIXED_TEL,
});
