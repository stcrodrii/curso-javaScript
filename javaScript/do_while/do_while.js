'use strict'
//  do-while

var num = 0 ; 

do {
   
    console.log(num);// esto se ejecutara mientras que la condicion sea verdadera
    document.write(num); 
    num ++ ; 


    /* esto es para corta el proceso de iteraciones

    if (num == 12){
        break;

    }
    */
   
}while(num <= 15) // la condicion 



var num2 = 0 ; 

do{
    document.write(num2 + "<br>"); 
    num2 ++ ;
    
    if(num2==26){
        break;
                  
        

    }

}while(num2 <= 45)