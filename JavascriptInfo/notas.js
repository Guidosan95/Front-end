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

// SPA
// Una SPA o Single Page Application es una aplicación web que cabe en una sola página y tiene el propósito de dar una experiencia más fluida a los usuarios, como si fuera una aplicación de escritorio.
// En una SPA todos los códigos de HTML, JavaScript y CSS se cargan una sola vez. Los recursos necesarios se cargan en forma dinámica cuando lo requiera la página, normalmente como respuesta a las acciones del usuario.
// Casos de Uso
// *   Separación de la interfaz del BackEnd.
// *   Aplicaciones reactivas.
// *   Interfaces dinámicas.

// Se inyecta de manera sincronica el contenido. 
let links = document.querySelectorAll('a');
let main = document.queryselector('main');
links.forEach((link)=>{
    link.addeventlistener('click', (e)=>{
        e.preventDefault()
        let id =link.id
        let archivo= id + '.html'
        location.hash = link.id
    })
})
let pagina_inicial = ajax ('home.html');
pagina_inicial.addeventlistener('load', ()=>{
        if(pagina_inicial.status == 200){
        main.innerHTML = pagina_inicial.response
        }
    }
);

function ajax(url, metodo){
    let http_metodo = metodo || GET;
    let xhr = new XMLHttpRequest
    xhr.open(http_metodo,url)
    xhr.send()
    return xhr
}
window.addevenetlistener('hashchange', ()=>{
    let archivo= location.hash.split('#')[1] + '.html'
    let xhr= ajax(archivo)
    xhr. Addeventlistener('load', ()=>{
        if (xhr.status == 200){
        main.innerHTML= xhr.response
        }
    })

});

// API History
// El objeto DOM window proporciona acceso al historial del navegador a través del objeto history. Éste da acceso a métodos y propiedades útiles que permiten avanzar y retroceder a través del historial del usuario, así como - a partir de HTML5 - manipular el contenido del historial.
// Esta interfaz servirá para navegar de una página a otra.

// history.pushState
// Entradas
// *   data: any - Representa información sobre la nueva ruta. Se puede usar para seguimiento.
// *   unused: any - Contiene el título del elemento de historial. Se conserva para compatibilidad.
// *   url: string - Un texto que representa la nueva URL.
// Operaciones
// Esta función cambia el texto de la barra de búsqueda del navegador y agrega una entrada al historial con ese nuevo texto.
// Retorno
// Nada

// history.go
// Entradas
// * step: number - Un número que representa el
// salto a dar en el historial.
// Operaciones
// Se mueve en el historial la cantidad de posiciones asignadas por step. Si step es positivo, se mueve hacia adelante, caso contrario se mueve hacia atrás.
// Retorno
// Nada

// Location
// El objeto location es un objeto de solo lectura que contiene información acerca de la ubicación
// HTTP actual de la página. Esto es, acerca de la
// ruta actual.
// Sirve para obtener la ruta actual (aquello escrito en la barra de búsqueda) y diseñar una interfaz
// que reaccione en base a ello.
location.hash;
// Obtiene el hash de la URL (aquello que empieza
// por '#...'):
console.log(location.hash);
// Casos de Uso
// *   Obtener el Hash.
// *   Asignar estilos al elemento cuyo ID sea el
// * descrito por el hash.
location.search;
// Obtiene los parámetros por query de la URL. Los parámetros por query serán aquellos escritos luego del símbolo '?'. Los vamos a usar para pasar parámetros a cada página:
console.log(location.search)
//Si bien son un texto formateado, JavaScript cuenta con la interfaz URLSearchParams que permite obtener esos parámetros como una colección, facilitando su acceso.
// si la url es ?q/=Hola
const params = new
URLSearchParams(location.search)
console.log(params.get('q')); // Retorna Hola

location.pathname
// Obtiene la ruta actual. Sirve al router ya que es la ruta la que define la página a mostrarse:
console.log(location.pathname)

// Promesa =Valor (eventual)
// Puede pasar por tres estados posibles
// pending- resolved- rejected
let promesa = new Promise((resolver, rechazar)=>{
    resolver(1); //de esta manera se le agrega un valor
})

//Otro ejemplo
let promesa = new Promise((resolver, rechazar)=>{
    let xhr = new XMLHttpRequest
    xhr.open('get', 'info.txt')
    xhr.addEventListener('load', ()=>{
        if (xhr.status== 200){
            resolver(xhr.response)
        }
    })
    xhr.send()
})
promesa.then((valor)=>{
    console.log('Promesa resuelta', valor)
})
promesa.catch();
