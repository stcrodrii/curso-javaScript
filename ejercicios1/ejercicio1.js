'use strict'
window.addEventListener('load',()=>{

/*
.innerHTML = nombre ; = colodo un id a algo de html [p o div ,etc ] luego selecciono esa etiqeuta con querryselector y le uso el metodo .innerHTNL = "cambio el valor ";    
.style.display = "none"; = ocultar algo en html
.style.display = "block";
.querrySelector("#nombre").value; = captur el valor de unn dato introducido en el formu seleccionado apatir de su id
.querrySelector("#nombre span");

*/

var formulario = document.querySelector("#formulario");
var datos = document.querySelector(".datos");
datos.style.display = " none"; // esto es para ocualtar de la pagina los datos hasta que yo hago 'submit'


// capturar el evento submit que es para trabajar con formualrios 
formulario.addEventListener('submit' , ()=>{ 
    console.log("el evento submit " + formulario);

    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad = document.querySelector("#edad").value;
    console.log(nombre , edad , apellido); //mostrar en la consola los datos introducidos en el form

    datos.style.display = "block";

    var p_nombre = document.querySelector ("#p_nombre span");
    var p_apellido = document.querySelector ("#p_apellido span");
    var p_edad = document.querySelector ("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellido.innerHTML = apellido;
    p_edad.innerHTML = edad ; 
    
});




    
});