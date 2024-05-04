// Ubicamos elementos dentro del DOM (Document Object Model)
const span = document.querySelector('#span');
const div = document.querySelector('#div');
console.log(span);

// Escribimos texto dentr del <span>
span.innerText = 'papaya';

// mostramos contenido dentro del <div>
div.innerHTML = '<img src= "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">';

// innerText = Renderiza como texto 
// innerHTML = Renderiza como HTML 