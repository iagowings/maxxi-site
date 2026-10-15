const WA_LINK="https://wa.me/"+RECEPCAO_WHATS+"?text="+encodeURIComponent("Ol\xE1! Quero fazer uma tomografia."),TEL_LINK="tel:+55"+PHONE_FIXED.replace(/\D/g,""),ENDERECO="Tv. Coronel Tancredo, 45 \u2014 Centro \u2014 Altamira/PA",MAPS_LINK="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Maxxi Sa\xFAde, Travessa Coronel Tancredo, 45, Centro, Altamira, PA"),FALA=["Voc\xEA est\xE1 na p\xE1gina da Maxxi Sa\xFAde, em Altamira.","Aqui a gente faz tomografia.","\xC9 um exame de imagem que mostra o que tem por dentro do corpo.","O exame n\xE3o d\xF3i. Voc\xEA fica deitado e o aparelho passa em volta de voc\xEA.","Costuma levar menos de quinze minutos.","Para marcar, toque no bot\xE3o verde do WhatsApp, aqui na tela.","Voc\xEA pode mandar mensagem de voz. \xC9 s\xF3 falar. A gente escuta e responde.","Se preferir, tamb\xE9m pode ligar para a cl\xEDnica.","No dia do exame, traga o pedido do seu m\xE9dico e um documento com foto.","Se tiver plano de sa\xFAde, traga a carteirinha tamb\xE9m.","A cl\xEDnica fica na Travessa Coronel Tancredo, n\xFAmero quarenta e cinco, no centro de Altamira.","Atendemos de segunda a s\xE1bado, das sete da manh\xE3 \xE0s sete da noite.","E temos plant\xE3o de tomografia vinte e quatro horas, para urg\xEAncia.","Qualquer d\xFAvida, \xE9 s\xF3 chamar no WhatsApp. A gente responde."];window.ROTEIRO_FALA=FALA;function TecnologiaPage(){return React.createElement(PageShell,{active:"tecnologia",hideBubble:!0},React.createElement("div",{"data-screen-label":"Tomografia",className:"t-page"},React.createElement("section",{style:{background:"var(--ms-blue-800)",color:"#fff",padding:"44px 0 52px"}},React.createElement("div",{className:"container"},React.createElement("p",{className:"t-eyebrow"},"Maxxi Sa\xFAde \xB7 Altamira"),React.createElement("h1",{className:"t-h1"},"Tomografia",React.createElement("br",null),"em Altamira"),React.createElement("p",{className:"t-lead"},"Exame r\xE1pido e sem dor.",React.createElement("br",null),"A gente marca pelo WhatsApp."),React.createElement(BotaoWhats,null),React.createElement("a",{href:TEL_LINK,className:"t-btn-tel"},React.createElement(Icon,{name:"phone",size:30,stroke:2}),React.createElement("span",null,React.createElement("span",{className:"t-btn-tel-l1"},"Ligar para a cl\xEDnica"),React.createElement("span",{className:"t-btn-tel-l2"},PHONE_FIXED))))),React.createElement("section",{className:"t-sec"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"Como marcar"),React.createElement("ol",{className:"t-passos"},[{n:"1",icon:"whatsapp",t:"Toque no bot\xE3o verde",d:"Ele abre o WhatsApp da nossa recep\xE7\xE3o."},{n:"2",icon:"mic",t:"Fale o que voc\xEA precisa",d:"Pode mandar \xE1udio. \xC9 s\xF3 apertar o microfone e falar. Se tiver o pedido do m\xE9dico, tire uma foto e mande."},{n:"3",icon:"calendar",t:"A gente marca o dia",d:"Uma pessoa da equipe responde, diz o pre\xE7o ou confirma seu plano, e combina o hor\xE1rio com voc\xEA."}].map(a=>React.createElement("li",{key:a.n,className:"t-passo"},React.createElement("span",{className:"t-passo-n","aria-hidden":"true"},a.n),React.createElement("span",{className:"t-passo-ico","aria-hidden":"true"},a.icon==="whatsapp"?React.createElement(WhatsAppMark,{size:42}):React.createElement(Icon,{name:a.icon,size:38,stroke:1.8})),React.createElement("span",{className:"t-passo-txt"},React.createElement("strong",{className:"t-passo-t"},a.t),React.createElement("span",{className:"t-body"},a.d))))),React.createElement(BotaoWhats,{compacto:!0}))),React.createElement("section",{className:"t-sec t-sec-alt"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"O que levar no dia"),React.createElement("div",{className:"t-levar"},[{icon:"file-text",t:"O pedido do m\xE9dico",d:"O papel que o m\xE9dico escreveu pedindo o exame."},{icon:"user",t:"Documento com foto",d:"RG, CNH ou carteira de trabalho."},{icon:"shield-check",t:"Carteirinha do plano",d:"S\xF3 se voc\xEA tiver plano de sa\xFAde."}].map(a=>React.createElement("div",{key:a.t,className:"t-levar-item"},React.createElement("span",{className:"t-levar-ico","aria-hidden":"true"},React.createElement(Icon,{name:a.icon,size:40,stroke:1.7})),React.createElement("strong",{className:"t-passo-t"},a.t),React.createElement("span",{className:"t-body"},a.d)))),React.createElement("p",{className:"t-body t-nota"},"N\xE3o tem alguma coisa? N\xE3o tem problema. Pergunte no WhatsApp que a gente explica."))),React.createElement("section",{className:"t-sec"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"Perguntas que todo mundo faz"),React.createElement("div",{className:"t-perguntas"},[["O exame d\xF3i?","N\xE3o d\xF3i. Voc\xEA fica deitado numa cama que desliza devagar e o aparelho passa em volta de voc\xEA. \xC9 s\xF3 ficar parado um pouquinho."],["Demora muito?","N\xE3o. Na maior parte dos casos, leva menos de quinze minutos."],["Preciso ficar sem comer?","Depende do exame. Quando precisa, a gente avisa na hora de marcar."],["Atende plano de sa\xFAde?","Sim, v\xE1rios planos. Mande o nome do seu plano no WhatsApp que a gente confere na hora."],["E se for de noite ou fim de semana?","Temos plant\xE3o de tomografia 24 horas para urg\xEAncia, todos os dias."],["Sou nervoso com exame. E a\xED?","Fale com a gente. Nossa equipe fica do seu lado e explica cada passo antes de come\xE7ar."]].map(([a,e])=>React.createElement("div",{key:a,className:"t-pergunta"},React.createElement("h3",{className:"t-pergunta-q"},a),React.createElement("p",{className:"t-body t-pergunta-a"},e)))))),React.createElement("section",{className:"t-sec t-sec-alt"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"Onde fica"),React.createElement("p",{className:"t-endereco"},ENDERECO),React.createElement("p",{className:"t-body"},"De segunda a s\xE1bado, das 7h \xE0s 19h.",React.createElement("br",null),"Plant\xE3o de tomografia e raio-x: 24 horas, todo dia."),React.createElement("a",{href:MAPS_LINK,target:"_blank",rel:"noopener",className:"t-btn-mapa"},React.createElement(Icon,{name:"map-pin",size:28,stroke:2}),React.createElement("span",null,"Ver no mapa como chegar")))),React.createElement("section",{className:"t-sec"},React.createElement("div",{className:"container"},React.createElement("div",{className:"t-aparelho"},React.createElement("span",{className:"t-aparelho-ico","aria-hidden":"true"},React.createElement(Icon,{name:"scan-line",size:48,stroke:1.6})),React.createElement("div",null,React.createElement("h2",{className:"t-h2",style:{marginTop:0}},"Nosso aparelho \xE9 novo"),React.createElement("p",{className:"t-body"},"\xC9 um tom\xF3grafo de 128 canais \u2014 o \xFAnico em cl\xEDnica particular da nossa regi\xE3o. Na pr\xE1tica, isso quer dizer tr\xEAs coisas para voc\xEA: o exame termina mais r\xE1pido, a imagem sai mais n\xEDtida para o seu m\xE9dico e a quantidade de radia\xE7\xE3o \xE9 menor do que em aparelhos antigos."),React.createElement("p",{className:"t-body"},"Tamb\xE9m fazemos ",React.createElement("a",{href:"/exames/ressonancia-magnetica/"},"resson\xE2ncia magn\xE9tica"),","," ",React.createElement("a",{href:"/exames/mamografia-digital/"},"mamografia"),","," ",React.createElement("a",{href:"/exames/ultrassonografia/"},"ultrassom"),","," ",React.createElement("a",{href:"/exames/radiografia-em-geral/"},"raio-x")," e"," ",React.createElement("a",{href:"/exames/laboratorio-de-analises-clinicas/"},"exames de sangue"),"."))))),React.createElement("section",{className:"t-sec t-fim"},React.createElement("div",{className:"container"},React.createElement("h2",{className:"t-h2"},"Vamos marcar o seu exame?"),React.createElement("p",{className:"t-lead t-lead-dark"},"Toque no bot\xE3o verde e fale com a gente.",React.createElement("br",null),"Pode ser por \xE1udio."),React.createElement(BotaoWhats,null),React.createElement("p",{className:"t-aviso"},"Esta p\xE1gina \xE9 informativa e n\xE3o substitui a consulta com um m\xE9dico. A tomografia \xE9 feita com pedido m\xE9dico, usa radia\xE7\xE3o e pode precisar de preparo ou contraste. Quem indica e interpreta o exame \xE9 o seu m\xE9dico. Cada pessoa \xE9 diferente, e os resultados tamb\xE9m.",React.createElement("br",null),React.createElement("br",null),"Maxxi Sa\xFAde \xB7 CNPJ 11.503.226/0001-21 \xB7 Respons\xE1vel t\xE9cnico: Dr. An\xEDsio Fernando Chaves \xB7 M\xE9dico Radiologista \xB7 CRM 9422 \xB7 R.Q.E. 6391"))),React.createElement("a",{href:WA_LINK,target:"_blank",rel:"noopener",className:"t-fixa","aria-label":"Falar no WhatsApp da Maxxi Sa\xFAde"},React.createElement(WhatsAppMark,{size:38}),React.createElement("span",null,"Falar no WhatsApp")),React.createElement(EstiloDaPagina,null)),React.createElement(TweaksPanel,null))}function BotaoWhats({compacto:a}){return React.createElement("a",{href:WA_LINK,target:"_blank",rel:"noopener",className:"t-btn-wa"+(a?" t-btn-wa-c":""),"aria-label":"Falar no WhatsApp da Maxxi Sa\xFAde. Voc\xEA pode mandar \xE1udio."},React.createElement("span",{className:"t-btn-wa-logo","aria-hidden":"true"},React.createElement(WhatsAppMark,{size:46})),React.createElement("span",{className:"t-btn-wa-txt"},React.createElement("span",{className:"t-btn-wa-l1"},"Falar no WhatsApp"),React.createElement("span",{className:"t-btn-wa-l2"},"Pode mandar \xE1udio \u2014 a gente escuta")))}function EstiloDaPagina(){return React.createElement("style",null,`
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
      .t-body a { color: var(--ms-blue-600); font-weight: 700; }

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
      .t-btn-wa-c { margin-top: 32px; }

      /* ----- Bot\xE3o telefone ----- */
      .t-btn-tel {
        display: flex; align-items: center; gap: 14px;
        background: transparent; color: #fff;
        border: 3px solid rgba(255,255,255,0.55); border-radius: 20px;
        padding: 16px 22px; text-decoration: none; max-width: 520px;
      }
      .t-btn-tel-l1 { display: block; font-size: calc(20px * var(--ts)); font-weight: 800; line-height: 1.2; }
      .t-btn-tel-l2 { display: block; font-size: calc(17px * var(--ts)); font-weight: 700; color: var(--ms-green-300); margin-top: 2px; }

      /* ----- Acessibilidade ----- */
      /* Uma linha so: os dois recursos ficam visiveis de cara, sem empurrar
         o botao do WhatsApp para fora da primeira tela. */
      .t-acess { display: flex; flex-wrap: nowrap; gap: 10px; margin: 0 0 26px; max-width: 520px; }
      .t-acess-btn {
        flex: 1 1 0; min-width: 0; justify-content: center;
        display: inline-flex; align-items: center; gap: 9px; cursor: pointer;
        background: rgba(255,255,255,0.12); color: #fff;
        border: 2px solid rgba(255,255,255,0.45); border-radius: 999px;
        padding: 12px 14px; min-height: 56px;
        font-family: inherit; font-size: calc(16px * var(--ts)); font-weight: 800;
        line-height: 1.15; text-align: center;
      }
      .t-acess-btn[aria-pressed="true"] { background: #fff; color: var(--ms-blue-800); border-color: #fff; }
      .t-acess-aa { font-size: calc(22px * var(--ts)); font-weight: 900; line-height: 1; }

      /* ----- Passos ----- */
      .t-passos { list-style: none; padding: 0; margin: 0; display: grid; gap: 18px; }
      .t-passo {
        display: grid; grid-template-columns: auto auto 1fr; align-items: start; gap: 16px;
        background: #fff; border: 2px solid var(--border-subtle); border-radius: 20px;
        padding: 22px; box-shadow: var(--sh-sm);
      }
      .t-passo-n {
        font-size: calc(34px * var(--ts)); font-weight: 900; line-height: 1;
        color: #fff; background: var(--ms-blue-700); border-radius: 14px;
        width: calc(56px * var(--ts)); min-width: 44px; height: calc(56px * var(--ts)); min-height: 44px;
        display: inline-flex; align-items: center; justify-content: center;
      }
      .t-passo-ico {
        color: var(--ms-blue-600); display: inline-flex; align-items: center; justify-content: center;
        width: calc(56px * var(--ts)); min-width: 44px; height: calc(56px * var(--ts)); min-height: 44px;
        background: var(--ms-blue-50); border-radius: 14px;
      }
      .t-passo-t { display: block; font-size: calc(21px * var(--ts)); font-weight: 900; color: var(--fg-strong); margin-bottom: 6px; line-height: 1.25; }

      /* ----- O que levar ----- */
      .t-levar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
      .t-levar-item { background: #fff; border: 2px solid var(--border-subtle); border-radius: 20px; padding: 24px; }
      .t-levar-ico {
        display: inline-flex; align-items: center; justify-content: center;
        width: 72px; height: 72px; border-radius: 20px;
        background: var(--ms-green-100); color: var(--ms-green-800); margin-bottom: 14px;
      }
      .t-nota {
        margin-top: 22px; background: var(--ms-blue-50); border-left: 6px solid var(--ms-blue-500);
        border-radius: 12px; padding: 18px 20px; color: var(--fg-strong); font-weight: 600;
      }

      /* ----- Perguntas ----- */
      .t-perguntas { display: grid; gap: 14px; }
      .t-pergunta { background: #fff; border: 2px solid var(--border-subtle); border-radius: 18px; padding: 22px; }
      .t-pergunta-q { font-size: calc(22px * var(--ts)) !important; font-weight: 900; color: var(--fg-strong); margin: 0 0 8px; line-height: 1.25; }
      .t-pergunta-a { margin: 0; }

      /* ----- Endere\xE7o ----- */
      .t-endereco { font-size: calc(24px * var(--ts)); font-weight: 800; color: var(--fg-strong); line-height: 1.35; margin: 0 0 14px; }
      .t-btn-mapa {
        display: inline-flex; align-items: center; gap: 12px; margin-top: 22px;
        background: var(--ms-blue-700); color: #fff; text-decoration: none;
        border-radius: 18px; padding: 18px 24px; min-height: 60px;
        font-size: calc(20px * var(--ts)); font-weight: 800;
      }

      /* ----- Aparelho ----- */
      .t-aparelho { display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: start; }
      .t-aparelho-ico {
        display: inline-flex; align-items: center; justify-content: center;
        width: 84px; height: 84px; border-radius: 22px;
        background: var(--ms-blue-50); color: var(--ms-blue-600);
      }

      /* ----- Fechamento ----- */
      .t-fim { background: linear-gradient(180deg, var(--ms-green-50) 0%, #fff 100%); }
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
        :root { --cta-bar: 84px; }   /* o aviso de cookies sobe e nao cobre o botao */
        .t-levar { grid-template-columns: 1fr; }
        .t-aparelho { grid-template-columns: 1fr; }
        /* O icone carrega significado para quem le pouco: fica, empilhado
           abaixo do numero, em vez de sumir. */
        .t-passo { grid-template-columns: auto 1fr; row-gap: 10px; }
        .t-passo-n { grid-area: 1 / 1 / 2 / 2; }
        .t-passo-ico { grid-area: 2 / 1 / 3 / 2; justify-content: center; padding-top: 0; }
        .t-passo-txt { grid-area: 1 / 2 / 3 / 3; }
        .t-btn-wa, .t-btn-tel { max-width: none; }
      }
      @media (min-width: 900px) {
        .t-h1 { font-size: calc(64px * var(--ts)) !important; }
        .t-sec { padding: 72px 0; }
      }
    `)}renderPage(React.createElement(TecnologiaPage,null));
