type CallbackBono = (antiguedad: number) => number;

function pagoHorasExtra(tarifa: number = 4.00, ...horas: number[]): number {
    let pagoHoras: number = 0;

    for (const hora of horas) {
        pagoHoras += hora * tarifa;
    }

    return pagoHoras;
}

function salarioBruto(salario: number, pagoHoras: number): number {
    const calculoSalario: number = salario + pagoHoras;
    return calculoSalario;
}

function calcularBono(antiguedad: number): number {
    if (antiguedad >= 3) {
        return 20.00;
    }
    return 0;
}

function aniosAntiguedad(antiguedad: number, callback: CallbackBono): number {
    const bonoCantidad: number = callback(antiguedad);
    return bonoCantidad;
}

function salarioNeto(salarioBruto: number, bono: number, descuento: number = 0): number {
    return salarioBruto + bono - descuento;
}

function acumularNomina(salarios: number[]): number {
    if (salarios.length === 0) {
        return 0;
    }
    return salarios[0] + acumularNomina(salarios.slice(1));
}

const empleados = [
    { nombre: "Ana", salarioBase: 450.00, horasExtra: [5, 2], antiguedad: 4, descuento: 46.16 },
    { nombre: "Luis", salarioBase: 550.00, horasExtra: [], antiguedad: 1, descuento: 56.38 },
    { nombre: "Marta", salarioBase: 480.00, horasExtra: [2], antiguedad: 5, descuento: 49.20 }
];

const salariosNetos: number[] = [];

for (const emp of empleados) {
    const pagoHoras: number = pagoHorasExtra(4.00, ...emp.horasExtra);
    const bruto: number = salarioBruto(emp.salarioBase, pagoHoras);
    const montoBono: number = aniosAntiguedad(emp.antiguedad, calcularBono);
    const neto: number = salarioNeto(bruto, montoBono, emp.descuento);

    salariosNetos.push(neto);
    console.log(`${emp.nombre}: $${neto.toFixed(2)}`);
}

const totalNomina: number = acumularNomina(salariosNetos);
console.log(`Total nómina: $${totalNomina.toFixed(2)}`);