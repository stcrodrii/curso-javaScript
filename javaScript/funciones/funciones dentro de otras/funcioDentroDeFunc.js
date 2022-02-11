'use strict'

// funciomes dentro de funciomes

// si la funcion va true muestra por conosola si es flase mostrara en el body

function PorConsola (num1 , num2 ){
    console.log("la suma es = " + (num1+num2));
}

function PorBody (num1 , num2){
    document.write("la suma es = " + (num1+num2));
}

function calcular (num1 , num2 , mostrar = false){

    if (mostrar == true){
        PorConsola(num1 , num2);
    }

    else {
        PorBody (num1 , num2);
    }
}



calcular( 5 , 5 , false );
calcular (40 , 34 , true );



var num1  = parseInt (prompt("ingrese primer numero para sumar")); 
var num2  = parseInt (prompt("ingrese segundo numero para sumar")); 

calcular (num1 , num2,false);


