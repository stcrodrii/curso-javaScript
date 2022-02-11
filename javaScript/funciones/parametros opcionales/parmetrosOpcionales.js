'use strict'

// parametros opcionales de una funcion

function datos ( num1 , num2 , mostrar = false ){ // funcion con parametros y paramtros opcionales

    if(mostrar == false){

        console.log( "la suma de [" + num1+ "] + ["  + num2+ " ] es ["+ (num1+num2) +"]");

    }
    else {
        document.write( "la suma de [" + num1+ "] + ["  + num2+ " ] es ["+ (num1+num2) +"]");
    }

}


datos (40 , 50 , true); // esto me muestra por el body
datos (3 ,4 ); // esto me muestra por la consola  (aca como no le indicque si era true o false toma el parametro que esta defindo arriba enla funcion )
datos (5 , 4 , false); //esto me muestra por la consola 