/*API XMLHttpRequest
Es un objeto JavaScript que fue diseñado por
Microsoft y adoptado por Mozilla, Apple y Google.
Actualmente, es un estándar de la W3C.
Proporciona una forma fácil de obtener
información de una URL sin tener que recargar
la página completa.
A pesar de su nombre, XMLHttpRequest puede
ser usado para recibir cualquier tipo de dato, no
sólo XML, y admite otros formatos además de
HTTP (incluyendo File y FTP).
Para crear una instancia de XMLHttpRequest,
debes hacer lo siguiente: */

let xhr = new XMLHttpRequest;
console.log(xhr.readyState);
/*Valores posibles
Estado Descripción
0 - UNSENT Objeto Inicializado.
1 - OPENED Objeto configurado.
2 - HEADERS_RECEIVED El objeto ya se envió y el status de los headers del servidor
ya volvieron.
3 - LOADING Descargando. La propiedad responseText mantiene datos
parciales.
4 - DONE La operación se completó no necesariamente exitosa. */


//GET- POST -PUST -PATCH- DELETE-
xhr.open("get","texto.txt");
console.log(xhr.readyState);

//metodo de envio
//para hacerlo minimo tenemos que tener un servidor
xhr.send();

//XAMPP
//localhost
//127.0.0.1
//C:xampp/htdocs (meter todos los archivos esta carpeta actual, a la de XAMPP)

