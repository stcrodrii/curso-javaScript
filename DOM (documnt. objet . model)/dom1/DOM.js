'use strict'

// DOM (document objet model)

// 2 maneras de selecionar elemntos en js que estan en html para modificarlos
//manera 1 
var caja = document.getElementById("micaja"); 
//manera 2
var caja1 = document.querySelector(".mih2"); // (.para las clases)  (# para ID)  (h1 paraetiquetas)
var caja2 = document.querySelector("h3");// etiquetas

// cambiar el texto desde js 
caja.innerHTML = "cambie el texto desde js"; 

//cambiar propiedades de la caja desde js 
caja.style.background = "red";
caja.style.padding = "40px";
caja2.style.background = "blue";

// funcion para cambair de color para le etiqueta h2 con la clase "mih2"
function cambiarcolor (color){
    caja1.style.background = color; 
}

// pedir al usuario que cambie de color
var num1  = prompt("escriba 1 si quiere cambair el color del fondo 0 para no");

if (num1 == 1 ){
    var color = prompt("intrudusca el color que desea cambiar"); 
    cambiarcolor(color); 
}

