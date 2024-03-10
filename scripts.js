window.onload = function () {
    loadHTML('/Meu-Site-Pessoal/header.html', 'header');
    loadHTML('/Meu-Site-Pessoal/head.html', 'head');
    loadHTML('/Meu-Site-Pessoal/footer.html', 'footer');
    loadHTML('/Meu-Site-Pessoal/footer.html', 'footer');
};

// Utilizar o fetch para enviar o header em todas as páginas
// O fetch é uma função que faz uma requisição para um servidor e retorna uma promessa
// O then é uma função que é executada quando a promessa é resolvida
// O response.text() retorna o conteúdo do arquivo como texto
// O data é o conteúdo do arquivo
// O document.getElementById('header').innerHTML = data; insere o conteúdo do arquivo no elemento com id 'header'

function loadHTML(path, elementId) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (path === '/Meu-Site-Pessoal/header.html') {
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
    // fetch(path.split('/')[2])
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById(elementId).innerHTML = data;
    //
    //         if(path === '/Meu-Site-Pessoal/header.html') {
    //             // Add the event listener after the HTML is loaded
    //             var navbarButton = document.getElementById('navbarButton');
    //             if (navbarButton) {
    //                 navbarButton.addEventListener('click', function() {
    //                     var navbar = document.getElementById('navbarResponsive');
    //                     if (navbar) {
    //                         if (navbar.style.display === 'none' || navbar.style.display === '') {
    //                             navbar.style.display = 'block';
    //                         } else {
    //                             navbar.style.display = 'none';
    //                         }
    //                     } else {
    //                         console.error('Element with ID "navbarResponsive" not found');
    //                     }
    //                 });
    //             } else {
    //                 console.error('Element with ID "navbarButton" not found');
    //             }
    //         }
    //     });
}