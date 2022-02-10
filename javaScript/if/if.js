"use strict"

var edad = 4;
var edad2 = 11 ; 

/*
if (edad > edad2){
    console.log ("edad es mayor que edad2");

}
else {
    console.log("edad2 es menor a edad"); 
}
*/

if(edad >= 18){

    console.log("eres mayor de edad ");

     if(edad <= 25){
        console.log ("eres joven ");
        }
     else if (edad <= 50){
        console.log("eres aduto");
     }
     else if (edad >= 51 & edad <= 110){
        console.log("eres anciano");

     }
     else{
        alert("ERROR, INGRESO DE EDAD INCORECTA");
     }

}
else{
    console.log("eres menor de edad ");
}
