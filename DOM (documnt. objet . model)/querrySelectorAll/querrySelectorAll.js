'use strict'

// LAS 3 CLASES DE COLORES [RED , YELLOW , BLUE]
function mifuncion(){
    var claseRed = document.querySelectorAll("div[class = 'red']");

    for(var i = 0 ; i<claseRed.length ; i++){
        red1(claseRed[i]);
    }
}

function mifuncion2(){
var claseYellow = document.querySelectorAll("div[class= 'yellow']");
for (var j = 0 ; j<claseYellow.length ; j++){
    red1(claseYellow[j]);
    claseYellow[j].style.background = "yellow"; 
    }
}

function mifuncion3(){
    var claseBlue = document.querySelectorAll("div[class = 'blue']");
    for (var k = 0 ; k<claseBlue.length ; k++){
        red1(claseBlue[k]);
        claseBlue[k].style.background = "blue"; 
        claseBlue[k].style.color = "green";
    }
}
// TODOS LOS [P] EN VERDES
function mifuncion4(){
    var parrafos = document.querySelectorAll('p');
    for(var n = 0 ; n<parrafos.length ; n++){
        red1(parrafos[n]);
        parrafos[n].style.background = "green";
    }
}

// TODO EN ROJO
function mifuncionrojo(){
    var rojos = document.querySelectorAll('div ,  p');
    for(var m = 0 ; m<rojos.length ; m++){
        red1(rojos[m]);
    }
}
// TODO EN AZUL
function mifuncionblue(){
    var blue = document.querySelectorAll('div , p');
    for(var r = 0 ; r<blue.length ; r++){
        red1(blue[r]);
        blue[r].style.background = "blue";
        blue[r].style.color = "green";
    }
}

var boton = document.querySelectorAll('button');
for(var t = 0; t<boton.length ; t++){
   // boton[t].style.background = "pink";
    boton[t].style.backgroundColor = "yellow";
    boton[t].style.transition = "5.23s"; 
}


function red1 (red){
    red.style.background = "red"; 
    red.style.color = "blue";
    red.style.margin = "1%";
    red.style.padding = "1%" ;
    red.style.textAlign = "center";
    
}
