'use strict'
// msotar los numero que existen entre el 1 y el 100
// bucle FOR 


for (var i = 1 ; i <= 100 ; i++){
    if (i%2 ==0){
        document.write(" ES PAR");

    }
    else {
        document.write("es impar");
    }
    console.log("numero = " +i );
    document.write(" iteracion [" + i +"]"+ "<br>"); // <br> is a line break (salta una linea)
    
}


