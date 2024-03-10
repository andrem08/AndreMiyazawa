window.onload = function() {
    loadHTML('header.html', 'header');
    loadHTML('head.html', 'head');
    loadHTML('footer.html', 'footer');

};

// Utilizar o fetch para enviar o header em todas as páginas
// O fetch é uma função que faz uma requisição para um servidor e retorna uma promessa
// O then é uma função que é executada quando a promessa é resolvida
// O response.text() retorna o conteúdo do arquivo como texto
// O data é o conteúdo do arquivo
// O document.getElementById('header').innerHTML = data; insere o conteúdo do arquivo no elemento com id 'header'
function loadHTML(path, elementId) {
    fetch('/Meu-Site-Pessoal/' + path)
        .then(response => {
            if (!response.ok) {
                // If the file does not exist, modify the path
                return fetch(path);
            }
            return response.text();
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.log(`An error occurred: ${error.message}`);
        });
}