'use strict'

// tabla de multiplicar pedido por un prompt

var number = parseInt(prompt("introduce la tabla de multiplicar que deseas saber ")); 

for (var i = 0 ; i <= 10 ; i++ ){

    var resultado = number * i ; 
document.write(number + " x " + i +" = [" +resultado+"]" +"<br/>"); 

}