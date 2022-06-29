'use strict'


// local storage 

// COMOS saber si tenemos disponible el local storage 
if (typeof(Storage)!= 'undefined'){
    document.write("local storage disponible");

}else {
    document.write("local storage  NO disponible");
}



// GUARDAR  datos en el local storage
localStorage.setItem("titulo","curso web de programacion" );


// RECUPERAR un elemento y meterlo en un etiqueta de html
localStorage.getItem("titulo"); // aca va el nombre del indice que desea acceder

document.querySelector("#nombre").innerHTML= localStorage.getItem("titulo"); 

// GUARDAR OBJETO en el local storage lo que tenemos que hacer es combertir el json en un json string
// convertir el json en json string 
var usuario = {
    nombre: "rodrigo ",
    apellido: "cabral" ,
    edad: 27 ,

};

localStorage.setItem("usuario", JSON.stringify(usuario)); // converti el json en un json string 


// como recuperar un objeto
console.log( localStorage.getItem("usuario")); // esto me devuleve un strig y yo no puedo accerder a sus propiedades

// como se hace para recuperar un objeto con las propiedades q tiene
var userjs = JSON.parse(localStorage.getItem("usuario")); 
console.log(userjs);


// usar en un etiqueta
// use el objeto ususario con el atributo edad
document.querySelector("#nombre").append( " año "+userjs.edad);

// como borrar lo que esta en local storage 
// 1era forma
localStorage.removeItem("usuario");
// 2da forma 
localStorage.clear();
