const WA_LINK="https://wa.me/"+GENERAL_WHATS+"?text="+encodeURIComponent("Ol\xE1! Quero marcar uma consulta ou exame."),TEL_LINK="tel:+55"+PHONE_FIXED.replace(/\D/g,""),ENDERECO="Tv. Coronel Tancredo, 45 \u2014 Centro \u2014 Altamira/PA",MAPS_LINK="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Maxxi Sa\xFAde, Travessa Coronel Tancredo, 45, Centro, Altamira, PA");window.ROTEIRO_FALA=["Voc\xEA est\xE1 na p\xE1gina de agendamento da Maxxi Sa\xFAde, em Altamira.","Aqui voc\xEA escolhe a consulta ou o exame que precisa.","Cada item da lista abre o WhatsApp j\xE1 com a mensagem certa.","Voc\xEA pode mandar mensagem de voz. \xC9 s\xF3 falar. A gente escuta e responde.","Se preferir, tamb\xE9m pode ligar para a cl\xEDnica.","A cl\xEDnica fica na Travessa Coronel Tancredo, n\xFAmero quarenta e cinco, no centro de Altamira.","Atendemos de segunda a s\xE1bado, das sete da manh\xE3 \xE0s sete da noite."];function AgendarPage(){return React.createElement(PageShell,{active:"agendar",hideBubble:!0},React.createElement("div",{"data-screen-label":"Agendar exame",className:"t-page"},React.createElement("section",{style:{background:"var(--ms-blue-800)",color:"#fff",padding:"44px 0 52px"}},React.createElement("div",{className:"container"},React.createElement("p",{className:"t-eyebrow"},"Maxxi Sa\xFAde \xB7 Altamira"),React.createElement("h1",{className:"t-h1"},"Marcar consulta",React.createElement("br",null),"ou exame"),React.createElement("p",{className:"t-lead"},"Escolha embaixo o que voc\xEA precisa.",React.createElement("br",null),"A gente marca pelo WhatsApp."),React.createElement(BotaoWhats,null),React.createElement("a",{href:TEL_LINK,className:"t-btn-tel"},React.createElement(Icon,{name:"phone",size:30,stroke:2}),React.createElement("span",null,React.createElement("span",{className:"t-btn-tel-l1"},"Ligar para a cl\xEDnica"),React.createElement("span",{className:"t-btn-tel-l2"},PHONE_FIXED))))),React.createElement("section",{className:"t-sec"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"Marcar uma consulta"),React.createElement("div",{className:"t-lista"},SPECIALTIES.map(a=>React.createElement(ListaItem,{key:a.slug,icon:a.icon,href:"https://wa.me/"+a.whatsapp+"?text="+encodeURIComponent("Ol\xE1! Quero marcar uma consulta de "+a.name+"."),title:a.name,subtitle:a.doctor&&a.doctor.name}))))),React.createElement("section",{className:"t-sec t-sec-alt"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"Marcar um exame"),React.createElement("div",{className:"t-lista"},EXAMES.map(a=>React.createElement(ListaItem,{key:a.slug,icon:a.icon,href:"https://wa.me/"+GENERAL_WHATS+"?text="+encodeURIComponent("Ol\xE1! Quero marcar "+a.name+"."),title:a.name,subtitle:a.badge,moreHref:"/exames/"+a.slug+"/"}))))),React.createElement("section",{className:"t-sec"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"Onde fica"),React.createElement("p",{className:"t-endereco"},ENDERECO),React.createElement("p",{className:"t-body"},"De segunda a s\xE1bado, das 7h \xE0s 19h.",React.createElement("br",null),"Plant\xE3o de tomografia e raio-x: 24 horas, todo dia."),React.createElement("a",{href:MAPS_LINK,target:"_blank",rel:"noopener",className:"t-btn-mapa"},React.createElement(Icon,{name:"map-pin",size:28,stroke:2}),React.createElement("span",null,"Ver no mapa como chegar")))),React.createElement("section",{className:"t-sec t-sec-alt t-fim"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"N\xE3o achou o que precisa?"),React.createElement("p",{className:"t-lead t-lead-dark"},"Toque no bot\xE3o verde e fale com a gente.",React.createElement("br",null),"Pode ser por \xE1udio."),React.createElement(BotaoWhats,null),React.createElement("p",{className:"t-aviso"},"Esta p\xE1gina \xE9 informativa e n\xE3o substitui a consulta com um m\xE9dico.",React.createElement("br",null),React.createElement("br",null),"Maxxi Sa\xFAde \xB7 CNPJ 11.503.226/0001-21 \xB7 Respons\xE1vel t\xE9cnico: Dr. An\xEDsio Fernando Chaves \xB7 M\xE9dico Radiologista \xB7 CRM 9422 \xB7 R.Q.E. 6391"))),React.createElement("a",{href:WA_LINK,target:"_blank",rel:"noopener",className:"t-fixa","aria-label":"Falar no WhatsApp da Maxxi Sa\xFAde"},React.createElement(WhatsAppMark,{size:38}),React.createElement("span",null,"Falar no WhatsApp")),React.createElement(EstiloDaPagina,null)),React.createElement(TweaksPanel,null))}function BotaoWhats({compacto:a}){return React.createElement("a",{href:WA_LINK,target:"_blank",rel:"noopener",className:"t-btn-wa"+(a?" t-btn-wa-c":""),"aria-label":"Falar no WhatsApp da Maxxi Sa\xFAde. Voc\xEA pode mandar \xE1udio."},React.createElement("span",{className:"t-btn-wa-logo","aria-hidden":"true"},React.createElement(WhatsAppMark,{size:46})),React.createElement("span",{className:"t-btn-wa-txt"},React.createElement("span",{className:"t-btn-wa-l1"},"Falar no WhatsApp"),React.createElement("span",{className:"t-btn-wa-l2"},"Pode mandar \xE1udio \u2014 a gente escuta")))}function ListaItem({href:a,icon:s,title:e,subtitle:t,moreHref:n}){return React.createElement("div",{className:"t-lista-item"},React.createElement("a",{href:a,target:"_blank",rel:"noopener",className:"t-lista-link","aria-label":"Falar sobre "+e+" no WhatsApp"},React.createElement("span",{className:"t-lista-ico","aria-hidden":"true"},React.createElement(Icon,{name:s,size:30,stroke:1.7})),React.createElement("span",{className:"t-lista-txt"},React.createElement("strong",{className:"t-lista-t"},e),t&&React.createElement("span",{className:"t-body t-lista-sub"},t)),React.createElement("span",{className:"t-lista-wa","aria-hidden":"true"},React.createElement(WhatsAppMark,{size:30}))),n&&React.createElement("a",{href:n,className:"t-lista-mais"},"Saiba mais sobre este exame"))}function EstiloDaPagina(){return React.createElement("style",null,`
      .t-page { --ts: 1; --verde: #25d366; --verde-esc: #0b6b30; --tinta: #08301a; }

      .t-eyebrow {
        font-size: calc(14px * var(--ts)); font-weight: 800; letter-spacing: 0.14em;
        text-transform: uppercase; color: var(--ms-green-300); margin: 0 0 14px;
      }
      .t-h1 {
        font-size: calc(46px * var(--ts)) !important;
        line-height: 1.04 !important; font-weight: 900; letter-spacing: -0.02em;
        color: #fff; margin: 0 0 18px;
      }
      .t-lead {
        font-size: calc(23px * var(--ts)); line-height: 1.45; font-weight: 600;
        color: rgba(255,255,255,0.94); margin: 0 0 30px;
      }
      .t-lead-dark { color: var(--fg-strong); }
      .t-h2 {
        font-size: calc(31px * var(--ts)) !important;
        line-height: 1.2 !important; font-weight: 900; letter-spacing: -0.02em;
        color: var(--fg-strong); margin: 0 0 26px;
      }
      .t-body { font-size: calc(19px * var(--ts)); line-height: 1.62; color: var(--fg-default); display: block; }

      .t-sec { padding: 52px 0; }
      .t-sec-alt { background: var(--ms-off-white); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); }

      /* ----- Bot\xE3o WhatsApp ----- */
      .t-btn-wa {
        display: flex; align-items: center; gap: 16px;
        background: var(--verde); color: var(--tinta);
        border: 3px solid var(--verde-esc); border-radius: 20px;
        padding: 18px 22px; text-decoration: none;
        box-shadow: 0 14px 30px rgba(11,107,48,0.34);
        margin: 0 0 18px; max-width: 520px;
      }
      .t-btn-wa:active { transform: translateY(2px); }
      .t-btn-wa-logo { flex: 0 0 auto; display: inline-flex; background: #fff; border-radius: 14px; padding: 6px; }
      .t-btn-wa-txt { display: block; min-width: 0; }
      .t-btn-wa-l1 { display: block; font-size: calc(24px * var(--ts)); font-weight: 900; line-height: 1.15; }
      .t-btn-wa-l2 { display: block; font-size: calc(15px * var(--ts)); font-weight: 700; line-height: 1.3; margin-top: 4px; color: #0a4423; }

      /* ----- Bot\xE3o telefone ----- */
      .t-btn-tel {
        display: flex; align-items: center; gap: 14px;
        background: transparent; color: #fff;
        border: 3px solid rgba(255,255,255,0.55); border-radius: 20px;
        padding: 16px 22px; text-decoration: none; max-width: 520px;
      }
      .t-btn-tel-l1 { display: block; font-size: calc(20px * var(--ts)); font-weight: 800; line-height: 1.2; }
      .t-btn-tel-l2 { display: block; font-size: calc(17px * var(--ts)); font-weight: 700; color: var(--ms-green-300); margin-top: 2px; }

      /* ----- Lista de consultas/exames ----- */
      .t-lista { display: grid; gap: 14px; }
      .t-lista-item { display: block; }
      .t-lista-link {
        display: flex; align-items: center; gap: 16px; text-decoration: none;
        background: #fff; border: 2px solid var(--border-subtle); border-radius: 20px;
        padding: 18px 20px; box-shadow: var(--sh-sm); min-height: 44px;
      }
      .t-lista-link:active { transform: translateY(2px); }
      .t-lista-ico {
        flex: 0 0 auto; color: var(--ms-blue-600); background: var(--ms-blue-50);
        border-radius: 14px; display: inline-flex; align-items: center; justify-content: center;
        width: calc(56px * var(--ts)); min-width: 44px; height: calc(56px * var(--ts)); min-height: 44px;
      }
      .t-lista-txt { flex: 1; min-width: 0; }
      .t-lista-t { display: block; font-size: calc(20px * var(--ts)); font-weight: 900; color: var(--fg-strong); line-height: 1.25; }
      .t-lista-sub { font-size: calc(15px * var(--ts)); color: var(--fg-muted); margin-top: 2px; }
      .t-lista-wa { flex: 0 0 auto; color: var(--verde-esc); }
      .t-lista-mais {
        display: inline-block; margin: 8px 4px 0; font-size: calc(15px * var(--ts));
        font-weight: 700; color: var(--ms-blue-600); text-decoration: none;
      }

      /* ----- Endere\xE7o ----- */
      .t-endereco { font-size: calc(24px * var(--ts)); font-weight: 800; color: var(--fg-strong); line-height: 1.35; margin: 0 0 14px; }
      .t-btn-mapa {
        display: inline-flex; align-items: center; gap: 12px; margin-top: 22px;
        background: var(--ms-blue-700); color: #fff; text-decoration: none;
        border-radius: 18px; padding: 18px 24px; min-height: 60px;
        font-size: calc(20px * var(--ts)); font-weight: 800;
      }

      /* ----- Fechamento ----- */
      .t-fim { background: linear-gradient(180deg, var(--ms-green-50) 0%, var(--ms-off-white) 100%); }
      .t-aviso { font-size: calc(14px * var(--ts)); line-height: 1.6; color: var(--fg-muted); margin: 30px 0 0; max-width: 720px; }

      /* ----- Barra fixa (s\xF3 no celular) ----- */
      .t-fixa { display: none; }
      @media (max-width: 860px) {
        .t-fixa {
          position: fixed; left: 0; right: 0; bottom: 0; z-index: 70;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: var(--verde); color: var(--tinta); text-decoration: none;
          font-size: calc(21px * var(--ts)); font-weight: 900;
          padding: 16px 20px calc(16px + env(safe-area-inset-bottom, 0px));
          border-top: 3px solid var(--verde-esc);
          box-shadow: 0 -8px 24px rgba(8,48,71,0.18);
        }
        .t-page { padding-bottom: 96px; }
        .t-btn-wa, .t-btn-tel { max-width: none; }
      }
      @media (min-width: 900px) {
        .t-h1 { font-size: calc(64px * var(--ts)) !important; }
        .t-sec { padding: 72px 0; }
      }
    `)}renderPage(React.createElement(AgendarPage,null));
