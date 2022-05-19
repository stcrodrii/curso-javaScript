'use strict'

// arrays multidimencioles  { son arrays dentro de otros arrays }

var categorias = ["comedia" , "terror","accion"];// arrays de categorias
var peliculas = ["iron-man" , "anaconda","hombres de negro"];//arrays de peliculas
var cine = [categorias , peliculas];// arrays que contiene 2 arrays en su interior [ multidimendional] 



// cine [][]; {dentro del primer corchete coloco el numero del arrays que quiero ver y en el 2do coloco el la pocicion de lo que contiene ese arrays selecioando}
console.log(cine); // por consila se muestra el arrays multidimencional 
document.write(cine[1][2]+" <br/>"); // mostre el arrays de peliculas
document.write(cine[0][0]);// mostre el arrays de categorias 

document.write("<br> ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br>");

for(var i = 0 ; i<categorias.length ; i++){


    for(var j = 0 ; j<peliculas.length ; j++){
    
        document.write(cine[i][j] + " /");

    }
 document.write("<br>");
}