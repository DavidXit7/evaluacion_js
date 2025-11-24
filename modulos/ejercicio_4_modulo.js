export function calcularImpuestoUnitario(valor, porcentaje) {
    return valor * (porcentaje / 100);
}

export const procesarImpuestos = function() {
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos:"));
    let impuestoTotal = 0;

    for (let i = 1; i <= cantidadProductos; i++) {
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}:`));
        let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i}:`));
        let impuesto = calcularImpuestoUnitario(valor, porcentaje);
        impuestoTotal += impuesto;
    }

    return impuestoTotal;
}