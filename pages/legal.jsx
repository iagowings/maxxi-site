/* global React, ReactDOM, PageShell, TweaksPanel, Eyebrow */
/* Shared template for legal pages. index.html sets window.LEGAL_KEY. */

const LEGAL_CONTENT = {
  "termos-e-condicoes": {
    title: "Termos e Condições",
    eyebrow: "Documentos",
    intro: "Estes termos regem o uso do site da Maxxi Saúde e o agendamento de consultas e exames.",
    sections: [
      ["Uso do site", "O conteúdo deste site tem caráter informativo e não substitui a avaliação de um profissional de saúde. Os agendamentos são confirmados pela nossa equipe via WhatsApp ou presencialmente."],
      ["Agendamentos e cancelamentos", "Pedimos que cancelamentos sejam comunicados com antecedência para liberar o horário a outros pacientes. Exames com preparo exigem seguir as orientações enviadas no agendamento."],
      ["Convênios e particulares", "A cobertura de convênios pode mudar sem aviso prévio. Recomendamos confirmar a aceitação do seu plano antes do atendimento."],
      ["Resultados de exames", "Laudos podem ser retirados na clínica ou acessados pelo portal online de resultados, com login e senha entregues no momento do exame."],
      ["Contato", "Dúvidas sobre estes termos podem ser enviadas pelos nossos canais de atendimento, disponíveis na página de Contato."],
    ],
  },
  "politica-de-cookies-br": {
    title: "Política de Cookies",
    eyebrow: "Privacidade",
    intro: "Esta política explica como o site da Maxxi Saúde utiliza cookies e tecnologias semelhantes.",
    sections: [
      ["O que são cookies", "Cookies são pequenos arquivos armazenados no seu navegador que ajudam o site a funcionar e a entender como ele é utilizado."],
      ["Como usamos", "Utilizamos cookies necessários (para lembrar preferências de navegação) e cookies de medição e publicidade, que nos permitem entender o desempenho do site e das nossas campanhas. Os cookies de medição são ativados na sua visita e você pode recusá-los a qualquer momento pelo aviso exibido na primeira página ou pelas configurações do navegador."],
      ["Cookies de terceiros — Meta (Facebook e Instagram)", "Utilizamos o Meta Pixel, da Meta Platforms Ireland Ltd., para medir o resultado dos anúncios veiculados no Facebook e no Instagram e exibir anúncios a quem já visitou o site. O Pixel registra páginas visitadas e cliques em botões — nunca dados de saúde, resultados de exames, nome, CPF ou informações que você envie pelo WhatsApp. Saiba mais em facebook.com/privacy/policy."],
      ["Gerenciar cookies", "O aviso exibido na primeira visita permite recusar os cookies de medição — a recusa interrompe o envio de dados imediatamente e vale para as próximas visitas. Para rever a escolha, apague os dados do site no seu navegador. Também é possível bloquear cookies nas configurações do navegador — algumas funcionalidades podem ser afetadas."],
      ["Seus dados (LGPD)", "Tratamos dados pessoais conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Veja a nossa Política de Privacidade para detalhes sobre finalidades, bases legais e seus direitos."],
    ],
  },
  "politica-de-privacidade": {
    title: "Política de Privacidade",
    eyebrow: "Privacidade",
    intro: "Como a Maxxi Saúde coleta, usa e protege os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
    sections: [
      ["Quem é o controlador", "Maxxi Saúde — Diagnóstico por Imagem e Análises Clínicas, CNPJ 11.503.226/0001-21, Tv. Coronel Tancredo, 45 — Centro — Altamira/PA. Responsável técnico: Dr. Anísio Fernando Chaves, médico radiologista, CRM 9422 · R.Q.E. 6391."],
      ["Quais dados coletamos", "No site: dados de navegação (páginas visitadas, origem do acesso, tipo de dispositivo) por meio de cookies. Quando você nos procura: os dados que você mesmo envia pelo WhatsApp, telefone ou presencialmente — nome, contato, convênio e o pedido médico necessário ao agendamento. Não há formulário de cadastro nem coleta de dados de saúde neste site."],
      ["Para que usamos", "Para agendar e realizar consultas e exames, entrar em contato sobre o seu atendimento, cumprir obrigações legais e sanitárias de guarda de prontuários e laudos, e medir a audiência do site e o resultado das nossas campanhas de anúncios, o que você pode recusar a qualquer momento."],
      ["Bases legais", "Execução de contrato e procedimentos preliminares (agendamentos), tutela da saúde por profissionais de saúde (atendimento clínico), cumprimento de obrigação legal (guarda de registros) e legítimo interesse em divulgar e medir nossos serviços (cookies de medição e publicidade), sempre com opção de recusa."],
      ["Publicidade e Meta Pixel", "Anunciamos no Facebook e no Instagram. O Meta Pixel registra visitas e cliques neste site para medir o desempenho dos anúncios e formar públicos. Não enviamos à Meta — nem a nenhum outro parceiro de publicidade — dados de saúde, exames, laudos, diagnósticos ou qualquer informação sensível. Você pode recusar esses cookies sem prejuízo ao atendimento."],
      ["Com quem compartilhamos", "Com operadoras de planos de saúde para autorização e faturamento do seu atendimento, com médicos e laboratórios parceiros envolvidos na emissão do seu laudo, com autoridades quando exigido por lei, e com provedores de tecnologia que hospedam o site e medem anúncios, nos limites descritos acima."],
      ["Por quanto tempo guardamos", "Prontuários, laudos e imagens são mantidos pelos prazos exigidos pela legislação e pelas normas do Conselho Federal de Medicina. Dados de navegação são mantidos pelo período de medição das campanhas e depois descartados ou anonimizados."],
      ["Seus direitos", "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, informação sobre compartilhamentos e revogação de consentimento. Basta falar com a clínica pelos canais da página de Contato, presencialmente ou pelo WhatsApp da Recepção (93) 99180-1155."],
      ["Segurança", "Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou divulgação indevida. O acesso a laudos e imagens é feito por login e senha individuais, entregues no momento do exame."],
      ["Menores de idade", "O atendimento de crianças e adolescentes é feito na presença e com o consentimento dos pais ou responsáveis legais."],
      ["Alterações", "Esta política pode ser atualizada. A versão vigente estará sempre disponível nesta página."],
    ],
  },
};

function LegalPage() {
  const data = LEGAL_CONTENT[window.LEGAL_KEY] || { title: "Documento", eyebrow: "Documentos", intro: "", sections: [] };
  return (
    <PageShell active="">
      <div data-screen-label={data.title}>
        <section style={{ padding: "80px 0 32px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <Eyebrow color="blue">{data.eyebrow}</Eyebrow>
            <h1 style={{ fontSize: 48, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.03em", lineHeight: 1.08, margin: "8px 0 16px" }}>{data.title}</h1>
            {data.intro && <p style={{ fontSize: 18, color: "var(--fg-default)", lineHeight: 1.55, margin: 0 }}>{data.intro}</p>}
          </div>
        </section>
        <section className="section-pad-sm">
          <div className="container" style={{ maxWidth: 760 }}>
            {data.sections.map(([h, body], i) => (
              <div key={i} style={{ marginBottom: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.01em", margin: "0 0 8px" }}>{h}</h2>
                <p style={{ fontSize: 16, color: "var(--fg-default)", lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
            <p style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 40 }}>Última atualização: {new Date().getFullYear()}.</p>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<LegalPage/>);
