'use strict'
//  BOM     =   BROWSER OBJECT MODEL 

//  para ver le tamaño de la pantalla en px

// forma 1
function tamañoPantalla (){
    console.log(screen.height);
    console.log(screen.width);
}

tamañoPantalla();

// forma2 pero de nos muestra los px en vivo (si tengo algo abierto como la consola los px van a ser menos )
function tamañoPantalla2 (){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}
tamañoPantalla2 ();


// propiedades para ver la url 
console.log(window.location);


console.log(window.location.href);

// metodo o funcion para rediriguir a  otra pagina 
// http://google.com (al pasarle uan direccion nos redigira a esa)

function redirigirUrl (url){
    window.location.href = url; // la direccion que tenga url sera la direccion actual ya que es igual a (window.location.href)
}

// abrir otra ventana del navegador con alguno direccion 
function abrirVentana (url){
    window.open(url);
}

// abrir otra ventana pero esta ves con propiedades
function abrirVentana2 (url){
    window.open(url,"", "width = 200 , height = 200"); // asi se abre un segunda ventana pero con porpiedades
}