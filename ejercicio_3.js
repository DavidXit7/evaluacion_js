import { generarTabla } from "./modulos/ejercicio_3_modulo.js";

let numero_tabla = parseInt(prompt("Ingrese el número para generar su tabla de multiplicar:"));

let tabla = generarTabla(numero_tabla);

console.log(tabla);