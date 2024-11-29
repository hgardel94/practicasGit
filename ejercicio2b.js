//1. Validar contraseña
//Escribe una función y que valide si la contraseña coincide con "2PxÑzuxa" o "haxj210*x2&".
//Write a function that valide if the password matches with  "2PxÑzuxa" or "haxj210*x2&".
//Examples input="6rf1fR"; output= The password does not match; / input="haxj210*x2&"; output="The paswoord match" 
console.log(`Exersice 1: Valide password`);
function passwordMatch(password){
//Valid password    
    const COINCIDENCE=["2PxÑzuxa","haxj210*x2&"];
//Check if the input is a string    
try{ 
    if(password===""|| password===undefined){
    throw new Error("The password is not valid beacause is empty"); //Throw an error if is empty
    
}else if(typeof password !=='string'){
    throw new Error("The password is not valid because is not a string"); //Throw an error if is not a string
}  
//For loop to search coincidence 
    for(let i=0;i<COINCIDENCE.length;i++){
if(COINCIDENCE[i]===password){
    return true; //Return true if coincide
}
}
  return false; //Return false if don´t coincide

} catch(error){
//Handle errors and return false 
    console.error(error.message);
    return false;
}
}




//2. Calcular impuestos
//Funcion que valide si al menos 18 años y gana mas de 900 euros, de sus ingresos paga 30% de impuestos de lo contrario 0.
//Create a function that valide if the person is 18 years old and him makes 900 euros. So pay 30% in taxes.
//Example1 input1=17, input2=1800; output="This person do not have to pay taxes" 
//Example2 input1=22, input2=901; output="This person have to pay 270,3 euros of taxes"
console.log("Calculate taxes");
function payTaxes(age, income) {
    const ADULT_AGE = 18;
    const MIN_GAINS = 900;

    try {
        // Verify if the parameters are undefinded (are not add)
        if (age === undefined||income===undefined) {
            throw new Error("You need add the age and gains.");     //If any of the they are undefined throw new error
       
        }
        // Verify that both parameters are numbers
        if (typeof age !== 'number' || typeof income !== 'number') {
            throw new Error("Both parameters must be numbers");     //If any of the they are not number throw new error
        }

        // Verify if the person has to pay taxes 
        if (age >= ADULT_AGE && income >= MIN_GAINS) {
            console.log(`This person has to pay ${income * 30 / 100} euros of taxes.`);  //If he/she comply whit the minimum
        // In other cases manage the diferent situations    
        } else if (age >= ADULT_AGE){                               
            console.log(`This person does not have to pay taxes because his/her gains are ${income} euros (The minimum is 900 euros).`);
        } else if (income >= MIN_GAINS) {
            console.log(`This person does not have to pay taxes because his/her are ${age} years old (The minimum is 18 years).`);
        } else {
            console.log("This person does not have to pay taxes because he/she does not compply with the requeriment minimums.");
        }
        // Show the error message in case that if it it occurs
    } catch (error) {
        console.error("Error:", error.message);
    }
}



//3. Impresion de arrays
//Un funcion que sea capaz de imprimir cada elemento del array.
//A function that it can to print each element of the array
//Examples ['nike', 'adidas', 'puma', 'kelme', 'new balance', 'umbro']; 
console.log(`Show an array`);
function showBrands(){
    const BRANDS=['nike', 'adidas', 'puma', 'kelme', 'new balance', 'umbro'];
    // Foreach bucle for each element in array show it 
    BRANDS.forEach(function(element) {
        console.log(`${element}`);
   });
}
showBrands();

module.exports= {passwordMatch, payTaxes, showBrands};

//4. Fizzbuzz
//Funcion que reciba un numero y devuelva:
//- Fizz: si es multiplo de 3
//- Buzz si es multiplo de 5
//- fizzbuzz si es multiplo de ambos
//- El numero si no cumple ni uno
//Create function that recive a number and return: 
//Fizz if is multiple of 3
//Buzz if is multiple of 5
//Fizzbuzz if is multiple of both
// The number then
//Examples input= 25, output=Buzz; input=15, output=FizzBuzz;
console.log(`Multiple of 3=Fizz, multiple of 5=Buzz both=FizzBuzz`);
function multipleOf(number){
    const MULTIPLE3="Fizz";
    const MULTIPLE5="Buzz";
try{
    // Verify that parameters is defined and if is a number
    if(number===undefined){
        throw new Error("You need to add a number");    // It is undefined, throw an error
        
    }else if(typeof number!='number'){
        throw new Error("This data not is a number");   // If it is not a number, throw an error
        
    }

    // Verify if it is divisible by 3 o 5
    if(number%3===0){
    // Manage the possible options and show the different constants    
        if(number%5===0){   
            return MULTIPLE3+MULTIPLE5;
        }else{
            return MULTIPLE3;
        }
    }else if(number%5===0){
        return MULTIPLE5;
    }else{
        return number;  //Return number if it is not divisible by 3 or 5
    }
}
    // Show the error message in case that if it it occurs
catch(error){
    console.error("Error:", error.message);  //
    return false;
}
}

//5. Contra letras
//Funcion que cuente el numero de letras 'a' (minusculas)
//Create a function that count the number of characters 'a' (lowercase letter)
//Example input="nenkAanlanAlañana", output="This string has "5" characters 'a';
console.log(`Exercise 5 count number of 'a'`);
function countCharacter(input){
    try{
        // Verify if the input is empty or undefined
        if(input===""|| input===undefined){
            throw new Error("You need to add a string"); // Throw an error in this case
        }
        // Verify if the input is a string
        else if(typeof input!=='string'){
            throw new Error("This is not a string");    // Throw an error in case that it is not
        }
        // Scan the string for to search characters "a"
    let count=0;
    for(let i=0; i<input.length; i++){
        if(input[i]==="a"){
            count++;                                    // If it find an "a", the counter sum one 
        }
        // Show the counter value 
    } console.log(`This string has ${count} characters 'a'`);
    }
        // Show the error if it occurs
    catch (error){
        console.error("Error:", error.message);
    }
}
countCharacter("nenkAanlanAlañana");
countCharacter("");
countCharacter();
countCharacter(6546);
countCharacter("?($EFRR32>>Z");
countCharacter("nenkAanlaknksnoaaaaana");

module.exports= {passwordMatch, payTaxes, showBrands, multipleOf, countCharacter};