const button = document.querySelector('a#button');

function mostrar(){
    button.style.transition = '300ms';
    button.style.color = 'white';
    button.style.backgroundColor = 'black';
    button.style.textDecoration= 'none';
};
function ocultar(){
    button.style.transition = '300ms';
    button.style.color = 'black';
    button.style.backgroundColor = 'white';

};
function click(){
    window.open = "http://www.youtube.com.ar" ;
};