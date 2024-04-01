//Write a function that accepts a string as input and swaps the case of each character. 
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

//SOLUTION

//Declare the variable
const fox = "The Quick Brown Fox";
//Describe the function and state the conditions.(String) acts as our parameter.
function swapCase(string) {
  //using let to declare new variable.
    let final = "";
//loops executes code a number of time.In this case we use for loop.
    for (let i = 0; i < string.length; i++) {
 //The charAt() method returns the character at a specified index (position) in a string
      let char = string.charAt(i);
 //if statement used to specify a block of JavaScript code to be executed if a condition is true.
      if (char === char.toUpperCase()) {//=== is the strict equality operator
        final += char.toLowerCase();
//else statement  used to specify a block of code to be executed if the condition is false.
      } else { final += char.toUpperCase(); }
    }
    return final;
  }
  const swap = swapCase(fox);

//debugging
  console.log(swap);
