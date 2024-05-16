const verde = document.querySelector('#verde');
const naranja = document.querySelector('#naranja');
const celeste = document.querySelector('#celeste');
const caja = document.querySelector('#caja');

function pintar(codigoColor, nombreColor){
    caja.style.backgroundColor = codigoColor ;
    caja.innerText = nombreColor;
}
//setInterval (parametros porej: reloj, y la segunda es el tiempo por ej: 1000)
verde.addEventListener(
    'mouseover',
    ()=>{
        pintar('hsl(120, 50%, 60%)', 'Verde');
    }

);
naranja.addEventListener(
    'mouseover',
    ()=>{
        pintar('hsl(34, 80%, 44%)', 'Naranja');
    }

);
celeste.addEventListener(
    'mouseover',
    ()=>{
        pintar('hsl(180, 50%, 60%)', 'Celeste');
    }

);