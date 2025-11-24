export function CalcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    let promedio = suma / notas.length;

    if (promedio >= 4.5) {
        return "Alto";
    } else if (promedio >= 3.0) {
        return "Medio";
    } else {
        return "Bajo";
    }
}