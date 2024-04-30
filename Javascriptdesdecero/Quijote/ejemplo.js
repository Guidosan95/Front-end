let respuesta = prompt('Ingresa quien fue el ganador de Qatar 2022');

if(respuesta.toLowerCase() == 'argentina' || respuesta.toUpperCase() == 'Argentina'){

        frase.innerText = 'CORRECTO';

}
else{
        frase.innerText = 'INCORRECTO';
}