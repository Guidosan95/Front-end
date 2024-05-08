
const frase = document.querySelector('#frase');

console.log(frase);

// creamos un objeto de fecha
const fecha = new Date();
console.log( fecha)

//frase.innerText = fecha.getDay();
frase.innerText = fecha.getMonth();

// creamos una variable para el dia del mes
let diaMes = fecha.getDate();
console.log(diaMes);

let numMes = fecha.getMonth() +1; // Porque JS cuenta desde cero, entonces figura otro numero del mes
console.log(numMes);

let anio = fecha.getFullYear();

console.log('El año en el que nos encontramos es: ' + anio);
frase.innerText = "Nos encontramos en: " + `${diaMes}/${numMes}/${anio}`; 