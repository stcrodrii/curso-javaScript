'use strict'

// como hacer alerta
alert("esto es un alerta"); 
var n = "esto es otra alerta utilizando una variable";
alert(n);


// alertas de confirmacion 
// se usa con la funcion {confirm();}
confirm("¿quieres continuar?"); 

var resultado = confirm("si o no ");
console.log("esto es el resultado de la alerta de confirmacioon 2 ["+resultado+"]");


// ingreso de datos 
// se usa la funcion {prompt();}

var result = prompt("que edad tienes",0); // el 0 es el numero que nos pide por defecto es opcional ponerlo
console.log("resultado de la edad ["+ result+"]");

// el resultado del prompt simepre es un tipo de dato string

console.log(result+1); // para comprobar que es un string
