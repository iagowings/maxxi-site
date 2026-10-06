/* global React, ReactDOM, PageShell, TweaksPanel, Eyebrow, Card, IconCircle, BLOG_POSTS, GENERAL_WHATS */

function BlogPage() {
  const posts = (BLOG_POSTS || []).slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageShell active="blog">
      <div data-screen-label="Blog">
        <section style={{ padding: "80px 0 40px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <Eyebrow color="blue">Blog</Eyebrow>
            <h1 style={{ fontSize: 56, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.06, margin: "8px 0 18px" }}>
              Dicas sobre exames e saúde em Altamira
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              Respostas simples pras dúvidas mais comuns sobre tomografia, ressonância,
              mamografia e outros exames — e como marcar cada um na Maxxi Saúde.
            </p>
          </div>
        </section>

        <section className="section-pad-sm">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))", gap: 20 }}>
              {posts.map(post => (
                <a key={post.slug} href={"/blog/" + post.slug + "/"} style={{ textDecoration: "none" }}>
                  <Card className="reveal" hoverable style={{ padding: 28, display: "flex", flexDirection: "column", minHeight: 240 }}>
                    <IconCircle name={post.icon} color="blue" size={52} stroke={1.5}/>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--fg-strong)", margin: "16px 0 8px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 18px", flex: 1 }}>{post.excerpt}</p>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ms-blue-700)" }}>Ler artigo →</span>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BlogPage/>);
