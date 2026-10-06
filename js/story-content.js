// story-content.js - Conteúdo da página oculta "Além do currículo" (PT / EN)
// Página acessível só pela URL /alem-do-curriculo/ (sem links no site, noindex).

const STORY_BIRTH = '2001-04-08';
const STORY_AGE = (() => {
  const t = new Date(), b = new Date(STORY_BIRTH);
  let a = t.getFullYear() - b.getFullYear();
  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;
  return a;
})();

// Certificações principais (dados do LinkedIn)
const STORY_CERTS = [
  { icon: 'fa-solid fa-robot', name: 'Claude Code in Action', issuer: 'Anthropic', date: { pt: 'Jul 2026', en: 'Jul 2026' }, id: 'okwmh7gcyssd' },
  { icon: 'fa-brands fa-aws', name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: { pt: 'Jun 2026', en: 'Jun 2026' }, id: '206eb7493f17414497b4ebc09108727a' },
  { icon: 'fa-brands fa-salesforce', name: 'Salesforce Certified JavaScript Developer', issuer: 'Salesforce', date: { pt: 'Abr 2026', en: 'Apr 2026' }, id: '7621296' },
  { icon: 'fa-solid fa-diagram-project', name: 'n8n Course for Beginners', issuer: 'n8n', date: { pt: 'Abr 2026', en: 'Apr 2026' } },
  { icon: 'fa-brands fa-salesforce', name: 'Salesforce Certified AI Associate', issuer: 'Salesforce', date: { pt: 'Out 2024', en: 'Oct 2024' }, id: '282904' },
  { icon: 'fa-solid fa-building-columns', name: 'Practitioner Foundation', issuer: 'Itaú Unibanco', date: { pt: 'Abr 2023', en: 'Apr 2023' }, id: '462762012' },
  { icon: 'fa-solid fa-chart-line', name: 'Python and Statistics for Financial Analysis', issuer: 'HKUST', date: { pt: 'Abr 2023', en: 'Apr 2023' } },
  { icon: 'fa-brands fa-python', name: 'Introdução à Ciência da Computação com Python (Partes 1 e 2)', issuer: 'IME-USP', date: { pt: '2021', en: '2021' } }
];

const STORY = {
  pt: {
    htmlLang: 'pt-BR',
    title: 'Além do currículo — André Miyazawa',
    back: 'Voltar ao portfólio',
    hero: {
      eyebrow: '// além do currículo',
      title: 'A história por trás<br /><span class="gradient-text">do código</span>',
      lead: `O portfólio mostra <b>o que</b> eu faço. Esta página conta <b>como cheguei até aqui</b>: os desvios, as escolhas, o que me move e algumas curiosidades que não cabem num currículo. Se você chegou aqui, é porque quis saber mais. Obrigado por isso.`,
      read: 'min de leitura'
    },
    numbers: [
      { value: STORY_AGE, label: 'anos de idade' },
      { value: 8, label: 'certificações e cursos em destaque' },
      { value: 2, label: 'reconhecimentos no Itaú' },
      { value: 21, label: 'repositórios públicos', github: true }
    ],
    chaptersHead: { eyebrow: '// a jornada', title: 'Capítulo a capítulo' },
    chapters: [
      {
        year: '2013 — 2017', icon: 'fa-solid fa-language', title: 'O inglês veio antes do código',
        text: [
          'Antes de escrever qualquer linha de código, passei quatro anos na <b>Cultura Inglesa</b>. Entrei no nível Intermediate e saí no Upper Advanced.',
          'Na época, não tinha como saber o quanto isso ia pesar depois: documentação, cursos, comunidades e boa parte do que eu aprendo até hoje é em inglês.'
        ]
      },
      {
        year: '2019', icon: 'fa-solid fa-pen-to-square', title: 'Do outro lado da prova',
        text: [
          'No ano do vestibular, fui bolsista no <b>Elite Pré-Vestibular</b>, em Campinas. Além de estudar, eu <b>corrigia questões, simulados e provas</b> com professores e plantonistas, e ajudava a avaliar a qualidade de novas questões.',
          'Foi meu primeiro "trabalho" de verdade, e me ensinou cedo uma coisa que uso até hoje: olhar para um problema do ponto de vista de quem vai receber a solução.'
        ]
      },
      {
        year: '2020', icon: 'fa-solid fa-building-columns', title: 'USP e um começo inesperado: design',
        text: [
          'Entrei em <b>Sistemas de Informação na USP</b>. Curiosamente, meu primeiro papel em tecnologia não foi como programador, e sim como <b>designer</b>: como voluntário no <b>DASI</b> (o diretório acadêmico), criei identidades visuais, artes e cartazes de eventos no Photoshop e no Canva.',
          'O design ficou comigo. Até hoje me importo muito com como as coisas parecem e com como as pessoas as usam, inclusive neste site.'
        ]
      },
      {
        year: '2021 — 2022', icon: 'fa-solid fa-terminal', title: 'Aprendendo por baixo do capô',
        text: [
          'Foi o ano de mergulhar nos fundamentos. Fiz os cursos de <b>Introdução à Ciência da Computação com Python</b> do IME-USP e, nas disciplinas, construí projetos que até hoje acho divertidos: um <b>Pong em Java</b>, desenhos de <b>fractais</b>, um <b>chat entre terminais escrito só em Bash</b> e um programa que calcula <b>números primos em Assembly x86</b>.',
          'Nada disso vai para produção, mas foi assim que eu entendi de verdade como as coisas funcionam por dentro.'
        ]
      },
      {
        year: '2022', icon: 'fa-solid fa-flask', title: 'Inmetro: o primeiro software de verdade',
        text: [
          'Com uma <b>bolsa de pesquisa no Inmetro</b> (remota, ligada ao Rio de Janeiro), construí meu primeiro sistema completo: uma aplicação em <b>R Shiny</b> que automatiza análises estatísticas e de <b>machine learning</b>, com importação de dados, gráficos 2D/3D e relatórios.',
          'Fiz praticamente <b>100% do back-end e do front-end</b>, e ainda escrevi scripts de <b>web scraping com Selenium</b> para analisar o que se falava do Inmetro nas redes sociais. Foi onde eu percebi que gostava mais de <b>construir</b> as ferramentas do que só de usá-las.'
        ]
      },
      {
        year: 'Dez 2022', icon: 'fa-solid fa-chart-pie', title: 'Itaú BBA: risco de crédito',
        text: [
          'Meu primeiro estágio corporativo foi em <b>Risco de Crédito no Itaú BBA</b>: modelagem e monitoramento de parâmetros de risco, mitigação de <b>LGD</b> em operações garantidas e acompanhamento de esteiras de provisão (<b>BRGAAP</b>, <b>IFRS 9</b>, câmbio), com Python, SQL, SAS e VBA.',
          'Aprendi a linguagem do negócio financeiro e a importância de números confiáveis. Em paralelo, fiz uma maratona de cursos: Azure ML, Streamlit, JavaScript moderno, HTML5 (Michigan), Python para finanças (HKUST) e a certificação interna <b>Practitioner</b> do Itaú.'
        ]
      },
      {
        year: 'Jun 2023', icon: 'fa-brands fa-salesforce', title: 'A virada: de dados para engenharia',
        text: [
          'Entrei na <b>Rede</b> como estagiário desenvolvedor <b>Salesforce</b>. Foi a mudança mais importante da minha carreira: saí da análise de dados para a engenharia de software.',
          'Trabalhei no novo fluxo de credenciamento de Pessoa Física, criei um sistema de monitoramento de logs com envio para a <b>AWS</b> e ajudei a construir <b>APIs em Go</b>. Em 2024, a jornada em que eu trabalhava venceu o prêmio interno <b>"Time de Fenômenos"</b>, e conquistei a certificação <b>Salesforce AI Associate</b>.'
        ]
      },
      {
        year: 'Dez 2024', icon: 'fa-solid fa-graduation-cap', title: 'Formatura e efetivação',
        text: [
          'Um mês marcante: concluí o bacharelado em <b>Sistemas de Informação pela USP</b> e fui efetivado na Rede como <b>Engenheiro de Software Júnior</b>. Ao longo do curso, busquei optativas e atividades de extensão para complementar a formação, incluindo administração, economia e marketing.',
          'Como engenheiro, liderei a refatoração da jornada de credenciamento de clientes, construí um painel de gestão tática em LWC e passei a atuar também na arquitetura de <b>microserviços em AWS</b> com Go e Python.'
        ]
      },
      {
        year: '2026', icon: 'fa-solid fa-trophy', title: 'Ano de consolidar',
        text: [
          'Um ano de estudo intenso: <b>Salesforce JavaScript Developer</b> (abril), <b>n8n</b> para automação de workflows (abril), <b>AWS Cloud Practitioner</b> (junho) e <b>Claude Code in Action</b>, da Anthropic (julho). Uso assistentes de código com IA no dia a dia, e o curso me ajudou a usá-los com mais critério e eficiência.',
          'E fui <b>reconhecido com mérito no Itaú Unibanco</b>, um resultado que, para mim, é antes de tudo do time.'
        ]
      }
    ],
    workHead: { eyebrow: '// como eu trabalho', title: 'O que guia meu trabalho' },
    work: [
      { icon: 'fa-solid fa-book-open-reader', title: 'Autodidata por natureza', text: 'Da Cultura Inglesa aos cursos de 2026, aprender sozinho sempre foi meu jeito de evoluir. Colegas costumam destacar isso.' },
      { icon: 'fa-solid fa-chart-column', title: 'Decisões guiadas por dados', text: 'Comecei em estatística e risco de crédito. Até hoje prefiro medir antes de opinar.' },
      { icon: 'fa-solid fa-palette', title: 'Olhar de quem usa', text: 'Comecei como designer. Uma boa solução precisa funcionar, e também precisa ser agradável de usar.' },
      { icon: 'fa-solid fa-wand-magic-sparkles', title: 'IA como ferramenta', text: 'Uso assistentes de código no dia a dia para entregar mais rápido, sem abrir mão de revisão e qualidade.' }
    ],
    certsHead: { eyebrow: '// certificações', title: 'Certificações e cursos', id: 'ID' },
    quotesHead: { eyebrow: '// recomendações', title: 'O que dizem sobre mim', source: 'Recomendação no LinkedIn' },
    quotes: [
      {
        text: 'Tive a oportunidade de trabalhar com o André por mais de um ano e acompanhar de perto seu desenvolvimento técnico e interpessoal. Ele se destaca por sua <b>criatividade e curiosidade em explorar novas soluções</b>, além de demonstrar uma <b>postura autodidata</b> que facilita sua adaptação a diferentes desafios. Sua evolução nesse período foi notável, e acredito que tem muito a contribuir em qualquer equipe que integrar.',
        name: 'Philipp Hahmann', role: 'Technical Consultant na Salesforce', date: 'Dez 2024'
      },
      {
        text: 'André é um desenvolvedor incrível, <b>dedicado</b>, não mede esforços para evoluir os projetos que participa, contribui com o time, muito estudioso, <b>comprometido e responsável com prazos e qualidade</b> do trabalho. Continue se aprimorando e se desenvolvendo, sem dúvidas você tem um caminho sensacional pela frente.',
        name: 'Shayane Racickas', role: 'Senior Product Designer no Itaú', date: 'Dez 2024'
      }
    ],
    funHead: { eyebrow: '// curiosidades', title: 'Coisas que não estão no currículo' },
    fun: [
      { icon: 'fa-solid fa-feather', title: 'Origami', text: 'Amo fazer origamis: paciência, geometria e precisão em uma folha de papel.' },
      { icon: 'fa-solid fa-mug-hot', title: 'O café do logo', text: 'O ícone deste site é uma xícara de café ☕, a parceira clássica de quem programa.' },
      { icon: 'fa-solid fa-dragon', title: 'Anime e mangá', text: 'Gosto muito de assistir animes, séries e filmes, e de ler mangá.' },
      { icon: 'fa-solid fa-gamepad', title: 'Gamer', text: 'Jogo bastante, tanto no computador quanto no celular.' },
      { icon: 'fa-solid fa-atom', title: 'Curioso sem motivo', text: 'Estudo física, música, arte e design por pura curiosidade. Nem tudo precisa ser útil profissionalmente para valer a pena.' },
      { icon: 'fa-solid fa-microchip', title: 'Assembly por diversão', text: 'Já calculei números primos em Assembly x86 e escrevi um chat inteiro em Bash.' },
      { icon: 'fa-brands fa-youtube', title: 'YouTube infinito', text: 'Vídeos científicos, música, jogos. Meu histórico do YouTube é um mapa dos meus interesses.' },
      { icon: 'fa-solid fa-code', title: 'Sem framework', text: 'Este site é HTML, CSS e JavaScript puros: sem React, sem build, sem dependências.' }
    ],
    cta: {
      title: 'Gostou da história?',
      text: 'Se quiser conversar sobre tecnologia, oportunidades ou origami, é só chamar.',
      email: 'Enviar e-mail',
      back: 'Ver portfólio'
    },
    footer: 'Você encontrou a página secreta. ✨'
  },

  en: {
    htmlLang: 'en',
    title: 'Beyond the résumé — André Miyazawa',
    back: 'Back to portfolio',
    hero: {
      eyebrow: '// beyond the résumé',
      title: 'The story behind<br /><span class="gradient-text">the code</span>',
      lead: `My portfolio shows <b>what</b> I do. This page tells <b>how I got here</b>: the detours, the choices, what drives me and a few fun facts that don't fit on a résumé. If you found this page, you wanted to know more. Thank you for that.`,
      read: 'min read'
    },
    numbers: [
      { value: STORY_AGE, label: 'years old' },
      { value: 8, label: 'featured certifications & courses' },
      { value: 2, label: 'recognitions at Itaú' },
      { value: 21, label: 'public repositories', github: true }
    ],
    chaptersHead: { eyebrow: '// the journey', title: 'Chapter by chapter' },
    chapters: [
      {
        year: '2013 — 2017', icon: 'fa-solid fa-language', title: 'English came before code',
        text: [
          'Before writing a single line of code, I spent four years at <b>Cultura Inglesa</b>, going from Intermediate to Upper Advanced.',
          "Back then I had no idea how much it would matter: documentation, courses, communities and most of what I learn today is in English."
        ]
      },
      {
        year: '2019', icon: 'fa-solid fa-pen-to-square', title: 'On the other side of the exam',
        text: [
          'In my university entrance exam year, I had a scholarship at <b>Elite Pré-Vestibular</b> in Campinas. Besides studying, I <b>graded questions, mock tests and exams</b> with teachers and tutors, and helped assess the quality of new questions.',
          "It was my first real \"job\", and it taught me early something I still use: look at a problem from the point of view of whoever receives the solution."
        ]
      },
      {
        year: '2020', icon: 'fa-solid fa-building-columns', title: 'USP and an unexpected start: design',
        text: [
          'I started <b>Information Systems at USP</b>. Funny enough, my first role in tech wasn\'t as a developer but as a <b>designer</b>: volunteering at <b>DASI</b> (the student association), I created visual identities, artwork and event posters in Photoshop and Canva.',
          'Design stayed with me. I still care a lot about how things look and feel to use, this site included.'
        ]
      },
      {
        year: '2021 — 2022', icon: 'fa-solid fa-terminal', title: 'Learning under the hood',
        text: [
          'The year I dove into fundamentals. I took IME-USP\'s <b>Introduction to Computer Science with Python</b> courses and, in class, built projects I still find fun: a <b>Pong game in Java</b>, <b>fractal</b> drawings, a <b>terminal chat written only in Bash</b> and a program that computes <b>prime numbers in x86 Assembly</b>.',
          "None of it goes to production, but that's how I truly understood how things work inside."
        ]
      },
      {
        year: '2022', icon: 'fa-solid fa-flask', title: 'Inmetro: my first real software',
        text: [
          'With a <b>research grant at Inmetro</b> (remote, based in Rio de Janeiro), I built my first complete system: an <b>R Shiny</b> app that automates statistical and <b>machine learning</b> analyses, with data import, 2D/3D charts and reports.',
          'I built practically <b>100% of the back end and front end</b>, and also wrote <b>Selenium web scraping</b> scripts to analyze what people said about Inmetro on social media. That\'s where I realized I liked <b>building</b> tools more than just using them.'
        ]
      },
      {
        year: 'Dec 2022', icon: 'fa-solid fa-chart-pie', title: 'Itaú BBA: credit risk',
        text: [
          'My first corporate internship was in <b>Credit Risk at Itaú BBA</b>: modeling and monitoring risk parameters, <b>LGD</b> mitigation for secured operations and tracking provisioning pipelines (<b>BRGAAP</b>, <b>IFRS 9</b>, FX), with Python, SQL, SAS and VBA.',
          "I learned the language of finance and the value of reliable numbers. Meanwhile, I binged courses: Azure ML, Streamlit, modern JavaScript, HTML5 (Michigan), Python for finance (HKUST) and Itaú's internal <b>Practitioner</b> certification."
        ]
      },
      {
        year: 'Jun 2023', icon: 'fa-brands fa-salesforce', title: 'The turn: from data to engineering',
        text: [
          'I joined <b>Rede</b> as a <b>Salesforce</b> developer intern. It was the most important shift in my career: from data analysis to software engineering.',
          'I worked on the new onboarding flow for individual customers, built a log monitoring system feeding <b>AWS</b> and helped create <b>Go APIs</b>. In 2024, the journey I worked on won the internal <b>"Team of Phenomena"</b> award, and I earned the <b>Salesforce AI Associate</b> certification.'
        ]
      },
      {
        year: 'Dec 2024', icon: 'fa-solid fa-graduation-cap', title: 'Graduation and a full-time role',
        text: [
          'A milestone month: I graduated in <b>Information Systems from USP</b> and was hired full-time at Rede as a <b>Junior Software Engineer</b>. Throughout the degree, I sought electives and extension activities to round out my education, including business administration, economics and marketing.',
          'As an engineer, I led the refactoring of the client onboarding journey, built a tactical management dashboard in LWC and started working on <b>AWS microservices</b> architecture with Go and Python.'
        ]
      },
      {
        year: '2026', icon: 'fa-solid fa-trophy', title: 'A year to consolidate',
        text: [
          'A year of intense study: <b>Salesforce JavaScript Developer</b> (April), <b>n8n</b> for workflow automation (April), <b>AWS Cloud Practitioner</b> (June) and Anthropic\'s <b>Claude Code in Action</b> (July). I use AI coding assistants every day, and the course helped me use them more deliberately and efficiently.',
          'I was also <b>recognized for merit at Itaú Unibanco</b>, a result that, to me, belongs first of all to the team.'
        ]
      }
    ],
    workHead: { eyebrow: '// how I work', title: 'What guides my work' },
    work: [
      { icon: 'fa-solid fa-book-open-reader', title: 'Self-taught by nature', text: 'From Cultura Inglesa to the 2026 courses, learning on my own has always been how I grow. Colleagues often point this out.' },
      { icon: 'fa-solid fa-chart-column', title: 'Data-driven decisions', text: 'I started in statistics and credit risk. I still prefer to measure before I opine.' },
      { icon: 'fa-solid fa-palette', title: "A user's eye", text: 'I started as a designer. A good solution has to work, and it also has to be pleasant to use.' },
      { icon: 'fa-solid fa-wand-magic-sparkles', title: 'AI as a tool', text: 'I use coding assistants every day to ship faster, without giving up review and quality.' }
    ],
    certsHead: { eyebrow: '// certifications', title: 'Certifications & courses', id: 'ID' },
    quotesHead: { eyebrow: '// recommendations', title: 'What people say', source: 'LinkedIn recommendation (translated)' },
    quotes: [
      {
        text: "I had the opportunity to work with André for over a year and closely follow his technical and interpersonal growth. He stands out for his <b>creativity and curiosity in exploring new solutions</b>, and for a <b>self-taught attitude</b> that makes it easy for him to adapt to different challenges. His growth in this period was remarkable, and I believe he has a lot to contribute to any team he joins.",
        name: 'Philipp Hahmann', role: 'Technical Consultant at Salesforce', date: 'Dec 2024'
      },
      {
        text: "André is an amazing developer, <b>dedicated</b>, goes above and beyond to improve the projects he's part of, contributes to the team, very studious, <b>committed and responsible with deadlines and quality</b>. Keep growing, you undoubtedly have an amazing path ahead.",
        name: 'Shayane Racickas', role: 'Senior Product Designer at Itaú', date: 'Dec 2024'
      }
    ],
    funHead: { eyebrow: '// fun facts', title: "Things that aren't on my résumé" },
    fun: [
      { icon: 'fa-solid fa-feather', title: 'Origami', text: 'I love folding origami: patience, geometry and precision in a single sheet of paper.' },
      { icon: 'fa-solid fa-mug-hot', title: 'The coffee logo', text: "This site's icon is a coffee cup ☕, every developer's classic sidekick." },
      { icon: 'fa-solid fa-dragon', title: 'Anime & manga', text: 'I really enjoy watching anime, series and movies, and reading manga.' },
      { icon: 'fa-solid fa-gamepad', title: 'Gamer', text: 'I play a lot, both on PC and on mobile.' },
      { icon: 'fa-solid fa-atom', title: 'Curious for no reason', text: "I study physics, music, art and design just out of curiosity. Not everything has to be professionally useful to be worth it." },
      { icon: 'fa-solid fa-microchip', title: 'Assembly for fun', text: "I've computed prime numbers in x86 Assembly and written an entire chat in Bash." },
      { icon: 'fa-brands fa-youtube', title: 'Endless YouTube', text: 'Science videos, music, games. My YouTube history is a map of my interests.' },
      { icon: 'fa-solid fa-code', title: 'No framework', text: 'This site is plain HTML, CSS and JavaScript: no React, no build step, no dependencies.' }
    ],
    cta: {
      title: 'Enjoyed the story?',
      text: 'If you want to talk about tech, opportunities or origami, just reach out.',
      email: 'Send an email',
      back: 'View portfolio'
    },
    footer: 'You found the secret page. ✨'
  }
};
