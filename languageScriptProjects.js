// Function to detect the user's language settings
function detectUserLanguage() {
    // Get the user's preferred language from the browser
    let userLanguage = navigator.language || navigator.userLanguage;

    // Check if the language is already stored in local storage
    let storedLanguage = localStorage.getItem('language');

    // If no language is stored, use the detected language
    if (!storedLanguage) {
        // Set the language to 'en' or 'pt' based on the detected language
        let language = userLanguage.startsWith('pt') ? 'pt' : 'en';
        localStorage.setItem('language', language);
        return language;
    } else {
        // Use the stored language
        return storedLanguage;
    }
}
function updateLanguageExperience(language) {
    const content = {
        'pt': {
            'projects-title': 'Desenvolvimento Web',
            'projects-subtitle': `&emsp;&emsp;Aqui estão alguns dos projetos de desenvolvimento web que eu desenvolvi durante a minha
                    carreira
                    como desenvolvedo.
                    Alguns deles foram feitos para disciplinas, outros para bolsas de estudo e outros por hobby.<br>
                    &emsp;&emsp;Vale ressaltar este site, que foi produzido 100% por mim, desde o design até a
                    programação, e
                    que serviu tanto para meu aprendizado como para divulgar meus projetos. GitHub do projeto:
                    <a href="https://github.com/andrem08/AndreMiyazawa" target="_blank">Repositório do Github</a>.`,
            'page-show-image-TLLM-description-1' :'Página Home do site The Love Language Market',
            'page-show-image-TLLM-description-2' :'Os produtos, com imagens e preços, que o usuário pode comprar.',
            'page-show-image-TLLM-description-3' :'Um produto exemplo, com preço, descrição, cores e tamanhos disponíveis, e as medidas dos tamanhos.',
            'page-show-image-TLLM-description-4' :'Parte mostrando apenas os produtos que são camisas.',
            'projects-webstore-description': `
                    &emsp;&emsp;Desenvolvi o site The Love Language Market como um projeto de e-commerce, utilizando
                    tecnologias como ReactJS, Tailwind, NodeJS e MongoDB. Este site, ainda em fase de desenvolvimento
                    e não publicado, oferece venda de produtos tanto por drop-shipping quanto por print on demand.
                    <br>
                    &emsp;&emsp;Entre suas funcionalidades, destacam-se o sistema de login e cadastro, carrinho de compras
                    , sistema de pagamento, avaliação de produtos e uma ferramenta de busca, proporcionando uma experiência
                    completa e integrada para o usuário.
                    `,
            'page-show-image-inmetro-description-1' : 'Página Inicial do Aplicativo Inmetro Data Viewer mostrando as funcionalidades do aplicativo.',
            'page-show-image-inmetro-description-2' : 'Tabelas e gráficos interativos, com mais de 16 tipos de gráficos e diversas configurações para o usuário.',
            'page-show-image-inmetro-description-3' : 'Teste de verificação de normalidade dos dados, com tabelas e gráficos.',
            'page-show-image-inmetro-description-4' : 'Análise de homogetenidade de variâncias, com os testes de Bartlett, Levene, teste F e o teste de Fligner-Killeen.',
            'page-show-image-inmetro-description-5' : 'Testes paramétricos como o Teste T e Teste ANOVA, com tabelas e gráficos.',
            'page-show-image-inmetro-description-6' : 'Testes não paramétricos como o Teste de Wilcoxon e o Teste de Kruskal-Wallis, com tabelas e gráficos.',
            'projects-inmetro-description': `
                    &emsp;&emsp; O Inmetro Data Viewer é um aplicativo de estatística desenvolvido em R, com a
                    utilização
                    do pacote Shiny para a minha bolsa de iniciação científica no Instituto Nacional de Metrologia em
                    conjunto com a Norte Energia. Tanto o backend quanto o frontend foram desenvolvidos por mim, com a
                    ajuda
                    do pesquisador Werickson Rocha com a parte estatística e a parte de testes.
                    <br>
                    &emsp;&emsp;O aplicativo é projetado para ajudar estudantes, professores, pesquisadores e
                    profissionais da área, para visualizar e analisar dados de maneira eficiente e intuitiva. Com ele, é
                    possível importar como arquivos Excel, e transformá-los em gráficos interativos e informativos. Além
                    disso, o aplicativo oferece uma ampla gama de testes estatísticos, incluindo testes t , ANOVA,
                    MANOVA e
                    muito mais, para ajudar a obter insights precisos sobre os dados.<br><br>
                    Link para o site: <a href="https://andremiyazawa08.shinyapps.io/Visualizacao_de_Dados_do_Inmetro/"
                                         target="_blank">Inmetro Data Viewer</a><br>
                    Link para o github do projeto: <a href="https://github.com/andrem08/ShinyDataVisualization"
                                                      target="_blank">Repositório do Github</a>
                  `,
            'page-show-image-shiny-HC-description-1' : 'Página Inicial do Aplicativo Shiny Health Care explicando um pouco o propósito do aplicativo.',
            'page-show-image-shiny-HC-description-2' : 'Mostra uma tabela de todas as vitaminas, com os benefícios, alimentos que contém, a quantidade diária recomendada e muito mais. O usuário pode filtrar por vitaminas e ordenar por qualquer coluna.',
            'page-show-image-shiny-HC-description-3' : 'Uma verificação de IMC (BMI em ingles) dado o tamanho e peso do usuário, e colocando-o em uma classificação de acordo com a OMS.',
            'page-show-image-shiny-HC-description-4' : 'Análise de homogetenidade de variâncias, com os testes de Bartlett, Levene, teste F e o teste de Fligner-Killeen.',
            'page-show-image-shiny-HC-description-5' : 'Testes paramétricos como o Teste T e Teste ANOVA, com tabelas e gráficos.',
            'page-show-image-shiny-HC-description-6' : 'Testes não paramétricos como o Teste de Wilcoxon e o Teste de Kruskal-Wallis, com tabelas e gráficos.',
            'projects-health-description' : `
                    &emsp;&emsp; O site Shiny Health Care foi o meu primeiro grande projeto de desenvolvimento web, para eu
                    aprender
                    tanto a linguagem R quanto a biblioteca Shiny. O site foi desenvolvido para o processo seletivo da
                    bolsa de inicição científica do Instituto Nacional de Metrologia, Qualidade e Tecnologia (Inmetro).
                    Infelizmente, o site não está mais no ar e não funciona nas novas versões do RSudio, mas o código
                    fonte está disponível no meu GitHub, e pode ser rodado localmente (Documentação no GitHub).
                    <br>
                    &emsp;&emsp;
                    O aplicativo é uma demo que foi criado para te ajudar a cuidar saúde com mais facilidade,
                    organizar tudo o que você precisa saber sobre sua saúde no dia a dia, fácil de entender e tudo em um
                    só
                    app. <br><br>
                    Repositório do GitHub: <a href="https://github.com/andrem08/ShinyHealthCare"
                                              target="_blank">ShinyHealthCare</a>
                    `,
            'page-show-image-toolsGen-description' : 'Página Inicial e funcionalidades do aplicativo Tools Generator. Mostra a geração de CPF\'s, CNPJ\'s e RG\'s aleatórios.',
            'projects-tools-description': `
                    &emsp;&emsp; O Tools Generator foi o meu primeiro site de desenvolvimento web, para eu aprender
                    HTML, CSS e JavaScript. O site foi desenvolvido para um curso de desenvolvimento web disponível na
                    Coursera.
                    <br>
                    &emsp;&emsp;O aplicativo foi feito para gerar CPF's, CNPJ's e RG's aleatórios para serem utilizados
                    em
                    testes de software, ou para qualquer outra finalidade que o usuário desejar. <br><br>
                    Link para o site: <a href="https://andrem08.github.io/generatorTools"
                                         target="_blank">Tools Generator</a><br>
                    Link para o github do projeto: <a href="https://github.com/andrem08/generatorTools"
                                                      target="_blank">Repositório do Github</a>
                    `
        },
        'en': {
            'projects-title': 'Web Development',
            'projects-subtitle': `&emsp;&emsp;Here are some of the web development projects that I developed during my career as a
                    developer.
                    Some of them were made for disciplines, others for scholarships and others for hobby.<br>
                    &emsp;&emsp;It is worth mentioning this site, which was produced 100% by me, from design to
                    programming, and
                    that served both for my learning and to promote my projects. GitHub of the project:
                    <a href="https://github.com/andrem08/AndreMiyazawa" target="_blank">GitHub Repository</a>.`,
            'page-show-image-TLLM-description-1' :'Home page of The Love Language Market site',
            'page-show-image-TLLM-description-2' :'The products, with images and prices, that the user can buy.',
            'page-show-image-TLLM-description-3' :'An example product, with price, description, available colors and sizes, and the measurements of the sizes.',
            'page-show-image-TLLM-description-4' :'Part showing only the products that are shirts.',
            'projects-webstore-description': `
                    &emsp;&emsp;I developed The Love Language Market website as an e-commerce project, using
                    technologies such as ReactJS, Tailwind, NodeJS and MongoDB. This site, still under development
                    and not published, offers product sales both by drop-shipping and by print on demand.
                    <br>
                    &emsp;&emsp;Among its features, the login and registration system, shopping cart
                    , payment system, product rating and a search tool stand out, providing an experience
                    complete and integrated for the user.
                    `,
            'page-show-image-inmetro-description-1' : 'Initial Page of Inmetro Data Viewer App showing the functionalities of the app.',
            'page-show-image-inmetro-description-2' : 'Interactive tables and graphics, with more than 16 types of graphics and several settings for the user.',
            'page-show-image-inmetro-description-3' : 'Normality data verification test, with tables and graphics.',
            'page-show-image-inmetro-description-4' : 'Homogeneity of variances analysis, with Bartlett, Levene, F test and Fligner-Killeen test.',
            'page-show-image-inmetro-description-5' : 'Parametric tests like T Test and ANOVA Test, with tables and graphics.',
            'page-show-image-inmetro-description-6' : 'Non-parametric tests like Wilcoxon Test and Kruskal-Wallis Test, with tables and graphics.',
            'projects-inmetro-description': `
                    &emsp;&emsp; The Inmetro Data Viewer is a statistics application developed in R, with the
                    use of the Shiny package for my scientific initiation scholarship at the National Institute of Metrology in
                    together with Norte Energia. Both the backend and the frontend were developed by me, with the
                    help of researcher Werickson Rocha with the statistical part and the testing part.
                    <br>
                    &emsp;&emsp;The application is designed to help students, teachers, researchers and professionals
                    in the area, to view and analyze data efficiently and intuitively. With it, it is possible
                    import as Excel files, and turn them into interactive and informative graphics. In addition, the application
                    offers a wide range of statistical tests, including t tests, ANOVA, MANOVA and more
                    much more, to help get accurate insights about the data.<br><br>
                    Link to the site: (Only in portuguese) <a href="https://andremiyazawa08.shinyapps.io/Visualizacao_de_Dados_do_Inmetro/"
                                         target="_blank">Inmetro Data Viewer</a><br>
                    Link to the project GitHub: <a href="https://github.com/andrem08/ShinyDataVisualization"
                                                      target="_blank">Repositório do GitHub</a>
                    `,
            'page-show-image-shiny-HC-description-1' : 'Initial Page of Shiny Health Care App explaining a little bit the purpose of the app.',
            'page-show-image-shiny-HC-description-2' : 'Shows a table of all vitamins, with the benefits, foods that contain, the recommended daily amount and much more. The user can filter by vitamins and sort by any column.',
            'page-show-image-shiny-HC-description-3' : 'A BMI check given the user height and weight, and putting it in a classification according to the WHO.',
            'page-show-image-shiny-HC-description-4' : 'Homogeneity of variances analysis, with Bartlett, Levene, F test and Fligner-Killeen test.',
            'page-show-image-shiny-HC-description-5' : 'Parametric tests like T Test and ANOVA Test, with tables and graphics.',
            'page-show-image-shiny-HC-description-6' : 'Non-parametric tests like Wilcoxon Test and Kruskal-Wallis Test, with tables and graphics.',
            'projects-health-description' : `
                    &emsp;&emsp; The Shiny Health Care site was my first big web development project, for me
                    learn both the R language and the Shiny library. The site was developed for the selection process of the
                    scientific initiation scholarship of the National Institute of Metrology, Quality and Technology (Inmetro).
                    Unfortunately, the site is no longer online and does not work in the new versions of RSudio, but the code
                    source is available on my GitHub, and can be run locally (Documentation on GitHub). 
                    <br>
                    &emsp;&emsp; The application is a demo that was created to help you take care of your health more easily,
                    organize everything you need to know about your health on a daily basis, easy to understand and all in one
                    app. <br><br>
                    GitHub Repository: <a href="https://github.com/andrem08/ShinyHealthCare"
                                              target="_blank">ShinyHealthCare</a>
                    `,
            'page-show-image-toolsGen-description' : 'Initial Page and functionalities of the Tools Generator app. Shows the generation of random CPF\'s, CNPJ\'s and RG\'s.',
            'projects-tools-description': `
                    &emsp;&emsp; The Tools Generator was my first web development site, for me to learn
                    HTML, CSS and JavaScript. The site was developed for a web development course available at
                    Coursera.
                    <br>
                    &emsp;&emsp;The application was made to generate random CPFs, CNPJs and RGs to be used
                    in software tests, or for any other purpose the user wishes. <br><br>
                    Link to the site: (Only in portuguese) <a href="https://andrem08.github.io/generatorTools"
                                         target="_blank">Tools Generator</a><br>
                    Link to the project GitHub: <a href="https://github.com/andrem08/generatorTools"
                                                      target="_blank">Repositório do Github</a>
                    `
        }
    };
    document.getElementById('projects-title').innerText = content[language]['projects-title'];
    document.getElementById('projects-subtitle').innerHTML = content[language]['projects-subtitle'];

    document.getElementById('page-show-image-TLLM-description-1').innerText = content[language]['page-show-image-TLLM-description-1'];
    document.getElementById('page-show-image-TLLM-description-2').innerText = content[language]['page-show-image-TLLM-description-2'];
    document.getElementById('page-show-image-TLLM-description-3').innerText = content[language]['page-show-image-TLLM-description-3'];
    document.getElementById('page-show-image-TLLM-description-4').innerText = content[language]['page-show-image-TLLM-description-4'];
    document.getElementById('projects-webstore-description').innerHTML = content[language]['projects-webstore-description'];

    document.getElementById('page-show-image-inmetro-description-1').innerText = content[language]['page-show-image-inmetro-description-1'];
    document.getElementById('page-show-image-inmetro-description-2').innerText = content[language]['page-show-image-inmetro-description-2'];
    document.getElementById('page-show-image-inmetro-description-3').innerText = content[language]['page-show-image-inmetro-description-3'];
    document.getElementById('page-show-image-inmetro-description-4').innerText = content[language]['page-show-image-inmetro-description-4'];
    document.getElementById('page-show-image-inmetro-description-5').innerText = content[language]['page-show-image-inmetro-description-5'];
    document.getElementById('page-show-image-inmetro-description-6').innerText = content[language]['page-show-image-inmetro-description-6'];
    document.getElementById('projects-inmetro-description').innerHTML = content[language]['projects-inmetro-description'];

    document.getElementById('page-show-image-shiny-HC-description-1').innerText = content[language]['page-show-image-shiny-HC-description-1'];
    document.getElementById('page-show-image-shiny-HC-description-2').innerText = content[language]['page-show-image-shiny-HC-description-2'];
    document.getElementById('page-show-image-shiny-HC-description-3').innerText = content[language]['page-show-image-shiny-HC-description-3'];
    document.getElementById('page-show-image-shiny-HC-description-4').innerText = content[language]['page-show-image-shiny-HC-description-4'];
    document.getElementById('page-show-image-shiny-HC-description-5').innerText = content[language]['page-show-image-shiny-HC-description-5'];
    document.getElementById('page-show-image-shiny-HC-description-6').innerText = content[language]['page-show-image-shiny-HC-description-6'];
    document.getElementById('projects-health-description').innerHTML = content[language]['projects-health-description'];

    document.getElementById('page-show-image-toolsGen-description').innerText = content[language]['page-show-image-toolsGen-description'];
    document.getElementById('projects-tools-description').innerHTML = content[language]['projects-tools-description'];
}

// On page load, detect the user's language settings
document.addEventListener('DOMContentLoaded', (event) => {
    let language = detectUserLanguage();
    updateLanguageExperience(language)
});