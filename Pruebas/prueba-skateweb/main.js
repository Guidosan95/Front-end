
document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('search');
    const pSearch = document.getElementById('nav-bar-p');

    // Mostrar el cuadro de búsqueda al hacer clic en 'pSearch'
    pSearch.addEventListener('click', function() {
        search.style.display = 'flex';
        pSearch.style.display = 'none';
        search.style.visibility = 'visible';
        pSearch.style.visibility = 'hidden';
        search.focus(); // Asegura que 'search' reciba el foco
    });

    // Ocultar el cuadro de búsqueda al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!search.contains(event.target) && !pSearch.contains(event.target)) {
            search.style.display = 'none';
            pSearch.style.display = 'flex';
            search.style.visibility = 'hidden';
            pSearch.style.visibility = 'visible';
        }
    });
});