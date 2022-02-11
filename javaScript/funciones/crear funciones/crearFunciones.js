'use strict'

// funciones es un agrupaciom de reutilisable de un conjnto de istrucciones 

var nombre = prompt("introduce tu nombre ");
var edad = parseInt( prompt("introduce tu edad "));
var dni = parseInt( prompt("introduce tu dni "));



function nombreEdad (){  
  
   return "mi nombre es ["+ nombre + "] \n mi edad es [" +edad+ "] \n mi dni es ["+ dni + "]";
}

console.log(nombreEdad());
document.write(nombreEdad());
