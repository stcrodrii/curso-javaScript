'use strict'
// SWITCH

var edad = 4; 
switch (edad){
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
    
    case 4 : 
        console.log("hoy es viernes");
    break; 

    default : 
        console.log("numero incorrecto"); 
    break;
}

var edad2 = 15 ; 
var imprimir = "" ;

switch(edad){
    case 15:
        imprimir = "eres adolecente";
        break;
    
    case 25 :
        imprimir = "ya eres mayor de edad ";
        break;

    case 40 :
        imprimir = "ya eres adulto case viejo ";
        break; 
    
     default : 
        imprimir = "introduciste mal la edad ";
        break; 

}