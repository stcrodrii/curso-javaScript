'use strict'

// hacer una funcion por parametros

function  calculadora (num1 , num2){

    console.log("suma " + (num1+num2));
    console.log("resta " + (num1-num2));
    console.log("multi " + (num1*num2));
    console.log("divisi " + (num1/num2));


    return "esto es una funcion con parametros ";

}

console.log(calculadora(1 , 5)); 

console.log("EJERCICIO 2 DE FUNCION CON PARAMETROS"); 
//



function multi ( numero1 , numero2){

    return numero1*numero2;
}

var number = parseInt (prompt("ingrese el numero de la tabla de multiplicar que desea ver ")); 

for (var i = 1 ; i <= 10 ; i++){

document.write( number+ " x " +i+ " = [" +multi(number ,i) +"] <br/>");
  
}
