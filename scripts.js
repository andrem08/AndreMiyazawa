window.onload = function() {
    loadHTML('/Meu-Site-Pessoal/header.html', 'header');
    loadHTML('/Meu-Site-Pessoal/head.html', 'head');
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
        });
}