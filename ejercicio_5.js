import { buscarElemento } from "./modulos/ejercicio_5_modulo.js"; //Importo el modulo de la funcion la cual se va a usar en el ejercicio 5

let cantidad = parseInt(prompt("Ingrese la cantidad de elementos: ")) //Declaro una variable llamada cantidad donde luego la parseo para que en el prompt el usuario lo que vaya a ingresar se convierta en numeros enteros
let lista = []; //Declaro una variable llamada lista donde le asigno un array vacio

for(let i = 0; i < cantidad; i++){ //Creo un ciclo for donde se va a repetir segun la cantidad de elementos que le usuario desee
    let elemento_lista = prompt(`Ingrese el elemento ${i + 1}`); //Declaro una variable llamada elemento_lista, donde le asigno un prompt para que ingrese los elementos
    lista.push(elemento_lista); //Con el push agrego al array vacio los elementos ingresados por el usuario
}

let elemento_buscado = prompt("Ingrese el elemento a buscar: "); //Declaro la variable llamada elemento_buscado, que su funcion es almacenar lo que el usuario desea buscar
let elemento_encontrado = buscarElemento(lista, elemento_buscado); //Declaro la variable llamada elemento_encontrado que se le va a asignar la funcion del modulo importado y se enviaran dos argumentos

if(elemento_encontrado){ //Creo un condicional if donde se evalua el elemento
    alert("El elemento si fue encontrado"); //imprime que lo encontro
} else{
    alert("El elemento no fue encontrado"); //imprime que no lo encontro
}