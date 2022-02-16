'use strict'
 

// forma de recorrer arreglos con el for y for each


// completar un arrays con un for 
var frutas = [10];

for (var i = 0 ; i < 10 ; i++){

frutas [i] = (prompt("ingresar la fruta numero "+ i));

}


//recorrer con for y mostar por la pag
// for (var j = 0 ; j<frutas.length ; j++){

//     document.write(" <li>"+ frutas[j] + "<li/>  " );

// }

//   for each

// frutas.forEach((element , indice ) => {

//     document.write(" <li>"+ indice +" "+ element+"<li/>  " );

// });




// for in 

for (let indice in frutas){  // creo una varaible local donde se guardara el indice y el arrays

    document.write(" <li>"+ frutas[indice] + "<li/>  " );  // muestro el arrays y entre corchetes le paso sus indices [ inidce]

}