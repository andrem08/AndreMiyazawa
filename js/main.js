// main.js - Interatividade, idioma, animações, smooth scroll
// Mantém e aprimora a troca de idioma, animações de entrada, digitação, interatividade

const LANGUAGES = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Habilidades',
      contact: 'Contato'
    },
    heroTitle: 'André Miyazawa',
    heroSubtitle: 'Engenheiro de Software - Desenvolvedor de Software - Analista de Dados',
    aboutTitle: 'Sobre mim',
    footerTitles: {
      location: 'Localização',
      social: 'Redes Sociais',
      beacons: 'Beacons'
    },
    aboutText: [
      'Meu nome é André Miyazawa, 23 anos, sou aluno da Universidade de São Paulo (USP) e estou fazendo bacharelado em Sistemas de Informação, no período noturno. Estou no meu nono semestre e atualmente morando em São Paulo, SP. Tenho bastante interesse em algoritmos, estatística e probabilidade e desenvolvimento de sites, aplicativos e jogos. Tenho várias experiencias pessoais na criação e otimização de algoritmos, sites, diversas resoluções para competições de programação e hackathons, e diversas funcionalidades específicas.',
      'Sou bem competente, muito comprometido com meu ofício e prazos, estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente. Estou sempre disposto a ajudar e colaborar com meus colegas de trabalho e estudo, e estou sempre disposto a aprender e ensinar novas tecnologias e ferramentas, e tenho bastante vontade de trabalhar.',
      'Tenho bastante experiência com Java, C e Python com o conhecimento de diversas bibliotecas e tendo 2 anos de experiencia com Python e 2 anos com Java, Tambem utilizo bastante JavaScript no meu trabalho, com 1 ano de experiência, 1 ano de experiencia em manipulação e gerenciamento de Banco de Dados e mexi bastante com Julia, Bash, C++, e um pouco de Assembly e Lua, todas estas na faculdade e em alguns cursos.'
    ],
    skillsTitle: 'Habilidades',
    skills: [
      {cat: 'Principais Linguagens', items: ['Java', 'Python', 'C++', 'NodeJS', 'R', 'Apex']},
      {cat: 'Web & Mobile', items: ['React', 'Tailwind', 'Material Design', 'DJango', 'RShiny Apps']},
      {cat: 'Banco de Dados', items: ['SQL', 'PostgreSQL', 'MongoDB', 'SOQL', 'MySQL']},
      {cat: 'Ferramentas', items: ['GitHub', 'GitLab', 'PowerBI', 'Excel', 'Salesforce', 'AWS']},
      {cat: 'Outros', items: ['Julia', 'Lua', 'Go', 'PowerQuery', 'OpenMP', 'Assembly x86', 'HTML', 'CSS']}
    ],
    contactTitle: 'Contato',
    location: 'Brazil - São Paulo (SP) - Vila Mariana - Zona Sul',
    downloadCV: 'Baixar Currículo',
    cvPt: 'Currículo em Português',
    cvEn: 'Currículo em Inglês'
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact'
    },
    heroTitle: 'André Miyazawa',
    heroSubtitle: 'Software Engineer - Software Developer - Data Analyst',
    aboutTitle: 'About Me',
    footerTitles: {
      location: 'Location',
      social: 'Social Media',
      beacons: 'Beacons'
    },
    aboutText: [
      "My name is André Miyazawa, I'm 23 years old, a student at the University of São Paulo (USP), pursuing a Bachelor's degree in Information Systems (evening program). I'm in my ninth semester and currently living in São Paulo, SP. I'm passionate about algorithms, statistics, probability, and developing websites, apps, and games. I have extensive personal experience in creating and optimizing algorithms, websites, various solutions for programming competitions and hackathons, and specific functionalities.",
      "I'm highly competent, very committed to my craft and deadlines, always seeking new challenges and opportunities to learn and grow professionally. I'm always willing to help and collaborate with my colleagues at work and school, eager to learn and teach new technologies and tools, and very motivated to work.",
      "I have solid experience with Java, C, and Python, knowledge of several libraries, 2 years of experience with Python and 2 years with Java. I also use JavaScript frequently at work (1 year of experience), 1 year of experience in database management, and have worked with Julia, Bash, C++, and a bit of Assembly and Lua, all during college and some courses."
    ],
    skillsTitle: 'Skills',
    skills: [
      {cat: 'Main Languages', items: ['Java', 'Python', 'C++', 'NodeJS', 'R', 'Apex']},
      {cat: 'Web & Mobile', items: ['React', 'Tailwind', 'Material Design', 'DJango', 'RShiny Apps']},
      {cat: 'Databases', items: ['SQL', 'PostgreSQL', 'MongoDB', 'SOQL', 'MySQL']},
      {cat: 'Tools', items: ['GitHub', 'GitLab', 'PowerBI', 'Excel', 'Salesforce', 'AWS']},
      {cat: 'Other', items: ['Julia', 'Lua', 'Go', 'PowerQuery', 'OpenMP', 'Assembly x86', 'HTML', 'CSS']}
    ],
    contactTitle: 'Contact',
    location: 'Brazil - São Paulo (SP) - Vila Mariana - Zona Sul',
    downloadCV: 'Download CV',
    cvPt: 'CV in Portuguese',
    cvEn: 'CV in English'
  }
};

let currentLang = navigator.language.startsWith('pt') ? 'pt' : 'en';

function switchLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  renderContent();
  document.querySelectorAll('.language-switch img').forEach(img => {
    img.classList.toggle('active', img.dataset.lang === lang);
  });
}

function renderContent() {
  const lang = LANGUAGES[currentLang];
  // Navigation
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const navKey = link.getAttribute('data-nav');
    link.textContent = lang.nav[navKey];
  });
  // Hero
  document.getElementById('hero-title').textContent = lang.heroTitle;
  document.getElementById('hero-subtitle').textContent = lang.heroSubtitle;
  // About
  document.getElementById('about-title').textContent = lang.aboutTitle;
  const aboutText = document.getElementById('about-text');
  aboutText.innerHTML = lang.aboutText.map(p => `<p>${p}</p>`).join('');
  // Skills
  document.getElementById('skills-title').textContent = lang.skillsTitle;
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = lang.skills.map(skillCat => `
    <div class="skill-card">
      <div class="skill-title">${skillCat.cat}</div>
      <div class="skill-info">${skillCat.items.join(', ')}</div>
    </div>
  `).join('');
  // Contact/Footer
  const footerLocation = document.getElementById('footer-location');
  footerLocation.innerHTML = `
    <div class="location-line">${lang.location.split(' - ').slice(0, 2).join(' - ')}</div>
    <div class="location-line">${lang.location.split(' - ').slice(2).join(' - ')}</div>
  `;
  document.getElementById('footer-location-title').textContent = lang.footerTitles.location;
  document.getElementById('footer-social-title').textContent = lang.footerTitles.social;
  document.getElementById('footer-beacons-title').textContent = lang.footerTitles.beacons;
  document.getElementById('download-cv').textContent = lang.downloadCV;
}

document.addEventListener('DOMContentLoaded', () => {
  // Language combobox + flag
  const langCombo = document.getElementById('lang-combobox');
  const langFlag = document.getElementById('lang-flag');
  
  function updateFlag() {
    console.log('Updating flag for language:', currentLang);
    const flagPath = currentLang === 'pt' ? 'assets/br-flag.png' : 'assets/us-flag.png';
    langFlag.src = flagPath;
    langFlag.alt = currentLang === 'pt' ? 'Bandeira do Brasil' : 'United States Flag';
  }
  
  // Set initial values
  langCombo.value = currentLang;
  updateFlag();
  
  langCombo.addEventListener('change', function() {
    currentLang = this.value;
    switchLanguage(currentLang);
    updateFlag();
  });
  switchLanguage(currentLang);

  // Typing effect for hero title
  const heroTitle = document.getElementById('hero-title');
  const fullText = LANGUAGES[currentLang].heroTitle;
  let i = 0;
  heroTitle.textContent = '';
  function typeTitle() {
    if (i < fullText.length) {
      heroTitle.textContent += fullText[i++];
      setTimeout(typeTitle, 60);
    }
  }
  typeTitle();

  // Smooth scroll for nav links
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Remover classe active de todos os links
        document.querySelectorAll('.navbar-links a').forEach(l => l.classList.remove('active'));
        // Adicionar classe active ao link clicado
        this.classList.add('active');
        
        // Calcular a posição considerando o header fixo
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Animação suave de scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Section animation on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 1s';
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.opacity = 0;
    observer.observe(sec);
  });
});
