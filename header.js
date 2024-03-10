document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.navbar-toggler');
    var nav = document.querySelector('#navbarResponsive');

    button.addEventListener('click', function() {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });
});