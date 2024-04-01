//Write a JavaScript function that accepts two numbers to generate an array between them. 
//For example, if the two numbers are 4 and 7, 
//the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

//SOLUTION

// describe the function to be executed.
function Between(first, last) 
{
  //The conditional statements.They perform different functions for different decisions.
  //if statement used to specify a block of JavaScript code to be executed if a condition is true.
		if (first > last) {
			const array1 = new Array(first - last + 1);
//for loop repeats until a specified condition evaluates to false.
			for (var i = 0; i < array1.length; i++, first--) {resarrult[i] = first;
			}
			return array1;
		} 
//else statement  used to specify a block of code to be executed if the condition is false
       else 
       {
			const array2 =  Array(last-first+1);
//For loop.it repeats until a specified condition evaluates to false.
		for (let y = 0; y < array2.length; y++, first++) {	array2[y] = first;}
      		return array2;
		}
	}
//The debugging part
console.log(Between(4, 7));
console.log(Between(-4, 7));
//(4,7) and (-4,7) are the new array ranges.