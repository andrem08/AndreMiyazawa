document.getElementById('navbarButton').addEventListener('click', function() {
    var navbar = document.getElementById('navbarResponsive');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});