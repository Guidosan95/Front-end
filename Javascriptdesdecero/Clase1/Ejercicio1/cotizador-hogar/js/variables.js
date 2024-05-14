let fmPropiedad
let fmUbicacion
const costoM2 = 1.16
const selectPropiedad = document.querySelector("select#propiedad")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")

const datosPropiedad = [{tipo: 'Casa', factor: 1.009},
                        {tipo: 'P.H.', factor: 1.005},
                        {tipo: 'Depto. Edificio', factor: 1.002},
                        {tipo: 'Barrio Privado', factor: 1.09},
                        {tipo: 'Oficina', factor: 1.079},
                        {tipo: 'Local Comercial', factor: 1.041},
                        {tipo: 'Depósito Logística', factor: 1.072}];

const datosUbicacion = [{tipo: 'CABA', factor: 1.013},
                        {tipo: 'Tandil', factor: 1.004},
                        {tipo: 'Costa Atlántica', factor: 1.029},
                        {tipo: 'Patagonia', factor: 1.000},];

// Funcion de propiedad
function cargarComboPropiedad(){
    let property 
    for (let prop of datosPropiedad){
        property += "<option>"+ prop.tipo + "</option>"; 
    }
    selectPropiedad.innerHTML = property;
};

// Funcion de ubicacion
function cargarComboUbicacion(){
    let ubicacio
    for( let ubi of datosUbicacion){
        ubicacio += "<option>"+ ubi.tipo + "</option>" 
    }
    selectUbicacion.innerHTML = ubicacio;
};

// Funcion de Fm propiedad
function obtenerFmPropiedad(){
    if(fmPropiedad !== ''){
        for(prop of datosPropiedad){
            if(prop.tipo === selectPropiedad.value){
                return prop.factor
            }
        }
    }
    
};

// Funcion de Fm Ubicacion
function obtenerFmUbicacion(){
    if(fmUbicacion !== ''){
        for(ubi of datosUbicacion){
            if(ubi.tipo === selectUbicacion.value){
                return ubi.factor
            }
        }
    }
    
};


// Datos 
btnCotizar.onclick = function(){
    
    if (obtenerFmPropiedad() && obtenerFmUbicacion() && parseInt(metros2.value)) {
        let resultado = obtenerFmPropiedad() * obtenerFmUbicacion() * parseInt(metros2.value) * costoM2
        console.log("Resultado de la Póliza: $ " + resultado);
    } else {
        console.warn("Hubo un error en los datos ingresados.");
    
    }
};

cargarComboPropiedad();
cargarComboUbicacion();


