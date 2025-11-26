import { generarTabla } from "./modulos/ejercicio_3_modulo.js"; //Importo el modulo para hacer uso de la funcion en el ejercicio numero tres

let numero_tabla = parseInt(prompt("Ingrese el número para generar su tabla de multiplicar:")); //Declaro la variable llamada numero_tabla la cual le asigno un prompt, pero la parseo, para lo que el usuario digite se convierta en numeros enteros

let tabla = generarTabla(numero_tabla); //Declaro una variable llamada tabla la cual le asigno el nombre de la funcion importada donde le envio un argumento

console.log(tabla); //Imprimo el resultado, la cual esta almacenado en la variable anterior llamada tabla