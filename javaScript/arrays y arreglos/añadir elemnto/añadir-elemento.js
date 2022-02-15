
'use strict'

// añadir elemntos a un arrays que ya contiene elmetnos 
//  .push(elemnto);  {añadir elemnto a un arrays}


var peliculas = ["la casa roja", "el perro azul", "batman","hombre araña","airoman"];

 

peliculas.push("doctor extraño"); // añadi un elemnto mas
//console.log(peliculas); 


do{
    var añadirPeli = prompt("añade tu pelicula / en caso de no querer añadir mas introducir la palabra 'ACABAR'" );
    peliculas.push(añadirPeli); 

}while(añadirPeli != "ACABAR");
peliculas.pop(); // esto es para borrar el ultimo elemento del arrays en este caso es para eliminar el "ACABAR"
console.log(peliculas);