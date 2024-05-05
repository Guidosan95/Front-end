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

for (let i = 0; i < flujoCaja.length; i++) {
    const element = flujoCaja[i];
    console.table(element)
    if (flujoCaja[i]["ingreso"] >= flujoCaja[i]["egreso"]) {
        let resultado= flujoCaja[i]["ingreso"] - flujoCaja[i]["egreso"]
        console.log("hay mas ingresos que egresos ", resultado)
        
    } else{
        let resultado= flujoCaja[i]["ingreso"] - flujoCaja[i]["egreso"]
        console.log("hay mas egresos que ingresos", resultado)
    }
};



const ofertaCreditos=[
    {"nombre": 'Plan 001', "capital": 150000, "plazo en dias": 30, "tasa %": 15 },
    {"nombre": 'Plan 002', "capital": 300000, "plazo en dias":  180, "tasa %": 10},
    {"nombre": 'Plan 003', "capital": 485000, "plazo en dias": 60, "tasa %": 23}
];

console.table(ofertaCreditos);
for (let index = 0; index < ofertaCreditos.length; index++) {
    const element = ofertaCreditos[index];
    console.table(element);
    let interes = (element["capital"] * element["plazo en dias"] * element["tasa %"])/ 100
    console.log("El interes del plan es de $" + interes);
} 
