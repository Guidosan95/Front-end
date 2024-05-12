
var fmPropiedad
var fmUbicacion
const costoM2 = 1.16
let m2= prompt('Ingresa los metros cuadrados de la vivienda')
const propiedades = document.querySelector("#propiedad");
const ubicaciones = document.querySelector("#ubicacion");
const inputMetros2 = document.querySelector('input#metros2');

function cargarComboPropiedad(){

};
function cargarComboUbicacion(){

};

//Vivienda

let tipoVivienda = prompt('Ingresar el tipo de propiedad: Casa, P.H, Dto. Edificio, Barrio Privado, Oficina, Local comercial, Deposito logistica  ')

if (tipoVivienda !== ''){
    for (let propiedad of datosPropiedad){
        if (propiedad.tipo === tipoVivienda){
            fmPropiedad = propiedad
            break   
        }
    }
}

// Ubicacion
let tipoUbicacion = prompt("Selecciona la ubicación de la vivienda: \n" +
"('CABA', 'Tandil', 'Costa Atlántica')")

if (tipoUbicacion !== ''){
    for (let ubicacion of datosUbicacion){
        if(ubicacion.tipo === tipoUbicacion){
            fmUbicacion = ubicacion
            break
        }
    }
}

// Datos 
if (fmPropiedad && fmUbicacion && parseInt(m2)) {
    let resultado = fmPropiedad.fm * fmUbicacion.fm * m2 * costoM2
    console.log("Resultado de la Póliza: $ " + resultado)
    alert("Resultado de la Póliza: $ " + resultado)
} else {
    console.warn("Hubo un error en los datos ingresados.")
    alert("Hubo un error en los datos ingresados.")
}

