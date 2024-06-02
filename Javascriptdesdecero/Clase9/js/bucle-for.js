const lista = document.querySelector('#lista');

const marcas = [
    'Hermès', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Gola',
    'Hollister', 'Abercrombie', 'JCrew',
    'uniqlo', 'Old Navy'
    ];
const longitud = marcas.length;

let contenido = ''; //variable vacia
for (let index = 0; index < longitud; index++) {
    contenido += `<li><span>🤷</span>${marcas[index]}</li>`;
    
}// Le agregamos el codigo

lista.innerHTML = contenido

