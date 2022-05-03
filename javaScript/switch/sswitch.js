'use strict'
// SWITCH

var dia = 3; 
switch (dia){
    case 1 : 
        console.log("hoy es lunes");
    break;

    case 2:
        console.log("hoy es martes");
    break;
    
    case 3 : 
        console.log("hoy es miercoles");
    break;

    case 4 :
        console.log("hoy es jueves");
    break;
    
    case 5 : 
        console.log("hoy es viernes");
    break; 

    default : 
        console.log("numero incorrecto"); 
    break;
}

var edad = 18 ; 
var imprime = ""; 

switch(edad){

    case 18 :
     imprime = "tienes 18 años recien cumpliedos "; 
     break ;
    case 25 :
     imprime = "tienes 25 años recien cumpliedos "; 
     break ;
    case 40 :
     imprime = "tienes 40 años recien cumpliedos "; 
     break ;
    case 50 :
     imprime = "tienes 18 años recien cumpliedos "; 
     break ;

}

console.log(imprime);

