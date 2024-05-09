const caja = document.querySelector('#caja');

function mostrar(){
    caja.style.opacity= '1';
    caja.backgroundColor = '#ffffff';

};

function ocultar(){
    caja.style.opacity = '0';
};

function mostrarOcultar()
{
    //si la caja se ve
    if (caja.style.opacity == '1'){
        //ocultamos la caja
        ocultar();

    } else{
        mostrar();
    }
}