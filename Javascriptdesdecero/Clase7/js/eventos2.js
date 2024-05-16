const verde = document.querySelector('#verde');
const naranja = document.querySelector('#naranja');
const caja = document.querySelector('#caja');

function pintarVerde(){
    caja.style.backgroundColor = 'hsl(120, 50%, 50%)';
}
naranja.addEventListener(
    'click',
    function(){
        caja.style.backgroundColor = 'hsl(30, 50%, 50%)';
    }
);
verde.addEventListener(
    'click',
    //tambien en vez de utilizar 'function()', se puede utilizar '()=>'
    function(){
        pintarVerde();
    }
)