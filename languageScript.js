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

// Function to update the website content based on the selected language
function updateLanguage(language) {
    // If user's language is in Portuguese, else is in English independently of the browser language
    if (language === 'pt') {
        document.getElementById('subtitle').innerText = 'Engenheiro de Software - Desenvolvedor de Software - Analista de Dados';
        document.getElementById('aboutTitle').innerText = 'Sobre mim';

        document.getElementById('aboutText').innerHTML = `
            <p class="lead">
                &emsp;&emsp;Meu nome é André Miyazawa, 23 anos, sou aluno da Universidade
                de São Paulo (USP) e estou fazendo bacharelado em Sistemas de Informação, no período noturno.
                Estou no meu nono semestre e atualmente morando em São
                Paulo, SP. Tenho bastante interesse em algoritmos, estatística e probabilidade e desenvolvimento de sites,
                aplicativos e jogos. Tenho várias experiencias pessoais na criação e otimização de algoritmos, sites, diversas
                resoluções para competições de programação e hackathons, e diversas funcionalidades específicas.
            </p>
            <p class="lead">
                &emsp;&emsp;Sou bem competente, muito comprometido com meu ofício e prazos, estou sempre em busca de novos
                desafios e oportunidades para aprender e crescer profissionalmente.
                Estou sempre disposto a ajudar e colaborar com meus colegas de trabalho e estudo, e estou sempre
                disposto a aprender e ensinar novas tecnologias e ferramentas, e tenho bastante vontade de trabalhar.
            </p>
            <p class="lead">
                &emsp;&emsp;Tenho bastante experiência com Java, C e Python com o conhecimento de diversas bibliotecas e tendo 2 anos de
                experiencia com Python e 2 anos com Java, Tambem utilizo bastante JavaScript no meu trabalho, com 1 ano de
                experiência, 1 ano de experiencia em manipulação e gerenciamento de Banco de Dados e mexi bastante com Julia,
                Bash, C++, e um pouco de Assembly e Lua, todas estas na faculdade e em alguns cursos.
            </p>
        `;
        document.getElementById('aboutSkills').innerHTML = `
            <p><strong>Linguagens de Programação principais:</strong> Java, Apex, C++, NodeJS, Python e R.</p>
            <p><strong>Outras linguagens de Programação:</strong> Julia, Lua, Go</p>
            <p><strong>Web Frameworks: </strong> React, Tailwind, Material Design, DJango, RShiny Apps</p>
            <p><strong>Linguagens de Banco de Dados:</strong> SQL, PostgreSQL, SOQL, MongoDB.</p>
            <p><strong>Ferramentas e Software:</strong> GitHub, GitLab, PowerBI, Word, Excel, PowerPoint, Salesforce e AWS.</p>
            <p><strong>Outras Experiências em:</strong> PowerBi, PowerQuery, VBI, OpenMP, Assembly x86, MySQL, HTML e CSS.</p>
        `;
        document.getElementById('downloadCV').href = 'https://drive.google.com/file/d/1AgKb1Tqo-zFxGUcyc_7c2yVHY-F7OPeC/view?usp=drive_link';
    } else {
        document.getElementById('subtitle').innerText = 'Software Engineer - Software Developer - Data Analyst';
        document.getElementById('aboutTitle').innerText = 'About me';
        document.getElementById('aboutText').innerHTML = `
            <p class="lead">
                &emsp;&emsp;My name is André Miyazawa, 23 years old, I am a student at the University of São Paulo (USP) and I am pursuing a bachelor's degree in Information Systems, in the evening period.
                I am in my ninth semester and currently living in São Paulo, SP. I have a lot of interest in algorithms, statistics and probability, and development of websites, applications, and games.
                I have several personal experiences in creating and optimizing algorithms, websites, various solutions for programming competitions and hackathons, and various specific functionalities.
            </p>
            <p class="lead">
                &emsp;&emsp;I am very competent, very committed to my work and deadlines, I am always looking for new challenges and opportunities to learn and grow professionally.
                I am always willing to help and collaborate with my colleagues at work and study, and I am always willing to learn and teach new technologies and tools, and I have a great desire to work.
            </p>
            <p class="lead">
                &emsp;&emsp;I have a lot of experience with Java, C, and Python with knowledge of various libraries and having 2 years of experience with Python and 2 years with Java.
                I also use JavaScript a lot in my work, with 1 year of experience, 1 year of experience in database manipulation and management, and I have worked a lot with Julia, Bash, C++, and a little bit of Assembly and Lua, all of these in college and in some courses.
            </p>
        `;
        document.getElementById('aboutSkills').innerHTML = `
            <p><strong>Main Programming Languages:</strong> Java, Apex, C++, NodeJS, Python, and R.</p>
            <p><strong>Other Programming Languages:</strong> Julia, Lua, Go</p>
            <p><strong>Web Frameworks:</strong> React, Tailwind, Material Design, DJango, RShiny Apps</p>
            <p><strong>Database Languages:</strong> SQL, PostgreSQL, SOQL, MongoDB.</p>
            <p><strong>Tools and Software:</strong> GitHub, GitLab, PowerBI, Word, Excel, PowerPoint, Salesforce, and AWS.</p>
            <p><strong>Other Experiences in:</strong> PowerBi, PowerQuery, VBI, OpenMP, Assembly x86, MySQL, HTML, and CSS.</p>
        `;
        document.getElementById('downloadCV').href = 'https://drive.google.com/file/d/1CCcc_LaTxNuL6IAd_AYvGgkPTCIqAJoz/view?usp=drive_link';
    }
}

// On page load, detect the user's language settings
document.addEventListener('DOMContentLoaded', (event) => {
    let language = detectUserLanguage();
    updateLanguage(language)
});