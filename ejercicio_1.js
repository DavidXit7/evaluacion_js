import { CalcularPromedio } from "./modulos/ejercicio_1_modulo.js";

let cantidad_notas = parseInt(prompt("Ingrese la cantidad de notas:"));

let notas = [];

for (let i = 0; i < cantidad_notas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    notas.push(nota);
}

let resultado = CalcularPromedio(notas);
console.log("Resultado:", resultado);