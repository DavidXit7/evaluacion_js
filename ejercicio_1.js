import { CalcularPromedio } from "./modulos/ejercicio_1_modulo.js"; //Aqui importe el modulo del ejercicio uno, donde la funcion es el actor principal

let cantidad_notas = parseInt(prompt("Ingrese la cantidad de notas:")); //Declaro una variable llamada cantidad notas y la parseo para que lo que ingrese el usuario lo convierta en numeros enteros

let notas = []; //Declaro una variable llamada notas y le asigno un array vacio

for (let i = 0; i < cantidad_notas; i++) { //Aqui creo un ciclo for, que va repetirse segun la cantidad de notas que el usuario quiera digitar
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`)); //Creo una variable llamada nota y la parseo, de manera que lo que el usuario digite lo convierta en numeros flotantes
    notas.push(nota); //Aqui agrego la nota al arreglo vacio con push 
}

let resultado = CalcularPromedio(notas); //Declaro una variable llamada resultado la cual le asigno una funcion importada, donde le voy a enviar un argumento llamado notas
console.log("Resultado:", resultado); //Imprimo el resultado en consola