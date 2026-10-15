/* global React, ReactDOM, PageShell, TweaksPanel, Card, IconCircle, Button, BLOG_POSTS, EXAMES, GENERAL_WHATS */
/* Shared template for every /blog/<slug>/ page.
   Each page's index.html sets window.BLOG_SLUG before loading this file. */

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return d + "/" + m + "/" + y;
}

function BlogPostPage() {
  const slug = window.BLOG_SLUG;
  const post = (BLOG_POSTS || []).find(p => p.slug === slug);

  if (!post) {
    return (
      <PageShell active="blog">
        <section className="section-pad">
          <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: "var(--fg-strong)" }}>Post não encontrado</h1>
            <Button variant="primary" href="/blog/" iconAfter="arrow-right">Ver todos os posts</Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const exam = (EXAMES || []).find(e => e.slug === post.examSlug);
  const others = (BLOG_POSTS || []).filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell active="blog">
      <div data-screen-label={post.title}>
        <section style={{ padding: "72px 0 40px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <nav aria-label="Trilha" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 18 }}>
              <a href="/" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>Início</a>
              {" / "}
              <a href="/blog/" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>Blog</a>
            </nav>
            <h1 style={{ fontSize: 42, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 14px" }}>
              {post.title}
            </h1>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--fg-muted)", margin: "0 0 20px" }}>
              Atualizado em {formatDate(post.date)} · Maxxi Saúde
            </p>
            <Button variant="primary" size="lg" icon="whatsapp"
                    href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Vim do blog e quero saber mais.")}
                    target="_blank">Falar no WhatsApp</Button>
          </div>
        </section>

        <section className="section-pad-sm">
          <div className="container" style={{ maxWidth: 760, display: "grid", gridTemplateColumns: exam ? "1fr 280px" : "1fr", gap: 32, alignItems: "start" }}>
            <article style={{ fontSize: 17, color: "var(--fg-default)", lineHeight: 1.75 }}>
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return <h2 key={i} style={{ fontSize: 24, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.015em", margin: "32px 0 12px" }}>{block.text}</h2>;
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} style={{ margin: "0 0 18px", paddingLeft: 22 }}>
                      {block.items.map((it, j) => <li key={j} style={{ marginBottom: 8 }}>{it}</li>)}
                    </ul>
                  );
                }
                return <p key={i} style={{ margin: "0 0 18px" }}>{block.text}</p>;
              })}
            </article>

            {exam && (
              <Card accentBar style={{ padding: 24, position: "sticky", top: 96 }}>
                <IconCircle name={exam.icon} color="accent" size={44} stroke={1.6}/>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--fg-strong)", margin: "12px 0 6px" }}>{exam.name}</h3>
                <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 16px" }}>{exam.summary}</p>
                <a href={"/exames/" + exam.slug + "/"} style={{ fontSize: 14, fontWeight: 700, color: "var(--ms-blue-700)", textDecoration: "none" }}>Ver detalhes do exame →</a>
              </Card>
            )}
          </div>
        </section>

        <section className="section-pad-sm" style={{ background: "var(--bg-subtle, #f7f9fb)" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "0 0 20px" }}>Leia também</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: 16 }}>
              {others.map(p => (
                <a key={p.slug} href={"/blog/" + p.slug + "/"} style={{ textDecoration: "none" }}>
                  <Card hoverable style={{ padding: "20px 22px" }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "var(--fg-strong)" }}>{p.title}</span>
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

renderPage(<BlogPostPage/>);
