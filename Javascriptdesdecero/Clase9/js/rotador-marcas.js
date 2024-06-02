const botones  = document.querySelectorAll('#rotador img');

const span = document.querySelector('#rotador span');
const imspan = document.querySelector('#interior span');
console.log(imspan);

const anterior = botones[0];
const siguiente = botones[1];


// marcas

const marcas = [
    'Hermès', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Gola',
    
    ];
// otros 
const longitud = marcas.length;
let llave = 4;
span.innerText = marcas[llave];
anterior.addEventListener(
    'click',
    function()
    {
        llave--;
        if(llave < 0){
            llave = longitud - 1;
        }
        span.innerText = marcas[llave];
    }
);
siguiente.addEventListener(
    'click',
    function()
    {
        llave++;
        if(llave > longitud - 1){
            llave = 0;
        }
        span.innerText = marcas[llave];
    }
);














/*
<section id="hermes">
                <figure>
                    <img src="hermes.jpg" alt="">
              
                </figure>
                  </section>
            <section id="zara">
                <figure>
                    <img src="zara_nuevo_logo.jpg" alt="">
     
                </figure>
                           </section>
            <section id="boss">
                <figure>
                    <img src="hugoboss-logo.png.png" alt="">    
                </figure>
                
            </section>
            <section id="aeropostale">
                <figure>
                    <img src="aeropo.png" alt="">
              
                </figure>
                  </section>
            <section id="tommy">
                <figure>
                    <img src="Tommy-Hilfiger.jpg" alt="">
      
                </figure>
                          </section>
            <section id="gola">
                <figure>
                    <img src="gola.png" alt="">
                
                </figure>
                </section>
*/