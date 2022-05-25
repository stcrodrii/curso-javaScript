'use strict'
// conseguir elementos por la [clase]

// elemtos por etiquetas
var losdivs = document.getElementsByTagName ('div');
var losP = document.getElementsByTagName ('p');



for(var i = 0 ; i< losdivs.length ; i++){

    for(var j = 0 ; j< losP.length ; j++){

        colorDeCaja(losdivs[i]);
        colorDeCajaParra(losP[j]);

    }

}


//elemtos por [CLASES]
var lasClasesYellow = document.getElementsByClassName ('yellow');
console.log(lasClasesYellow);// hay solo 2 elemnto un div y un p con la class yellow


for (let i = 0 ; i <lasClasesYellow.length ; i++){
    classYellow(lasClasesYellow[i]);
}





// funciones para las etiquetas [div y p]
function colorDeCaja (divs){
    divs.style.background = "red"; 
    divs.style.color = "blue";
    divs.style.marginLeft = "20px";
    divs.style.marginBottom = "20px";
    divs.style.padding = "25px";
    divs.style.paddingLeft = "600px";
}
function colorDeCajaParra(p){
    p.style.background = "blue"; 
    p.style.color = "red";
    p.style.marginLeft = "20px";
    p.style.marginBottom = "20px";
    p.style.padding = "25px";
    p.style.paddingLeft = "600px";
}

// funcion para las [clases yellow]
function classYellow(y){
    y.style.background = "yellow"; 
    y.style.color = "black";
    y.style.marginLeft = "40px";
    y.style.marginBottom = "40px";
    y.style.padding = "35px";
    y.style.paddingLeft = "700px";
}