'use strict'
// eventos 

// eventos cuando precionamos un click [en el html con el metodo [onclick] 
// <button id="click" onclick="alert('hola me has precionado');"> precioname </button>]

var boton = document.querySelector("#click");
//var color = boton.style.background ;


// funcion llamda en el html en la etiqueta [onclick]
function cambiarColor (){
    let color = boton.style.background ; // dentro de la varaible local puse la propiedad del color del bottom
    console.log("numero de clicks  "); // muestra el numero de cliks realizados 
    if(color == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
   //return true; con o sin el true funciona
  // console.log("has puesto el color " + color);
}


