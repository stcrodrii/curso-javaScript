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
                    {document.write("[funcion sumaYmostra] la suma es " + dato) ;
                    }

                , 

                function(dato)
                    { document.write("<br> [funcion sumaPorDos] la suma por 2 es  = " ,(dato*2));
                    }

       
         );

document.write(" <br>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ <br><br>");
        
function restas (numero1 , numero2 , resta , muestra ){
        var restar = numero1 - numero2 ;

        resta (restar);
        muestra (restar);
  };



 restas (4,5 ,
     function (datos){document.write(datos)  } 

 , function (datos){document.write(" <br> <br>la resta es " + datos)}
 );


