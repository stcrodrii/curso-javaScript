'use strict'
// evento LOAD
/*lo que se hace es poner todo el codigo de js dentro del evento [load] asi
 ese script lo cargamos dentro del head del html y no dentro del body
 window.addEventListener('load',funtion(){ aqui va todo el codigo})   */

window.addEventListener('load',()=>{ // evento load para poner el script en el html



            var h1 = document.getElementsByTagName ('h1');



                function colorDeCaja (h){
                    h.style.background = "red"; 
                    h.style.color = "blue";
                    h.style.marginLeft = "20px";
                    h.style.marginBottom = "20px";
                    h.style.padding = "25px";
                    h.style.paddingLeft = "600px";
                }

            for(var i = 0 ; i< h1.length ; i++){
                
                colorDeCaja(h1[i]);
            }



 });