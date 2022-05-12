'use strict'

// ambito de las variables locales y globales

var texto = "holasou un variable global ";  // esto es una variable global

function varlocal (texto){

    var texto2 = "hola soy una variable local";  // esto es una variablelocal una ves terminado el bloq de ejecucuon de la funcion deja de existit
    
    console.log(texto2);
    console.log(texto);



}


varlocal (texto);
document.write(texto);
document.write(texto2);// texto2 me tira un error xq es una variable local y no global ..


//si yo llamo a la variable texto2 con un console.log me va tirar error poruqe solo funciona en el ambito de la funcion