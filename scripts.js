window.onload = function () {
    loadHTML('/AndreMiyazawa/header.html', 'header');
    loadHTML('/AndreMiyazawa/head.html', 'head');
    loadHTML('/AndreMiyazawa/footer.html', 'footer');
    loadHTML('/AndreMiyazawa/footer.html', 'footer');
};

// Utilizar o fetch para enviar o header em todas as páginas
// O fetch é uma função que faz uma requisição para um servidor e retorna uma promessa
// O then é uma função que é executada quando a promessa é resolvida
// O response.text() retorna o conteúdo do arquivo como texto
// O data é o conteúdo do arquivo
// O document.getElementById('header').innerHTML = data; insere o conteúdo do arquivo no elemento com id 'header'

// function loadHTML(path, elementId) {
//     fetch(path)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//
//             //Caso o path seja o header, adiciona um event listener para o botão do menu
//             //onde o botão é clicado e o menu é exibido ou escondido
//             if (path === '/AndreMiyazawa/header.html') {
//                 // Add the event listener after the HTML is loaded
//                 var navbarButton = document.getElementById('navbarButton');
//                 if (navbarButton) {
//                     navbarButton.addEventListener('click', function () {
//                         var navbar = document.getElementById('navbarResponsive');
//                         if (navbar) {
//                             if (navbar.style.display === 'none' || navbar.style.display === '') {
//                                 navbar.style.display = 'block';
//                             } else {
//                                 navbar.style.display = 'none';
//                             }
//                         } else {
//                             console.error('Element with ID "navbarResponsive" not found');
//                         }
//                     });
//                 } else {
//                     console.error('Element with ID "navbarButton" not found');
//                 }
//             }
//         })
// }

// Utilizar o site localmente


function loadHTML(path, elementId) {
    path = path.split('/')[2]
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            //Caso o path seja o header, adiciona um event listener para o botão do menu
            //onde o botão é clicado e o menu é exibido ou escondido
            if (path === 'header.html') {
                // Add the event listener after the HTML is loaded
                var navbarButton = document.getElementById('navbarButton');
                if (navbarButton) {
                    navbarButton.addEventListener('click', function () {
                        var navbar = document.getElementById('navbarResponsive');
                        if (navbar) {
                            if (navbar.style.display === 'none' || navbar.style.display === '') {
                                navbar.style.display = 'block';
                            } else {
                                navbar.style.display = 'none';
                            }
                        } else {
                            console.error('Element with ID "navbarResponsive" not found');
                        }
                    });
                } else {
                    console.error('Element with ID "navbarButton" not found');
                }
            }
        })
}