/* global window */
/* Maxxi Saúde — Specialty + doctor data
   All numbers and details come from the brief in m0001. */

/* Official Maxxi Saúde contact channels — all numbers in E.164 (digits only) for wa.me links. */
const RECEPCAO_WHATS = "5593991801155";   // WhatsApp da Recepção — agendamento, informações, ligações
const IA_WHATS       = "5593933003181";   // Atendimento de dúvidas gerais por IA — somente mensagens
const PLANTAO_WHATS  = "5593991071980";   // WhatsApp do Plantão 24h — emergências de tomografia e raio-x
const PHONE_FIXED         = "(93) 3515-1122";  // Telefone fixo — exibição
const PHONE_FIXED_TEL     = "+5593935151122";  // Telefone fixo — formato tel:

// Default WhatsApp used across the site (header, footer, CTAs, agendamento).
// Todo CTA cai na Recepção — decisão para as campanhas de anúncios: um único
// canal atendido por gente, sem triagem automática no meio do caminho.
// IA e Plantão seguem listados onde são explicitamente oferecidos
// (bolha do WhatsApp e cards de canais da página de Contato).
const GENERAL_WHATS = RECEPCAO_WHATS;

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
    blurb: "Consulta, preventivo e acompanhamento da saúde da mulher, em todas as fases.",
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
    blurb: "Cuidado com as mamas: exame, acompanhamento e prevenção do câncer de mama.",
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
    blurb: "Consulta para bebê e criança, acompanhamento do crescimento e vacina.",
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
    blurb: "Cuidado com o coração: consulta, exames e controle da pressão alta.",
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
    blurb: "Ajuda para ansiedade, depressão, falta de sono, TDAH e outros cuidados da mente.",
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
    blurb: "Dentista: limpeza, restauração, canal e extração, com calma e sem pressa.",
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
    blurb: "Consulta para problema de pele, cabelo e unha.",
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
    blurb: "Consulta de rotina — boa para quando você não sabe qual médico procurar.",
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
    blurb: "Consulta para dor de cabeça forte, tontura, memória e problemas dos nervos.",
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
    blurb: "Consulta para dor nas juntas, inchaço, artrite e lúpus.",
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
    blurb: "Consulta para o pulmão: falta de ar, asma, bronquite e tosse que não passa.",
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
    blurb: "Conversa com a psicóloga para cuidar do que você está sentindo.",
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
    summary: "Nosso tomógrafo é novo, de 128 canais — o único em clínica particular da região. O exame é rápido, não dói e usa menos radiação que aparelhos antigos.",
    bullets: [
      "O exame costuma durar menos de 15 minutos",
      "Gera imagens em 3 dimensões, que ajudam o seu médico a ver melhor",
      "Usa menos radiação que os aparelhos antigos",
      "Plantão 24 horas em Altamira, para urgência",
    ],
    icon: "scan-line",
  },
  {
    slug: "ressonancia-alto-campo",
    name: "Ressonância Magnética de Alto Campo",
    short: "Ressonância 1.5T",
    summary: "Exame que mostra o corpo por dentro sem usar radiação. Muito usado para cabeça, coluna, joelho, ombro e barriga.",
    bullets: [
      "Mostra bem músculo, nervo e articulação",
      "Não usa radiação",
      "Cabine mais larga, exame mais confortável",
    ],
    icon: "activity",
  },
  {
    slug: "mamografia-digital",
    name: "Mamografia Digital",
    short: "Mamografia Digital",
    summary: "Exame das mamas que ajuda a encontrar alterações cedo, antes mesmo de dar para sentir com a mão.",
    bullets: [
      "Ajuda a descobrir cedo o câncer de mama",
      "Aperta menos e incomoda menos que os aparelhos antigos",
      "Resultado assinado por médico especialista",
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
    summary: "Exame que mostra o corpo por dentro. Feito no nosso aparelho de 128 canais — o único em clínica particular do Xingu.",
    description: "A tomografia tira imagens do seu corpo por dentro, como se fossem fatias. O médico usa essas imagens para ver a cabeça, o pulmão, a barriga, os ossos e os vasos. Você fica deitado numa cama que desliza devagar e o aparelho passa em volta de você. Não dói e costuma durar menos de 15 minutos. Aqui na Maxxi tem plantão 24 horas.",
    prep: "Em alguns casos é preciso ficar sem comer por 4 horas e levar um exame de sangue recente (creatinina), quando o exame usa contraste. Traga o pedido do médico e os exames antigos que você tiver. Na hora de marcar, a gente avisa o que você precisa.",
    keywords: ["tomografia computadorizada Altamira", "tomografia 128 canais", "tomografia Pará"],
  },
  {
    slug: "angiotomografia-128-canais",
    name: "Angiotomografia (128 canais)",
    icon: "activity",
    badge: "Vascular & cardíaca",
    summary: "Tomografia que olha as veias e artérias, inclusive as do coração, com imagens em 3 dimensões.",
    description: "É uma tomografia feita para ver os vasos por onde o sangue passa — no coração, na cabeça, na barriga e nas pernas. Ajuda o médico a descobrir se algum vaso está entupido, dilatado ou fora do lugar. Durante o exame, a equipe aplica um contraste na veia do braço. É normal sentir um calor no corpo por alguns segundos.",
    prep: "Fique sem comer por 4 horas antes e leve um exame de sangue recente (creatinina). Avise a equipe se você já teve alergia a contraste ou se toma remédio para diabetes (metformina).",
    keywords: ["angiotomografia Altamira", "angio TC coronárias", "tomografia vascular"],
  },
  {
    slug: "ressonancia-magnetica",
    name: "Ressonância Magnética",
    icon: "activity",
    badge: "Alto campo 1.5T",
    summary: "Exame que mostra o corpo por dentro sem radiação. Bom para cabeça, coluna, joelho, ombro e barriga.",
    description: "A ressonância usa ímã e ondas de rádio, não usa radiação. Ela mostra bem as partes moles do corpo: cérebro, coluna, músculo, nervo e articulação. Você fica deitado dentro de um aparelho em forma de túnel. Faz um barulho alto, por isso a equipe entrega protetor de ouvido. É importante ficar bem paradinho.",
    prep: "Tire tudo que for de metal: brinco, corrente, relógio, grampo de cabelo. Avise a equipe se você tem marca-passo, prótese, pino, clipe de cirurgia ou se está grávida. Alguns exames pedem 4 horas sem comer.",
    keywords: ["ressonância magnética Altamira", "ressonância 1.5T", "RM coluna"],
  },
  {
    slug: "mamografia-digital",
    name: "Mamografia Digital",
    icon: "ribbon",
    badge: "Detecção precoce",
    summary: "Exame das mamas que ajuda a encontrar alterações cedo, antes de dar para sentir com a mão.",
    description: "A mamografia é o exame que procura sinais de câncer de mama bem no começo, quando ainda não dá para sentir com a mão. O aparelho aperta a mama por alguns segundos para tirar a foto. Incomoda um pouco, mas passa rápido. Quem lê o resultado é um médico especialista.",
    prep: "No dia do exame, não use desodorante, talco nem creme nas mamas e nas axilas. Se você já fez mamografia antes, traga para comparar.",
    keywords: ["mamografia digital Altamira", "rastreamento câncer de mama", "mamografia Pará"],
  },
  {
    slug: "ultrassonografia",
    name: "Ultrassonografia",
    icon: "activity",
    badge: "Sem radiação",
    summary: "Ultrassom da barriga, da gravidez, da tireoide, das mamas, das juntas e dos vasos.",
    description: "O ultrassom usa som, não usa radiação. A pessoa que faz o exame passa um gel na sua pele e desliza um aparelhinho por cima, olhando as imagens na hora. Não dói. É o exame usado para acompanhar a gravidez e também para ver barriga, tireoide, mamas, juntas e circulação.",
    prep: "Depende da parte do corpo. Ultrassom da barriga pede algumas horas sem comer. O da bexiga e o da gravidez podem pedir para você beber água e segurar o xixi. Quando marcar, a equipe explica direitinho o seu caso.",
    keywords: ["ultrassonografia Altamira", "ultrassom morfológico", "ultrassom Doppler"],
  },
  {
    slug: "radiografia-em-geral",
    name: "Radiografia em Geral (Raio-X)",
    icon: "scan-line",
    badge: "Plantão 24h",
    summary: "Raio-X do pulmão, dos ossos, da coluna e do rosto. Aberto 24 horas, todo dia.",
    description: "O raio-x é o exame mais rápido de todos: você fica em pé ou deitado por alguns segundos e pronto. Serve para ver osso quebrado, pulmão, coluna e sinusite. Aqui é digital, e tem plantão 24 horas — inclusive de madrugada e no fim de semana.",
    prep: "Quase sempre não precisa de preparo nenhum. Só avise a equipe se você estiver grávida ou achar que pode estar. Traga o pedido do médico.",
    keywords: ["raio-x Altamira", "radiografia digital", "raio x 24 horas"],
  },
  {
    slug: "ecocardiograma",
    name: "Ecocardiograma",
    icon: "heart-pulse",
    badge: "Cardiologia",
    summary: "Ultrassom do coração: mostra como ele está batendo e como as válvulas estão funcionando.",
    description: "É um ultrassom do coração. O médico passa o aparelhinho no seu peito e vê o coração batendo na tela, na hora. Não dói e não usa radiação. É muito pedido para quem tem pressão alta, sopro no coração ou está em tratamento do coração.",
    prep: "Não precisa de preparo. Traga o pedido do médico e os exames do coração que você já fez.",
    keywords: ["ecocardiograma Altamira", "eco do coração", "cardiologia Pará"],
  },
  {
    slug: "densitometria-ossea",
    name: "Densitometria Óssea",
    icon: "bone",
    badge: "Osteoporose",
    summary: "Exame que mede a força dos seus ossos e mostra se existe osteoporose.",
    description: "A densitometria mede se o seu osso está ficando fraco — o que a gente chama de osteoporose. Assim o médico sabe se você tem mais risco de quebrar um osso numa queda. Você fica deitado e o aparelho passa por cima, sem encostar. Não dói e é rápido.",
    prep: "Não tome remédio de cálcio nas 24 horas antes do exame. Vá com roupa sem metal (sem zíper, botão de metal ou fecho). Se você fez outro exame com contraste esses dias, avise a equipe.",
    keywords: ["densitometria óssea Altamira", "exame de osteoporose", "densitometria Pará"],
  },
  {
    slug: "laboratorio-de-analises-clinicas",
    name: "Laboratório de Análises Clínicas",
    icon: "stethoscope",
    badge: "Coleta diária",
    summary: "Exame de sangue, urina e fezes. A coleta é todo dia e o resultado sai pela internet.",
    description: "É onde se faz exame de sangue, de urina e de fezes: hemograma, açúcar no sangue, colesterol, hormônio, exame da tireoide e muitos outros. A coleta é rápida. Depois você pega o resultado aqui na clínica ou vê pela internet, com a senha que a equipe entrega no dia.",
    prep: "Muitos exames de sangue pedem de 8 a 12 horas sem comer — em geral, é só não tomar café da manhã. Água pode. Siga o que está escrito no pedido do médico; se ficar em dúvida, pergunte no WhatsApp.",
    keywords: ["laboratório análises clínicas Altamira", "exame de sangue Altamira", "coleta laboratório"],
  },
];

const FAQ = [
  {
    q: "Vocês atendem por plano de saúde ou só particular?",
    a: "Os dois. Aceitamos vários planos de saúde e também atendemos quem vai pagar do próprio bolso. Mande o nome do seu plano no WhatsApp que a gente confere na hora se ele cobre o que você precisa.",
  },
  {
    q: "Como faço para agendar uma consulta ou exame?",
    a: "Toque em qualquer botão verde do site. Ele abre o WhatsApp da nossa recepção. Você pode escrever ou mandar áudio — o que for mais fácil para você. Se tiver o pedido do médico, tire uma foto e mande junto.",
  },
  {
    q: "Dá para fazer tomografia de madrugada ou no domingo?",
    a: "Sim. A tomografia e o raio-x funcionam 24 horas, todo dia, inclusive fim de semana e feriado. Em caso de urgência, pode vir direto na clínica ou ligar.",
  },
  {
    q: "Preciso do papel do médico para fazer exame?",
    a: "Para quase todos os exames, sim: é aquele papel que o médico escreve pedindo o exame. Para marcar consulta, não precisa. Na dúvida, tire uma foto do papel e mande no WhatsApp que a gente confere para você.",
  },
  {
    q: "Como eu recebo o resultado?",
    a: "Do jeito que for melhor para você: pode buscar o papel aqui na clínica ou ver pelo celular, na internet. No dia do exame a equipe entrega a sua senha para acessar. Se der trabalho, chame no WhatsApp que a gente ajuda.",
  },
  {
    q: "Onde fica a clínica? Tem onde estacionar?",
    a: "Ficamos na Travessa Coronel Tancredo, 45, no centro de Altamira. Tem estacionamento por perto e a clínica é preparada para quem usa cadeira de rodas. Na página de Contato tem o mapa de como chegar.",
  },
  {
    q: "Vocês atendem criança e bebê?",
    a: "Sim. A Dra. Juliana é a nossa pediatra, e os exames também são feitos em crianças e bebês, com todo o cuidado. É só marcar pelo WhatsApp.",
  },
];

Object.assign(window, {
  SPECIALTIES, CATEGORIES, EQUIPMENT, EXAMES, CONVENIOS, FAQ, SOCIAL,
  GENERAL_WHATS, RECEPCAO_WHATS, IA_WHATS, PLANTAO_WHATS,
  PHONE_FIXED, PHONE_FIXED_TEL,
});
