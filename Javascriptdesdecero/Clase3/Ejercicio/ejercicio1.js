const flujoCaja = [
    {"periodo": 'Enero', "ingreso": 1500, "egreso": 1500},
    {"periodo": 'Febrero', "ingreso": 2500, "egreso": 2500},
    {"periodo": 'Marzo', "ingreso": 84683, "egreso": 1155},
    {"periodo": 'Abril', "ingreso": 135353, "egreso": 1533},
    {"periodo": 'Mayo', "ingreso": 1535, "egreso": 5434},
    {"periodo": 'Junio', "ingreso": 4343354, "egreso": 5434543},
    {"periodo": 'Julio', "ingreso": 435453, "egreso": 4543},
    {"periodo": 'Agosto', "ingreso": 78351, "egreso": 7816},
    {"periodo": 'Septiembre', "ingreso": 1878, "egreso": 95634},
    {"periodo": 'Octubre', "ingreso": 48483, "egreso": 9433},
    {"periodo": 'Noviembre', "ingreso": 35483, "egreso": 53133},
    {"periodo": 'Diciembre', "ingreso": 3843, "egreso": 348133},
]

console.table(flujoCaja);
function resultadoDeFlujoDeCaja(){
    for (let i = 0; i < flujoCaja.length; i++) {
        const element = flujoCaja[i];
        console.table(element)
        if (flujoCaja[i]["ingreso"] >= flujoCaja[i]["egreso"]) {
            let ganancias= flujoCaja[i]["ingreso"] - flujoCaja[i]["egreso"]
            let result = '(1)';
            console.log("Hay mas ingresos que egresos. ", ganancias ,"Y tambien hay ganancias", result)
            
        } else if (flujoCaja[i]['ingreso'] <= flujoCaja[i]['egreso']) {
            let perdidas= flujoCaja[i]["ingreso"] - flujoCaja[i]["egreso"]
            let result = '(-1)';
            console.log("Hay mas egresos que ingresos. ", perdidas , "Y tambien hay perdidas", result)
        } else {
            let result = '(0)';
             console.log("hay igual ingresos que egresos", result);
        }
    };
};
resultadoDeFlujoDeCaja();
/*Mejorar la usabilidad de los ejercicios del desafío del módulo 3.
Diseñar una función que reciba un flujo de caja como dato de entrada y retorne -1 si hay pérdidas, 1 si hay ganancias, 0 si los ingresos son iguales a las ganancias.
*/
// Flujo de Caja con dato de entrada





// Oferta de creditos
const ofertaCreditos=[
    {"nombre": 'Plan 001', "capital": 150000, "plazo en dias": 30, "tasa %": 15 },
    {"nombre": 'Plan 002', "capital": 300000, "plazo en dias":  180, "tasa %": 10},
    {"nombre": 'Plan 003', "capital": 485000, "plazo en dias": 60, "tasa %": 23}
];

console.table(ofertaCreditos);
function interesPlan(){
    for (let index = 0; index < ofertaCreditos.length; index++) {
        const element = ofertaCreditos[index];
        console.table(element);
        let interes = (element["capital"] * element["plazo en dias"] * element["tasa %"])/ 100
        console.log("El interes del plan es de $" + interes);
    } 
}
interesPlan();

/*Mejorar la usabilidad del código que hiciste en el segundo desafío del módulo 3.
Crear una función que reciba el array de inversiones y retorne un array. Agregar a cada ítem el campo “interés” con la fórmula correspondiente.*/