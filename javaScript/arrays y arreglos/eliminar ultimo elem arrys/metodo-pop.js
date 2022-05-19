'use strict'
// ARRYS
var peliculas = [ "spider man","hombre en lllams" , "dragon balll","doctor strench"];


// agregue 2 peliculas mas al arrys
peliculas.push ("acuaman" , "rey leon"); 

// mostrar el arrays pelicula
recorrerPelis(peliculas);


// METODO POP .. (ES PARA ELIMINAR EL ULTIMO ELEMENTO QUE ESTA EN UN ARRYS)
peliculas.pop();


recorrerPelis(peliculas); // ahora el arrys ya no tiene la pelicula "el rey leon "





// funcion para recorrer peliculas

function recorrerPelis (peliculas){
    for(var i = 0 ; i <peliculas.length ;i++)
{
    document.write("POSICION [" +i+ "]"+peliculas[i] + "<br>");

}
document.write("<br> +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ <br> ");

}


