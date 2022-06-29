'use strict'
// eventos boton.style.background = "red";

//metodo addEventListener('click' , funtion (){}); // como parametro se le pasa el evento entre '' y una funcion , esas 2 parametros

var  botom = document.querySelector("#botom");
function cambiarColor(){
    var color = botom.style.background ;

    if (color == "green"){

        botom.style.background = "red";

    }else{
        botom.style.background = "green";
    }               
}

// evebto del click
botom.addEventListener('click', function(){
    cambiarColor();
    this.style.border = "10px solid black";        // THIS hace referencia al objeto que estoy usando 
});


// evento del mouse over 

var botom2 = document.querySelector("#botom2");

botom.addEventListener('mouseover' ,function (){
    botom2.style.background = "blue";
});


// evento del mouse out 
var botom3 = document.querySelector("#botom3");

botom3.addEventListener('mouseout', function(){
    botom3.style.background = "yellow";
});

    

