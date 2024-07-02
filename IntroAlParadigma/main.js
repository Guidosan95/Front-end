// Ejercicio 1
let empresa = [
    {cuit: String,
     razonSocial: String,
     domicilio: String,
     clientes: cliente,
     DVDs: dvd,
    }
];
listaDVDs{};
let dvd = [
    {codigo: Number,
     titulo: String,
     genero: String,
     anioLanzamiento: Date,
     duracion: Number,
     stock: Number,
    }
];

let alquiler=[
    {codigo: Number,
     DVDs: dvd,
     clientes: cliente,
     fecha: Date,
     fechaEntrega: Date,
     devolucion: Date,
     precio: parseFloat(),
     sancion: parseFloat()
    }
        
];
let cliente=[
    {codigo:Number,
        nombre: String,
        apellido: String,
        domicilio: String,
        email: String,
        telefono: String,
        alquiler: alquiler,
    }
]

// Ejercicio 2
