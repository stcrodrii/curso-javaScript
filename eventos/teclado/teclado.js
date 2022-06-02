'use strict'
var texto = document.querySelector ("#campo_nombre");


//eventos de teclado


// focus
texto.addEventListener('focus',function(){
    console.log ("[focus] estas dentro del imput");
});

// blur 

texto.addEventListener('blur' , function(){
    console.log("[blur] estas fuera del imput");
});

//keydown
// forma de saber que tecla esta precionado dentro del imput

texto.addEventListener('keydown', function(event){
    console.log("[keydown] la tecla que estoy pulsando es [" + String.fromCharCode(event.keyCode) + "]");
   // console.log(String.fromCharCode(event.keyCode)); // esta linea lo que hace es convertir a caracter
});

// keypress
texto.addEventListener('keypress', function(event){
    console.log("[keypress] la tecla PRECIONADA  es [" + String.fromCharCode(event.keyCode) + "]");
});

// keyUP 
texto.addEventListener('keyup', function(event){
    console.log("[keyup] la tecla SOLTADA es [" + String.fromCharCode(event.keyCode) + "]");
});