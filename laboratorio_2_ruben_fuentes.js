function pagoHorasExtra(tarifa = 4.00, ...horas) {
    let pagoHoras = 0;
    for (const hora of horas) {
        pagoHoras += hora * tarifa;
    }
    return pagoHoras;
}
function salarioBruto(salario, pagoHoras) {
    const calculoSalario = salario + pagoHoras;
    return calculoSalario;
}
function calcularBono(antiguedad) {
    if (antiguedad >= 3) {
        return 20.00;
    }
    return 0;
}
function aniosAntiguedad(antiguedad, callback) {
    const bonoCantidad = callback(antiguedad);
    return bonoCantidad;
}
function salarioNeto(salarioBruto, bono, descuento = 0) {
    return salarioBruto + bono - descuento;
}
function acumularNomina(salarios) {
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
const salariosNetos = [];
for (const emp of empleados) {
    const pagoHoras = pagoHorasExtra(4.00, ...emp.horasExtra);
    const bruto = salarioBruto(emp.salarioBase, pagoHoras);
    const montoBono = aniosAntiguedad(emp.antiguedad, calcularBono);
    const neto = salarioNeto(bruto, montoBono, emp.descuento);
    salariosNetos.push(neto);
    console.log(`${emp.nombre}: $${neto.toFixed(2)}`);
}
const totalNomina = acumularNomina(salariosNetos);
console.log(`Total nómina: $${totalNomina.toFixed(2)}`);
export {};
