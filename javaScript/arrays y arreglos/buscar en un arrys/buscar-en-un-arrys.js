'use strict'

// buscar si el elementos de un arrys existe

var lenguajes = ["java", "jacascript " , "php","css","html"]; 


// forma 1 
//  .find( function(arrys) return  arrys == "la busqueda"); 
var busqueda = lenguajes.find(function(lenguajes){
    return lenguajes == "java";
});

console.log(busqueda); /* si lo encuntra te muestra el elemento en la consola
si no lo encunetra te arroja un undefine 
*/  




// forma 2
var busqueda2 = lenguajes.find (lenguajes  =>  lenguajes == "css"); 
console.log(busqueda2);




// BUSCAR EL INDICE DE UN ELEMENTO y si existe 

var busqueda3 = lenguajes.findIndex(lenguajes => lenguajes == "html" ); 
console.log(busqueda3); // me muestra en la posicion en la q se encientra el elemento

// FILTRO PARA SABER SI UN ELEMNTO ES MAYOR MENOR O IGUAL 
// .some(arrys => arrys > 5 ) para saber si algun elemento es mayor a 5

var num1 = [2,5,4,6,3,7,1,8,45,]; 

var filtro = num1.some(num1 => num1 < 1);  // esto da false xq no existe elemento dentro del arrys menor a 1
console.log(filtro); 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// forma 3 de buscar un elemento 

var animales = ["perro", "gato","leon","conejo","conejo"];

var indiceArrays = animales.indexOf("conejo"); /* esto =  3  ya que en esa pocicion se encuentra la palabra conejo
como hay 2 palabras la primera que me encuntra ejecuta y sale .. por eso me dice 3 y no 4*/
document.write(indiceArrays);