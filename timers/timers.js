'use strict'


window.addEventListener('load',()=>{

/* timers 

sirve para que algo se ejecute cada cierto timepo 

se usa cn el set interval y tiene 2 parmetros uno la fuction osea que hce y el otro es el tiempo en mmss
se usa si : 
 var tiempo = setInterval(()=>,3000);
*/ 
function parpadear (){
    var tiempo = setInterval(()=>{ // metodo setInterval
   
    var encabezado = document.querySelector ("h1");
    if (encabezado.style.fontSize == "50px")
    {
        encabezado.style.fontSize = "25px";
    }
    else{
        encabezado.style.fontSize = "50px";
    }
            

    },1000);
                return tiempo ; 


}


 var tiempo = parpadear ();


/*
var tiempo = setTimeOut(()=>{   // esto solo se ejecuta solo una ves 
    console.log(tiempo);
    var encabezado2 = document.querySelector ("h2");
    if (encabezado2.style.fontSize == "50px")
    {
        encabezado2.style.fontSize = "25px";
    }
    else{
        encabezado2.style.fontSize = "50px";
    }
  

},3000); 
*/


// parar el parpadeo con el [ clearInterval ();]
var stop1 = document.querySelector ("#botonStop");
stop1.addEventListener ("click",function(){
    alert (" ¡¡¡¡paraste el parpadeo!!!!");
    clearInterval (tiempo);
});

// apuntar al boton 2 dedl html y decirle que empieze de nuevo a parapadear arrancando de nuevo la funtiion parpadear
var comenzar = document.querySelector ("#comenzarDeNuevo");
comenzar.addEventListener ("click",function(){
    alert (" ¡¡¡¡COMENZASTE DE NUEVO EL BUCLE!!!!");
    parpadear();
});



});



