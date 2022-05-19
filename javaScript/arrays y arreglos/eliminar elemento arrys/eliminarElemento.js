'use strict'

// como eliminar un elemento de un arrays

var marcas = ["axe","nike","addidas","petronas", "ferrari", "audi"];

// voy a eliminar la marca "petronas" del arrys

//primera forma de eliminar 
marcas [3]= undefined;  // esto mas que elinar deja indefinido al elemento
console.log(marcas);


// eliminar la marca 

// 2da forma de eliminar
//eliminar la marca addidas
// crear una variable donde le aplico el metodo   .indexOf ("elemento - a eliminar"); 

var indice = marcas.indexOf("addidas"); 
console.log(indice);


 if(indice > -1){// cuando el indexOf no ecunetre el elemnto que quieras eliniar arrojara un  (-1) en caso contrario te dira el indice

    marcas.splice(indice , 1); // 1 xq el slice lo que hace es pedir 2 parametros primero donde se para y hasta donde elinina (1 xq le digo q elinine el mismo indice quie encontro)
                            // si quiero elininar desde ese indice hasta el final solo coloco el parametro del indice 
                            // ej : marcas.splice(indice); esto me elimina desde el indice hasta el final del arryas
 }
 console.log( marcas);