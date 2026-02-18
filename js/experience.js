// experience.js - Complete translation system for experience page
// Handles all content translations including job descriptions, dates, and tools

const EXPERIENCE_LANGUAGES = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência'
    },
    mainTitle: 'Minhas Experiências',
    additionalTitle: 'Mais Experiências',
    moreExpButton: 'Mais Experiências',
    backButton: 'Voltar',
    toolsLabel: 'Ferramentas:',
    knowledgeLabel: 'Conhecimentos:',
    toolsAndKnowledgeLabel: 'Ferramentas e Conhecimentos:',
    
    // Rede
    rede: {
      title: 'Engenheiro de Software Junior',
      date: 'Dez 2024 - atual',
      description: 'Como <b>Engenheiro de Software Junior</b> na <b>Rede</b>, foco no desenvolvimento de soluções complexas em <b>Salesforce</b> e <b>AWS</b>. Minhas responsabilidades incluem a liderança técnica em iniciativas de otimização, a implementação de <b>best practices</b> de desenvolvimento e a mentoria de novos membros da equipe.<br>&emsp;&emsp;Recentemente, liderei a refatoração estratégica da jornada de credenciamento de clientes, utilizando <b>Apex</b>, <b>LWC</b> e <b>Flow</b> para reconstruir telas e integrar APIs. Esta iniciativa reduziu significativamente o tempo de formalização e otimizou a conversão de novos clientes.<br>&emsp;&emsp;Adicionalmente, desenvolvi um painel de gestão tática em <b>LWC</b>, que centraliza dados de performance (visitas, agendamentos) em gráficos e tabelas. A ferramenta proporcionou aos gestores visibilidade em tempo real para o acompanhamento de metas e tomada de decisão.',
      title2: 'Estágio de Desenvolvedor de Software',
      date2: 'Jun 2023 - Dez 2024',
      description2: 'Como <b>Estagiário Desenvolvedor Salesforce</b>, adquiri uma base técnica robusta no ecossistema da plataforma, dominando <b>Apex</b>, <b>Visualforce</b>, <b>SOQL</b>, <b>Aura</b> e <b>LWC</b>. Neste período, atuei no desenvolvimento do novo fluxo de credenciamento para Pessoa Física e implementei um sistema de monitoramento de logs para a jornada de credenciamento, automatizando o tratamento de dados, o envio para a <b>AWS</b> e a montagem de dashboards dinâmicos para análise de performance.<br>&emsp;&emsp;Adicionalmente, colaborei na criação de <b>APIs em Go</b> para a integração de serviços externos com o Salesforce, ganhando experiência prática em metodologias ágeis, <b>CI/CD</b> e integração de sistemas em larga escala.'
    },
    
    // Itaú
    itau: {
      title: 'Estágio em Risco de Crédito',
      date: 'Dez 2022 - Mai 2023',
      description: 'Atuando na área de <b>Risco de Crédito</b> do <b>Itaú BBA</b>, fui responsável pela modelagem, monitoramento e automação de parâmetros de risco. Utilizei <b>Python</b> para desenvolver soluções de automação e para a mitigação de <b>LGD (Loss Given Default)</b> em operações garantidas.<br>&emsp;&emsp;Minhas atividades também incluíam o monitoramento de esteiras de provisão (<b>BRGAAP</b>, <b>IFRS9</b>, <b>Câmbio</b>) e a criação de relatórios complexos, dashboards, views e testes estatísticos utilizando <b>SQL</b>, <b>VBA</b> e <b>Excel</b> para suportar as decisões da área de negócio.'
    },
    
    // Inmetro
    inmetro: {
      title: 'Desenvolvedor de Aplicativos',
      date: 'Abr 2022 - Abr 2023',
      description: 'Como <b>Desenvolvedor de Aplicativos</b>, fui responsável pelo projeto e implementação de um software <b>full-stack</b> para a automação de análises estatísticas e de <b>machine learning</b>. Utilizando <b>RShiny</b> como framework principal, com <b>JavaScript</b>, <b>HTML/CSS</b> para o frontend, criei uma plataforma interativa onde usuários podem importar dados (Excel), gerar visualizações complexas (gráficos 2D/3D) e personalizar relatórios.<br>&emsp;&emsp;O <b>back-end</b>, desenvolvido em <b>R</b> e <b>Python</b>, automatizava a transformação de dados e a execução de testes de hipótese (como <b>ANOVA</b>, <b>Teste-T</b> e <b>MANOVA</b>). Adicionalmente, desenvolvi scripts de <b>Web Scraping (Selenium)</b> para a coleta de dados de redes sociais para análises de dados sobre o Inmetro.'
    },
    
    // USP
    usp: {
      title: 'Graduação em Sistemas de Informação',
      date: 'Jan 2020 - Dez 2024',
      description: 'A <b>Universidade de São Paulo</b> me proporcionou uma formação sólida em <b>Sistemas de Informação</b>, onde eu pude aprender sobre diversas áreas da computação, tive uma boa formação em <b>matemática</b>, <b>física</b>, <b>estatística</b>, <b>algoritmos</b> e <b>lógica de programação</b>, além de me ensinar a ser bem autodidata.<br>&emsp;&emsp;Tive a oportunidade de trabalhar com diversas linguagens de programação, diversas técnicas, tecnologias e softwares, e tive a oportunidade de trabalhar com diversos projetos que usavam tanto a teoria quanto a prática. Além disso, a <b>USP</b> proporciona diversos eventos, palestras, workshops e competições de programação, além de ter uma grande biblioteca e diversos cursos inclusos com o curso.<br/>&emsp;&emsp;Por fim, a <b>USP</b> também me proporcionou cursos de <b>administração</b>, <b>economia</b> e <b>marketing</b>, que me ajudaram a ter uma visão mais ampla do mercado de trabalho.'
    },
    
    // DASI
    dasi: {
      title: 'Designer',
      date: 'Mar 2020 - Dez 2021',
      description: 'A entidade estudantil <b>DASI (Diretório Acadêmico de Sistemas de Informação)</b> foi o meu primeiro contato com demandas, projetos e pessoas. Durante esse período, eu realizei a criação de artes, logos, banners e cartazes para eventos. Consegui aprender bastante sobre <b>design e Interface Humana Computador</b>, e pude trabalhar com diversos softwares como o <b>Adobe Photoshop</b> e o <b>Canvas</b>.'
    },
    
    // Elite
    elite: {
      title: 'Bolsista como corretor de Questões de Vestibular',
      date: 'Fev 2019 - Fev 2020',
      description: 'Como bolsista no <b>Elite Pré-Vestibular</b>, atuei na correção de questões, simulados e provas de diversas matérias, colaborando diretamente com professores e plantonistas para garantir a precisão das avaliações. Também participei ativamente da formulação de novos testes, realizando uma análise crítica da qualidade das questões e da sua eficácia pedagógica para avaliar o nível de compreensão esperado dos estudantes.'
    },
    
    // Footer
    footerTitles: {
      location: 'Localização',
      social: 'Redes Sociais',
      beacons: 'Beacons'
    },
    location: 'Brazil - São Paulo (SP) - Vila Mariana - Zona Sul',
    downloadCV: 'Baixar Currículo'
  },
  
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience'
    },
    mainTitle: 'My Experience',
    additionalTitle: 'More Experience',
    moreExpButton: 'More Experience',
    backButton: 'Back',
    toolsLabel: 'Tools:',
    knowledgeLabel: 'Knowledge:',
    toolsAndKnowledgeLabel: 'Tools and Knowledge:',
    
    // Rede
    rede: {
      title: 'Junior Software Engineer',
      date: 'Dec 2024 - present',
      description: 'As a <b>Junior Software Engineer</b> at <b>Rede</b>, I focus on developing complex solutions in <b>Salesforce</b> and <b>AWS</b>. My responsibilities include technical leadership in optimization initiatives, implementing development <b>best practices</b>, and mentoring new team members.<br>&emsp;&emsp;Recently, I led the strategic refactoring of the customer onboarding journey, using <b>Apex</b>, <b>LWC</b>, and <b>Flow</b> to rebuild screens and integrate APIs. This initiative significantly reduced formalization time and optimized new customer conversion.<br>&emsp;&emsp;Additionally, I developed a tactical management dashboard in <b>LWC</b>, which centralizes performance data (visits, appointments) in charts and tables. The tool provided managers with real-time visibility for goal tracking and decision-making.',
      title2: 'Software Engineer Internship',
      date2: 'Jun 2023 - Dec 2024',
      description2: 'As a <b>Salesforce Developer Intern</b>, I acquired a robust technical foundation in the platform ecosystem, mastering <b>Apex</b>, <b>Visualforce</b>, <b>SOQL</b>, <b>Aura</b>, and <b>LWC</b>. During this period, I worked on developing the new onboarding flow for Individual Customers and implemented a log monitoring system for the onboarding journey, automating data processing, sending to <b>AWS</b>, and assembling dynamic dashboards for performance analysis.<br>&emsp;&emsp;Additionally, I collaborated in creating <b>APIs in Go</b> for integrating external services with Salesforce, gaining practical experience in agile methodologies, <b>CI/CD</b>, and large-scale system integration.'
    },
    
    // Itaú
    itau: {
      title: 'Credit Risk Intern',
      date: 'Dec 2022 - May 2023',
      description: 'Working in the <b>Credit Risk</b> area at <b>Itaú BBA</b>, I was responsible for modeling, monitoring, and automating risk parameters. I used <b>Python</b> to develop automation solutions and for mitigating <b>LGD (Loss Given Default)</b> in secured operations.<br>&emsp;&emsp;My activities also included monitoring provision pipelines (<b>BRGAAP</b>, <b>IFRS9</b>, <b>Foreign Exchange</b>) and creating complex reports, dashboards, views, and statistical tests using <b>SQL</b>, <b>VBA</b>, and <b>Excel</b> to support business area decisions.'
    },
    
    // Inmetro
    inmetro: {
      title: 'Application Developer',
      date: 'Apr 2022 - Apr 2023',
      description: 'As an <b>Application Developer</b>, I was responsible for designing and implementing a <b>full-stack</b> software for automating statistical analyses and <b>machine learning</b>. Using <b>RShiny</b> as the main framework, with <b>JavaScript</b>, <b>HTML/CSS</b> for the frontend, I created an interactive platform where users can import data (Excel), generate complex visualizations (2D/3D charts), and customize reports.<br>&emsp;&emsp;The <b>back-end</b>, developed in <b>R</b> and <b>Python</b>, automated data transformation and execution of hypothesis tests (such as <b>ANOVA</b>, <b>T-Test</b>, and <b>MANOVA</b>). Additionally, I developed <b>Web Scraping (Selenium)</b> scripts for collecting data from social networks to analyze trends about Inmetro.'
    },
    
    // USP
    usp: {
      title: 'Bachelor in Information Systems',
      date: 'Jan 2020 - Dec 2024',
      description: 'The <b>University of São Paulo</b> provided me with a solid background in <b>Information Systems</b>, where I was able to learn about various areas of computing, received good training in <b>mathematics</b>, <b>physics</b>, <b>statistics</b>, <b>algorithms</b> and <b>programming logic</b>, in addition to teaching me to be very self-taught.<br>&emsp;&emsp;I had the opportunity to work with various programming languages, various techniques, technologies and software, and had the opportunity to work on various projects that used both theory and practice. Furthermore, <b>USP</b> provides various events, lectures, workshops and programming competitions, in addition to having a large library and various courses included with the course.<br/>&emsp;&emsp;Finally, <b>USP</b> also provided me with courses in <b>administration</b>, <b>economics</b> and <b>marketing</b>, which helped me gain a broader view of the job market.'
    },
    
    // DASI
    dasi: {
      title: 'Designer',
      date: 'Mar 2020 - Dec 2021',
      description: 'The student organization <b>DASI (Academic Directory of Information Systems)</b> was my first contact with demands, projects and people. During this period, I created artwork, logos, banners and posters for events. I was able to learn a lot about <b>design and Human-Computer Interface</b>, and was able to work with various software such as <b>Adobe Photoshop</b> and <b>Canvas</b>.'
    },
    
    // Elite
    elite: {
      title: 'Scholar as College Entrance Exam Question Corrector',
      date: 'Feb 2019 - Feb 2020',
      description: 'As a scholar at <b>Elite Pre-University</b>, I worked on correcting questions, mock exams, and tests across various subjects, collaborating directly with teachers and tutors to ensure assessment accuracy. I also actively participated in formulating new tests, conducting critical analysis of question quality and pedagogical effectiveness to evaluate the expected level of student comprehension.'
    },
    
    // Footer
    footerTitles: {
      location: 'Location',
      social: 'Social Media',
      beacons: 'Beacons'
    },
    location: 'Brazil - São Paulo (SP) - Vila Mariana - Zona Sul',
    downloadCV: 'Download CV'
  }
};

let currentExpLang = navigator.language.startsWith('en') ? 'en' : 'pt';

function switchExpLanguage(lang) {
  currentExpLang = lang;
  document.documentElement.lang = lang;
  renderExpContent();
}

function renderExpContent() {
  const lang = EXPERIENCE_LANGUAGES[currentExpLang];
  
  // Navigation
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const navKey = link.getAttribute('data-nav');
    if (navKey && lang.nav[navKey]) {
      const icon = link.querySelector('i');
      const iconHTML = icon ? icon.outerHTML : '';
      link.innerHTML = iconHTML + lang.nav[navKey];
    }
  });
  
  // Main titles
  const mainTitle = document.getElementById('exp-main-title');
  if (mainTitle) mainTitle.textContent = lang.mainTitle;
  
  const additionalTitle = document.getElementById('exp-additional-title');
  if (additionalTitle) additionalTitle.textContent = lang.additionalTitle;
  
  // Buttons
  const moreExpBtn = document.getElementById('more-experiences-btn');
  if (moreExpBtn) moreExpBtn.textContent = lang.moreExpButton;
  
  const backBtn = document.getElementById('back-to-main-btn');
  if (backBtn) backBtn.textContent = lang.backButton;
  
  // Rede
  const redeTitle = document.getElementById('rede-title');
  if (redeTitle) redeTitle.textContent = lang.rede.title;
  
  const redeDate = document.getElementById('rede-date');
  if (redeDate) redeDate.textContent = lang.rede.date;
  
  const redeDesc = document.getElementById('rede-description');
  if (redeDesc) redeDesc.innerHTML = lang.rede.description;
  
  const redeTitle2 = document.getElementById('rede-title2');
  if (redeTitle2) redeTitle2.textContent = lang.rede.title2;
  
  const redeDate2 = document.getElementById('rede-date2');
  if (redeDate2) redeDate2.textContent = lang.rede.date2;
  
  const redeDesc2 = document.getElementById('rede-description2');
  if (redeDesc2) redeDesc2.innerHTML = lang.rede.description2;
  
  const redeTools = document.getElementById('rede-tools-title');
  if (redeTools) redeTools.textContent = lang.toolsLabel;
  
  // Itaú
  const itauTitle = document.getElementById('itau-title');
  if (itauTitle) itauTitle.textContent = lang.itau.title;
  
  const itauDate = document.getElementById('itau-date');
  if (itauDate) itauDate.textContent = lang.itau.date;
  
  const itauDesc = document.getElementById('itau-description');
  if (itauDesc) itauDesc.innerHTML = lang.itau.description;
  
  const itauTools = document.getElementById('itau-tools-title');
  if (itauTools) itauTools.textContent = lang.toolsLabel;
  
  // Inmetro
  const inmetroTitle = document.getElementById('inmetro-title');
  if (inmetroTitle) inmetroTitle.textContent = lang.inmetro.title;
  
  const inmetroDate = document.getElementById('inmetro-date');
  if (inmetroDate) inmetroDate.textContent = lang.inmetro.date;
  
  const inmetroDesc = document.getElementById('inmetro-description');
  if (inmetroDesc) inmetroDesc.innerHTML = lang.inmetro.description;
  
  const inmetroTools = document.getElementById('inmetro-tools-title');
  if (inmetroTools) inmetroTools.textContent = lang.toolsLabel;
  
  // USP
  const uspTitle = document.getElementById('usp-title');
  if (uspTitle) uspTitle.textContent = lang.usp.title;
  
  const uspDate = document.getElementById('usp-date');
  if (uspDate) uspDate.textContent = lang.usp.date;
  
  const uspDesc = document.getElementById('usp-description');
  if (uspDesc) uspDesc.innerHTML = lang.usp.description;
  
  const uspTools = document.getElementById('usp-tools-title');
  if (uspTools) uspTools.textContent = lang.toolsAndKnowledgeLabel;
  
  // DASI
  const dasiTitle = document.getElementById('dasi-title');
  if (dasiTitle) dasiTitle.textContent = lang.dasi.title;
  
  const dasiDate = document.getElementById('dasi-date');
  if (dasiDate) dasiDate.textContent = lang.dasi.date;
  
  const dasiDesc = document.getElementById('dasi-description');
  if (dasiDesc) dasiDesc.innerHTML = lang.dasi.description;
  
  const dasiTools = document.getElementById('dasi-tools-title');
  if (dasiTools) dasiTools.textContent = lang.toolsLabel;
  
  // Elite
  const eliteTitle = document.getElementById('elite-title');
  if (eliteTitle) eliteTitle.textContent = lang.elite.title;
  
  const eliteDate = document.getElementById('elite-date');
  if (eliteDate) eliteDate.textContent = lang.elite.date;
  
  const eliteDesc = document.getElementById('elite-description');
  if (eliteDesc) eliteDesc.innerHTML = lang.elite.description;
  
  const eliteTools = document.getElementById('elite-tools-title');
  if (eliteTools) eliteTools.textContent = lang.knowledgeLabel;
  
  // Footer
  const footerLocation = document.getElementById('footer-location');
  if (footerLocation) {
    footerLocation.innerHTML = `
      <div class="location-line">${lang.location.split(' - ').slice(0, 2).join(' - ')}</div>
      <div class="location-line">${lang.location.split(' - ').slice(2).join(' - ')}</div>
    `;
  }
  
  const footerLocationTitle = document.getElementById('footer-location-title');
  if (footerLocationTitle) footerLocationTitle.textContent = lang.footerTitles.location;
  
  const footerSocialTitle = document.getElementById('footer-social-title');
  if (footerSocialTitle) footerSocialTitle.textContent = lang.footerTitles.social;
  
  const footerBeaconsTitle = document.getElementById('footer-beacons-title');
  if (footerBeaconsTitle) footerBeaconsTitle.textContent = lang.footerTitles.beacons;
  
  const downloadCV = document.getElementById('download-cv');
  if (downloadCV) downloadCV.textContent = lang.downloadCV;
}

document.addEventListener('DOMContentLoaded', () => {
  // Language combobox + flag
  const langCombo = document.getElementById('lang-combobox');
  const langFlag = document.getElementById('lang-flag');
  
  function updateFlag() {
    const flagPath = currentExpLang === 'pt' ? 'assets/br-flag.png' : 'assets/us-flag.png';
    langFlag.src = flagPath;
    langFlag.alt = currentExpLang === 'pt' ? 'Bandeira do Brasil' : 'United States Flag';
  }
  
  // Set initial values
  langCombo.value = currentExpLang;
  updateFlag();
  
  langCombo.addEventListener('change', function() {
    currentExpLang = this.value;
    switchExpLanguage(currentExpLang);
    updateFlag();
  });
  
  switchExpLanguage(currentExpLang);
  
  // Hide/show header on scroll (mobile only)
  let lastScrollTop = 0;
  const header = document.querySelector('.header-glass');
  const scrollThreshold = 5;
  let isHeaderInteracting = false;

  header.addEventListener('mouseenter', () => {
    isHeaderInteracting = true;
  });
  
  header.addEventListener('mouseleave', () => {
    isHeaderInteracting = false;
  });

  header.addEventListener('touchstart', () => {
    isHeaderInteracting = true;
  });

  window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (!isHeaderInteracting && Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
      }
    } else {
      header.style.transform = 'translateY(0)';
    }
  });

  document.addEventListener('touchend', () => {
    setTimeout(() => {
      isHeaderInteracting = false;
    }, 300);
  });

  // Toggle more experiences section
  const moreExpBtn = document.getElementById('more-experiences-btn');
  const backBtn = document.getElementById('back-to-main-btn');
  const mainSection = document.querySelector('.experience-main-section');
  const moreSection = document.getElementById('more-experiences-section');

  if (moreExpBtn && moreSection && mainSection && backBtn) {
    moreExpBtn.addEventListener('click', () => {
      mainSection.style.display = 'none';
      moreSection.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backBtn.addEventListener('click', () => {
      moreSection.style.display = 'none';
      mainSection.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Download CV button with language-specific links
  const downloadCvBtn = document.getElementById('download-cv');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', function() {
      const cvLinks = {
        pt: 'https://drive.google.com/file/d/1Ude0Vm_1FZltb0pz0Drosp5sxIMLiiWy/view?usp=drive_link',
        en: 'https://drive.google.com/file/d/1zvGWS2D4R06-BvagxDCS6yuw3JzI0Xu8/view?usp=drive_link'
      };
      window.open(cvLinks[currentExpLang], '_blank');
    });
  }
});
