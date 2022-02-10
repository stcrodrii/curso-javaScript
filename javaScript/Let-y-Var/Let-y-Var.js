// DIFERENCIA ENTRE VARABLES let y var

// var se usa para las varables que van a ser globales 
// let se usa para aquellas variables que van a ser locales 

// ej con la VAR

var edad = 5 ; 
console.log(edad);// edad es 5

if(true){
    var edad = 10 ; 
    console.log(edad); // edad es 10
}

console.log(edad);// edad es 10

//ej con LET 

var nombre = "rodrigo" ; 
console.log(nombre); // rodrigo 

if(true){
    let nombre = "jose ";
    console.log(nombre);//jose
}

console.log(nombre);// rodrigo 