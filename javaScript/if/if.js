"use strict"

var edad = 4;
var edad2 = 11 ; 
var edad3 = 130 ; 

/*
if (edad > edad2){
    console.log ("edad es mayor que edad2");

}
else {
    console.log("edad2 es menor a edad"); 
}
*/

if(edad3 >= 18){

    console.log("eres mayor de edad ");

     if(edad3 <= 25){
        console.log ("eres joven ");
        }
     else if (edad3 <= 50){
        console.log("eres aduto");
     }
     else if (edad3 >= 51 & edad3 <= 110){
        console.log("eres anciano");

     }
     else{
        alert("ERROR, INGRESO DE EDAD INCORECTA");
     }

}
else{
    console.log("eres menor de edad ");
}
