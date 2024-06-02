function generarNumero(){
    let numeroAleatorio = Math.random();
    //Genera un numero random entre 0 - 1
    let numeroPor5 = numeroAleatorio*5;
    console.log('nro random: ', numeroAleatorio);

    let numero = Math.round(numeroPor5);
    console.log('numero', numero);

    return numero + 1;
}
//math.trunc() corta decimales no importa cuantos tenga
//math.round() redondea los numeros
boton.addEventListener(
    'click',
    function()
    {
       let numero = generarNumero()
    }
);
