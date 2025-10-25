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
      description: 'Como <b>Engenheiro de Software Junior</b> na <b>Rede</b>, continuo atuando no desenvolvimento e manutenção do sistema de CRM da empresa, com foco em soluções <b>Salesforce</b>. Nesta posição, assumo maior responsabilidade técnica, liderando iniciativas de otimização de código, implementando <b>best practices</b> de desenvolvimento e mentorando novos membros da equipe.<br>&emsp;&emsp;Trabalho ativamente na arquitetura de soluções complexas utilizando <b>Apex</b>, <b>Lightning Web Components</b>, e <b>Flow</b>, além de integrar sistemas externos via <b>APIs REST</b>. Também atuo com <b>AWS Cloud Computing</b>, utilizando <b>Go</b> e <b>Python</b> para desenvolver microserviços e automatizar processos críticos de negócio, garantindo escalabilidade e performance dos sistemas.',
      title2: 'Estágio de Desenvolvedor de Software',
      date2: 'Junho 2023 - Dezembro 2024',
      description2: 'Minha jornada na <b>Rede</b> começou em junho de 2023 como estagiário, atuando como <b>Desenvolvedor Salesforce</b>. Nesse período, desenvolvi funcionalidades para o aplicativo de <b>CRM (Customer Relationship Management)</b> da empresa, adquirindo conhecimento profundo sobre <b>Apex, Visualforce, SOQL, Flow</b> e <b>LWCs (Lightning Web Components)</b>.<br>&emsp;&emsp;Esta experiência me proporcionou compreensão clara do processo de desenvolvimento de software em uma grande corporação, incluindo <b>testes integrados</b>, <b>integração de sistemas</b> e o manejo de vastas quantidades de dados. Colaborei com diversas equipes e aprendi a trabalhar com metodologias ágeis, versionamento de código e processos de <b>CI/CD</b>.'
    },
    
    // Itaú
    itau: {
      title: 'Estágio em Risco de Crédito',
      date: 'Dez 2022 - Maio 2023',
      description: 'O meu primeiro estágio foi no <b>Itaú Unibanco</b>, teve início em dezembro de 2022, onde atuei como Estagiário em <b>Risco de Crédito</b>. Durante esse período, eu desempenhei um papel crucial na modelagem e monitoramento de parâmetros de risco no <b>Itaú BBA</b>.<br>&emsp;&emsp;Neste meu primeiro estágio eu realizei a modelagem, o monitoramento e automarização de parâmetros de risco utilizando <b>Python</b>, Mitigação de <b>LGD</b> para operações garantidas, Monitoramento de esteiras de provisão <b>BRGAAP</b>, <b>MB</b>, <b>TVM</b>, <b>Câmbio</b> e <b>IFRS9</b> e a criação de relatórios, apresentações, gráficos visuais, views, dashboards e testes estatísticos utilizando <b>SQL</b>, <b>VBA</b> e <b>Excel</b>.'
    },
    
    // Inmetro
    inmetro: {
      title: 'Bolsa de Pesquisa',
      date: 'Abr 2022 - Abr 2023',
      description: 'Durante a minha bolsa de pesquisa no <b>Inmetro</b> como Desenvolvedor de Aplicativos em <b>Shiny R</b>, de abril de 2022 a abril de 2023, desenvolvi software para automatizar análises de machine learning em <b>R</b>, <b>Python</b>, <b>Javascript</b>, <b>HTML</b> e <b>CSS</b>. Colaborei na gestão de bases de dados e na criação de scripts para a manipulação de dados e geração de gráficos personalizados. Também desenvolvi rotinas de testes para validar algoritmos de machine learning e o tratamento de dados para torna-los próprios para serem utilizados.<br>&emsp;&emsp;Essa experiência foi muito enriquecedora e ampliou bastante meus conhecimentos em análise de dados, testes estatísticos, machine learning, inteligência artificial e principalmente em desenvolvimento de software, onde este foi meu primeiro desenvolvimento, onde trabalhei com praticamente 100% do <b>backend</b> e <b>frontend</b>, e eu pude aprender muito.'
    },
    
    // USP
    usp: {
      title: 'Graduação em Sistemas de Informação',
      date: 'Jan 2020 - atual',
      description: 'A <b>Universidade de São Paulo</b> me proporcionou uma formação sólida em <b>Sistemas de Informação</b>, onde eu pude aprender sobre diversas áreas da computação, tive uma boa formação em <b>matemática</b>, <b>física</b>, <b>estatística</b>, <b>algoritmos</b> e <b>lógica de programação</b>, além de me ensinar a ser bem autodidata.<br>&emsp;&emsp;Tive a oportunidade de trabalhar com diversas linguagens de programação, diversas técnicas, tecnologias e softwares, e tive a oportunidade de trabalhar com diversos projetos que usavam tanto a teoria quanto a prática. Além disso, a <b>USP</b> proporciona diversos eventos, palestras, workshops e competições de programação, além de ter uma grande biblioteca e diversos cursos inclusos com o curso.<br/>&emsp;&emsp;Por fim, a <b>USP</b> também me proporcionou cursos de <b>administração</b>, <b>economia</b> e <b>marketing</b>, que me ajudaram a ter uma visão mais ampla do mercado de trabalho.'
    },
    
    // DASI
    dasi: {
      title: 'Designer',
      date: 'Março 2020 - Dez 2021',
      description: 'A entidade estudantil <b>DASI (Diretório Acadêmico de Sistemas de Informação)</b> foi o meu primeiro contato com demandas, projetos e pessoas. Durante esse período, eu realizei a criação de artes, logos, banners e cartazes para eventos. Consegui aprender bastante sobre <b>design e Interface Humana Computador</b>, e pude trabalhar com diversos softwares como o <b>Adobe Photoshop</b> e o <b>Canvas</b>.'
    },
    
    // Elite
    elite: {
      title: 'Bolsista como corretor de Questões de Vestibular',
      date: 'Fev 2019 - Fev 2020',
      description: 'Eu fui um estudante bolsista no colégio <b>Elite Pré-Vestibular</b> em <b>Campinas</b>, onde eu corrigia questões, simulados e provas com matérias de vestibulares diversos de diversas matérias, com auxilio de professores e plantonistas.<br>&emsp;&emsp;Também auxiliava na formulação de <b>testes</b> e <b>provas</b> do colégio, avaliando a qualidade das questões criadas e obtendo uma amostra de como o teste seria e a possível compreensão dos estudantes. Com isso pude aprender bastante sobre as matérias e me ajudou muito com o <b>vestibular</b>.'
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
      description: 'As a <b>Junior Software Engineer</b> at <b>Rede</b>, I continue working on the development and maintenance of the company\'s CRM system, focusing on <b>Salesforce</b> solutions. In this position, I take on greater technical responsibility, leading code optimization initiatives, implementing development <b>best practices</b>, and mentoring new team members.<br>&emsp;&emsp;I actively work on architecting complex solutions using <b>Apex</b>, <b>Lightning Web Components</b>, and <b>Flow</b>, as well as integrating external systems via <b>REST APIs</b>. I also work with <b>AWS Cloud Computing</b>, using <b>Go</b> and <b>Python</b> to develop microservices and automate critical business processes, ensuring system scalability and performance.',
      title2: 'Software Engineer Internship',
      date2: 'June 2023 - December 2024',
      description2: 'My journey at <b>Rede</b> began in June 2023 as an intern, working as a <b>Salesforce Developer</b>. During this period, I developed features for the company\'s <b>CRM (Customer Relationship Management)</b> application, acquiring deep knowledge of <b>Apex, Visualforce, SOQL, Flow</b>, and <b>LWCs (Lightning Web Components)</b>.<br>&emsp;&emsp;This experience provided me with a clear understanding of the software development process in a large corporation, including <b>integrated testing</b>, <b>system integration</b>, and handling vast amounts of data. I collaborated with various teams and learned to work with agile methodologies, code versioning, and <b>CI/CD</b> processes.'
    },
    
    // Itaú
    itau: {
      title: 'Credit Analyst Intern',
      date: 'Dec 2022 - May 2023',
      description: 'My first internship was at <b>Itaú Unibanco</b>, starting in December 2022, where I worked as an Intern in <b>Credit Risk</b>. During this period, I played a crucial role in modeling and monitoring risk parameters at <b>Itaú BBA</b>.<br>&emsp;&emsp;In this first internship, I performed modeling, monitoring and automation of risk parameters using <b>Python</b>, <b>LGD</b> mitigation for guaranteed operations, monitoring of <b>BRGAAP</b>, <b>MB</b>, <b>TVM</b>, <b>Foreign Exchange</b> and <b>IFRS9</b> provision pipelines, and creating reports, presentations, visual graphics, views, dashboards and statistical tests using <b>SQL</b>, <b>VBA</b> and <b>Excel</b>.'
    },
    
    // Inmetro
    inmetro: {
      title: 'Research Fellowship',
      date: 'Apr 2022 - Apr 2023',
      description: 'During my research fellowship at <b>Inmetro</b> as an Application Developer in <b>Shiny R</b>, from April 2022 to April 2023, I developed software to automate machine learning analyses in <b>R</b>, <b>Python</b>, <b>Javascript</b>, <b>HTML</b> and <b>CSS</b>. I collaborated in database management and creating scripts for data manipulation and generating custom graphics. I also developed test routines to validate machine learning algorithms and data treatment to make them suitable for use.<br>&emsp;&emsp;This experience was very enriching and greatly expanded my knowledge in data analysis, statistical testing, machine learning, artificial intelligence, and especially software development, where this was my first development project, where I worked with practically 100% of the <b>backend</b> and <b>frontend</b>, and I learned a lot.'
    },
    
    // USP
    usp: {
      title: 'Bachelor in Information Systems',
      date: 'Jan 2020 - present',
      description: 'The <b>University of São Paulo</b> provided me with a solid background in <b>Information Systems</b>, where I was able to learn about various areas of computing, received good training in <b>mathematics</b>, <b>physics</b>, <b>statistics</b>, <b>algorithms</b> and <b>programming logic</b>, in addition to teaching me to be very self-taught.<br>&emsp;&emsp;I had the opportunity to work with various programming languages, various techniques, technologies and software, and had the opportunity to work on various projects that used both theory and practice. Furthermore, <b>USP</b> provides various events, lectures, workshops and programming competitions, in addition to having a large library and various courses included with the course.<br/>&emsp;&emsp;Finally, <b>USP</b> also provided me with courses in <b>administration</b>, <b>economics</b> and <b>marketing</b>, which helped me gain a broader view of the job market.'
    },
    
    // DASI
    dasi: {
      title: 'Designer',
      date: 'March 2020 - Dec 2021',
      description: 'The student organization <b>DASI (Academic Directory of Information Systems)</b> was my first contact with demands, projects and people. During this period, I created artwork, logos, banners and posters for events. I was able to learn a lot about <b>design and Human-Computer Interface</b>, and was able to work with various software such as <b>Adobe Photoshop</b> and <b>Canvas</b>.'
    },
    
    // Elite
    elite: {
      title: 'Scholar as College Entrance Exam Question Corrector',
      date: 'Feb 2019 - Feb 2020',
      description: 'I was a scholarship student at <b>Elite Pre-University</b> school in <b>Campinas</b>, where I corrected questions, mock exams and tests with subjects from various college entrance exams in different subjects, with the help of teachers and tutors.<br>&emsp;&emsp;I also assisted in formulating school <b>tests</b> and <b>exams</b>, evaluating the quality of created questions and obtaining a sample of how the test would be and the possible understanding of students. With this I was able to learn a lot about the subjects and it helped me a lot with the <b>college entrance exam</b>.'
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

let currentExpLang = navigator.language.startsWith('pt') ? 'pt' : 'en';

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
});
