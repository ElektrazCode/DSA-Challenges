/** You will be given a positive number 'N'. Your task is to print the diagonals of an N x N box of stars.
Example

input: 
 3

output: 
 *  *
  * 
*  *

input: 
 4

output: 
 *    *
  ** 
  ** 
*    **/
function diagonals(n){

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if (i === j || j === n-i-1)
                console.log("*");
            else
                console.log(" ");
        }
        console.log("\n");
    }
}