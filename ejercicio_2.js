import { validarAcceso } from "./modulos/ejercicio_2_modulo.js"; //Importo el modulo donde esta ubicada la funcion a usar

let edad_usuario = parseInt(prompt("Ingrese su edad:")); //Declaro la variable edad_usuario y la parseo para que lo que el usuario ingrese se convierta en numero
let contrasena_usuario = prompt("Ingrese su contraseña:"); //Declaro la variable contrasena_usuario y le asigno un prompt para que el usuario ingrese la contraseña 

console.log(validarAcceso(edad_usuario, contrasena_usuario)); //Imprimo en consola el resultado, pero, hago uso de la funcion del modulo importado y le envio dos argumentos, que serian las dos variables declaradas