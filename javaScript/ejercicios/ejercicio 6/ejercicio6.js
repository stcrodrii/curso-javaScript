'use strict'

// hacer un programa que diga si un numero es par o impar 

var num1 = parseInt(prompt("introduce un numero para saber si es par o impar "));


while(isNaN(num1)){
    num1 = parseInt(prompt("introduce un numero para saber si es par o impar "));
}

    if (num1 % 2 == 0){

        alert("el numero introducido es par");

    }

    else {
        alert("el numero introducido es impar");
    }

