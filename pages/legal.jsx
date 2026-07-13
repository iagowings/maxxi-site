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
      ["Como usamos", "Utilizamos cookies para lembrar preferências de navegação e para medir o desempenho e a audiência do site, sempre respeitando sua privacidade."],
      ["Gerenciar cookies", "Você pode bloquear ou apagar cookies nas configurações do seu navegador. Algumas funcionalidades do site podem ser afetadas."],
      ["Seus dados (LGPD)", "Tratamos dados pessoais conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Para solicitações sobre seus dados, fale com a clínica pelos canais de atendimento."],
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
