'use strict'
/*
1- pida 6 numero por pantalla y los meta en un arrys 
2-mostar el arrys entero (todos sus elementos) en el cuerpo de la pag y de la consola 
3-ordenar y mostrar 
4-invertir orden 
5-mostrar cuantos elementos tiene el arrys 
6- buscar de un valor introducido por el usuario , que nos diga si lo encuntra y su indice 
(se valora el uso de funciones )
*/
var arrys = [];

// 1
for (var i = 0 ; i <= 6 ; i++){  
    arrys [i] = prompt("introduce el numero en la posicion ["+ i +"]");
}
//2
for (var i = 0 ; i< arrys.length ; i++ ){
    console.log("indice "+i+" =  elemento introducido por pantalla ["+arrys[i] + "]" );
    document.write("indice "+i+" =  elemento introducido por pantalla ["+arrys[i] + "] <br/>");
}

console.log("ordenados de menor a mayor");
document.write("  <br/> <p> ordenados de menor a mayor <p/> <br/>");
// 3
arrys.sort(function(a,b){return a-b}); // funcion de call back para ORDENAR NUMEROS * si cambio la b por la a me ordena al reves
// de menor a mayor
for (var i = 0 ; i< arrys.length ; i++ ){
    console.log("indice "+i+" =  elemento introducido por pantalla ["+arrys[i] + "]" );
    document.write("indice "+i+" =  elemento introducido por pantalla ["+arrys[i] + "] <br/>");
}

document.write("<br/> <p> ordenados de mayor a menor <p/> <br/>");
console.log("ordenados de mayor a menor");

arrys.reverse(); // de mayor a menor

for (var i = 0 ; i< arrys.length ; i++ ){
    console.log("indice "+i+" =  elemento introducido por pantalla ["+arrys[i] + "]" );
    document.write("indice "+i+" =  elemento introducido por pantalla ["+arrys[i] + "] <br/>");
}

console.log("el numero de elementos del arrys es ["+arrys.length+"]");
document.write(" <br/> el numero de elementos del arrys es ["+arrys.length+"] <br/>");
// buscar elemento dentro del arrys 

var buscar = parseInt( prompt("introdusca el numero que desea buscar dentro del arrys")); 

var busqueda = arrys.find(arrys => arrys == buscar); 
if (busqueda == undefined){
    console.log("lo sieento el numero que usted esta buscando no se encuntra dentro del arrys");
    document.write("lo sieento el numero que usted esta buscando no se encuntra dentro del arrys");
}
else {
console.log(" ["+ busqueda+"] es el numero que buscaste y se encuentra dentro del arrys  ");
document.write(" ["+ busqueda+"] es el numero que buscaste y se encuentra dentro del arrys <br> ");

var busqueda_indice = arrys.findIndex(arrys=> arrys == buscar);
console.log("el indice de tu busqueda se encuntra en la posiciion ["+busqueda_indice+"] del arrys ");
document.write("el indice de tu busqueda se encuntra en la posiciion ["+busqueda_indice+"] del arrys ");
}



