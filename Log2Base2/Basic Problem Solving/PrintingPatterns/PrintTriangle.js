/**Your task here is to print half pyramid of stars.
Example

input: 
 3

output: 
 *
**
***

input: 
 4

output: 
 *
**
***
**** */
function triangle(){
  	for(let i=0; i<n; i++){
  	    for(let j=0; j<=i; j++){
  	        console.log("*");
  	    }
  	    console.log("\n");
  	}
}