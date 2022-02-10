'use strict'
// programa que pida al usuario 2 numeros y diga cual es mayor y si son iguales

var num1 = parseInt( prompt ("ingrese el primer numero "));  // parseInt para trasformar de string a entero
var num2 = parseInt (prompt("ingrese el segundo numero "));

alert("los numero ingresados son ["+ num1+ "] ["+ num2+"]");

if (num1 >num2 ){
    alert("el numero mas grande es ["+num1+"]");

}
else if (num2 > num1 ){
    alert("el numero mas grande es ["+num2+"]")

}
else {
    alert ("los 2 numero ingresados son iguales")
}

console.log(num1+num2); // para comprobar que se parseo el tipo de dato de string a entero 