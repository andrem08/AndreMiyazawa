// Language script for experience page
// Handles language switching on the experience.html page

const EXP_LANGUAGES = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência'
    },
    pageTitle: 'Minhas Experiências',
    backText: 'Voltar ao Portfólio',
    moreExpTitle: 'Outras Experiências',
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
    pageTitle: 'My Experience',
    backText: 'Back to Portfolio',
    moreExpTitle: 'Other Experiences',
    footerTitles: {
      location: 'Location',
      social: 'Social Media',
      beacons: 'Beacons'
    },
    location: 'Brazil - São Paulo (SP) - Vila Mariana - Zona Sul',
    downloadCV: 'Download CV'
  }
};

let expCurrentLang = navigator.language.startsWith('pt') ? 'pt' : 'en';

function expSwitchLanguage(lang) {
  expCurrentLang = lang;
  document.documentElement.lang = lang;
  expRenderContent();
}

function expRenderContent() {
  const lang = EXP_LANGUAGES[expCurrentLang];
  
  // Navigation
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const navKey = link.getAttribute('data-nav');
    if (navKey && lang.nav[navKey]) {
      const icon = link.querySelector('i');
      const iconHTML = icon ? icon.outerHTML : '';
      link.innerHTML = iconHTML + lang.nav[navKey];
    }
  });
  
  // Page title
  const pageTitle = document.getElementById('exp-page-title');
  if (pageTitle) pageTitle.textContent = lang.pageTitle;
  
  // Back button
  const backText = document.getElementById('back-text');
  if (backText) backText.textContent = lang.backText;
  
  // More experiences title
  const moreExpTitle = document.getElementById('more-exp-title');
  if (moreExpTitle) moreExpTitle.textContent = lang.moreExpTitle;
  
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
    const flagPath = expCurrentLang === 'pt' ? 'assets/br-flag.png' : 'assets/us-flag.png';
    langFlag.src = flagPath;
    langFlag.alt = expCurrentLang === 'pt' ? 'Bandeira do Brasil' : 'United States Flag';
  }
  
  // Set initial values
  langCombo.value = expCurrentLang;
  updateFlag();
  
  langCombo.addEventListener('change', function() {
    expCurrentLang = this.value;
    expSwitchLanguage(expCurrentLang);
    updateFlag();
  });
  
  expSwitchLanguage(expCurrentLang);
  
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
