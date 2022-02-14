'use strict'

// arrays avansados 

var numeros =[2,5,7,34,345,324,4,2,34,45,45,56,67,354,65,56,76,67,6734,54,2345,56,345,56,3,56,3456,56,356,356,3456,34]; 

//sacar la longitud del arrays 

console.log( "la longitud del arrays es de ["+ numeros.length + "] posiciones");

// pedir por pantalla el valor de alga de las posiciones del arrays

var posicion = parseInt(prompt("introduce la posicion que desea saber el valor")); 

if (posicion >= numeros.length){
    alert("el  numero ingresado sobrepasa las posiicones del arrys"); 

}
else{
    alert("en la posicion [" + posicion+"] se emcuntra el valor ["+ numeros[posicion]+ " ]");
}

// recorrer un arrelo con un for y mostar todas las posiicones en la pag en una lista 

document.write("<h1>lista del arreglo para mostrar todos us elmentos <h1/>")

for (var i = 0 ; i<numeros.length ; i++) {

    document.write(" <h5><li>"+ numeros[i] +"</li> <h5>");

}