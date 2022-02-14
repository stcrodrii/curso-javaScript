'use strict'

// funcione de texto 

// typeof  + variable { esto es para ver que tipo de dato es una variable } 
var num = 45 ;
console.log(typeof num) ;// esto me va a decir que es un number 

// toString();  {esto es para trasformar cualquier tipo de variable a un string}

var num1 = 5555 ;
num1.toString(); // esto hizo que mi variable num1 que era un number se combirtiera en un string 


//  toUpperCase(); {trasforma todo el texto a MAYUSCULAS}
//  toLowerCase(); {trasfroma todo el texto en minusculas}
var texto = "esto seva a trasformar en mayusculas" ; 
texto.toUpperCase(); // se trasformo todo a mayusculas
texto.toLowerCase(); // se trasformo todo a minusculas


//calcular la longitud de un string 
//  .length { esto es para ver cunatas letras existen en ese string o cunatos lugares tiene un arrays}

var texto2 = "hola esta funcio sirve para contar la cantidad de caratere qe contiene este string";
console.log(texto2.length ); // me mostrara el numero exacto de carateres que pose este string
texto2 = ["hola ","chau"];
console.log(texto2.length);  // esto me va a dar 2 xq dentro del arrays existen 2 lugares 

// concatenar txto 
// una con el metodo tradicional o con la funcion   .concat();
var a = "primera parte del texto ";
var b = "segunda parte del texto ";
var textoUnido = a + " " + b ; //forma tradicional de unir texto
var textoUnido2 = a.concat(" "+b); // forma de unnir texto con la funcion  .concat();
