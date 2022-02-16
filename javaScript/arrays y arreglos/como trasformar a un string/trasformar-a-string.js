'use strict'
// como trasformar un arrays a un string


var peliculas = ["iron-man" , "anaconda","hombres de negro"];//arrays de peliculas

var peliculas_string = peliculas.join(); //trasformacion a string separados por comas...

console.log(peliculas_string); 




// ahora como trasformar un STRING  a un ARRAYS 

var animales_string = " caballo, perro , gato , leon , chita" ; 

var animales_arrys = animales_string.split(",");  // el split(","); nos pide que es lo va a separar el strig para comvertir a elementos del arrays
console.log(animales_arrys); 