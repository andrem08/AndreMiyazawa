# 🌟 André Miyazawa - Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://andrem08.github.io/AndreMiyazawa/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-andrem08-181717?logo=github)](https://github.com/andrem08)

> Modern, responsive portfolio website showcasing my journey as a Software Engineer and Developer.

**🔗 Live Website:** [https://andrem08.github.io/AndreMiyazawa/](https://andrem08.github.io/AndreMiyazawa/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Contact](#contact)
- [License](#license)

---

## 🎯 About

This is my personal portfolio website built with modern web technologies. It showcases my professional experience, technical skills, and academic background. The site features a glassmorphism design theme with smooth animations and full bilingual support (Portuguese/English).

### Key Highlights

- ✨ **Modern Design** - Glassmorphism UI with dark theme
- 🌐 **Bilingual** - Full Portuguese and English support
- 📱 **Responsive** - Optimized for all devices
- ⚡ **Performance** - Fast loading and smooth animations
- 🎨 **Interactive** - Hover effects and dynamic content

---

## ✨ Features

### 🏠 Home Page

- **Hero Section** - Eye-catching introduction with animated text
- **About Me** - Comprehensive background and interests
- **Skills Grid** - Technical skills organized by category
- **Experience Card** - Quick access to detailed experience page

### 💼 Experience Page

- **Detailed Work History** - Complete professional journey
- **Company Logos** - Visual representation with hover effects
- **Technology Tags** - Tools and technologies for each role
- **Timeline View** - Chronological experience layout
- **Toggle Sections** - Show/hide additional experiences

### 🎨 Design Features

- **Glassmorphism Theme** - Modern frosted glass effect
- **Smooth Animations** - CSS transitions and hover effects
- **Auto-hiding Header** - Mobile optimization
- **Language Switcher** - Real-time language toggle with flags
- **Responsive Navigation** - Fixed bottom nav on mobile, top nav on desktop

---

## 🛠️ Technologies

### Frontend

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality

### Design & UX

- **Glassmorphism** - Frosted glass UI design
- **CSS Grid & Flexbox** - Modern layout techniques
- **Custom Animations** - Smooth transitions and effects
- **Mobile-First Design** - Responsive from the ground up

### Tools & Libraries

- **Font Awesome 6.3** - Icon library
- **Google Fonts** - Montserrat & Lato typography
- **Git/GitHub** - Version control and hosting

---

## 📁 Project Structure

```
AndreMiyazawa/
│
├── index.html                  # Main landing page
├── experience.html             # Detailed experience page
├── README.md                   # Project documentation
│
├── assets/                     # Images and icons
│   ├── LogoCoffeeWhite.ico
│   ├── Eu.png
│   ├── night-city.jpg
│   ├── br-flag.png
│   ├── us-flag.png
│   └── andre.miyazawa_beacons.png
│
├── css/
│   └── modern-new.css          # Main stylesheet with all styling
│
├── js/
│   ├── main.js                 # Home page logic and translations
│   └── experience.js           # Experience page logic and translations
│
└── www/                        # Company logos and images
    ├── redecard-logo.jpeg
    ├── Itaú_Unibanco_logo.png
    ├── inmetro_logo.png
    ├── usp-logo.png
    ├── dasi-usp.jpeg
    └── elite-logo.jpg
```

---

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (optional, for version control)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/andrem08/AndreMiyazawa.git
   cd AndreMiyazawa
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **Access locally**
   - Open `http://localhost:8000` in your browser

---

## 💻 Usage

### Navigation

- **Home** - Main landing page with overview
- **About** - Personal background and bio
- **Skills** - Technical skills by category
- **Experience** - Detailed work history and education

### Language Toggle

1. Click the language dropdown in the header
2. Select **BR** for Portuguese or **EN** for English
3. Content updates instantly across the entire site

### Experience Page

- Click "Ver Experiências Completas" / "View Full Experience" button
- Browse main experiences (Rede, Itaú, Inmetro, USP)
- Click "Mais Experiências" / "More Experience" for additional roles
- Click company logos for hover effects
- Hover over tool items for animations

---

## 🎨 Customization

### Changing Colors

Edit CSS variables in `css/modern-new.css`:

```css
:root {
  --primary: rgba(12, 11, 28, 1);      /* Background */
  --secondary: #231942;                 /* Secondary bg */
  --accent: #7f5af0;                    /* Accent color */
  --glass-bg: rgba(23, 18, 38, 0.92);  /* Glass effect */
  --text-light: #fff;                   /* Text color */
}
```

### Adding New Skills

Edit `js/main.js` and add to the skills array:

```javascript
skills: [
  {cat: 'Category Name', items: ['Skill 1', 'Skill 2', 'Skill 3']},
  // Add more categories
]
```

### Adding Experience

1. Edit `experience.html` - Add new experience item
2. Edit `js/experience.js` - Add translations for both languages
3. Update the rendering function to include new IDs

---

## 📱 Responsive Design

### Mobile (< 768px)

- Bottom navigation bar with icons
- Stacked layout for sections
- Smaller text sizes for readability
- Auto-hiding header on scroll
- Touch-optimized interactions

### Tablet (768px - 1024px)

- Top navigation bar
- Grid layouts for skills
- Improved spacing and typography

### Desktop (> 1024px)

- Full horizontal navigation
- Larger hero section
- Multi-column layouts
- Enhanced hover effects
- Desktop-optimized footer

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |
| Opera   | Latest  | ✅ Full |

### Features Used

- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- ES6+ JavaScript
- Intersection Observer API
- CSS Backdrop Filter (Glassmorphism)

---

## 📞 Contact

**André Miyazawa**

- 🌐 Website: [https://andrem08.github.io/AndreMiyazawa/](https://andrem08.github.io/AndreMiyazawa/)
- 💼 LinkedIn: [andre-miyazawa](https://www.linkedin.com/in/andre-miyazawa-2446a21b7/)
- 🐙 GitHub: [@andrem08](https://github.com/andrem08)
- 📧 Email: andre08.m@usp.br
- 💬 Telegram: [@andrmiyazawa](https://t.me/andrmiyazawa)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for typography
- USP (Universidade de São Paulo) for education
- All companies and organizations in my professional journey

---

## 🔄 Updates & Changelog

### Version 2.0 (Current)
- ✅ Complete redesign with glassmorphism theme
- ✅ Bilingual support (PT/EN)
- ✅ Separate experience page
- ✅ Mobile-first responsive design
- ✅ Enhanced animations and interactions
- ✅ Improved performance and accessibility

---

<div align="center">

**Made with ❤️ by André Miyazawa**

⭐ Star this repo if you found it helpful!

</div>
