'use strict'

//mostrar todos los numeros impares qe se encunetran dentro de 2 numeros introducidos

var num1 = parseInt( prompt("introdusca el primer numero",0));
var num2 = parseInt( prompt("introdusca el segundo numero",0));

for(var i = num1 ; i <= num2 ; i++){

    

    if(i%2 !=0){
        console.log(i);

    }
}