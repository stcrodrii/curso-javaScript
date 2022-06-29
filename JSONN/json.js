'use strict'

window.addEventListener('load', ()=>{

// JSON = javascript object notation

// crear objetos con atributos
var peliculas = {

    nombre: "superman",
    año: 2022 ,
    director: "james cameron",
    presupuesto: 3000000000

}; 
console.log (peliculas);


// como accerder a esos atributos  [nombre del objeto [peliculas.atributo] el atributo que deseo acceder]

document.write(peliculas.nombre + "<br>");


// comop modificar un atributo 

peliculas.nombre = "batman y robin "; 
document.write(peliculas.nombre);

    
});