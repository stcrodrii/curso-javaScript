'use strict'
// CONSEGUIR ELEMENTOS POR SU [ETIQUETA]
 
var todosLosDivs = document.getElementsByTagName('div'); // puse dentro de un arrys todos los [div] que se encuentran en la html 
var todoslosParrafos = document.getElementsByTagName('p'); // puse dentro de un arrys todos los [parrafos] que se encuentran en la html     


// ver lo que tiene un div del html
var contenidoDivs1 = todosLosDivs[0] ;
contenidoDivs1.innerHTML = "nuevo div en posicion [1]"; // modificar lo  que tiene un div 
console.log(contenidoDivs1);

// modificar el div en la posicion 0 del arrys
//todosLosDivs[0].style.padding = "50px";
//todosLosDivs[0].style.background = "red";

for(var i = 0 ; i< todosLosDivs.length ; i++){
    
    colorDeCaja(todosLosDivs[i]);
}


for(var j = 0 ; j< todoslosParrafos.length ; j++){
    colorDeCajaParra(todoslosParrafos[j]);
}


function colorDeCaja (divs){
    divs.style.background = "red"; 
    divs.style.color = "blue";
    divs.style.marginLeft = "20px";
    divs.style.marginBottom = "20px";
    divs.style.padding = "25px";
    divs.style.paddingLeft = "600px";
}
function colorDeCajaParra(p){
    p.style.background = "blue"; 
    p.style.color = "red";
    p.style.marginLeft = "20px";
    p.style.marginBottom = "20px";
    p.style.padding = "25px";
    p.style.paddingLeft = "600px";
}