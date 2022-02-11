'use strict'
// pedir 2 numero al usuario y mostar los numero que hay entre esos 2 numeros
// hacer que los numeros se muestren en el body de la pag

var num1 = parseInt(prompt("introduce el primer numero",0));
var num2 = parseInt(prompt("introduce el segundo numero",0));


document.write("<h1>de " + num1 + "a " + num2 + "existen estos nuemros </h1>");

for(var i=  num1; i <= num2 ; i++){
    document.write(i + "<br/>");
}