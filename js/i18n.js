// i18n.js - Todo o conteúdo do site (PT / EN)
// Para editar textos, experiências, projetos ou habilidades, altere apenas este arquivo.

const BIRTH_DATE = '2001-04-08';
const CAREER_START = '2022-04-01';

function yearsSince(dateStr) {
  const today = new Date();
  const start = new Date(dateStr);
  let years = today.getFullYear() - start.getFullYear();
  const m = today.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < start.getDate())) years--;
  return years;
}

const AGE = yearsSince(BIRTH_DATE);
const YEARS_EXP = yearsSince(CAREER_START);

// PDFs hospedados no próprio site: para atualizar, substitua os arquivos em assets/cv/
const CV_LINKS = {
  pt: 'assets/cv/andre-miyazawa-cv-pt.pdf',
  en: 'assets/cv/andre-miyazawa-cv-en.pdf'
};

// Itens do carrossel de tecnologias (independe de idioma)
const TECH_MARQUEE = [
  { icon: 'fa-brands fa-salesforce', name: 'Salesforce' },
  { icon: 'fa-brands fa-aws', name: 'AWS' },
  { icon: 'fa-brands fa-golang', name: 'Go' },
  { icon: 'fa-brands fa-python', name: 'Python' },
  { icon: 'fa-brands fa-java', name: 'Java' },
  { icon: 'fa-brands fa-js', name: 'JavaScript' },
  { icon: 'fa-brands fa-react', name: 'React' },
  { icon: 'fa-brands fa-node-js', name: 'Node.js' },
  { icon: 'fa-brands fa-docker', name: 'Docker' },
  { icon: 'fa-solid fa-dharmachakra', name: 'Kubernetes' },
  { icon: 'fa-solid fa-database', name: 'PostgreSQL' },
  { icon: 'fa-brands fa-r-project', name: 'R' },
  { icon: 'fa-brands fa-git-alt', name: 'Git' },
  { icon: 'fa-solid fa-chart-line', name: 'Grafana' }
];

const SKILL_ICONS = ['fa-solid fa-code', 'fa-brands fa-salesforce', 'fa-solid fa-cloud', 'fa-solid fa-database', 'fa-solid fa-layer-group', 'fa-solid fa-screwdriver-wrench'];

const SKILL_ITEMS = [
  ['Python', 'Go', 'Java', 'JavaScript', 'SQL', 'R'],
  ['Apex', 'LWC', 'Flow', 'SOQL / SOSL', 'Aura', 'Visualforce'],
  ['AWS (EC2, Lambda, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  ['PostgreSQL', 'DynamoDB', 'MySQL', 'MongoDB'],
  ['Node.js', 'React', 'Django', 'RShiny'],
  ['Git', 'Datadog', 'Grafana', 'Power BI', 'Excel']
];

// Projetos públicos no GitHub (github.com/andrem08)
const PROJECTS = [
  { repo: 'ShinyHealthCare', icon: 'fa-solid fa-heart-pulse', tags: ['R', 'Shiny', 'Estatística'] },
  { repo: 'InmetroAnalize', icon: 'fa-solid fa-spider', tags: ['Python', 'Selenium', 'Web Scraping'] },
  { repo: 'generatorTools', icon: 'fa-solid fa-id-card', tags: ['HTML', 'JavaScript'] },
  { repo: 'BashChat', icon: 'fa-solid fa-terminal', tags: ['Bash', 'Sockets'] },
  { repo: 'EstruturasDeDados', icon: 'fa-solid fa-sitemap', tags: ['Java', 'Algoritmos'] },
  { repo: 'x86_prime_numbers', icon: 'fa-solid fa-microchip', tags: ['Assembly x86'] }
];

// Certificações e reconhecimentos (faixa compacta na seção Formação)
const CREDENTIALS = [
  { icon: 'fa-brands fa-aws', name: 'AWS Certified Cloud Practitioner', year: '2026' },
  { icon: 'fa-brands fa-salesforce', name: 'Salesforce Certified JavaScript Developer', year: '2026' },
  { icon: 'fa-brands fa-salesforce', name: 'Salesforce Certified AI Associate', year: '2024' },
  { icon: 'fa-solid fa-robot', name: 'Claude Code in Action · Anthropic', year: '2026' }
];

// Dados de experiência compartilhados entre idiomas
const EXPERIENCE_META = {
  rede: {
    logo: 'www/redecard-logo.jpeg',
    company: 'Rede',
    badge: '#ituber',
    tools: ['Apex', 'LWC', 'Flow', 'SOQL', 'Aura', 'REST / SOAP', 'SFDX', 'Go', 'Python', 'AWS Lambda', 'S3', 'EC2', 'RDS', 'DynamoDB', 'CloudWatch', 'Docker', 'Kubernetes', 'Terraform', 'Datadog', 'Grafana']
  },
  itau: {
    logo: 'www/Itaú_Unibanco_logo.png',
    company: 'Itaú Unibanco',
    tools: ['Python', 'SQL', 'SAS', 'Teradata', 'VBA', 'Excel']
  },
  inmetro: {
    logo: 'www/inmetro_logo.png',
    company: 'Inmetro',
    tools: ['R', 'RShiny', 'Python', 'JavaScript', 'HTML / CSS', 'Selenium']
  },
  dasi: {
    logo: 'www/dasi-usp.jpeg',
    company: 'DASI USP',
    tools: ['Photoshop', 'Canva']
  },
  elite: {
    logo: 'www/elite-logo.jpg',
    company: 'Elite Pré-Vestibular'
  }
};

const LANGUAGES = {
  pt: {
    htmlLang: 'pt-BR',
    nav: { home: 'Início', experienceShort: 'Carreira', about: 'Sobre', skills: 'Habilidades', experience: 'Experiência', projects: 'Projetos', education: 'Formação', contact: 'Contato' },
    hero: {
      badge: 'Engenheiro de Software @ Rede',
      greeting: 'Olá, eu sou',
      roles: ['Engenheiro de Software', 'Desenvolvedor Salesforce', 'Back-end em Go e Python', 'Analista de Dados'],
      desc: 'Desenvolvo soluções <b>Salesforce</b> full-stack e microserviços em <b>AWS</b> com <b>Go</b> e <b>Python</b>, com base em análise de dados e formação em Sistemas de Informação pela <b>USP</b>.',
      ctaPrimary: 'Ver experiência'
    },
    stats: [
      { value: YEARS_EXP, suffix: '+', label: 'anos de experiência' },
      { value: 3, suffix: '', label: 'empresas' },
      { value: 30, suffix: '+', label: 'tecnologias' },
      { value: 2, suffix: '', label: 'idiomas' }
    ],
    about: {
      eyebrow: '// sobre mim',
      title: 'Quem sou eu',
      text: [
        `Sou <b>Engenheiro de Software</b> na <b>Rede</b> (Itaú Unibanco), onde desenvolvo soluções <b>Salesforce</b> full-stack e microserviços em <b>AWS</b> com <b>Go</b> e <b>Python</b>.`,
        'Comecei pela área de dados: modelagem de <b>risco de crédito</b> no Itaú BBA e uma aplicação de <b>machine learning</b> no Inmetro. Essa base analítica ainda orienta a forma como trabalho: decisões guiadas por dados, código testável e foco no resultado para o negócio.',
        'Na Rede, entrei como estagiário e hoje lidero iniciativas de otimização do CRM, defino boas práticas de desenvolvimento e ajudo a integrar novos membros do time.'
      ],
      facts: [
        { icon: 'fa-solid fa-location-dot', label: 'Localização', value: 'São Paulo, SP' },
        { icon: 'fa-solid fa-graduation-cap', label: 'Formação', value: 'Sistemas de Informação — USP' },
        { icon: 'fa-solid fa-language', label: 'Idiomas', value: 'Português (nativo) · Inglês (fluente)' },
        { icon: 'fa-solid fa-cake-candles', label: 'Idade', value: `${AGE} anos` },
        { icon: 'fa-solid fa-gamepad', label: 'Interesses', value: 'Origami, games, física, música e design' }
      ]
    },
    skills: {
      eyebrow: '// stack',
      title: 'Habilidades',
      sub: 'Tecnologias que uso no dia a dia, do CRM à nuvem.',
      cats: ['Linguagens', 'Salesforce', 'Cloud & DevOps', 'Bancos de Dados', 'Frameworks', 'Ferramentas']
    },
    experience: {
      eyebrow: '// trajetória',
      title: 'Experiência',
      sub: 'Da análise de dados à engenharia de software.',
      toolsLabel: 'Tecnologias',
      knowledgeLabel: 'Conhecimentos',
      readMore: 'Ver detalhes',
      readLess: 'Mostrar menos',
      moreBtn: 'Experiências anteriores',
      lessBtn: 'Ocultar experiências anteriores',
      items: {
        rede: {
          meta: 'Meios de pagamento · Grupo Itaú Unibanco',
          roles: [
            {
              title: 'Engenheiro de Software Júnior',
              date: 'Dez 2024 — atual',
              current: true,
              bullets: [
                'Liderei a <b>refatoração da jornada de credenciamento de clientes</b>, reconstruindo telas e integrações de API com <b>Apex</b>, <b>LWC</b> e <b>Flow</b>, o que reduziu o tempo de formalização e melhorou a conversão de novos clientes.',
                'Desenvolvi um <b>painel de gestão tática em LWC</b> que centraliza dados de performance (visitas e agendamentos) em gráficos e tabelas, dando aos gestores visibilidade em tempo real das metas.',
                'Desenvolvo <b>microserviços em AWS</b> com <b>Go</b> e <b>Python</b> para integrações e automação de processos de negócio.'
              ]
            },
            {
              title: 'Estagiário — Desenvolvedor Salesforce',
              date: 'Jun 2023 — Dez 2024',
              bullets: [
                'Desenvolvi o novo <b>fluxo de credenciamento para Pessoa Física</b>.',
                'Criei um <b>sistema de monitoramento de logs</b> da jornada de credenciamento, automatizando o tratamento dos dados, o envio para a <b>AWS</b> e dashboards de performance.',
                'Colaborei na criação de <b>APIs em Go</b> para integrar serviços externos ao Salesforce, com <b>CI/CD</b> e metodologias ágeis.'
              ]
            }
          ]
        },
        itau: {
          meta: 'Risco de Crédito · Itaú BBA',
          roles: [
            {
              title: 'Estagiário em Risco de Crédito',
              date: 'Dez 2022 — Mai 2023',
              bullets: [
                'Modelei, monitorei e automatizei <b>parâmetros de risco</b> com <b>Python</b>, incluindo a mitigação de <b>LGD (Loss Given Default)</b> em operações garantidas.',
                'Monitorei esteiras de provisão (<b>BRGAAP</b>, <b>IFRS 9</b>, câmbio).',
                'Construí relatórios, dashboards, views e testes estatísticos com <b>SQL</b>, <b>VBA</b> e <b>Excel</b> para apoiar decisões da área.'
              ]
            }
          ]
        },
        inmetro: {
          meta: 'Bolsa de pesquisa',
          roles: [
            {
              title: 'Desenvolvedor de Aplicações (R Shiny)',
              date: 'Abr 2022 — Abr 2023',
              bullets: [
                'Projetei e implementei uma <b>aplicação web full-stack</b> em <b>RShiny</b> para automatizar análises estatísticas e de <b>machine learning</b>: importação de dados, gráficos 2D/3D e relatórios personalizáveis.',
                'Back-end em <b>R</b> e <b>Python</b> automatizando a transformação de dados e testes de hipótese (<b>ANOVA</b>, <b>Teste-T</b>, <b>MANOVA</b>).',
                'Desenvolvi scripts de <b>web scraping (Selenium)</b> para coletar dados de redes sociais sobre o Inmetro.'
              ]
            }
          ]
        },
        dasi: {
          meta: 'Entidade estudantil · USP',
          roles: [
            {
              title: 'Designer',
              date: 'Mar 2020 — Dez 2021',
              bullets: [
                'Criei identidade visual, logos, banners e cartazes para os eventos do <b>Diretório Acadêmico de Sistemas de Informação</b>.',
                'Primeiro contato com demandas reais, prazos e trabalho em equipe.'
              ]
            }
          ]
        },
        elite: {
          meta: 'Campinas, SP',
          roles: [
            {
              title: 'Bolsista — Correção de Provas',
              date: 'Fev 2019 — Fev 2020',
              bullets: [
                'Corrigi questões, simulados e provas de vestibular em diversas matérias, junto a professores e plantonistas.',
                'Participei da elaboração de novos testes, avaliando a qualidade e a clareza das questões.'
              ]
            }
          ],
          tools: ['Matemática', 'Física', 'Química', 'Português', 'Inglês']
        }
      }
    },
    projects: {
      eyebrow: '// projetos',
      title: 'Projetos',
      sub: 'Projetos pessoais e acadêmicos com código aberto no GitHub.',
      code: 'Código',
      all: 'Ver todos no GitHub',
      items: {
        ShinyHealthCare: 'Aplicação Shiny para testes estatísticos de independência (Qui-Quadrado e Exato de Fisher) em dados de saúde.',
        InmetroAnalize: 'Web scraping de redes sociais para análise de dados sobre o Inmetro.',
        generatorTools: 'Gerador de RG, CPF e CNPJ válidos para testes de software.',
        BashChat: 'Chat cliente-servidor entre terminais, escrito inteiramente em Bash.',
        EstruturasDeDados: 'Implementações próprias de estruturas de dados clássicas em Java.',
        x86_prime_numbers: 'Cálculo de números primos em Assembly x86, manipulando ponteiros e endereços diretamente.'
      }
    },
    education: {
      eyebrow: '// formação',
      title: 'Formação',
      degree: 'Bacharelado em Sistemas de Informação',
      school: 'Universidade de São Paulo (USP) · 2020 — 2024',
      text: [
        'Formação com base sólida em <b>algoritmos</b>, <b>estruturas de dados</b>, <b>estatística</b>, <b>banco de dados</b> e <b>arquitetura de software</b>, além de disciplinas de <b>administração</b>, <b>economia</b> e <b>marketing</b>.'
      ],
      tools: ['C / C++', 'Java', 'Python', 'R', 'Julia', 'SQL', 'OpenMP', 'Assembly x86', 'Bash', 'IA & Ciência de Dados', 'Redes', 'Programação Paralela', 'Computação em Nuvem', 'IHC'],
      english: { title: 'Inglês · Cultura Inglesa', meta: '2013 — 2017 · do Intermediate ao Upper Advanced', badge: 'Fluente' },
      credsTitle: 'Certificações',
      awardsTitle: 'Reconhecimentos',
      awards: [
        { icon: 'fa-solid fa-medal', name: 'Reconhecimento por mérito · Itaú Unibanco', year: '2026' },
        { icon: 'fa-solid fa-trophy', name: 'Prêmio "Time de Fenômenos" (equipe) · Rede', year: '2024' }
      ]
    },
    contact: {
      eyebrow: '// contato',
      title: 'Vamos conversar?',
      text: 'Aberto a oportunidades, projetos e conversas sobre engenharia de software, Salesforce e cloud.',
      email: 'Enviar e-mail',
      cv: 'Baixar Currículo',
      location: 'Localização',
      locationValue: 'São Paulo, SP — Brasil',
      emailLabel: 'E-mail',
      beacons: 'Todos os links',
      share: 'Compartilhar'
    },
    footer: { rights: 'Todos os direitos reservados.', privacy: 'Privacidade', terms: 'Termos' },
    toTop: 'Voltar ao topo',
    skip: 'Pular para o conteúdo',
    copied: 'E-mail copiado!'
  },

  en: {
    htmlLang: 'en',
    nav: { home: 'Home', experienceShort: 'Career', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', education: 'Education', contact: 'Contact' },
    hero: {
      badge: 'Software Engineer @ Rede',
      greeting: "Hi, I'm",
      roles: ['Software Engineer', 'Salesforce Developer', 'Go & Python Back-end', 'Data Analyst'],
      desc: 'I build full-stack <b>Salesforce</b> solutions and <b>AWS</b> microservices with <b>Go</b> and <b>Python</b>, backed by a data analysis background and an Information Systems degree from <b>USP</b>.',
      ctaPrimary: 'View experience'
    },
    stats: [
      { value: YEARS_EXP, suffix: '+', label: 'years of experience' },
      { value: 3, suffix: '', label: 'companies' },
      { value: 30, suffix: '+', label: 'technologies' },
      { value: 2, suffix: '', label: 'languages' }
    ],
    about: {
      eyebrow: '// about me',
      title: 'Who I am',
      text: [
        `I'm a <b>Software Engineer</b> at <b>Rede</b> (Itaú Unibanco), building full-stack <b>Salesforce</b> solutions and <b>AWS</b> microservices with <b>Go</b> and <b>Python</b>.`,
        'I started in data: <b>credit risk</b> modeling at Itaú BBA and a <b>machine learning</b> application at Inmetro. That analytical foundation still shapes how I work: data-driven decisions, testable code and a focus on business outcomes.',
        'At Rede, I joined as an intern and today I lead CRM optimization initiatives, set development best practices and help onboard new team members.'
      ],
      facts: [
        { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'São Paulo, Brazil' },
        { icon: 'fa-solid fa-graduation-cap', label: 'Education', value: 'Information Systems — USP' },
        { icon: 'fa-solid fa-language', label: 'Languages', value: 'Portuguese (native) · English (fluent)' },
        { icon: 'fa-solid fa-cake-candles', label: 'Age', value: `${AGE} years old` },
        { icon: 'fa-solid fa-gamepad', label: 'Interests', value: 'Origami, games, physics, music and design' }
      ]
    },
    skills: {
      eyebrow: '// stack',
      title: 'Skills',
      sub: 'Technologies I use every day, from CRM to the cloud.',
      cats: ['Languages', 'Salesforce', 'Cloud & DevOps', 'Databases', 'Frameworks', 'Tools']
    },
    experience: {
      eyebrow: '// journey',
      title: 'Experience',
      sub: 'From data analysis to software engineering.',
      toolsLabel: 'Technologies',
      knowledgeLabel: 'Knowledge',
      readMore: 'Show details',
      readLess: 'Show less',
      moreBtn: 'Earlier experience',
      lessBtn: 'Hide earlier experience',
      items: {
        rede: {
          meta: 'Payments · Itaú Unibanco group',
          roles: [
            {
              title: 'Junior Software Engineer',
              date: 'Dec 2024 — present',
              current: true,
              bullets: [
                'Led the <b>refactoring of the client onboarding journey</b>, rebuilding screens and API integrations with <b>Apex</b>, <b>LWC</b> and <b>Flow</b>, which reduced formalization time and improved new-client conversion.',
                'Built a <b>tactical management dashboard in LWC</b> that centralizes performance data (visits and appointments) in charts and tables, giving managers real-time visibility into goals.',
                'Develop <b>AWS microservices</b> in <b>Go</b> and <b>Python</b> for integrations and business process automation.',
                'Lead code optimization initiatives, set development <b>best practices</b> and mentor new team members.'
              ]
            },
            {
              title: 'Salesforce Developer Intern',
              date: 'Jun 2023 — Dec 2024',
              bullets: [
                'Developed the new <b>onboarding flow for individual customers</b>.',
                'Built a <b>log monitoring system</b> for the onboarding journey, automating data processing, delivery to <b>AWS</b> and performance dashboards.',
                'Helped build <b>Go APIs</b> integrating external services with Salesforce, using <b>CI/CD</b> and agile methodologies.'
              ]
            }
          ]
        },
        itau: {
          meta: 'Credit Risk · Itaú BBA',
          roles: [
            {
              title: 'Credit Risk Intern',
              date: 'Dec 2022 — May 2023',
              bullets: [
                'Modeled, monitored and automated <b>risk parameters</b> with <b>Python</b>, including <b>LGD (Loss Given Default)</b> mitigation for secured operations.',
                'Monitored provisioning pipelines (<b>BRGAAP</b>, <b>IFRS 9</b>, FX).',
                'Built reports, dashboards, views and statistical tests with <b>SQL</b>, <b>VBA</b> and <b>Excel</b> to support business decisions.'
              ]
            }
          ]
        },
        inmetro: {
          meta: 'Research grant',
          roles: [
            {
              title: 'Application Developer (R Shiny)',
              date: 'Apr 2022 — Apr 2023',
              bullets: [
                'Designed and built a <b>full-stack web application</b> in <b>RShiny</b> to automate statistical and <b>machine learning</b> analyses: data import, 2D/3D charts and customizable reports.',
                'Back-end in <b>R</b> and <b>Python</b> automating data transformation and hypothesis tests (<b>ANOVA</b>, <b>T-Test</b>, <b>MANOVA</b>).',
                'Wrote <b>web scraping (Selenium)</b> scripts to collect social media data about Inmetro.'
              ]
            }
          ]
        },
        dasi: {
          meta: 'Student organization · USP',
          roles: [
            {
              title: 'Designer',
              date: 'Mar 2020 — Dec 2021',
              bullets: [
                'Created visual identity, logos, banners and posters for <b>Information Systems Student Association</b> events.',
                'First experience with real requests, deadlines and teamwork.'
              ]
            }
          ]
        },
        elite: {
          meta: 'Campinas, Brazil',
          roles: [
            {
              title: 'Scholarship — Exam Reviewer',
              date: 'Feb 2019 — Feb 2020',
              bullets: [
                'Reviewed university entrance exam questions, mock tests and exams across subjects, alongside teachers and tutors.',
                'Helped write new tests, assessing question quality and clarity.'
              ]
            }
          ],
          tools: ['Math', 'Physics', 'Chemistry', 'Portuguese', 'English']
        }
      }
    },
    projects: {
      eyebrow: '// projects',
      title: 'Projects',
      sub: 'Personal and academic open-source projects on GitHub.',
      code: 'Code',
      all: 'See all on GitHub',
      items: {
        ShinyHealthCare: "Shiny app for statistical independence tests (Chi-Square and Fisher's Exact) on health data.",
        InmetroAnalize: 'Social media web scraping for data analysis about Inmetro.',
        generatorTools: 'Generator of valid Brazilian RG, CPF and CNPJ numbers for software testing.',
        BashChat: 'Client-server chat between terminals, written entirely in Bash.',
        EstruturasDeDados: 'My own implementations of classic data structures in Java.',
        x86_prime_numbers: 'Prime number calculation in x86 Assembly, handling pointers and addresses directly.'
      }
    },
    education: {
      eyebrow: '// education',
      title: 'Education',
      degree: "Bachelor's in Information Systems",
      school: 'University of São Paulo (USP) · 2020 — 2024',
      text: [
        'Solid foundation in <b>algorithms</b>, <b>data structures</b>, <b>statistics</b>, <b>databases</b> and <b>software architecture</b>, plus courses in <b>business administration</b>, <b>economics</b> and <b>marketing</b>.'
      ],
      tools: ['C / C++', 'Java', 'Python', 'R', 'Julia', 'SQL', 'OpenMP', 'x86 Assembly', 'Bash', 'AI & Data Science', 'Networks', 'Parallel Programming', 'Cloud Computing', 'HCI'],
      english: { title: 'English · Cultura Inglesa', meta: '2013 — 2017 · from Intermediate to Upper Advanced', badge: 'Fluent' },
      credsTitle: 'Certifications',
      awardsTitle: 'Recognition',
      awards: [
        { icon: 'fa-solid fa-medal', name: 'Merit recognition · Itaú Unibanco', year: '2026' },
        { icon: 'fa-solid fa-trophy', name: '"Team of Phenomena" award (team) · Rede', year: '2024' }
      ]
    },
    contact: {
      eyebrow: '// contact',
      title: "Let's talk?",
      text: 'Open to opportunities, projects and conversations about software engineering, Salesforce and cloud.',
      email: 'Send an email',
      cv: 'Download CV',
      location: 'Location',
      locationValue: 'São Paulo — Brazil',
      emailLabel: 'Email',
      beacons: 'All my links',
      share: 'Share'
    },
    footer: { rights: 'All rights reserved.', privacy: 'Privacy', terms: 'Terms' },
    toTop: 'Back to top',
    skip: 'Skip to content',
    copied: 'Email copied!'
  }
};
