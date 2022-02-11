'use strict'

/* hacer una calculadora
1- que muestre la suma , resta , multiplicacion y division 
2- que muestre en el body , en la consola y en un alert 

*/

var num1 = parseInt(prompt("introduce el primer numero",0));
var num2 = parseInt(prompt("introduce el segundo numero",0));

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){
    var num1 = parseInt(prompt("introduce el primer numero",0));
    var num2 = parseInt(prompt("introduce el segundo numero",0));
}

// body
var resultado = " ["+ num1+"] + ["+num2+"] es = {"+ (num1+num2 )+ "} <br/>" +
                " ["+ num1+"] - ["+num2+"] es = {"+ (num1-num2 )+ "} <br/>" +
                " ["+ num1+"] x ["+num2+"] es = {"+ (num1*num2 )+ "} <br/>" +
                " ["+ num1+"] % ["+num2+"] es = {"+ (num1/num2 )+ "} <br/>" ;
document.write(resultado);

// alert
var resultadoEnAlert = " ["+ num1+"] + ["+num2+"] es = {"+ (num1+num2 )+ "} \n" +
                " ["+ num1+"] - ["+num2+"] es = {"+ (num1-num2 )+ "} \n" +
                " ["+ num1+"] x ["+num2+"] es = {"+ (num1*num2 )+ "} \n" +
                " ["+ num1+"] % ["+num2+"] es = {"+ (num1/num2 )+ "} \n" ;
alert(resultadoEnAlert);

// consola
var resultadoEnConsola = " ["+ num1+"] + ["+num2+"] es = {"+ (num1+num2 )+ "} \n" +
                " ["+ num1+"] - ["+num2+"] es = {"+ (num1-num2 )+ "} \n" +
                " ["+ num1+"] x ["+num2+"] es = {"+ (num1*num2 )+ "} \n" +
                " ["+ num1+"] % ["+num2+"] es = {"+ (num1/num2 )+ "} \n" ;
console.log(resultadoEnConsola);
