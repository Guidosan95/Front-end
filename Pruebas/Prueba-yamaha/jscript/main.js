const provincia = document.querySelector("#provincia");
const localidad = document.querySelector("#localidad");

const fondomoto= document.querySelector('img.fondo');

fondomoto.addEventListener(
    'scroll',
    function(){
        fondomoto.style.transition = '600ms';
    }
)