# André Miyazawa — Portfólio

[![Site ao vivo](https://img.shields.io/badge/site-ao%20vivo-3b82f6?style=for-the-badge)](https://andrem08.github.io/AndreMiyazawa/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-André%20Miyazawa-8a2be2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/andre-miyazawa-2446a21b7/)
[![GitHub](https://img.shields.io/badge/GitHub-andrem08-181717?style=for-the-badge&logo=github)](https://github.com/andrem08)

Portfólio e currículo online de **André Miyazawa**, Engenheiro de Software (Salesforce · AWS · Go · Python · Dados).
Visual *dark tech* com gradientes neon, animações e versão dedicada para celular. Bilíngue (PT/EN) e sem build: é só HTML, CSS e JavaScript puros.

**🔗 https://andrem08.github.io/AndreMiyazawa/**

---

## ✨ Destaques

| | |
| --- | --- |
| 🎨 **Design dark tech** | Paleta GitHub Dark, gradientes azul → roxo, glassmorphism e brilhos (glow) |
| 🌌 **Hero animado** | Blobs "aurora", grid em movimento, spotlight que segue o cursor, cargos digitados e avatar com anel em gradiente |
| 📱 **Experiência mobile de app** | Barra de navegação inferior, carrossel de habilidades com swipe, safe areas (iPhone com notch), feedback de toque |
| 💻 **Tablet otimizado** | Layouts próprios para retrato e paisagem |
| 🧭 **Linha do tempo** | Experiências em timeline que "acende" conforme a rolagem, em bullets focados em resultados |
| 🗂️ **Projetos** | Cards com os principais repositórios do GitHub, com link direto para o código |
| 🪪 **Fatos rápidos** | Localização, formação, idiomas e interesses num card ao lado da bio |
| 🌐 **PT / EN** | Detecção automática, troca instantânea, escolha salva e suporte a `?lang=en` |
| 🖨️ **Vira currículo em PDF** | `Ctrl+P` / "Salvar como PDF" gera um currículo limpo, em fundo branco |
| 📲 **Instalável** | Web App Manifest: dá para adicionar à tela inicial do celular |
| 🔎 **SEO** | Meta tags, Open Graph, JSON-LD (`Person`), sitemap e robots |
| ♿ **Acessível** | Skip link, landmarks semânticos, ARIA, foco visível e respeito a `prefers-reduced-motion` |

## 🗂️ Estrutura

```
├── index.html            # Página única: hero, sobre, habilidades, experiência, projetos, formação, contato
├── experience.html       # Redireciona links antigos para index.html#experience
├── 404.html              # Página de erro personalizada (GitHub Pages)
├── manifest.webmanifest  # PWA / instalação no celular
├── robots.txt, sitemap.xml
├── css/
│   ├── style.css         # Design system + layout responsivo (desktop, tablet, celular, toque)
│   └── print.css         # Estilo de impressão / PDF
├── js/
│   ├── i18n.js           # TODO o conteúdo (PT/EN): textos, experiências, habilidades, links do CV
│   └── app.js            # Renderização, troca de idioma, animações e interações
├── assets/               # Foto, favicon, bandeiras, QR code e PDFs do currículo (assets/cv/)
└── www/                  # Logos das empresas
```

## ✏️ Como editar o conteúdo

Todo o texto fica em **[`js/i18n.js`](js/i18n.js)**. Não é preciso mexer no HTML.

- **Nova experiência:** adicione a chave em `EXPERIENCE_META` (logo, empresa, tecnologias) e os bullets em `LANGUAGES.pt.experience.items` e `LANGUAGES.en.experience.items`. Depois inclua a chave em `MAIN_EXPERIENCES` ou `MORE_EXPERIENCES`, no topo de [`js/app.js`](js/app.js).
- **Projetos:** adicione o repositório em `PROJECTS` (nome, ícone e tags) e a descrição em `projects.items`, nos dois idiomas.
- **Habilidades:** `SKILL_ITEMS` (itens), `SKILL_ICONS` (ícones [Font Awesome](https://fontawesome.com/icons)) e `skills.cats` (nomes das categorias, por idioma).
- **Currículo (PDF):** substitua os arquivos em `assets/cv/` (`andre-miyazawa-cv-pt.pdf` e `andre-miyazawa-cv-en.pdf`), mantendo os mesmos nomes.
- **Certificações e reconhecimentos:** `CREDENTIALS` e `education.awards`.
- **Idade e anos de experiência:** calculados automaticamente a partir de `BIRTH_DATE` e `CAREER_START`.
- **Cores:** variáveis em `:root`, no topo de [`css/style.css`](css/style.css).

## 🚀 Rodando localmente

Não há dependências nem build. Basta servir a pasta:

```bash
# Python
python -m http.server 8000

# ou Node
npx serve .
```

Abra http://localhost:8000. Para testar em inglês: http://localhost:8000/?lang=en

## 🌍 Deploy

O site é publicado pelo **GitHub Pages** a partir da branch `master`. Um push na `master` já atualiza o site.

## 🛠️ Tecnologias

HTML5 semântico · CSS3 (custom properties, grid, `backdrop-filter`, scroll-snap, media queries de toque) · JavaScript ES2020 (IntersectionObserver, Web Share API, Clipboard API) · [Inter](https://rsms.me/inter/) e [JetBrains Mono](https://www.jetbrains.com/lp/mono/) · [Font Awesome 6](https://fontawesome.com/)

O visual foi inspirado no portfólio [issei/mauricio-site](https://github.com/issei/mauricio-site).

## ✅ Qualidade

O checklist de melhorias e validação está em [`docs/CHECKLIST.md`](docs/CHECKLIST.md). O site foi testado em 7 viewports (iPhone SE, iPhone 15, Android pequeno, iPad retrato/paisagem, laptop e desktop): sem erros de JS ou de rede e sem scroll horizontal.

## 📞 Contato

- ✉️ andre08.m@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/andre-miyazawa-2446a21b7/)
- 🐙 [GitHub](https://github.com/andrem08) · 🦊 [GitLab](https://gitlab.com/andrem08)
- ✈️ [Telegram](https://t.me/andrmiyazawa)
- 🔗 [Beacons](https://beacons.ai/andre.miyazawa)
