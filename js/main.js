// main.js - Interatividade, idioma, animações, smooth scroll
// Mantém e aprimora a troca de idioma, animações de entrada, digitação, interatividade
// Calculate age based on birth date
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

const birthDate = '2001-04-08';
const age = calculateAge(birthDate);


const LANGUAGES = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência'
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
      `Meu nome é André Miyazawa, ${age} anos, Engenheiro de Software Júnior na Rede, com foco principal em soluções Salesforce e desenvolvimento de microserviços em nuvem (AWS).`,
      'Fiz Bacharel em Sistemas de Informação pela Universidade de São Paulo (USP), formação que me proporcionou uma base robusta em algoritmos, estatística e arquitetura de software.',
      'Minha trajetória profissional foi construída sobre um forte alicerce analítico. Iniciei minha carreira no Itaú Unibanco, atuando com modelagem de Risco de Crédito (Python, SQL, SAS), e no Inmetro, onde desenvolvi uma aplicação completa de machine learning (R, Python, JS).',
      'Essa experiência em dados foi fundamental para minha transição para a engenharia de software na Rede. Comecei como estagiário focado em desenvolvimento Salesforce (Apex, LWC, Flow) e, após a efetivação, assumi maiores responsabilidades técnicas como Engenheiro. Hoje, além de liderar otimizações na plataforma de CRM, também atuo na arquitetura e desenvolvimento de microserviços em AWS utilizando Go e Python.'
    ],
    skillsTitle: 'Habilidades',
    skills: [
      {cat: 'Linguagens', items: ['Python', 'Java', 'Go', 'JavaScript', 'SQL', 'R']},
      {cat: 'Salesforce', items: ['Apex', 'LWC', 'Flow', 'SOQL/SOSL', 'Aura', 'Visualforce']},
      {cat: 'Cloud & DevOps', items: ['AWS (EC2, Lambda, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']},
      {cat: 'Bancos de Dados', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB']},
      {cat: 'Frameworks', items: ['React', 'Django', 'Node.js', 'RShiny']},
      {cat: 'Ferramentas', items: ['Git', 'Datadog', 'Grafana', 'PowerBI', 'Excel']}
    ],
    contactTitle: 'Contato',
    location: 'Brazil - São Paulo (SP) - Vila Mariana - Zona Sul',
    downloadCV: 'Baixar Currículo',
    cvPt: 'Currículo em Português',
    cvEn: 'Currículo em Inglês',
    experienceTitle: 'Experiência',
    experienceSummaryTitle: 'Trajetória Profissional',
    experienceSummaryText: 'Desde 2022, atuando em desenvolvimento de software, análise de dados e engenharia de software. Experiência em Salesforce, AWS, Python, e diversas tecnologias modernas.',
    experienceCtaText: 'Ver Experiências Completas'
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience'
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
      `Hello, I'm André Miyazawa, ${age} years old, Junior Software Engineer at Rede, with a primary focus on Salesforce solutions and cloud microservices development (AWS).`,
      'I hold a Bachelor\'s degree in Information Systems from the University of São Paulo (USP), which provided me with a solid foundation in algorithms, statistics, and software architecture.',
      'My professional journey was built on a strong analytical foundation. I started my career at Itaú Unibanco, working with Credit Risk modeling (Python, SQL, SAS), and at Inmetro, where I developed a complete machine learning application (R, Python, JS).',
      'This data experience was fundamental for my transition to software engineering at Rede. I started as an intern focused on Salesforce development (Apex, LWC, Flow) and, after becoming a full-time employee, I took on greater technical responsibilities as an Engineer. Today, in addition to leading optimizations on the CRM platform, I also work on the architecture and development of microservices on AWS using Go and Python.'
    ],
    skillsTitle: 'Skills',
    skills: [
      {cat: 'Languages', items: ['Python', 'Java', 'Go', 'JavaScript', 'SQL', 'R']},
      {cat: 'Salesforce', items: ['Apex', 'LWC', 'Flow', 'SOQL/SOSL', 'Aura', 'Visualforce']},
      {cat: 'Cloud & DevOps', items: ['AWS (EC2, Lambda, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']},
      {cat: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB']},
      {cat: 'Frameworks', items: ['React', 'Django', 'Node.js', 'RShiny']},
      {cat: 'Tools', items: ['Git', 'Datadog', 'Grafana', 'PowerBI', 'Excel']}
    ],
    contactTitle: 'Contact',
    location: 'Brazil - São Paulo (SP) - Vila Mariana - Zona Sul',
    downloadCV: 'Download CV',
    cvPt: 'CV in Portuguese',
    cvEn: 'CV in English',
    experienceTitle: 'Experience',
    experienceSummaryTitle: 'Professional Journey',
    experienceSummaryText: 'Since 2022, working in software development, data analysis and software engineering. Experience in Salesforce, AWS, Python, and various modern technologies.',
    experienceCtaText: 'View Full Experience'
  }
};

let currentLang = navigator.language.startsWith('en') ? 'en' : 'pt';

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
    if (navKey && lang.nav[navKey]) {
      const icon = link.querySelector('i');
      const iconHTML = icon ? icon.outerHTML : '';
      link.innerHTML = iconHTML + lang.nav[navKey];
    }
  });
  // Hero
  document.getElementById('hero-title').textContent = lang.heroTitle;
  document.getElementById('hero-subtitle').textContent = lang.heroSubtitle;
  // About
  document.getElementById('about-title').textContent = lang.aboutTitle;
  const aboutText = document.getElementById('about-text');
  
  // Typing animation for about text
  const paragraphs = lang.aboutText;
  aboutText.innerHTML = '';
  let currentParagraph = 0;
  let currentChar = 0;
  
  function typeAboutText() {
    if (currentParagraph < paragraphs.length) {
      if (currentChar === 0) {
        const p = document.createElement('p');
        aboutText.appendChild(p);
      }
      
      const currentP = aboutText.children[currentParagraph];
      const fullText = paragraphs[currentParagraph];
      
      if (currentChar < fullText.length) {
        currentP.innerHTML = fullText.substring(0, currentChar + 1);
        currentChar++;
        setTimeout(typeAboutText, 5); // 10ms para digitação rápida
      } else {
        currentChar = 0;
        currentParagraph++;
        setTimeout(typeAboutText, 100); // Pausa entre parágrafos
      }
    }
  }
  
  typeAboutText();
  
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
  // Experience
  document.getElementById('experience-title').textContent = lang.experienceTitle;
  document.getElementById('experience-summary-title').textContent = lang.experienceSummaryTitle;
  document.getElementById('experience-summary-text').textContent = lang.experienceSummaryText;
  document.getElementById('experience-cta-text').textContent = lang.experienceCtaText;
}

document.addEventListener('DOMContentLoaded', () => {
  // Hide/show header on scroll (mobile only)
  let lastScrollTop = 0;
  const header = document.querySelector('.header-glass');
  const scrollThreshold = 5;
  let isHeaderInteracting = false;

  // Prevent header hiding when interacting with it
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
    // Only apply on mobile (screen width < 768px)
    if (window.innerWidth < 768) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (!isHeaderInteracting && Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down & past 100px
          header.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
      }
    } else {
      // Reset on desktop
      header.style.transform = 'translateY(0)';
    }
  });

  // Reset header interaction flag after touch/click
  document.addEventListener('touchend', () => {
    setTimeout(() => {
      isHeaderInteracting = false;
    }, 300);
  });

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
      setTimeout(typeTitle, 40);
    } else {
      // Start subtitle typing after title finishes
      setTimeout(typeSubtitle, 200);
    }
  }
  typeTitle();

  // Typing effect for hero subtitle
  const heroSubtitle = document.getElementById('hero-subtitle');
  const fullSubtitleText = LANGUAGES[currentLang].heroSubtitle;
  let j = 0;
  heroSubtitle.textContent = '';
  function typeSubtitle() {
    if (j < fullSubtitleText.length) {
      heroSubtitle.textContent += fullSubtitleText[j++];
      setTimeout(typeSubtitle, 25);
    }
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only apply smooth scroll to anchor links (starting with #)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
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
      }
      // For external links (like experience.html), let the default behavior happen
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

  // Experience card click handler
  const experienceCard = document.getElementById('experience-card-link');
  if (experienceCard) {
    experienceCard.addEventListener('click', function(e) {
      window.location.href = 'experience.html';
    });
  }
});
