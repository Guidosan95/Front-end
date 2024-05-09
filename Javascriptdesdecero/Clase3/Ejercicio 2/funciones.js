const caja= document.querySelector('#caja');

function pintarNaranja()
{
    caja.style.backgroundColor = 'hsl(30, 50%, 60%)';
    caja.innerText = 'Naranja';
    caja.style.rotate = '30deg';
};

function pintarBlanco()
{
    caja.style.backgroundColor = '#ffffff';
    caja.innerText = 'Blanco';
    caja.style.rotate = '0deg';
};

function pintarVerde()
{
    caja.style.backgroundColor = 'hsl(118, 75%, 46%)';
    caja.innerText = 'Verde';
    caja.style.rotate = '360deg';
};