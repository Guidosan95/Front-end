document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const menuCollapse = document.querySelector('.menu-collaps');

    // Agrega un evento al botón de navegación para alternar el menú
    navbarToggler.addEventListener('click', () => {
        menuCollapse.classList.toggle('active');
    });
});



window.addEventListener('scroll', function() {
    const primerSection = document.querySelector('.primer-section');
    const segundoSection = document.querySelector('.segundo-section');
    const primerSectionTop = primerSection.getBoundingClientRect().top;
    const segundoSectionTop = segundoSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Verifica si primerSection está en la vista
    if (primerSectionTop < windowHeight && primerSectionTop >= 0) {
        primerSection.style.left = '10px';
        primerSection.style.visibility = 'visible';
        primerSection.style.animationName = 'desplazarcost';
        primerSection.style.animationDuration = '2s';
        primerSection.style.animationFillMode = 'forwards';
    } else {
        primerSection.style.left = '-400px';
        primerSection.style.visibility = 'hidden';
        primerSection.style.animationName = ''; // Reiniciar animación
    }

    // Verifica si segundoSection está en la vista
    if (segundoSectionTop < windowHeight && segundoSectionTop >= 0) {
        segundoSection.style.right = '10px';
        segundoSection.style.visibility = 'visible';
        segundoSection.style.animationName = 'desplazarizq';
        segundoSection.style.animationDuration = '2s';
        segundoSection.style.animationFillMode = 'forwards';
    } else {
        segundoSection.style.right = '-400px';
        segundoSection.style.visibility = 'hidden';
        segundoSection.style.animationName = ''; // Reiniciar animación
    }
});



