const datosPropiedad = [
    {tipo:"Casa", fm: 1.009},
    
    {tipo:"P.H", fm: 1.005},

    {tipo:"Dto. Edificio", fm: 1.002},

    {tipo:"Barrio Privado", fm: 1.019},

    {tipo:"Oficina", fm: 1.039},

    {tipo:"Local comercial", fm: 1.041},

    {tipo:"Deposito Logistica", fm: 1.092}
]

const datosUbicacion = [
    {tipo:"CABA", fm: 1.013},
    {tipo:"Tandil", fm: 1.004},
    {tipo:"Costa Atlantica", fm: 1.029},
    {tipo:"Patagonia Argentina", fm: 1.000}
]

var fmPropiedad
var fmUbicacion
const costoM2 = 1.16
let m2= prompt('Ingresa los metros cuadrados de la vivienda')

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

