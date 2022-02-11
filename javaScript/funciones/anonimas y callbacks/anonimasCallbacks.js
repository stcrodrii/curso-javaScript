'use strict'

// funciones anonimas y callbacks

function sumame (num1 , num2 , sumaYmostra , sumaPorDos){  // funcion que recibe como parametro 2 numeros y 2 funciones
    
    var sumar = num1 + num2 ; 
    sumaYmostra(sumar);
    sumaPorDos(sumar)
    return sumar ; 


}

sumame  ( 2 , 3 ,
    
                function(dato)
                    {console.log("[funcion sumaYmostra] la suma es " + dato) ;
                    }

                , 

                function(dato)
                    { console.log(" [funcion sumaPorDos] la suma por 2 es  = " ,(dato*2));
                    }

       
         );


