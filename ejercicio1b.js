/*Escribe un programa que reciba un número entero positivo 
𝑛
n y genere una lista con todos los números pares desde 1 hasta 
𝑛
n.*/
//Count even numbers since one to the giving number 
//Ejemplo input 14
//Output [2,4,6,8,10,12,14]
console.log("Ejercicio 1:");
function evenCounting(number){
    // Verify if number is undefined
    try{
        if(number===undefined){
            throw new Error("You need to add a number"); // Throw an error in this case
        }
    // Verify if it is a number    
        else if(typeof number!=='number'){
            throw new Error("This is not a number");    // Throw an error if it is not 
        }
    
    let output=[];
    // Loop to count up to the number
    for (let i = 1; i < number; i++) {
        if(i%2==0){
        output.push(i);                        // If number is divisible by 2, the number add to array "output"
        }
        
    }
    return output;                            // Return output to show even numbers 
} catch (error){
    console.error("Error:", error.message); // Show error if it occurs
    return false;
}
}
//module.exports= evenCounting;

//Problema 2: Palíndromo
//Descripción:
//Crea un programa que determine si una palabra es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).

//Recive a word and determine if is palidrome (it´s read same from the start to end)
//For example input= somos; output= The word: "somos" is a palindrome;
console.log("Ejercicio 2:")
 function verifyPalindrome(word){
    let readRight="";
    let readLeft="";
    try{ 
        // Check if the input is a string  
        if(word===""|| word===undefined){
        throw new Error("The password is not valid beacause is empty"); //Throw an error if is empty
    
    }else if(typeof word!='string'){
        throw new Error("The password is not valid because is not a string"); //Throw an error if is not a string
    }  
        // Review each leter from left to right
    for(let i=0; i<word.length; i++){
         readRight+=word[i];           // Save each leter in order read
        }
        // Review each leter from ringht to left
        for(let j=word.length-1; j>=0; j--){
             readLeft+=word[j];         // Save each leter in order read
            }
        // Compare both words 
            if(readRight==readLeft){
                console.log(`The word: "${word}" is a palindrome`);       //If they are equals 
                
            }else{
                console.log(`The word: "${word}" is not a palindrome`);   //If they are not equals 
                
            }
          
}catch(error){
    //Handle errors and return false 
        console.error(error.message);
        return false;
}
}

verifyPalindrome("reconocer");
verifyPalindrome("cabra");
verifyPalindrome();
verifyPalindrome(516216);
verifyPalindrome("oso");




//Problema 3: Suma de dígitos
//Descripción:
//Haz un programa que reciba un número entero positivo y calcule la suma de sus dígitos.
//Definition the number and calculate the sum of it digits
//Example input= 33 and output= 6
console.log("Ejercicio 3:")
function sumDigits(number){
    try {
        // Verify if the parameter is undefinded (are not add)
        if (number===undefined|| number==="") {
            throw new Error("You need add a number");     //If is undefined throw new error
       
        }
        // Verify if the parameter is a number
        if (typeof number !== 'number') {
            throw new Error("This is not number");     //If is not number throw new error
        }
        if (String(number).length===1) {
            throw new Error("You need add a number of two digits");     //If is a number of one digit throw new error
       
        }
       
    let digits= number.toString();
    var sum=0;
    for(let i=0; i<digits.length; i++){
    
        sum +=parseInt(digits[i]);
    }
    return sum;
     // Show the error message in case that if it it occurs
}catch (error) {
    console.error("Error:", error.message);
    return false;
}
}
module.exports={evenCounting, verifyPalindrome, sumDigits};

/*Problema 4: Tabla de multiplicar
Descripción:
Escribe un programa que imprima la tabla de multiplicar de un número dado hasta el 10.
Write a program that print the matrix of the multiplication number from 1 to 10.
Recive a number and multiply this number to all number from one to 10
For example input=5
For example log= 5x1=5,5x2=10, 5x3=15,5X4=2...
*/
console.log("Ejercicio 4:")
function multiplyMatrix(number){

    try {
        // Verify if the parameter is undefinded (are not add)
        if (number===undefined|| number==="") {
            throw new Error("You need add a number");     //If is undefined throw new error
       
        }
        // Verify if the parameter is a number
        if (typeof number !== 'number') {
            throw new Error("This is not a number");     //If is not number throw new error
        }
        // Loop for to trought each of numbers of the table
for(let i=0; i<=10;i++){
console.log(`La multiplicacion de ${number} x ${i}  =  ${number*i}`); // Show in each interaction the table with her result
}
    // Show the error message in case that if it it occurs
}catch (error) {
    console.error("Error:", error.message);
    return false;
}
}


//Problema 5: Números primos
//Descripción:
//Crea un programa que determine si un número es primo. Un número es primo si solo es divisible por 1 y por sí mismo.*/
//Create a program that determine if a number is prime. 
//Examples input=25, output= The number 25 is not prime number / input=7, output= The number 7 is a prime number. 
console.log("Ejercicio 5:")
function primeNumbers(number){
    let count=0;
    try {
        // Verify if the parameter is undefinded (are not add)
        if (number===undefined|| number==="") {
            throw new Error("You need add a number");     //If is undefined throw new error
       
        }
        // Verify if the parameter is a number
        if (typeof number !== 'number') {
            throw new Error("This is not a number");     // If is not number throw new error
        }
        // Loop to go through the numbers between 0 and the number
    for(let i=1; i<=number;i++){
        if(number%i==0){                                // If a number is divisible by any number counter add one
            count++;
        }
    }
    if(count==2){
        console.log(`The number "${number}" is prime`); // If counter is equal to 2, this number is prime
    }else{
        console.log(`The number "${number}" is not prime`); // If counter is not equal to 2, is not prime
    }

    }catch (error) {
        console.error("Error:", error.message);
        return false;
    }
}

module.exports={evenCounting, verifyPalindrome, sumDigits, multiplyMatrix, primeNumbers};