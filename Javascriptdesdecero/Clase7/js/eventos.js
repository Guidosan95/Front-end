const frase = document.querySelector('#frase');
const boton = document.querySelector('#boton');

//boton.addEventListener('evento', accion(una funcion anonima o que no tiene nombre))

boton.addEventListener(
    'click',
    function(){
        frase.innerText = 'hiciste click'
    }
);
boton.addEventListener(
    'mouseover',
    function(){
        frase.innerText = 'moviste el mouse sobre'
    }
);
boton.addEventListener(
    'mouseout',
    function(){
        frase.innerText = 'moviste el mouse fuera'
    }
);