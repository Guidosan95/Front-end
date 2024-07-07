document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.text');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        texts.forEach(text => {
            const textTop = text.getBoundingClientRect().top;

            if (textTop < triggerBottom) {
                text.classList.add('visible');
            } else {
                text.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Para verificar la visibilidad al cargar la página
});
