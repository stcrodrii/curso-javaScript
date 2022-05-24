'use strict'
// ejemplo del dom 2 

/* acceder a un (id) que esta en el [html] a traves  del 
[document.getelementById] =  conseguir elemento por id 
var cajaUno = document.getElementById("caja1");
var cajaDos = document.getElementById("caja2");
var cajaTres = document.getElementById("caja3");
*/

// HACER LA LLAMADA de los elementos de HTML
var cajaUno = document.querySelector("#caja1");
var cajaDos = document.querySelector("#caja2");
var cajaTres = document.querySelector("#caja3");
var clas1 = document.querySelector(".caja4");
var parrafo = document.querySelector("p");
var h1 = document.querySelector("h1");


// cambiar el texto de caja1 desde el js 
cajaUno.innerHTML="cambie el texto con el (cajaUno.innerHTML)";

/* cambiar el ESTILO de caja1 desde el js
cajaUno.style.background = "red";
cajaUno.style.padding = "25px"; */




var si = parseInt(prompt("oprima 1 para cambiar las cajas del html"));
var predet = parseInt(prompt("oprima 2 para cambiar de FORMA ALEATORIA LOS COLORES"));
if(si == 1 ){
    // para cambiar de color de forma ramdom
     if (predet == 2){
        cambiarColorPredet();
        margin();
    }

    // para cambiar de color pidiendo los colores
    else {
        var color = prompt("introdusca el color de  las cajas separados por una ' , '");
        var colores = color.split(","); // le pedi 3 colores y los guarde en un arrys con la funcion split (","); 
        cambiarColor(colores);
        margin();
    }
}




// DARLE ESTILOS 

// clases de html
clas1.style.background = "red"; 
clas1.style.padding = "25px";
clas1.style.paddingLeft = "700px";
clas1.style.marginBottom = "70px";

// etiquetas de html ej- <p> , <h1> , <div> etc
// parrafo  = <p>
parrafo.style.background = "blue"; 
parrafo.style.padding = "25px";
parrafo.style.paddingLeft = "700px";
parrafo.style.marginBottom = "70px";
parrafo.style.color = "red";

// h1 = h1 del html 
h1.style.color = "green";





// FUNCIONES

// funcion para cambiar de color las cjas con [ID] del html
function cambiarColor (colores){
    cajaUno.style.background = colores[0];
    cajaUno.style.color = "black"

    cajaDos.style.background = colores[1];
    cajaDos.style.color = "red"

    cajaTres.style.background = colores[2];
    cajaTres.style.color = "green"

}


// funcion para cambiar de color las cjas DE FORMA RAMDOMcon [ID] del html
function cambiarColorPredet (){
    cajaUno.style.background = "red";
    cajaUno.style.color = "black"

    cajaDos.style.background = "black";
    cajaDos.style.color = "red"

    cajaTres.style.background = "black";
    cajaTres.style.color = "green"

}



function margin (){
    cajaUno.style.padding = "25px";
    cajaUno.style.paddingLeft = "700px";
    cajaUno.style.marginBottom = "70px";

    cajaDos.style.padding = "25px";
    cajaDos.style.paddingLeft = "700px";
    cajaDos.style.marginBottom = "70px";

    cajaTres.style.padding = "25px";
    cajaTres.style.paddingLeft = "700px";
    cajaTres.style.marginBottom = "70px";

}