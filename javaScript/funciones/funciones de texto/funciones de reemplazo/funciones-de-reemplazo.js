'use strict'

// funciones de reemplazo

//metodo


//   .replace("palabra" , "reemplazo"); { se coloca 2 paremtros , el primero busca la palabra y el 2do es el reemplazo }

var texto = "hola rodrigo como estas , espero  que estes muy bien <br/>" ; 
document.write(texto.replace("rodrigo","catalina")); // reemplaze la palabra rodrigo por la de catalina 



// metodo split {sirve para meter el string en un arrays, }
// .split();  {arrays de un lugar}  /   .split(" ");  {arrays de todas las palabras}

console.log(texto.split());  // arrays de un lugar , en la posicion 0 coloca todo el string
 var texto2 = "esto es un string trasformado es arrays";
 console.log(texto2.split(" ")); // arrays de lugares segun la cantidad de palabras ;  




 // .slice(5 ,10);  {sirve para cortar el string apartir del primer caracter q coloquemos hasta el final o si no indicamos con un segundo parametro el final }

 var texto3 = "el mause de logitch es horrible <br/> "; 
 document.write(texto3.slice(0,20)); // corte la palabra horrible 
 document.write(texto3.slice(3)); // desde el caracter numero 3 en adelante me mostrara el string

 //  .trim(); {quita los espacios por delante y por detras de mi string }

 var textoConEspacios = "            hola deje mucho margen que voy a arreglar con el (trim)   "; 
 console.log(textoConEspacios); 
 console.log(textoConEspacios.trim());  // cuando muestro por consola ya no tengo el spacio 