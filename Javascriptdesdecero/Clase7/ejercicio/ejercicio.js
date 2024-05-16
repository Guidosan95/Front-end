const btnRedBull = document.querySelector('#btnRedBull');
const btnFerrari = document.querySelector('#btnFerrari');
const btnAstonMartin = document.querySelector('#btnAstonMartin');
const btnMercedes = document.querySelector('#btnMercedes');

const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

// Estado inicial (Se tendria que ver un solo DIV, por lo tanto vamos a ocultar tres de ellos)


ferrari.style.display = 'none'; 
amartin.style.display = 'none'; 
mercedes.style.display = 'none'; 

// Mostrar la escuderia que corresponda al hacer click en cada boton

btnFerrari.addEventListener(
    'click',
    function(){
        redbull.style.display = 'none';
        ferrari.style.display = 'flex'; 
        amartin.style.display = 'none'; 
        mercedes.style.display = 'none'; 
    }
);
btnRedBull.addEventListener(
    'click',
    function(){
        redbull.style.display = 'flex';
        ferrari.style.display = 'none'; 
        amartin.style.display = 'none'; 
        mercedes.style.display = 'none'; 
    }
);
btnAstonMartin.addEventListener(
    'click',
    function(){
        redbull.style.display = 'none';
        ferrari.style.display = 'none'; 
        amartin.style.display = 'flex'; 
        mercedes.style.display = 'none'; 
    }
);
btnMercedes.addEventListener(
    'click',
    function(){
        redbull.style.display = 'none';
        ferrari.style.display = 'none'; 
        amartin.style.display = 'none'; 
        mercedes.style.display = 'flex'; 
    }
);
