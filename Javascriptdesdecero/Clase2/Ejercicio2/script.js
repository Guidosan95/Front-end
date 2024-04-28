confirm('Acepta a ingresar si sos mayor de edad: ');
let edad = prompt('¿Cuantos años tenes?: ');

if(edad < 18){
    console.log('Usted no tiene acceso a esta pagina');
    alert('PELIGRO, USTED ES MENOR DE EDAD');
}else{
    console.log('Usted puede ingresar al sitio web');
    alert('Gracias por su sinceridad. Ojala le guste nuestro sitio web');
}

