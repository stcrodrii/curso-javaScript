'use strict'

/* platillas de texto

dentro de una variable se guarda la plantilla que creemos y depsues se imprime la variable 

var LaPlantilla = ` 

${ variable }

`;

*/

var nombre = prompt("coloque su nombre"); 
var apellido = prompt("coloque su apellido");
var edad =parseInt(prompt("introduce tu edad ."));

var platilla = `
<h1>hola ${nombre} espero que estes muy bien , quiero contarte cual es tu apelldio<h1>
<h3> tu apellido es ${apellido} <h3>
`;


var plantilla2 = `
<h1> disculpe <i> ${nombre} <i/> ,  USTED ES MENOR DE EDAD<h1> 
`;


if(edad >= 18){
  document.write(platilla);
    
}

else{
  document.write(plantilla2);
}