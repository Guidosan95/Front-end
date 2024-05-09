const caja = document.querySelector('#frase');

function reloj()
{
    //Creamos un objeto fecha
    const fecha = new Date();
    //Obtenemos el numero correspondiente a las horas
    let horas = fecha.getHours();
    if(horas < 10){
        horas = '0' + horas;
    }
    console.log('horas: ', horas);

    //obtenemos el numero correspondiente de numeros de minutos
let minutos = fecha.getMinutes();
if(minutos < 10){
    minutos = '0' +minutos;
}
console.log('minutos: ', minutos);

//obtenemos el numero correspondiente de numeros de segundos
let segundos = fecha.getSeconds();
if(segundos < 10){
    segundos = '0' +segundos;
}
console.log('segundos: ', segundos);

frase.innerText = `${horas}:${minutos}:${segundos}`;
}
//invocamos la funcion reloj()
reloj();
//actualizamos el llamado a la funcion reloj
// en el parentesis se llama la funcion 
setInterval(reloj, 1000);


