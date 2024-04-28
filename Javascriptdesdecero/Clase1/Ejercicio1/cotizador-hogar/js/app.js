let fm
let m2= prompt('Ingresa los metros cuadrados de la vivienda')
const costom2 = 1.16
var vivienda = prompt('Ingresar el tipo de propiedad: Casa, P.H, Dto. Edificio, Barrio Privado, Oficina, Local comercial, Deposito logistica  ')

switch(vivienda){
    case "Casa": 
    fm = 1.009;
    break;

    case "P.H": 
    fm = 1.005;
    break;

    case "Dto. Edificio":
    fm =  1.002;
    break;

    case "Barrio Privado":
    fm =  1.019;
    break;

    case "Oficina":
    fm =  1.039;
    break;

    case "Local comercial":
    fm =  1.041;
    break;
    default:
    fm= 1.092;

}
let total = fm * m2 * costom2;

alert('Resultado de la multiplicacion: $ ' + total);