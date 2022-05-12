'use strict'
// metodos de busqueda para utilizar con string 

//  .search("");   o    .indexOf(""); {busca desntro del string si existe la palabra que ponemos te dicee en que posicion esta}
var texto = "hola rodrigo como estas espero que la estes pasando muy bien , desde ya gracias";
console.log(texto.indexOf("rodrigo"));  // me dice que se encntra en la posicion 6

//  .lastIndexOf("");  nos dice en la ultima  posicion que se encontro la palabra q buscamos

var texto2 = "hola rodrigo . hola catalina";
console.log(texto2.lastIndexOf("hola")); // esto me va arrojar como resultado 16 xq en la posicion 16 empieza la ultima ves escrita la palabra "hola" 

// es un arrays 
// .match("")  para la ultima vez visto 
//.match(/nombre/gi) ;  esto nos mustra las ubicaciones de toda slas veces visto 

var a = "hola como estas te deseo buendia . hola como esta de nuevo";
console.log(a.match("hola"));// me muestra la ultima  ubicacion en la q encontro la palabra
console.log(a.match(/hola/gi)); // me va a mostrar las veces que encintre esa palabra que busque

//   .substr(0,5);   {le indico el numero del caracter y el numero de hasta donde quiero qe me extraiga el string}
var c = "hola como estas";
console.log(c.substr(0,2)); // esto me va a devolver "ho" xq le dije qie se pare en el caracter 0 y me imprima hata el caracter 2


// .chartAt("45);   {esto es para  sacar una letra de un string indicandole el numero de caracter}

var d = "rodrigo";
console.log(d.charAt(3));  // esto me va a devolver la letra "d" xq le indique q meextraiga el caracter numero 3


// .startsWith("palabra");    {lo que hace este metodo es buscar las palabras del COMIENZO del string y te arroja TRUE o FALSE si coiciden}
// .endWith("palabra");   {busca si la palabra coicide con el final del string}
var e = "hola como estas rodrigo";
console.log(e.startsWith("rodrigo"));  // esto me va decir FALSE xq el string no comieza con la palabra rodrigo
console.log(e.startsWith("hola como estas")); // esto me va a decir TRUE xq el string si comienza de esa manera


//  .includes("palabra");  {te dice TRUE o FALSE si la palabra existe en el string}
var palabra = " hola pete como te fue hoy";
console.log(palabra.includes("pete")); // me va a decir TRUE xq la palabra existe
console.log(palabra.includes(Pete));  // me va a decir FALSE xq tiene mayusculas xq el lenguaje es keitssensitive