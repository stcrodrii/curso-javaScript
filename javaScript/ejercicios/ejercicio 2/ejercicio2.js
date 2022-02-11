'use strict'

// hacer unbucle qie te saque la media y sume hasta que nos ingrese un nmero negativvo 

var suma = 0;
var contador = 0 ;

do{
    var num1 = parseInt(prompt("introduce los numero a sumar hasta que pongas uno negativo"));
    console.log("numero Ingre = ["+num1+"]  iteracion = ["+contador+"]");

    if(num1 >= 0){
        
        suma = suma + num1 ;
        contador ++;

    }
    else if(isNaN(num1)){
        num1 = 0 ;
    }
    

}while(num1 >= 0)

var media = suma / contador;

var eleccion = parseInt(prompt("1 = ver la cantidad de numeros para sumar- 2 = a ver la suma de todos los numeros - 3 ver la media de los numeros - 4 = ver todos los datos "));

switch(eleccion){
    case 1: 
        alert("la cantidad de numero para sumar es ["+contador+"]");
        break;

    case 2 :
        alert("la suma de todos los numero es ["+suma+"]");
        break;


    case 3:
        alert("la media es ["+media+"]");
        break;

    case 4 :
        alert("la cantidad de numero para sumar es ["+contador+"]");
        alert("la suma de todos los numero es ["+suma+"]");
        alert("la media es ["+media+"]");
    break;
}
