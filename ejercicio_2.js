import { validarAcceso } from "./modulos/ejercicio_2_modulo.js";

let edad_usuario = parseInt(prompt("Ingrese su edad:"));
let contrasena_usuario = prompt("Ingrese su contraseña:");

console.log(validarAcceso(edad_usuario, contrasena_usuario));