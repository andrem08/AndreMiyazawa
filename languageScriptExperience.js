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
// languageScriptExperience.js

function updateLanguageExperience(language) {
    const content = {
        'pt': {
            'experiences-title': 'Minhas Experiências',
            'rede-title': 'Estágio na Rede',
            'rede-date': 'Junho 2023 - atual',
            'rede-description': `
                Minha jornada como estagiário na <b>Rede</b> começou em junho de 2023, atuando como
                Desenvolvedor Salesforce. Nesse período, desenvolvi o aplicativo de CRM (Customer
                Relationship Management) da empresa, o que me permitiu adquirir conhecimento profundo
                sobre <b>Apex, Visualforce, SOQL, Flow</b> e <b>LWCs (Lightning Web Components)</b>,
                além de outras funcionalidades da Salesforce. Essa experiência proporcionou uma compreensão
                clara do processo de desenvolvimento de software em uma grande corporação, incluindo testes,
                integração de sistemas e o manejo de vastas quantidades de dados e interações com diversas equipes.
                <br>&emsp;&emsp;Adicionalmente, utilizei <b>AWS Cloud Computing</b> para gerenciar sistemas na nuvem, empregando
                <b>Go</b> e <b>Python</b> para tal. Este estágio não só me ofereceu uma formação técnica
                avançada, mas também a oportunidade de ser orientado por profissionais experientes e acessar
                uma variedade de cursos e treinamentos gratuitos oferecidos por plataformas como Alura, Trailhead,
                Udemy e LinkedIn Learning.
            `,
            'rede-tools': `<h2 class="ms-auto fs-5 time_opacity">Ferramentas: </h2>
                    <ul>
                        <li><span>Apex, JavaScript, Html, CSS, Python, Go e SQL</span></li>
                        <li><span>LWC, Salesforce, AWS</span></li>
                        <li><span>Confluence, IUClick, VSCode, SharePoint</span></li>
                    </ul>`,
            'itau-title': 'Estágio no Itaú-Unibanco',
            'itau-date': 'Dez 2022 - Maio 2023',
            'itau-description': `
                O meu primeiro estágio foi no <b>Itaú Unibanco</b>, teve início em dezembro de 2022, onde
                atuei como Estagiário em <b>Risco de Crédito</b>. Durante esse período, eu
                desempenhei um papel crucial na modelagem e monitoramento de parâmetros de risco
                no <b>Itaú BBA</b>.<br>&emsp;&emsp;Neste meu primeiro estágio eu realizei a modelagem, o monitoramento e
                automarização de parâmetros de risco utilizando <b>Python</b>, Mitigação de <b>LGD</b> para operações garantidas,
                Monitoramento de esteiras de provisão <b>BRGAAP</b>, <b>MB</b>, <b>TVM</b>, <b>Câmbio</b> e <b>IFRS9</b> e a criação de relatórios,
                apresentações, gráficos visuais, views, dashboards e testes estatísticos utilizando <b>SQL</b>, <b>VBA</b> e <b>Excel</b>.
            `,
            'itau-tools': `<h2 class="ms-auto fs-5 time_opacity">Ferramentas: </h2>
                    <ul>
                        <li><span>Excel, PowerPoint, Outlook, Word e Macros envolvendo os softwares utilizando VBA</span></li>
                        <li><span>Python, SQL</span></li>
                        <li><span>SAS, Teradata, DBeaver, Confluence</span></li>
                    </ul>`,
            'inmetro-title': 'Bolsa de Pesquisa - Inmetro',
            'inmetro-date': 'Abr 2022 - Abr 2023',
            'inmetro-description': `
                Durante a minha bolsa de pesquisa no <b>Inmetro</b> como Desenvolvedor de Aplicativos em
                <b>Shiny R</b>, de abril de 2022 a abril de 2023, desenvolvi software para automatizar análises de machine learning em <b>R</b>,
                <b>Python</b>, <b>Javascript</b>, <b>HTML</b> e <b>CSS</b>. Colaborei na gestão de bases de dados e na criação de scripts
                para a manipulação de dados e geração de gráficos personalizados. Também desenvolvi rotinas de testes
                para validar algoritmos de machine learning e o tratamento de dados para torna-los próprios para
                serem utilizados.<br>&emsp;&emsp;Essa experiência foi muito enriquecedora e ampliou bastante meus
                conhecimentos em análise de dados, testes estatísticos, machine learning, inteligência artificial e
                principalmente em desenvolvimento de software, onde este foi meu primeiro desenvolvimento, onde trabalhei com
                praticamente 100% do <b>backend</b> e <b>frontend</b>, e eu pude aprender muito.
            `,
            'inmetro-tools': `<h2 class="ms-auto fs-5 time_opacity">Ferramentas: </h2>
                    <ul>
                        <li><span> Python, R, RShiny, JavaScript, HTML, CSS</span></li>
                        <li><span>WebScrapping com Selenium, e Api's do Google, Twitter e Facebook</span></li>
                        <li><span>MiniTab, Excel e Tableau</span></li>
                    </ul>`,
            'usp-title': 'Graduação em Sistemas de Informação - USP',
            'usp-date': 'Jan 2020 - atual',
            'usp-description': `
                A <b>Universidade de São Paulo</b> me proporcionou uma formação sólida em <b>Sistemas de
                Informação</b>, onde eu pude aprender sobre diversas áreas da computação, tive uma boa formação em
                <b>matemática</b>, <b>física</b>, <b>estatística</b>, <b>algoritmos</b> e <b>lógica de programação</b>, além de me ensinar a ser bem
                autodidata.<br>&emsp;&emsp;Tive a oportunidade de trabalhar com diversas linguagens de programação, diversas
                técnicas, tecnologias e softwares, e tive
                a oportunidade de trabalhar com diversos projetos que usavam tanto a teoria quanto a prática.
                Além disso, a <b>USP</b> proporciona diversos eventos, palestras, workshops e competições de
                programação, além de ter uma grande biblioteca e diversos cursos inclusos com o curso.<br>&emsp;&emsp;Por fim, a <b>USP</b> também me proporcionou cursos de <b>administração</b>, <b>economia</b> e <b>marketing</b>,
                que me ajudaram a ter uma visão mais ampla do mercado de trabalho.
            `,
            'usp-tools': `<h2 class="ms-auto fs-5 time_opacity">Ferramentas e Conhecimentos: </h2>
                    <ul>
                        <li>
                            <span> C, C++, Java, Python, R, Julia, NodeJS, SQL, PostgreSQL, Oracle, OpenMP, Assembly x86, Bash, Lua</span>
                        </li>
                        <li><span> GitHub, GitLab, JetBrains IDE, Sistema Linux</span></li>
                        <li>
                            <span> Matemática Discreta, Orientação à Objetos, Análise de Algoritmos e Estruturas de Dados</span>
                        </li>
                        <li>
                            <span> Cálculo, Estatísticca e Geometria Analítica, Programação em Nuvem, Programação Paralela</span>
                        </li>
                        <li>
                            <span> IHC, Redes de Computadores, Banco de Dados, Inteligência Artificial e Ciência de Dados </span>
                        </li>
                        <li>
                            <span> Marketing, Administração, e Economia </span>
                        </li>
                    </ul>`,
            'more-experiences-button': 'Mais Experiências',
            'more-experiences-title': 'Mais Experiências',
            'dasi-title': 'Designer na DASI',
            'dasi-date': 'Março 2020 - Dez 2021',
            'dasi-description': `
                A entidade estudantil <b>DASI (Diretório Acadêmico de Sistemas de Informação)</b>
                foi o meu primeiro
                contato com demandas, projetos e pessoas. Durante esse período, eu realizei a criação de
                artes, logos, banners e cartazes para eventos. Consegui aprender bastante sobre <b>design
                e Interface Humana Computador</b>, e pude trabalhar com diversos softwares como o <b>Adobe
                Photoshop</b> e o <b>Canvas</b>.
            `,
            'dasi-tools': `<h2 class="ms-auto fs-5 time_opacity">Ferramentas: </h2>
                        <ul>
                            <li><span>Adobe Photoshop, Canvas</span>
                            </li>
                            <li><span>Google Drive</span></li>
                        </ul>`,
            'elite-title': 'Bolsista como corretor de Questões de Vestibular',
            'elite-date': 'Fev 2019 - Fev 2020',
            'elite-description': `
                Eu fui um estudante bolsista no colégio <b>Elite Pré-Vestibular</b> em <b>Campinas</b>,
                onde eu corrigia questões, simulados e provas com matérias de vestibulares diversos de
                diversas matérias, com auxilio de professores e plantonistas.<br>
                &emsp;&emsp;Também auxiliava na formulação de <b>testes</b> e <b>provas</b> do colégio, avaliando a
                qualidade das questões criadas e obtendo uma amostra de como o teste seria e a possível compreensão dos
                estudantes. Com isso pude aprender bastante sobre as matérias e me ajudou muito com o <b>vestibular</b>.
            `,
            'elite-tools': `<h2 class="ms-auto fs-5 time_opacity">Conhecimentos: </h2>
                        <ul>
                            <li><span>Matemática, Física, Biologia, Química, Português, Literatura, Inglês, Geografia e História</span>
                            </li>
                        </ul>`,
        },
        'en': {
            'experiences-title': 'My Experiences',
            'rede-title': 'Internship at Rede',
            'rede-date': 'June 2023 - current',
            'rede-description': `
                My journey as an intern at <b>Rede</b> began in June 2023, working as a Salesforce Developer. During this period, 
                I developed the company's CRM (Customer Relationship Management) application, which allowed me to gain in-depth 
                knowledge of <b>Apex, Visualforce, SOQL, Flow</b>, and <b>LWCs (Lightning Web Components)</b>, among other Salesforce 
                functionalities. This experience provided a clear understanding of the software development process in a large corporation, 
                including testing, system integration, and handling large amounts of data and interactions with various teams.
                <br>&emsp;&emsp;Additionally, I used <b>AWS Cloud Computing</b> to manage cloud systems, employing <b>Go</b> and <b>Python</b> for this purpose. 
                This internship not only offered me advanced technical training but also the opportunity to be mentored by experienced professionals 
                and access a variety of free courses and training offered by platforms such as Alura, Trailhead, Udemy, and LinkedIn Learning.
            `,
            'rede-tools': `<h2 class="ms-auto fs-5 time_opacity">Tools: </h2>
                    <ul>
                        <li><span>Apex, JavaScript, Html, CSS, Python, Go and SQL</span></li>
                        <li><span>LWC, Salesforce, AWS</span></li>
                        <li><span>Confluence, IUClick, VSCode, SharePoint</span></li>
                    </ul>`,
            'itau-title': 'Internship at Itaú-Unibanco',
            'itau-date': 'Dec 2022 - May 2023',
            'itau-description': `
                My first internship was at <b>Itaú Unibanco</b>, which began in December 2022, where I worked as a Credit Risk Intern. During this period, I played a crucial role in modeling and monitoring risk parameters at <b>Itaú BBA</b>.<br>&emsp;&emsp;In this first internship, I performed modeling, monitoring, and automation of risk parameters using <b>Python</b>, LGD mitigation for guaranteed operations, monitoring of provision pipelines <b>BRGAAP</b>, <b>MB</b>, <b>TVM</b>, <b>FX</b>, and <b>IFRS9</b>, and creating reports, presentations, visual charts, views, dashboards, and statistical tests using <b>SQL</b>, <b>VBA</b>, and <b>Excel</b>.
            `,
            'itau-tools': `<h2 class="ms-auto fs-5 time_opacity">Tools: </h2>
                    <ul>
                        <li><span>Excel, PowerPoint, Outlook, Word and Macros involving software using VBA</span></li>
                        <li><span>Python, SQL</span></li>
                        <li><span>SAS, Teradata, DBeaver, Confluence</span></li>
                    </ul>`,
            'inmetro-title': 'Research Scholarship - Inmetro',
            'inmetro-date': 'Apr 2022 - Apr 2023',
            'inmetro-description': `
                During my research scholarship at <b>Inmetro</b> as an Application Developer in <b>Shiny R</b>, from April 2022 to April 2023, I developed software to automate machine learning analyses in <b>R</b>, <b>Python</b>, <b>JavaScript</b>, <b>HTML</b>, and <b>CSS</b>. I collaborated in database management and script creation for data manipulation and custom graph generation. I also developed test routines to validate machine learning algorithms and data processing to make them suitable for use.<br>&emsp;&emsp;This experience was very enriching and greatly expanded my knowledge in data analysis, statistical tests, machine learning, artificial intelligence, and especially in software development, where this was my first development, where I worked with almost 100% of the <b>backend</b> and <b>frontend</b>, and I was able to learn a lot.
            `,
            'inmetro-tools': `<h2 class="ms-auto fs-5 time_opacity">Tools: </h2>
                    <ul>
                        <li><span> Python, R, RShiny, JavaScript, HTML, CSS</span></li>
                        <li><span>WebScrapping with Selenium, and Google, Twitter, and Facebook APIs</span></li>
                        <li><span>MiniTab, Excel, and Tableau</span></li>
                    </ul>`,
            'usp-title': 'Bachelor\'s Degree in Information Systems - USP',
            'usp-date': 'Jan 2020 - current',
            'usp-description': `
                The <b>University of São Paulo</b> provided me with a solid education in <b>Information Systems</b>, where I was able to learn about various areas of computing, I had a good education in <b>mathematics</b>, <b>physics</b>, <b>statistics</b>, <b>algorithms</b>, and <b>programming logic</b>, in addition to teaching me to be very self-taught.<br>&emsp;&emsp;I had the opportunity to work with various programming languages, techniques, technologies, and software, and I had the opportunity to work on various projects that used both theory and practice. In addition, <b>USP</b> provides various events, lectures, workshops, and programming competitions, as well as having a large library and several courses included with the course.<br>&emsp;&emsp;Finally, <b>USP</b> also provided me with courses in <b>administration</b>, <b>economics</b>, and <b>marketing</b>, which helped me to have a broader view of the job market.
            `,
            'usp-tools': `<h2 class="ms-auto fs-5 time_opacity">Tools and Knowledge: </h2>
                    <ul>
                        <li>
                            <span> C, C++, Java, Python, R, Julia, NodeJS, SQL, PostgreSQL, Oracle, OpenMP, Assembly x86, Bash, Lua</span>
                        </li>
                        <li><span> GitHub, GitLab, JetBrains IDE, Linux System</span></li>
                        <li>
                            <span> Discrete Mathematics, Object Orientation, Algorithm Analysis and Data Structures</span>
                        </li>
                        <li>
                            <span> Calculus, Statistics, and Analytical Geometry, Cloud Programming, Parallel Programming</span>
                        </li>
                        <li>
                            <span> HCI, Computer Networks, Database, Artificial Intelligence, and Data Science</span>
                        </li>
                        <li>
                            <span> Marketing, Administration, and Economics</span>
                        </li>
                    </ul>`,
            'more-experiences-button': 'More Experiences',
            'more-experiences-title': 'More Experiences',
            'dasi-title': 'Designer at DASI',
            'dasi-date': 'March 2020 - Dec 2021',
            'dasi-description': `
                The student entity <b>DASI (Academic Directory of Information Systems)</b> was my first contact 
                with demands, projects, and people. During this period, I created arts, logos, banners, and posters 
                for events. I was able to learn a lot about <b>design and Human-Computer Interface</b>, and I was 
                able to work with various software such as <b>Adobe Photoshop</b> and <b>Canvas</b>.
            `,
            'dasi-tools': `<h2 class="ms-auto fs-5 time_opacity">Tools: </h2>
                        <ul>
                            <li><span>Adobe Photoshop, Canvas</span>
                            </li>
                            <li><span>Google Drive</span></li>
                        </ul>`,
            'elite-title': 'Scholar as a College Entrance Exam Question Corrector',
            'elite-date': 'Feb 2019 - Feb 2020',
            'elite-description': `
                I was a scholarship student at <b>Elite Pre-College</b> in <b>Campinas</b>, where I corrected questions, 
                simulated exams, and exams with various entrance exam subjects from various subjects, with the help of 
                teachers and tutors.<br>&emsp;&emsp;I also assisted in the formulation of <b>tests</b> and <b>exams</b> from 
                the school, evaluating the quality of the questions created and obtaining a sample of how the test would 
                be and the possible understanding of the students. With this, I was able to learn a lot about the subjects 
                and it helped me a lot with the <b>entrance exam</b>.
            `,
            'elite-tools': `<h2 class="ms-auto fs-5 time_opacity">Knowledge: </h2>
                        <ul>
                            <li><span>Mathematics, Physics, Biology, Chemistry, Portuguese, Literature, English, Geography, and History</span>
                            </li>
                        </ul>`,
        }
    };

    document.getElementById('experiences-title').innerText = content[language]['experiences-title'];
    document.getElementById('rede-title').innerText = content[language]['rede-title'];
    document.getElementById('rede-date').innerText = content[language]['rede-date'];
    document.getElementById('rede-description').innerHTML = content[language]['rede-description'];
    document.getElementById('rede-tools').innerHTML = content[language]['rede-tools'];

    document.getElementById('itau-title').innerText = content[language]['itau-title'];
    document.getElementById('itau-date').innerText = content[language]['itau-date'];
    document.getElementById('itau-description').innerHTML = content[language]['itau-description'];
    document.getElementById('itau-tools').innerHTML = content[language]['itau-tools'];

    document.getElementById('inmetro-title').innerText = content[language]['inmetro-title'];
    document.getElementById('inmetro-date').innerText = content[language]['inmetro-date'];
    document.getElementById('inmetro-description').innerHTML = content[language]['inmetro-description'];
    document.getElementById('inmetro-tools').innerHTML = content[language]['inmetro-tools'];

    document.getElementById('usp-title').innerText = content[language]['usp-title'];
    document.getElementById('usp-date').innerText = content[language]['usp-date'];
    document.getElementById('usp-description').innerHTML = content[language]['usp-description'];
    document.getElementById('usp-tools').innerHTML = content[language]['usp-tools'];

    document.getElementById('more-experiences-button').innerHTML = content[language]['more-experiences-button'];
    document.getElementById('more-experiences-title').innerHTML = content[language]['more-experiences-title'];

    document.getElementById('dasi-title').innerText = content[language]['dasi-title'];
    document.getElementById('dasi-date').innerText = content[language]['dasi-date'];
    document.getElementById('dasi-description').innerHTML = content[language]['dasi-description'];
    document.getElementById('dasi-tools').innerHTML = content[language]['dasi-tools'];

    document.getElementById('elite-title').innerText = content[language]['elite-title'];
    document.getElementById('elite-date').innerText = content[language]['elite-date'];
    document.getElementById('elite-description').innerHTML = content[language]['elite-description'];
    document.getElementById('elite-tools').innerHTML = content[language]['elite-tools'];
}

// On page load, detect the user's language settings
document.addEventListener('DOMContentLoaded', (event) => {
    let language = detectUserLanguage();
    updateLanguageExperience(language)
});