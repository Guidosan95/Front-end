let user = prompt('Ingrese su nombre de usuario:');
let password = prompt('Ingrese su contraseña: ')

if (user === 'admin' && password === '1234'){
    alert('Bienvenid@ '+ user);
} else{
    alert('Usted no es quien dice ser. Adios');

}