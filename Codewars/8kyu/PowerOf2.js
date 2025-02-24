/**Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). */

//Function recieves a number and returns an array of all powers of 2 from 0 to that number.

function powersOfTwo(n){

  let result = new Array(n+1);             //array that will contain the result
  
  for(let i=0;i<=n;i++){                  //Loops from 0 to the number recieved 
    result[i] = 2**i;                     //calculates the power of two of that number and save it in the array
  }
  return result;                          //return resulting array
}