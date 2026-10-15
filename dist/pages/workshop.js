const EVENTO={edicao:"2\xBA",iso:"2026-12-04",data:"4 de dezembro",dataCurta:"04/12",dia:"Sexta-feira",horario:"",local:"Maxxi Sa\xFAde",endereco:"Tv. Coronel Tancredo, 45 \xB7 Centro \xB7 Altamira/PA"},WS_RSVP="https://wa.me/5593991728939?text="+encodeURIComponent("Ol\xE1, quero confirmar minha presen\xE7a no 2 Workshop cardiovascular"),WS_MAPS="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Maxxi Sa\xFAde, Travessa Coronel Tancredo, 45, Centro, Altamira, PA"),PILARES=[{icon:"scan-line",t:"Angiotomografia de 128 canais",d:"Aquisi\xE7\xE3o r\xE1pida e reconstru\xE7\xF5es 3D de alta resolu\xE7\xE3o para o estudo do cora\xE7\xE3o e dos vasos \u2014 a \xFAnica tomografia de 128 canais em cl\xEDnica privada da regi\xE3o do Xingu."},{icon:"heart-pulse",t:"Resson\xE2ncia magn\xE9tica de alto campo",d:"Caracteriza\xE7\xE3o tecidual e avalia\xE7\xE3o funcional do mioc\xE1rdio, sem radia\xE7\xE3o \u2014 complemento natural da tomografia na investiga\xE7\xE3o cardiovascular."},{icon:"file-text",t:"Laudo que responde \xE0 pergunta cl\xEDnica",d:"Laudos assinados por especialistas, com di\xE1logo direto entre quem solicita e quem interpreta o exame."}],TEMAS=[["Vis\xE3o geral da TC e RM cardiovascular","Indica\xE7\xF5es, protocolos e o que cada m\xE9todo entrega na pr\xE1tica cl\xEDnica."],["Escore de c\xE1lcio (CACS) na estratifica\xE7\xE3o de risco","Como o CACS refina o risco cardiovascular e orienta a conduta preventiva."],["TC e RM na doen\xE7a arterial coronariana","Angiotomografia de coron\xE1rias e resson\xE2ncia na investiga\xE7\xE3o e no seguimento da DAC."],["RM nas cardiomiopatias","Caracteriza\xE7\xE3o tecidual e realce tardio no diagn\xF3stico diferencial das cardiomiopatias."]],GALERIA=[{src:"/assets/ws-cadrads.jpg",w:960,h:609,cls:"ws-g-wide",tag:"Angio-TC de coron\xE1rias",t:"Estenose na DA \u2014 CAD-RADS 4A",d:"Reformata\xE7\xF5es multiplanares, MPR curva e cortes transversais da DA, com reconstru\xE7\xE3o 3D.",autor:"MBq",lic:"CC BY-SA 4.0",url:"https://commons.wikimedia.org/wiki/File:CCTA_CAD-RADS_4a.png"},{src:"/assets/ws-tc-3d.jpg",w:415,h:512,cls:"ws-g-tall",tag:"TC \xB7 Volume rendering",t:"Reconstru\xE7\xE3o 3D do cora\xE7\xE3o",d:"Anatomia card\xEDaca e trajeto coronariano \u2014 caso de aneurismas coronarianos na doen\xE7a de Kawasaki.",autor:"Hellerhoff",lic:"CC BY-SA 3.0",url:"https://commons.wikimedia.org/wiki/File:Coronaraneursymen_bei_Kawasaki-Syndrom_-_CT_-_Volume_rendering_gesamt_-_023.jpg"},{src:"/assets/ws-cacs.jpg",w:680,h:580,tag:"TC sem contraste",t:"Escore de c\xE1lcio",d:"Calcifica\xE7\xE3o na DA (em amarelo). Escore de Agatston total: 213.",autor:"MBq",lic:"CC BY-SA 4.0",url:"https://commons.wikimedia.org/wiki/File:CCTA_Agatston-Score.png"},{src:"/assets/ws-rm-realce.jpg",w:458,h:414,tag:"RM card\xEDaca",t:"Realce tardio",d:"Quatro c\xE2maras com realce tardio de gadol\xEDnio em infarto inferior cr\xF4nico.",autor:"Doregan",lic:"CC BY-SA 4.0",url:"https://commons.wikimedia.org/wiki/File:4CH_IR_infarct.jpg"}],CACS_FAIXAS=[{faixa:"0",nome:"Ausente"},{faixa:"1\u201399",nome:"Leve"},{faixa:"100\u2013399",nome:"Moderada"},{faixa:"\u2265 400",nome:"Acentuada"}],CACS_EXEMPLO=213,cacsPos=e=>e===0?12.5:e<100?25+e/100*25:e<400?50+(e-100)/300*25:Math.min(75+(e-400)/600*25,97),METODOS=[["Anatomia e estenose coronariana",3,1],["Quantifica\xE7\xE3o do c\xE1lcio coronariano",3,0],["Fun\xE7\xE3o ventricular",2,3],["Caracteriza\xE7\xE3o tecidual e fibrose",1,3],["Viabilidade mioc\xE1rdica",1,3]],diasAte=e=>Math.ceil((new Date(e+"T00:00:00-03:00")-Date.now())/864e5),PALESTRANTE={nome:"Dr. Anderson Armstrong",foto:"/assets/dr-anderson-armstrong.jpg",cv:["Especialista em Cardiologia e Ecocardiografia pela Sociedade Brasileira de Cardiologia (SBC)","Mestre em Ci\xEAncias da Sa\xFAde pela Universidade de Pernambuco (UPE)","Doutor em Medicina pela Escola Bahiana de Medicina e Sa\xFAde P\xFAblica","Fellow em Imagem Cardiovascular pela Johns Hopkins University","Professor adjunto e preceptor da Resid\xEAncia de Cardiologia da UNIVASF"]};function WorkshopPage(){const e=diasAte(EVENTO.iso);return React.createElement(PageShell,{active:"workshop",hideBubble:!0},React.createElement("div",{className:"ws"},React.createElement("section",{className:"ws-hero"},React.createElement("div",{className:"container ws-hero-grid"},React.createElement("div",null,React.createElement("span",{className:"ws-pill"},"Convite \xB7 Direcionado a m\xE9dicos"),e>0&&React.createElement("span",{className:"ws-count"},React.createElement("b",null,e)," ",e===1?"dia":"dias"," para o evento"),React.createElement("h1",{className:"ws-h1"},React.createElement("span",{className:"ws-ed"},EVENTO.edicao," Workshop M\xE9dico"),"Cardiovascular"),React.createElement("p",{className:"ws-lead"},"Um encontro dedicado \xE0 imagem cardiovascular: como tecnologia de ponta e laudo especializado levam a diagn\xF3sticos cardiovasculares mais precisos."),React.createElement("a",{className:"ws-speaker",href:"#palestrante"},React.createElement("span",{className:"ws-speaker-foto",style:{backgroundImage:"url("+PALESTRANTE.foto+")"},"aria-hidden":"true"}),React.createElement("span",null,React.createElement("small",null,"Palestrante"),React.createElement("strong",null,PALESTRANTE.nome),React.createElement("span",null,"Cardiologista e ecocardiografista (SBC) \xB7 Fellow em imagem cardiovascular pela Johns Hopkins University"))),React.createElement("div",{className:"ws-info"},React.createElement("div",{className:"ws-info-item"},React.createElement(Icon,{name:"calendar-days",size:26}),React.createElement("span",null,React.createElement("strong",null,EVENTO.data),React.createElement("small",null,EVENTO.dia,EVENTO.horario&&" \xB7 "+EVENTO.horario))),React.createElement("div",{className:"ws-info-item"},React.createElement(Icon,{name:"map-pin",size:26}),React.createElement("span",null,React.createElement("strong",null,EVENTO.local),React.createElement("small",null,EVENTO.endereco)))),React.createElement("div",{className:"ws-ctas"},React.createElement("a",{className:"ws-btn",href:WS_RSVP,target:"_blank",rel:"noopener"},React.createElement(WhatsAppMark,{size:22})," Confirmar presen\xE7a"),React.createElement("a",{className:"ws-link",href:"#temas"},"Ver os temas ",React.createElement(Icon,{name:"arrow-right",size:18})))),React.createElement("figure",{className:"ws-poster"},React.createElement("video",{src:"/assets/ultimoevento.mp4",poster:"/assets/workshop-cardiovascular-680.jpg",width:"720",height:"1280",muted:!0,loop:!0,playsInline:!0,controls:!0,preload:"metadata",ref:a=>{a&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&a.play().catch(()=>{})},"aria-label":"V\xEDdeo da 1\xAA edi\xE7\xE3o do Workshop M\xE9dico da Maxxi Sa\xFAde"}),React.createElement("figcaption",null,"Como foi a 1\xAA edi\xE7\xE3o"))),React.createElement(Ecg,null)),React.createElement("section",{className:"ws-sec ws-sec-alt",id:"palestrante"},React.createElement("div",{className:"container ws-bio"},React.createElement("img",{className:"ws-bio-foto",src:PALESTRANTE.foto,width:"883",height:"1210",alt:PALESTRANTE.nome+", cardiologista",loading:"lazy"}),React.createElement("div",null,React.createElement("p",{className:"t-eyebrow"},"Palestrante"),React.createElement("h2",null,PALESTRANTE.nome),React.createElement("ul",{className:"ws-cv"},PALESTRANTE.cv.map(a=>React.createElement("li",{key:a},React.createElement(Icon,{name:"check-circle",size:22}),React.createElement("span",null,a))))))),React.createElement("section",{className:"ws-sec"},React.createElement("div",{className:"container"},React.createElement("div",{className:"ws-head"},React.createElement("p",{className:"t-eyebrow"},"O tema"),React.createElement("h2",null,"Precis\xE3o diagn\xF3stica come\xE7a na qualidade da imagem."),React.createElement("p",{className:"ws-sub"},"Reunimos m\xE9dicos da regi\xE3o para mostrar, na pr\xE1tica, como a estrutura de imagem da Maxxi Sa\xFAde apoia decis\xF5es cl\xEDnicas mais seguras \u2014 do rastreio \xE0 conduta.")),React.createElement("div",{className:"ws-pilares"},PILARES.map(a=>React.createElement("article",{key:a.t,className:"ws-card reveal"},React.createElement("span",{className:"ws-card-ico"},React.createElement(Icon,{name:a.icon,size:26})),React.createElement("h3",null,a.t),React.createElement("p",null,a.d)))))),React.createElement("section",{className:"ws-gal"},React.createElement("div",{className:"container"},React.createElement("div",{className:"ws-head"},React.createElement("p",{className:"ws-pill"},"Imagem cardiovascular"),React.createElement("h2",null,"O que a imagem de alta defini\xE7\xE3o revela."),React.createElement("p",{className:"ws-sub"},"Da anatomia coronariana \xE0 caracteriza\xE7\xE3o do mioc\xE1rdio: exemplos do tipo de informa\xE7\xE3o que TC e RM card\xEDacas colocam nas m\xE3os do m\xE9dico assistente.")),React.createElement("div",{className:"ws-grid"},GALERIA.map(a=>React.createElement("figure",{key:a.src,className:"ws-fig reveal "+(a.cls||"")},React.createElement("div",{className:"ws-fig-img"},React.createElement("img",{src:a.src,width:a.w,height:a.h,alt:a.tag+": "+a.t,loading:"lazy"})),React.createElement("figcaption",null,React.createElement("small",null,a.tag),React.createElement("strong",null,a.t),React.createElement("span",null,a.d),React.createElement("a",{href:a.url,target:"_blank",rel:"noopener"},"Imagem: ",a.autor," \xB7 ",a.lic," \xB7 Wikimedia Commons"))))))),React.createElement("section",{className:"ws-sec ws-sec-alt",id:"temas"},React.createElement("div",{className:"container ws-temas-grid"},React.createElement("div",{className:"ws-head"},React.createElement("p",{className:"t-eyebrow"},"O que voc\xEA vai ver"),React.createElement("h2",null,"Programa\xE7\xE3o cient\xEDfica"),React.createElement("p",{className:"ws-sub"},"Tomografia e resson\xE2ncia cardiovascular aplicadas \xE0 rotina do consult\xF3rio.")),React.createElement("ol",{className:"ws-temas"},TEMAS.map(([a,s],o)=>React.createElement("li",{key:a,className:"reveal"},React.createElement("span",{className:"ws-num"},String(o+1).padStart(2,"0")),React.createElement("span",null,React.createElement("strong",null,a),React.createElement("span",null,s))))))),React.createElement("section",{className:"ws-sec"},React.createElement("div",{className:"container"},React.createElement("div",{className:"ws-head"},React.createElement("p",{className:"t-eyebrow"},"Em perspectiva"),React.createElement("h2",null,"Dois m\xE9todos, perguntas diferentes."),React.createElement("p",{className:"ws-sub"},"Um aperitivo do que ser\xE1 discutido em detalhe no workshop.")),React.createElement("div",{className:"ws-charts"},React.createElement("div",{className:"ws-chart reveal"},React.createElement("h3",null,"Escore de c\xE1lcio coronariano (Agatston)"),React.createElement("p",{className:"ws-chart-sub"},"Faixas usuais de calcifica\xE7\xE3o na pr\xE1tica cl\xEDnica"),React.createElement("div",{className:"ws-cacs",role:"img","aria-label":"Escala do escore de c\xE1lcio: "+CACS_FAIXAS.map(a=>a.faixa+" "+a.nome).join(", ")+". Caso da galeria: "+CACS_EXEMPLO+", faixa moderada."},React.createElement("div",{className:"ws-cacs-bar"},CACS_FAIXAS.map(a=>React.createElement("span",{key:a.faixa}))),React.createElement("div",{className:"ws-cacs-mark",style:{"--x":cacsPos(CACS_EXEMPLO)+"%"}},React.createElement("span",null,"Caso da galeria \xB7 ",CACS_EXEMPLO)),React.createElement("div",{className:"ws-cacs-legend"},CACS_FAIXAS.map(a=>React.createElement("span",{key:a.faixa},React.createElement("b",null,a.faixa),a.nome)))),React.createElement("p",{className:"ws-chart-nota"},"Escore zero se associa a risco muito baixo de eventos coronarianos; valores mais altos reclassificam o paciente para cima \u2014 o tema do segundo bloco do workshop.")),React.createElement("div",{className:"ws-chart reveal"},React.createElement("h3",null,"TC \xD7 RM card\xEDaca"),React.createElement("p",{className:"ws-chart-sub"},"For\xE7a relativa de cada m\xE9todo \u2014 compara\xE7\xE3o did\xE1tica simplificada"),React.createElement("table",{className:"ws-mat"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",{scope:"col"},"Aplica\xE7\xE3o"),React.createElement("th",{scope:"col"},"TC"),React.createElement("th",{scope:"col"},"RM"))),React.createElement("tbody",null,METODOS.map(([a,s,o])=>React.createElement("tr",{key:a},React.createElement("th",{scope:"row"},a),[s,o].map((i,t)=>React.createElement("td",{key:t,"aria-label":i+" de 3"},React.createElement("span",{className:"ws-dots"},[1,2,3].map(r=>React.createElement("i",{key:r,className:r<=i?"on":""}))))))))))))),React.createElement("section",{className:"ws-final"},React.createElement("div",{className:"container ws-final-in"},React.createElement("p",{className:"ws-pill"},EVENTO.dia," \xB7 ",EVENTO.dataCurta),React.createElement("h2",null,"Esperamos por voc\xEA."),React.createElement("p",{className:"ws-lead"},"Confirme sua presen\xE7a pelo WhatsApp \u2014 a mensagem j\xE1 vai pronta, \xE9 s\xF3 enviar."),React.createElement("div",{className:"ws-ctas ws-ctas-c"},React.createElement("a",{className:"ws-btn",href:WS_RSVP,target:"_blank",rel:"noopener"},React.createElement(WhatsAppMark,{size:22})," Confirmar presen\xE7a"),React.createElement("a",{className:"ws-link",href:WS_MAPS,target:"_blank",rel:"noopener"},"Como chegar ",React.createElement(Icon,{name:"arrow-up-right",size:18})))))),React.createElement(WorkshopStyles,null))}function Ecg(){return React.createElement("svg",{className:"ws-ecg",viewBox:"0 0 1200 60",preserveAspectRatio:"none","aria-hidden":"true"},React.createElement("path",{d:"M0 30H520l14-18 16 40 18-56 16 52 12-18H1200",fill:"none",stroke:"currentColor",strokeWidth:"2"}))}function WorkshopStyles(){return React.createElement("style",null,`
      .ws { --navy: var(--ms-blue-900); --ink: #e8f0f5; }
      .ws h2 { font-size: clamp(28px, 3.4vw, 40px); letter-spacing: -0.02em; }

      .ws-hero {
        position: relative; overflow: hidden; color: var(--ink);
        background:
          radial-gradient(60% 70% at 85% 30%, rgba(77,133,164,0.35), transparent 70%),
          radial-gradient(50% 60% at 0% 100%, rgba(126,195,101,0.14), transparent 70%),
          var(--navy);
        padding: 72px 0 96px;
      }
      .ws-hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 64px; align-items: center; }
      .ws-pill {
        display: inline-block; margin: 0 0 22px; padding: 7px 16px; border-radius: 999px;
        font-size: 12px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase;
        color: var(--ms-green-300); border: 1px solid rgba(126,195,101,0.45); background: rgba(126,195,101,0.08);
      }
      .ws-h1 {
        color: #fff; font-weight: 900; line-height: 1.02; letter-spacing: -0.03em;
        font-size: clamp(44px, 6.4vw, 84px); margin: 0 0 24px;
      }
      .ws-ed {
        display: block; font-size: 0.36em; font-weight: 700; letter-spacing: 0.02em;
        color: var(--ms-green-400); margin-bottom: 10px;
      }
      .ws-lead { font-size: 19px; line-height: 1.65; color: rgba(232,240,245,0.86); max-width: 560px; margin: 0 0 32px; }

      .ws-speaker {
        display: flex; align-items: center; gap: 18px; max-width: 560px; margin: 0 0 28px;
        padding: 14px 22px 14px 14px; border-radius: 20px; text-decoration: none; color: inherit;
        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
        transition: background var(--dur-base) var(--ease-out);
      }
      .ws-speaker:hover { background: rgba(255,255,255,0.09); text-decoration: none; color: inherit; }
      .ws-speaker-foto {
        flex: none; width: 76px; height: 76px; border-radius: 50%;
        background: #e9eef3 no-repeat 50% 16% / 220% auto;
        box-shadow: 0 0 0 3px var(--ms-green-500);
      }
      .ws-speaker small {
        display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.16em;
        text-transform: uppercase; color: var(--ms-green-400);
      }
      .ws-speaker strong { display: block; color: #fff; font-size: 19px; margin: 2px 0 3px; }
      .ws-speaker span span { display: block; font-size: 14px; line-height: 1.45; color: rgba(232,240,245,0.75); }

      .ws-bio { display: grid; grid-template-columns: 0.75fr 1.25fr; gap: 64px; align-items: center; }
      .ws-bio-foto {
        display: block; width: 100%; height: auto; border-radius: 24px;
        background: #e9eef3; box-shadow: var(--sh-lg);
      }
      .ws-bio h2 { margin: 10px 0 24px; }
      .ws-cv { list-style: none; margin: 0; padding: 0; }
      .ws-cv li {
        display: flex; gap: 14px; align-items: flex-start; padding: 14px 0;
        border-bottom: 1px solid var(--border-subtle); font-size: 17px; color: var(--fg-default);
      }
      .ws-cv li:last-child { border-bottom: 0; }
      .ws-cv svg { flex: none; color: var(--ms-green-600); margin-top: 1px; }

      .ws-info {
        display: grid; grid-template-columns: auto 1fr; margin-bottom: 36px;
        border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12);
      }
      .ws-info-item { display: flex; gap: 14px; align-items: flex-start; padding: 18px 24px 18px 0; color: var(--ms-green-400); }
      .ws-info-item + .ws-info-item { padding-left: 24px; border-left: 1px solid rgba(255,255,255,0.12); }
      .ws-info-item strong { display: block; color: #fff; font-size: 18px; }
      .ws-info-item small { color: rgba(232,240,245,0.7); font-size: 14px; }

      .ws-ctas { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 28px; }
      .ws-ctas-c { justify-content: center; }
      .ws-btn {
        display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 30px;
        border-radius: 999px; background: var(--ms-green-500); color: var(--on-green);
        font-weight: 800; font-size: 17px; text-decoration: none;
        box-shadow: 0 12px 32px rgba(126,195,101,0.3);
        transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
      }
      .ws-btn:hover { color: var(--on-green); text-decoration: none; transform: translateY(-2px); box-shadow: 0 16px 40px rgba(126,195,101,0.4); }
      .ws-link { display: inline-flex; align-items: center; gap: 6px; font-weight: 700; color: #fff; min-height: 48px; }
      .ws-link:hover { color: var(--ms-green-300); }

      .ws-poster { margin: 0; justify-self: end; max-width: 400px; }
      .ws-poster figcaption {
        margin-top: 14px; text-align: center; font-size: 12px; font-weight: 800;
        letter-spacing: 0.16em; text-transform: uppercase; color: rgba(232,240,245,0.7);
      }
      .ws-poster video {
        display: block; width: 100%; height: auto; border-radius: 20px; background: #000;
        border: 1px solid rgba(255,255,255,0.14);
        box-shadow: 0 40px 80px rgba(0,0,0,0.45), 0 0 0 10px rgba(255,255,255,0.03);
      }
      .ws-ecg { position: absolute; left: 0; right: 0; bottom: 18px; width: 100%; height: 48px; color: rgba(126,195,101,0.35); }

      .ws-count {
        display: inline-block; margin: 0 0 22px 10px; padding: 7px 16px; border-radius: 999px;
        font-size: 13px; font-weight: 700; color: #fff; background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.14);
      }
      .ws-count b { color: var(--ms-green-400); font-size: 15px; }

      /* Galeria: fundo preto nas imagens, que j\xE1 s\xE3o de fundo preto \u2014 o "contain" fica sem emenda. */
      .ws-gal {
        color: var(--ink); padding: 96px 0;
        background: radial-gradient(60% 50% at 100% 0%, rgba(77,133,164,0.28), transparent 70%), #081822;
      }
      .ws-gal h2 { color: #fff; }
      .ws-gal .ws-sub { color: rgba(232,240,245,0.75); }
      .ws-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: auto; gap: 20px; }
      .ws-g-wide { grid-column: 1 / 3; }
      .ws-g-tall { grid-column: 3; grid-row: 1 / 3; }
      .ws-fig {
        margin: 0; display: flex; flex-direction: column; overflow: hidden; border-radius: 20px;
        background: #000; border: 1px solid rgba(255,255,255,0.1);
      }
      .ws-fig-img { flex: 1; min-height: 240px; display: grid; place-items: center; overflow: hidden; }
      .ws-fig-img img {
        display: block; width: 100%; height: 100%; max-height: 420px; object-fit: contain;
        transition: transform 600ms var(--ease-out);
      }
      .ws-g-tall .ws-fig-img img { max-height: 640px; }
      .ws-fig:hover .ws-fig-img img { transform: scale(1.04); }
      .ws-fig figcaption {
        padding: 18px 22px 20px; border-top: 1px solid rgba(255,255,255,0.08);
        background: linear-gradient(180deg, rgba(13,34,48,0.6), rgba(13,34,48,0.95));
      }
      .ws-fig small {
        display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.16em;
        text-transform: uppercase; color: var(--ms-green-400);
      }
      .ws-fig strong { display: block; color: #fff; font-size: 18px; margin: 4px 0 6px; }
      .ws-fig figcaption > span { display: block; font-size: 14px; line-height: 1.5; color: rgba(232,240,245,0.75); }
      .ws-fig figcaption a { display: inline-block; margin-top: 10px; font-size: 12px; color: rgba(232,240,245,0.5); }
      .ws-fig figcaption a:hover { color: var(--ms-green-300); }
      .ws-nota { margin: 24px 0 0; font-size: 13px; color: rgba(232,240,245,0.55); }

      /* Gr\xE1ficos */
      .ws-charts { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .ws-chart {
        background: #fff; border: 1px solid var(--border-subtle); border-radius: 20px;
        padding: 32px; box-shadow: var(--sh-sm);
      }
      .ws-chart h3 { font-size: 20px; margin: 0 0 4px; }
      .ws-chart-sub { font-size: 14px; color: var(--fg-muted); margin: 0 0 28px; }
      .ws-chart-nota { margin: 28px 0 0; padding-top: 20px; border-top: 1px solid var(--border-subtle); font-size: 15px; color: var(--fg-muted); }

      .ws-cacs { position: relative; padding-top: 52px; }
      .ws-cacs-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; height: 18px; }
      .ws-cacs-bar span:nth-child(1) { background: var(--ms-green-500); border-radius: 999px 0 0 999px; }
      .ws-cacs-bar span:nth-child(2) { background: #e3c84a; }
      .ws-cacs-bar span:nth-child(3) { background: #e8923b; }
      .ws-cacs-bar span:nth-child(4) { background: var(--ms-danger); border-radius: 0 999px 999px 0; }
      .ws-cacs-mark {
        position: absolute; top: 0; height: 70px; left: 0; width: 2px; background: var(--ms-blue-800);
        transition: left 1.2s var(--ease-out) 0.2s;
      }
      .reveal.in .ws-cacs-mark { left: var(--x); }
      .ws-cacs-mark::after {
        content: ""; position: absolute; top: 54px; left: -6px; width: 14px; height: 14px;
        border-radius: 50%; background: #fff; border: 3px solid var(--ms-blue-800);
      }
      .ws-cacs-mark span {
        position: absolute; top: 0; left: 50%; transform: translateX(-50%); white-space: nowrap;
        font-size: 12px; font-weight: 800; color: #fff; background: var(--ms-blue-800);
        padding: 5px 10px; border-radius: 8px;
      }
      .ws-cacs-legend { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-top: 14px; }
      .ws-cacs-legend span { font-size: 13px; color: var(--fg-muted); text-align: center; }
      .ws-cacs-legend b { display: block; font-size: 16px; color: var(--fg-strong); }

      .ws-mat { width: 100%; border-collapse: collapse; }
      .ws-mat th, .ws-mat td { padding: 11px 0; border-bottom: 1px solid var(--border-subtle); text-align: left; }
      .ws-mat tr:last-child th, .ws-mat tr:last-child td { border-bottom: 0; }
      .ws-mat thead th {
        font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--fg-faint);
      }
      .ws-mat thead th + th { color: var(--ms-blue-500); text-align: center; width: 76px; }
      .ws-mat tbody th { font-size: 15px; font-weight: 600; color: var(--fg-default); padding-right: 12px; }
      .ws-mat td { text-align: center; }
      .ws-dots { display: inline-flex; gap: 5px; }
      .ws-dots i { width: 12px; height: 12px; border-radius: 50%; background: var(--ms-neutral-200); }
      .ws-dots i.on { background: var(--ms-blue-500); transform: scale(0); transition: transform 400ms var(--ease-out); }
      .reveal.in .ws-dots i.on { transform: scale(1); }
      .reveal.in tr:nth-child(2) .ws-dots i.on { transition-delay: 80ms; }
      .reveal.in tr:nth-child(3) .ws-dots i.on { transition-delay: 160ms; }
      .reveal.in tr:nth-child(4) .ws-dots i.on { transition-delay: 240ms; }
      .reveal.in tr:nth-child(5) .ws-dots i.on { transition-delay: 320ms; }
      .ws-mat td + td .ws-dots i.on { background: var(--ms-green-600); }

      .ws-sec { padding: 96px 0; background: var(--bg-page); }
      .ws-sec-alt { background: #fff; }
      .ws-head { max-width: 680px; margin-bottom: 48px; }
      .ws-head h2 { margin: 10px 0 16px; }
      .ws-sub { font-size: 18px; color: var(--fg-muted); }

      .ws-pilares { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .ws-card {
        background: #fff; border: 1px solid var(--border-subtle); border-radius: 20px; padding: 32px;
        box-shadow: var(--sh-sm);
      }
      .ws-card h3 { font-size: 20px; margin: 20px 0 10px; }
      .ws-card p { color: var(--fg-muted); margin: 0; }
      .ws-card-ico {
        display: inline-grid; place-items: center; width: 52px; height: 52px; border-radius: 14px;
        background: var(--ms-blue-50); color: var(--ms-blue-500);
      }

      .ws-temas-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 64px; align-items: start; }
      .ws-temas { list-style: none; margin: 0; padding: 0; }
      .ws-temas li { display: flex; gap: 24px; padding: 26px 0; border-bottom: 1px solid var(--border-subtle); }
      .ws-temas li:first-child { padding-top: 0; }
      .ws-temas strong { display: block; color: var(--fg-strong); font-size: 19px; margin-bottom: 4px; }
      .ws-temas li span span { color: var(--fg-muted); }
      .ws-num { font-size: 15px; font-weight: 900; color: var(--ms-green-700); letter-spacing: 0.08em; padding-top: 3px; }

      .ws-final {
        color: var(--ink); text-align: center; padding: 104px 0;
        background: radial-gradient(70% 90% at 50% 0%, rgba(77,133,164,0.35), transparent 70%), var(--navy);
      }
      .ws-final h2 { color: #fff; margin-bottom: 16px; }
      .ws-final-in { max-width: 680px; }
      .ws-final .ws-lead { margin: 0 auto 32px; }

      @media (max-width: 900px) {
        .ws-hero { padding: 48px 0 80px; }
        .ws-hero-grid, .ws-temas-grid, .ws-bio { grid-template-columns: 1fr; gap: 40px; }
        .ws-bio-foto { max-width: 360px; margin: 0 auto; }
        .ws-poster { justify-self: center; max-width: 340px; }
        .ws-pilares, .ws-charts { grid-template-columns: 1fr; }
        .ws-grid { grid-template-columns: 1fr 1fr; }
        .ws-g-wide { grid-column: 1 / -1; }
        .ws-g-tall { grid-column: auto; grid-row: auto; }
        .ws-gal { padding: 64px 0; }
        .ws-chart { padding: 24px; }
        .ws-sec, .ws-final { padding: 64px 0; }
        .ws-head { margin-bottom: 32px; }
      }
      @media (max-width: 560px) {
        .ws-info { grid-template-columns: 1fr; }
        .ws-info-item { padding-right: 0; }
        .ws-info-item + .ws-info-item { padding-left: 0; border-left: 0; border-top: 1px solid rgba(255,255,255,0.12); }
        .ws-btn { width: 100%; justify-content: center; }
        .ws-grid { grid-template-columns: 1fr; }
        .ws-count { margin-left: 0; }
        .ws-cacs-legend span { font-size: 11px; }
        .ws-cacs-legend b { font-size: 13px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .ws-btn, .ws-fig-img img, .ws-cacs-mark, .ws-dots i.on { transition: none !important; }
      }
    `)}renderPage(React.createElement(WorkshopPage,null));
