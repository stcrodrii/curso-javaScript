'use strict'

// muestre todos los numeros divisores de un numero introduicido por un prompt

var num1 = parseInt(prompt("introduce el primer numero"));

for(var i = 0;  i <= num1; i++){

    if(num1%i == 0){

       console.log("los numeros divisibles por ["+num1+"] son = ["+i+"]");

    }

}