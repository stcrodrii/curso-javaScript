'use strict'
// hacer un prhrama que pida2 numeros y diga cual es el mayor / si el numero ingresado es menor a 0 pedir denuevo 

//var num1 = parseInt(prompt("introduce el numero 1 "));
//var num2 = parseInt(prompt("ingresa el numero 2"));

do{

    var num1 = parseInt(prompt("introduce el numero 1 "));

    var num2 = parseInt(prompt("ingresa el numero 2"));

}while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) // la funcion isNaN(var) es para que si o si te den un numero 

if(num1>num2){

    alert("el numero mayor es "+ num1);

}
else if(num1<num2){
    alert("el numero mayor es"+num2);
}
else{
    alert("son iguales");
}



//console.log(num1 , num2);