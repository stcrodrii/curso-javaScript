'use strict'
 

// forma de recorrer arreglos con el for y for each


// completar un arrays con un for 
var numero_de_frutas_que_usare = parseInt(prompt("ingrese cuantas frutas comprara" ));
numero_de_frutas_que_usare = (numero_de_frutas_que_usare - 1 );
var frutas = [];

for (var i = 0 ; i <= numero_de_frutas_que_usare ; i++){

frutas [i] = (prompt("ingresar la fruta en la posicion  "+ i + " del arrys"));

}

//plantilla 
var plantilla = `<h1> el numero de frutas que va a comprar es ${numero_de_frutas_que_usare + 1} <h1/> <br>
<h3>Las frutas que seleciono son <h3/ >
`;
document.write(plantilla);

// recorrer ese arrys y mostrar
for (var j = 0 ; j < frutas.length ; j++){  
    document.write("<li>"+ frutas[j] + "</li>");
}



//recorrer con for y mostar por la pag
// for (var j = 0 ; j<frutas.length ; j++){

//     document.write(" <li>"+ frutas[j] + "<li/>  " );

// }

//   for each

// frutas.forEach((element , indice ) => {

//     document.write(" <li>"+ indice +" "+ element+"<li/>  " );

// });




/* for in 

for (let indice in frutas){  // creo una varaible local donde se guardara el indice y el arrays

    document.write(" <li>"+ frutas[indice] + "<li/>  " );  // muestro el arrays y entre corchetes le paso sus indices [ inidce]

}

*/