var costosFijos = prompt('Ingresa el costo fijo')
var precioDeVenta = prompt('Ingresa el precio de venta')
var costosVariables = prompt('Ingresa el costo variable')

var cV= costosFijos / (precioDeVenta - costosVariables)

alert(cV)