//You are tasked with writing a function that takes an array of numbers as input and returns
// a new array containing only the prime numbers from the original array. 
//How would you implement this function efficiently, ensuring that it accurately identifies prime numbers 
//and returns them in the same order they appear in the input array? For example if you provide an array
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// it should return an array [2, 3, 5, 7].

//SOLUTION

//Declaring the variable
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function one(prime numbers) and stating the conditions.
function PrimeNumbers(numbers) {
    //The conditional statements
    if (numbers<= 1) return false;//  //if statement used to specify a block of JavaScript code to be executed if a condition is true.
   //else if statement used to specify a new condition if the first condition is false
    else if (numbers <= 3) return true;
    else if (numbers % 2 === 0 || numbers % 3 === 0)//===strict equality operator is used.
     return false;
    let i = 5;
    //The while loop.It loops through the code as long as a specified condition is true
    while (i * i <= numbers) {
          //if statement used to specify a block of JavaScript code to be executed if a condition is true.
 if (numbers % i === 0 || numbers % (i + 2) === 0) return false; i += 6; }//=== is the strict equality operator.
    return true;
}
//callback function
function getPrimes(array) {return array.filter(num => PrimeNumbers(num));//the filter method.gives a new array of elements that pass the test given.
}

const primes = getPrimes(original);
//used for debugging.
console.log(primes);