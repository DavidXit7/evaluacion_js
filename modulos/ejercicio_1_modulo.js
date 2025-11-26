export function CalcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    let promedio = suma / notas.length;

    if (promedio >= 4.5) {
        return `El promedio fue de: ${promedio}, la cual el desempeño es: Alto`;
    } else if (promedio >= 3.0) {
        return `El promedio fue de: ${promedio}, la cual el desempeño es: Medio`;
    } else {
        return `El promedio fue de: ${promedio}, la cual el desempeño es: Bajo`;
    }
}