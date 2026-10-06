// i18n.js - Todo o conteúdo do site (PT / EN)
// Para editar textos, experiências ou habilidades, altere apenas este arquivo.

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

const CV_LINKS = {
  pt: 'https://drive.google.com/file/d/1Ude0Vm_1FZltb0pz0Drosp5sxIMLiiWy/view?usp=drive_link',
  en: 'https://drive.google.com/file/d/1zvGWS2D4R06-BvagxDCS6yuw3JzI0Xu8/view?usp=drive_link'
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
  ['Python', 'Java', 'Go', 'JavaScript', 'SQL', 'R'],
  ['Apex', 'LWC', 'Flow', 'SOQL/SOSL', 'Aura', 'Visualforce'],
  ['AWS (EC2, Lambda, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB'],
  ['React', 'Django', 'Node.js', 'RShiny'],
  ['Git', 'Datadog', 'Grafana', 'PowerBI', 'Excel']
];

// Dados de experiência compartilhados entre idiomas (logos, ferramentas, flags)
const EXPERIENCE_META = {
  rede: {
    logo: 'www/redecard-logo.jpeg',
    company: 'Rede',
    tools: ['Apex', 'LWC', 'SOQL', 'SOSL', 'Flow', 'Aura', 'REST / SOAP', 'SFDX', 'Flosum', 'AWS EC2', 'S3', 'VPC', 'RDS', 'Lambda', 'DynamoDB', 'CloudWatch', 'Go', 'Python', 'Grafana', 'Kubernetes', 'Docker', 'Datadog', 'Terraform']
  },
  itau: {
    logo: 'www/Itaú_Unibanco_logo.png',
    company: 'Itaú Unibanco',
    tools: ['Python', 'SQL', 'SAS', 'Teradata', 'DBeaver', 'VBA', 'Excel', 'PowerPoint', 'Confluence']
  },
  inmetro: {
    logo: 'www/inmetro_logo.png',
    company: 'Inmetro',
    tools: ['R', 'RShiny', 'Python', 'JavaScript', 'HTML', 'CSS', 'Selenium', 'Google API', 'Twitter API', 'Facebook API', 'Excel']
  },
  dasi: {
    logo: 'www/dasi-usp.jpeg',
    company: 'DASI USP',
    tools: ['Adobe Photoshop', 'Canva', 'HTML', 'CSS']
  },
  elite: {
    logo: 'www/elite-logo.jpg',
    company: 'Elite Pré-Vestibular'
  }
};

const LANGUAGES = {
  pt: {
    htmlLang: 'pt-BR',
    nav: { home: 'Início', experienceShort: 'Carreira', about: 'Sobre', skills: 'Habilidades', experience: 'Experiência', education: 'Formação', contact: 'Contato' },
    hero: {
      badge: 'Engenheiro de Software @ Rede',
      greeting: 'Olá, eu sou',
      rolePrefix: 'Eu sou',
      roles: ['Engenheiro de Software', 'Desenvolvedor Salesforce', 'Dev de Microserviços AWS', 'Analista de Dados'],
      desc: 'Construo soluções em <b>Salesforce</b> e microserviços em <b>AWS</b> com Go e Python — unindo uma base analítica forte em dados a engenharia de software moderna.',
      ctaPrimary: 'Ver experiência',
      ctaSecondary: 'Baixar CV'
    },
    stats: [
      { value: YEARS_EXP, suffix: '+', label: 'anos de experiência' },
      { value: 3, suffix: '', label: 'empresas' },
      { value: 30, suffix: '+', label: 'tecnologias' },
      { value: '∞', suffix: '', label: 'cafés ☕' }
    ],
    about: {
      eyebrow: '// sobre mim',
      title: 'Quem sou eu',
      text: [
        `Meu nome é <b>André Miyazawa</b>, tenho ${AGE} anos e sou <b>Engenheiro de Software</b> na <b>Rede</b>, com foco principal em soluções <b>Salesforce</b> e desenvolvimento de <b>microserviços em nuvem (AWS)</b>.`,
        'Sou Bacharel em <b>Sistemas de Informação pela Universidade de São Paulo (USP)</b>, formação que me proporcionou uma base robusta em algoritmos, estatística e arquitetura de software.',
        'Minha trajetória foi construída sobre um forte alicerce analítico: comecei no <b>Itaú Unibanco</b>, com modelagem de Risco de Crédito (Python, SQL, SAS), e no <b>Inmetro</b>, onde desenvolvi uma aplicação completa de machine learning (R, Python, JS).',
        'Hoje, além de liderar otimizações na plataforma de CRM, atuo na arquitetura e desenvolvimento de microserviços em AWS utilizando <b>Go</b> e <b>Python</b>.'
      ],
      highlights: [
        { icon: 'fa-solid fa-graduation-cap', title: 'USP', text: 'Sistemas de Informação' },
        { icon: 'fa-brands fa-salesforce', title: 'Salesforce', text: 'Apex · LWC · Flow' },
        { icon: 'fa-brands fa-aws', title: 'Cloud', text: 'Microserviços em Go e Python' },
        { icon: 'fa-solid fa-chart-pie', title: 'Dados', text: 'Risco de crédito e ML' }
      ]
    },
    skills: {
      eyebrow: '// stack',
      title: 'Habilidades',
      sub: 'Ferramentas e tecnologias que uso no dia a dia para construir produtos de ponta a ponta.',
      cats: ['Linguagens', 'Salesforce', 'Cloud & DevOps', 'Bancos de Dados', 'Frameworks', 'Ferramentas']
    },
    experience: {
      eyebrow: '// trajetória',
      title: 'Experiência',
      sub: 'Da análise de dados à engenharia de software — uma linha do tempo da minha carreira.',
      toolsLabel: 'Tecnologias',
      knowledgeLabel: 'Conhecimentos',
      readMore: 'Ler mais',
      readLess: 'Mostrar menos',
      moreBtn: 'Mostrar mais experiências',
      lessBtn: 'Mostrar menos',
      current: 'atual',
      items: {
        rede: {
          meta: 'Serviços financeiros · São Paulo',
          roles: [
            {
              title: 'Engenheiro de Software Júnior',
              date: 'Dez 2024 — atual',
              current: true,
              desc: [
                'Como <b>Engenheiro de Software Júnior</b> na <b>Rede</b>, foco no desenvolvimento de soluções complexas em <b>Salesforce</b> e <b>AWS</b>. Minhas responsabilidades incluem a liderança técnica em iniciativas de otimização, a implementação de <b>best practices</b> e a mentoria de novos membros da equipe.',
                'Liderei a refatoração estratégica da jornada de credenciamento de clientes, utilizando <b>Apex</b>, <b>LWC</b> e <b>Flow</b> para reconstruir telas e integrar APIs — reduzindo significativamente o tempo de formalização e otimizando a conversão de novos clientes.',
                'Desenvolvi também um painel de gestão tática em <b>LWC</b>, que centraliza dados de performance (visitas, agendamentos) em gráficos e tabelas, dando aos gestores visibilidade em tempo real para acompanhamento de metas.'
              ]
            },
            {
              title: 'Estágio em Desenvolvimento de Software',
              date: 'Jun 2023 — Dez 2024',
              desc: [
                'Como <b>Estagiário Desenvolvedor Salesforce</b>, adquiri uma base técnica robusta no ecossistema da plataforma, dominando <b>Apex</b>, <b>Visualforce</b>, <b>SOQL</b>, <b>Aura</b> e <b>LWC</b>. Atuei no novo fluxo de credenciamento para Pessoa Física e implementei um sistema de monitoramento de logs, automatizando o envio para a <b>AWS</b> e a montagem de dashboards dinâmicos.',
                'Colaborei na criação de <b>APIs em Go</b> para integração de serviços externos com o Salesforce, ganhando experiência prática em metodologias ágeis, <b>CI/CD</b> e integração de sistemas em larga escala.'
              ]
            }
          ]
        },
        itau: {
          meta: 'Itaú BBA · São Paulo',
          roles: [
            {
              title: 'Estágio em Risco de Crédito',
              date: 'Dez 2022 — Mai 2023',
              desc: [
                'Na área de <b>Risco de Crédito</b> do <b>Itaú BBA</b>, fui responsável pela modelagem, monitoramento e automação de parâmetros de risco. Utilizei <b>Python</b> para desenvolver automações e para a mitigação de <b>LGD (Loss Given Default)</b> em operações garantidas.',
                'Também monitorei esteiras de provisão (<b>BRGAAP</b>, <b>IFRS9</b>, <b>Câmbio</b>) e criei relatórios, dashboards, views e testes estatísticos com <b>SQL</b>, <b>VBA</b> e <b>Excel</b> para suportar decisões de negócio.'
              ]
            }
          ]
        },
        inmetro: {
          meta: 'Bolsa de pesquisa · Rio de Janeiro (remoto)',
          roles: [
            {
              title: 'Desenvolvedor de Aplicativos',
              date: 'Abr 2022 — Abr 2023',
              desc: [
                'Projetei e implementei um software <b>full-stack</b> para automação de análises estatísticas e de <b>machine learning</b>. Com <b>RShiny</b>, <b>JavaScript</b> e <b>HTML/CSS</b>, criei uma plataforma interativa onde usuários importam dados, geram visualizações 2D/3D e personalizam relatórios.',
                'O <b>back-end</b>, em <b>R</b> e <b>Python</b>, automatizava a transformação de dados e testes de hipótese (<b>ANOVA</b>, <b>Teste-T</b>, <b>MANOVA</b>). Também desenvolvi scripts de <b>Web Scraping (Selenium)</b> para coleta de dados de redes sociais.'
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
              desc: [
                'O <b>DASI (Diretório Acadêmico de Sistemas de Informação)</b> foi meu primeiro contato com demandas, projetos e pessoas. Criei artes, logos, banners e cartazes para eventos, aprendendo bastante sobre <b>design e Interação Humano-Computador</b>.'
              ]
            }
          ]
        },
        elite: {
          meta: 'Campinas · SP',
          roles: [
            {
              title: 'Bolsista — Corretor de Questões de Vestibular',
              date: 'Fev 2019 — Fev 2020',
              desc: [
                'Corrigi questões, simulados e provas de diversas matérias, colaborando com professores e plantonistas. Também participei da formulação de novos testes, analisando a qualidade das questões e sua eficácia pedagógica.'
              ]
            }
          ],
          tools: ['Matemática', 'Física', 'Química', 'Biologia', 'Português', 'Inglês', 'História', 'Geografia']
        }
      }
    },
    education: {
      eyebrow: '// formação',
      title: 'Formação Acadêmica',
      degree: 'Bacharelado em Sistemas de Informação',
      school: 'Universidade de São Paulo (USP) · Jan 2020 — Dez 2024',
      text: [
        'A <b>USP</b> me proporcionou uma formação sólida em computação, com base forte em <b>matemática</b>, <b>estatística</b>, <b>algoritmos</b> e <b>lógica de programação</b> — além de me ensinar a ser autodidata.',
        'Trabalhei com diversas linguagens e projetos que uniam teoria e prática, e cursei disciplinas de <b>administração</b>, <b>economia</b> e <b>marketing</b>, que ampliaram minha visão de negócio.'
      ],
      tools: ['C', 'C++', 'Java', 'Python', 'R', 'Julia', 'SQL', 'Oracle', 'OpenMP', 'Assembly x86', 'Bash', 'Lua', 'Estruturas de Dados', 'IA & Ciência de Dados', 'Redes', 'Programação Paralela', 'Cloud']
    },
    contact: {
      eyebrow: '// contato',
      title: 'Vamos construir algo juntos?',
      text: 'Estou aberto a novas conversas, projetos e oportunidades. Me mande uma mensagem — respondo rápido!',
      email: 'Enviar e-mail',
      cv: 'Baixar Currículo',
      location: 'Localização',
      locationValue: 'Vila Mariana, São Paulo — SP',
      emailLabel: 'E-mail',
      beacons: 'Todos os links',
      share: 'Compartilhar'
    },
    footer: 'Feito com <i class="fa-solid fa-heart heart"></i> e muito café.',
    toTop: 'Voltar ao topo',
    skip: 'Pular para o conteúdo',
    copied: 'E-mail copiado!'
  },

  en: {
    htmlLang: 'en',
    nav: { home: 'Home', experienceShort: 'Career', about: 'About', skills: 'Skills', experience: 'Experience', education: 'Education', contact: 'Contact' },
    hero: {
      badge: 'Software Engineer @ Rede',
      greeting: "Hi, I'm",
      rolePrefix: "I'm a",
      roles: ['Software Engineer', 'Salesforce Developer', 'AWS Microservices Dev', 'Data Analyst'],
      desc: 'I build <b>Salesforce</b> solutions and <b>AWS</b> microservices with Go and Python — combining a strong analytical data background with modern software engineering.',
      ctaPrimary: 'View experience',
      ctaSecondary: 'Download CV'
    },
    stats: [
      { value: YEARS_EXP, suffix: '+', label: 'years of experience' },
      { value: 3, suffix: '', label: 'companies' },
      { value: 30, suffix: '+', label: 'technologies' },
      { value: '∞', suffix: '', label: 'coffees ☕' }
    ],
    about: {
      eyebrow: '// about me',
      title: 'Who I am',
      text: [
        `I'm <b>André Miyazawa</b>, ${AGE} years old, a <b>Software Engineer</b> at <b>Rede</b>, focused on <b>Salesforce</b> solutions and <b>cloud microservices (AWS)</b>.`,
        "I hold a Bachelor's degree in <b>Information Systems from the University of São Paulo (USP)</b>, which gave me a solid foundation in algorithms, statistics and software architecture.",
        'My journey was built on a strong analytical foundation: I started at <b>Itaú Unibanco</b>, working on Credit Risk modeling (Python, SQL, SAS), and at <b>Inmetro</b>, where I built a complete machine learning application (R, Python, JS).',
        'Today, besides leading optimizations on the CRM platform, I work on the architecture and development of AWS microservices using <b>Go</b> and <b>Python</b>.'
      ],
      highlights: [
        { icon: 'fa-solid fa-graduation-cap', title: 'USP', text: 'Information Systems' },
        { icon: 'fa-brands fa-salesforce', title: 'Salesforce', text: 'Apex · LWC · Flow' },
        { icon: 'fa-brands fa-aws', title: 'Cloud', text: 'Microservices in Go & Python' },
        { icon: 'fa-solid fa-chart-pie', title: 'Data', text: 'Credit risk & ML' }
      ]
    },
    skills: {
      eyebrow: '// stack',
      title: 'Skills',
      sub: 'Tools and technologies I use every day to build products end to end.',
      cats: ['Languages', 'Salesforce', 'Cloud & DevOps', 'Databases', 'Frameworks', 'Tools']
    },
    experience: {
      eyebrow: '// journey',
      title: 'Experience',
      sub: 'From data analysis to software engineering — a timeline of my career.',
      toolsLabel: 'Technologies',
      knowledgeLabel: 'Knowledge',
      readMore: 'Read more',
      readLess: 'Show less',
      moreBtn: 'Show more experience',
      lessBtn: 'Show less',
      current: 'present',
      items: {
        rede: {
          meta: 'Financial services · São Paulo',
          roles: [
            {
              title: 'Junior Software Engineer',
              date: 'Dec 2024 — present',
              current: true,
              desc: [
                'As a <b>Junior Software Engineer</b> at <b>Rede</b>, I focus on building complex solutions in <b>Salesforce</b> and <b>AWS</b>. My responsibilities include technical leadership on optimization initiatives, implementing development <b>best practices</b> and mentoring new team members.',
                'I led the strategic refactoring of the customer onboarding journey, using <b>Apex</b>, <b>LWC</b> and <b>Flow</b> to rebuild screens and integrate APIs — significantly reducing formalization time and improving new-customer conversion.',
                'I also built a tactical management dashboard in <b>LWC</b> that centralizes performance data (visits, appointments) in charts and tables, giving managers real-time visibility for goal tracking.'
              ]
            },
            {
              title: 'Software Engineering Intern',
              date: 'Jun 2023 — Dec 2024',
              desc: [
                'As a <b>Salesforce Developer Intern</b>, I built a robust technical foundation in the platform, mastering <b>Apex</b>, <b>Visualforce</b>, <b>SOQL</b>, <b>Aura</b> and <b>LWC</b>. I worked on the new onboarding flow for individual customers and implemented a log monitoring system, automating delivery to <b>AWS</b> and building dynamic dashboards.',
                'I helped create <b>Go APIs</b> to integrate external services with Salesforce, gaining hands-on experience with agile methodologies, <b>CI/CD</b> and large-scale system integration.'
              ]
            }
          ]
        },
        itau: {
          meta: 'Itaú BBA · São Paulo',
          roles: [
            {
              title: 'Credit Risk Intern',
              date: 'Dec 2022 — May 2023',
              desc: [
                'In the <b>Credit Risk</b> area at <b>Itaú BBA</b>, I was responsible for modeling, monitoring and automating risk parameters. I used <b>Python</b> to build automations and to mitigate <b>LGD (Loss Given Default)</b> on secured operations.',
                'I also monitored provisioning pipelines (<b>BRGAAP</b>, <b>IFRS9</b>, <b>FX</b>) and built reports, dashboards, views and statistical tests with <b>SQL</b>, <b>VBA</b> and <b>Excel</b> to support business decisions.'
              ]
            }
          ]
        },
        inmetro: {
          meta: 'Research grant · Rio de Janeiro (remote)',
          roles: [
            {
              title: 'Application Developer',
              date: 'Apr 2022 — Apr 2023',
              desc: [
                'I designed and built a <b>full-stack</b> application to automate statistical and <b>machine learning</b> analyses. Using <b>RShiny</b>, <b>JavaScript</b> and <b>HTML/CSS</b>, I created an interactive platform where users import data, generate 2D/3D visualizations and customize reports.',
                'The <b>back-end</b>, in <b>R</b> and <b>Python</b>, automated data transformation and hypothesis tests (<b>ANOVA</b>, <b>T-Test</b>, <b>MANOVA</b>). I also wrote <b>Web Scraping (Selenium)</b> scripts to collect social media data.'
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
              desc: [
                '<b>DASI (Information Systems Student Association)</b> was my first contact with real demands, projects and people. I created artwork, logos, banners and posters for events, learning a lot about <b>design and Human-Computer Interaction</b>.'
              ]
            }
          ]
        },
        elite: {
          meta: 'Campinas · SP',
          roles: [
            {
              title: 'Scholar — Entrance Exam Question Reviewer',
              date: 'Feb 2019 — Feb 2020',
              desc: [
                'I reviewed questions, mock exams and tests across many subjects, working closely with teachers and tutors. I also helped design new tests, analyzing question quality and pedagogical effectiveness.'
              ]
            }
          ],
          tools: ['Math', 'Physics', 'Chemistry', 'Biology', 'Portuguese', 'English', 'History', 'Geography']
        }
      }
    },
    education: {
      eyebrow: '// education',
      title: 'Education',
      degree: "Bachelor's in Information Systems",
      school: 'University of São Paulo (USP) · Jan 2020 — Dec 2024',
      text: [
        '<b>USP</b> gave me a solid computing education, with a strong base in <b>mathematics</b>, <b>statistics</b>, <b>algorithms</b> and <b>programming logic</b> — and taught me to be self-taught.',
        'I worked with many languages and on projects combining theory and practice, and took courses in <b>administration</b>, <b>economics</b> and <b>marketing</b> that broadened my business perspective.'
      ],
      tools: ['C', 'C++', 'Java', 'Python', 'R', 'Julia', 'SQL', 'Oracle', 'OpenMP', 'Assembly x86', 'Bash', 'Lua', 'Data Structures', 'AI & Data Science', 'Networks', 'Parallel Programming', 'Cloud']
    },
    contact: {
      eyebrow: '// contact',
      title: "Let's build something together?",
      text: "I'm open to new conversations, projects and opportunities. Send me a message — I reply fast!",
      email: 'Send an email',
      cv: 'Download CV',
      location: 'Location',
      locationValue: 'Vila Mariana, São Paulo — Brazil',
      emailLabel: 'Email',
      beacons: 'All my links',
      share: 'Share'
    },
    footer: 'Made with <i class="fa-solid fa-heart heart"></i> and lots of coffee.',
    toTop: 'Back to top',
    skip: 'Skip to content',
    copied: 'Email copied!'
  }
};
