'use strict'

// parametros rest ( resto )  y   spread 

function frutas ( ...lasfrutas){ // cuando le pongo como parametro [ ...nombre] quiere decir que es indefinido la cantidad de paramertos q le voy a passar
    console.log("las frutas son = " , ...lasfrutas);
}

frutas ("manzna ","pera" , "coco");

