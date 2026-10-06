# Checklist do redesign

Cada item foi implementado e validado com testes automatizados em navegador real (Microsoft Edge headless) e revisão visual por screenshots em celular, tablet e desktop.

**Resultado final: 75/75 testes passando.**

## Design

- [x] **1. Design system**: tokens de cor (GitHub Dark `#0d1117`, azul `#3b82f6`, roxo `#8a2be2`, ciano, rosa), fontes Inter + JetBrains Mono e gradientes neon. Substitui o roxo chapado antigo.
- [x] **2. Navbar glass**: fica transparente no topo e vira vidro fosco ao rolar; destaca a seção ativa. *Validado: link ativo muda com a rolagem.*
- [x] **3. Hero animado**: blobs aurora, grid em movimento, spotlight que segue o mouse, cargos digitados, avatar com anel cônico girando e chips flutuantes (Salesforce, AWS, Go). *Validado: texto digitado aparece em todos os dispositivos.*
- [x] **4. Faixa de tecnologias**: marquee infinito com ícones, que pausa ao passar o mouse.
- [x] **5. Números animados**: contadores (anos de experiência calculados automaticamente). *Validado: contador termina em "4+".*
- [x] **6. Sobre mim**: foto com borda em gradiente, tag de código estilo IDE e cards de destaque.
- [x] **7. Habilidades**: cards com ícone, chips e brilho que segue o cursor.
- [x] **8. Timeline de experiência**: linha que "acende" com a rolagem, logos, datas em pílula (o cargo atual em verde), "ler mais" e "mais experiências". *Validado: ambos expandem.*
- [x] **9. Formação**: card dedicado à USP, com disciplinas em chips.
- [x] **10. Contato**: card CTA, copiar e-mail com um toque (toast de confirmação), CV no idioma atual e QR do Beacons legível.
- [x] **11. Detalhes**: barra de progresso de leitura, botão "voltar ao topo" e rodapé. *Validado: voltar ao topo leva a scrollY=0.*

## Celular e tablet

- [x] **12. Barra de navegação inferior estilo app** (celular): ícones ao alcance do polegar, aba ativa com brilho; Formação acende a aba "Carreira". *Validado: aparece só ≤760px; aba correta ativa.*
- [x] **13. Carrossel de habilidades com swipe** e indicadores (scroll-snap). *Validado: indicador acompanha o swipe.*
- [x] **14. Safe areas** (`viewport-fit=cover`, `env(safe-area-inset-*)`) para iPhones com notch/home bar.
- [x] **15. Toque**: sem hover "grudado" em telas touch, com feedback de toque (`:active`) e alvos de toque ≥ 30px. *Validado em 5 dispositivos touch.*
- [x] **16. Performance mobile**: blur mais leve e menos blobs em telas pequenas.
- [x] **17. Tablet**: navbar compacta e layouts de 2 colunas em retrato e paisagem. *Validado: corrigido overflow no iPad retrato.*
- [x] **18. Compartilhar nativo** (Web Share API), visível só onde há suporte.
- [x] **19. Instalável** (Web App Manifest + ícones + theme-color).

## Conteúdo, SEO e acessibilidade

- [x] **20. Site em página única**: `experience.html` redireciona para `#experience`, então links antigos continuam funcionando. *Validado.*
- [x] **21. i18n reescrito**: um único arquivo de conteúdo; detecção automática, escolha salva, `?lang=en` e `<html lang>` atualizado. *Validado: troca, persistência após recarregar e link do CV por idioma.*
- [x] **22. SEO**: description, canonical, Open Graph/Twitter, JSON-LD `Person`, `sitemap.xml`, `robots.txt`. *Validado.*
- [x] **23. Acessibilidade**: skip link, landmarks, `aria-*` nos botões, foco visível, `prefers-reduced-motion`. *Validado: com movimento reduzido o cargo fica estático.*
- [x] **24. Impressão / PDF**: `print.css` transforma a página num currículo limpo em fundo branco. *Validado: PDF gerado e revisado.*
- [x] **25. Página 404** personalizada. *Validado.*

## Limpeza

- [x] Removidos arquivos sem uso: `css/modern-new.css`, `js/main.js`, `js/experience.js`, `js/languageScriptExperience.js`, `assets/night-city.jpg`, `assets/LogoCoffeeBlack.*`, `assets/andre.miyazawa_beacons-gray.png` e a pasta `.idea/` (config do IDE).
- [x] `.gitignore` criado para configs de IDE e arquivos do SO.
- [x] Font Awesome carregado como CSS (antes era um JS que reescrevia o DOM).
- [x] README reescrito.

## Rodada 2: conteúdo e itens que faltavam

Pesquisa em guias de currículo e portfólio para desenvolvedores (2026): recrutadores fazem uma triagem de ~7s, então os itens mais cobrados são **projetos**, **resultados em bullets**, **idiomas** e **contato claro**. O conteúdo novo foi tirado dos currículos PDF (PT/EN) e dos repositórios públicos do GitHub; nada foi inventado.

- [x] **26. Sobre sem foto**: a foto grande saiu; no lugar entrou um card de "fatos rápidos" (localização, formação, idiomas, idade, interesses) com botão de CV. *Validado: 5 fatos renderizados em todos os dispositivos.*
- [x] **27. Favicon original** (`LogoCoffeeWhite.ico`) de volta, também na 404 e no manifest. *Validado.*
- [x] **28. Textos reescritos**: tom mais profissional, sem exageros ("∞ cafés", "respondo rápido"), alinhados ao currículo. *Revisado em PT e EN.*
- [x] **29. Experiência em bullets** focados em ação e resultado, em vez de parágrafos longos. *Validado: 13 bullets nas experiências principais.*
- [x] **30. Seção Projetos** com 6 repositórios reais do GitHub e link "ver todos". *Validado: 6 cards, links corretos.*
- [x] **31. Idiomas** (Português nativo, Inglês fluente) e **interesses**, tirados do CV.
- [x] **32. E-mail atualizado** para `andre08.m@gmail.com`, o mesmo do currículo (o `@usp.br` foi removido). *Validado: nenhum `usp.br` na página.*
- [x] **33. Estatística "2 idiomas"** no lugar de "∞ cafés".
- [x] Removidos `assets/Eu.jpg` e `assets/favicon.svg` (sem uso).

### Sugestões que dependem de você

Esses itens costumam fazer diferença, mas precisam de dados que não estão no site nem no CV:

- [ ] **Números de impacto** nas experiências (ex.: "reduziu o tempo de formalização em X%", "N gestores usam o painel").
- [ ] **Certificações** (ex.: Salesforce Platform Developer I, AWS Cloud Practitioner), se houver.
- [ ] **Recomendações** do LinkedIn (1–2 frases de colegas ou gestores).
- [ ] **Projetos profissionais/demos**: prints ou links ao vivo, quando puderem ser públicos.

## Rodada 3: LinkedIn, certificações e página extra

- [x] **34. CV hospedado no site** (`assets/cv/`), sem depender do Google Drive. *Validado: PDFs servidos com HTTP 200; link muda com o idioma.*
- [x] **35. Um único botão "Baixar CV"**, no final (Contato). *Validado.*
- [x] **36. Faixa compacta de certificações e reconhecimentos** na seção Formação (AWS, Salesforce JS Developer, Salesforce AI Associate, Claude Code in Action, mérito Itaú, Time de Fenômenos). *Validado: 6 itens.*
- [x] **37. Selo `#ituber`** na experiência da Rede.
- [x] **38. Página não listada "Além do currículo"**, com jornada em capítulos, como trabalho, recomendações, certificações e curiosidades, em PT/EN. Não tem links no site, fica fora do sitemap e tem `noindex`. *Validado em 7 dispositivos, sem erros nem overflow, nos dois idiomas.*

## Rodada 4: rodapé e página legal

- [x] **39. Rodapé** "© ano André Miyazawa. Todos os direitos reservados. · Privacidade · Termos · Cookies" em todas as páginas, substituindo o "Feito com HTML, CSS e JavaScript". *Validado: links abrem a seção certa.*
- [x] **40. Página única `legal.html`** (sem índice, PT/EN) com privacidade, termos e cookies, descrevendo o que o site **realmente** faz: nenhum cookie, rastreador ou formulário; terceiros (GitHub Pages, Google Fonts, cdnjs, API do GitHub); só a preferência de idioma (`lang`) fica no navegador. *Validado em 7 dispositivos: sem erros nem overflow, `document.cookie` vazio.*

## Matriz de testes

| Dispositivo | Viewport | Erros JS/rede | Overflow horizontal | Navegação |
| --- | --- | --- | --- | --- |
| iPhone SE | 375×667 | ✅ nenhum | ✅ nenhum | barra inferior |
| iPhone 15 | 393×852 | ✅ nenhum | ✅ nenhum | barra inferior |
| Android pequeno | 360×740 | ✅ nenhum | ✅ nenhum | barra inferior |
| iPad retrato | 768×1024 | ✅ nenhum | ✅ nenhum | topo compacto |
| iPad paisagem | 1180×820 | ✅ nenhum | ✅ nenhum | topo |
| Laptop | 1366×768 | ✅ nenhum | ✅ nenhum | topo |
| Desktop | 1920×1080 | ✅ nenhum | ✅ nenhum | topo |
