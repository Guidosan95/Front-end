document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const menuCollapse = document.querySelector('.menu-collaps');

    // Agrega un evento al botón de navegación para alternar el menú
    navbarToggler.addEventListener('click', () => {
        menuCollapse.classList.toggle('active');
    });
});

