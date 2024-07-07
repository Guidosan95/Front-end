// Menu hamburguesa
const hambur = document.querySelector('.container');
const cruz = document.querySelector('.checkmark');
const ul = document.querySelector('.ul');
console.log(ul);

ul.style.display = 'none';
hambur.addEventListener(
    'click',
    function(){
        if(ul.style.display === 'none' || ul.style.display === ''){
            ul.style.display = ' flex'

        }
        else{
            ul.style.display = 'none';
        };
    },
);
cruz.addEventListener(
    'click',
    function(){
        if(ul.style.display === 'flex' || ul.style.display === ''){
            ul.style.display = ' none'
        }
        else{
            ul.style.display = 'flex';
        };
    },
);

// 
const contentfm = document.querySelector('.contentfm');
const contentfi = document.querySelector('.contentfi img');

const contentfmp = document.querySelector('.contentfm p')
console.log(contentfm);
console.log(contentfi);
console.log(contentfmp)

// contentfmp.addEventListener(
//     'scroll',
//     function(){
//         if (contentfmp.style.visibility === 'hidden' || contentfmp.style.visibility === ''){
//             contentfmp.style.visibility = 'visible'
//         }
//         else{
//             contentfmp.style.visibility = 'hidden'
//         }
//     },
// )
window.addEventListener('scroll', function() {

    var scrollPosition = window.scrollY;
    
    // Mostrar el texto cuando la página se desplaza hacia abajo
    var contentfm = document.querySelector('.contentfm');
    if (scrollPosition > 100) {
        contentfm.style.left = '10px';
        contentfm.style.visibility = 'visible'
        contentfm.style.animationName= 'desplazarcost';
        contentfm.style.animationDuration= '2s';
        contentfm.style.animationFillMode= 'forwards';
        
        // Ajusta esta distancia según tus necesidades
    } else {
        contentfm.style.left = '-400px'; 
        contentfm.style.animationName= 'desplazarizq';
        contentfm.style.animationDuration= '0.5s';
        contentfm.style.animationFillMode= 'forwards';
      // Vuelve a ocultar el texto
    };
    var contentfi= document.querySelector('.contentfi');
    if (scrollPosition > 100){
        contentfi.style.right= '-10px';
        contentfi.style.visibility = 'visible'
        contentfi.style.animationName= 'desplazarco';
        contentfi.style.animationDuration= '2s';
        contentfi.style.animationFillMode= 'forwards';
    }else{
        contentfi.style.right = '400px'; 
        contentfi.style.animationName= 'desplazarder';
        contentfi.style.animationDuration= '0.5s';
        contentfi.style.animationFillMode= 'forwards';
    };

    // secondm
    var contentsm = document.querySelector('#contentsm p.second');
    var contentsmPosition = contentsm.getBoundingClientRect();
    var scrollPosition = window.scrollY;

    if(contentsmPosition.top < viewportHeight && contentsmPosition.bottom >=0){
        contentsm.style.animationName= 'debajo';
        contentsm.style.animationDuration= '2s';
        contentsm.style.visibility = 'visible';
        contentsm.style.bottom = '-10px';
        contentsm.style.animationFillMode = 'forwards';
    }
    else{
        contentsm.style.top= '400px';
        contentsm.style.animationName= 'dearriba';
        contentsm.style.animationDuration= '2s';
        contentsm.style.animationFillMode = 'forwards';
    }


    var contentsmif = document.querySelector('.contentsmif');
    var contentsmifPosition = contentsmif.getBoundingClientRect();
    var viewportHeight = window.innerHeight;

    if (contentsmifPosition.top < viewportHeight && contentsmifPosition.bottom >= 0) {
        // El elemento contentsmif está dentro del área visible del navegador
        contentsmif.style.left = '10px';
        contentsmif.style.visibility = 'visible';
        contentsmif.style.animationName = 'desplazarcost';
        contentsmif.style.animationDuration = '2s';
        contentsmif.style.animationFillMode = 'forwards';
        
    } else {
        // El elemento contentsmif no es visible
        contentsmif.style.left = '-400px'; 
        contentsmif.style.animationName = 'desplazarizq';
        contentsmif.style.animationDuration = '0.5s';
        contentsmif.style.animationFillMode = 'forwards';
    };
    var contentsmis = document.querySelector('.contentsmis');
    var contentsmisPosition = contentsmis.getBoundingClientRect();
    var viewportHeight = window.innerHeight;

    if (contentsmifPosition.top < viewportHeight && contentsmisPosition.bottom >= 0) {
        // El elemento contentsmif está dentro del área visible del navegador
        contentsmis.style.right = '-10px';
        contentsmis.style.visibility = 'visible';
        contentsmis.style.animationName = 'desplazarco';
        contentsmis.style.animationDuration = '2s';
        contentsmis.style.animationFillMode = 'forwards';
        
    } else {
        // El elemento contentsmif no es visible
        contentsmis.style.right = '400px'; 
        contentsmis.style.animationName = 'desplazarder';
        contentsmis.style.animationDuration = '0.5s';
        contentsmis.style.animationFillMode = 'forwards';
    };
});


