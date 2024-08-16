const navbarUl = document.querySelector('.navbar-ul');
const cerrar = document.querySelector('.close');
const navbarImg = document.querySelector('.navbar-img');

window.addEventListener('resize', function(){
    let ancho = document.documentElement.clientWidth
    if(ancho < 435){
        navbarImg.style.display = 'block';
        navbarUl.style.opacity = '0';
        cerrar.style.opacity = '0';
        
    };
}
)

navbarImg.addEventListener(
    'click',
    function(){
        navbarImg.style.opacity ='0';
        navbarUl.style.animationName = 'desplaza';
        navbarUl.style.animationDuration = '1';
        navbarUl.style.animationDirection = 'normal';
        navbarUl.style.opacity = '1';
        cerrar.style.opacity = '1';
        navbarUl.style.display= 'block';
        
        
    }
)
cerrar.addEventListener(
    'click',
    function(){
        navbarUl.style.animationName = 'desplaza';
        navbarUl.style.animationDuration = '1';
        navbarUl.style.animationDirection= 'reverse';
        navbarUl.style.display = 'none';
        navbarUl.style.opacity = '0';
        cerrar.style.opacity= '0';
        navbarImg.style.opacity ='1';
    }
)

const contactoEnviar = document.querySelector('#contacto-enviar');
const contacto = document.querySelector('#contacto');

contactoEnviar.style.display = 'none';

contacto.addEventListener(
    'click',
    function(){
        contactoEnviar.style.display = 'flex';
    },
)




