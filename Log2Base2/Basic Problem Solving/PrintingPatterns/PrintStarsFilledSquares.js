/**Example

input: 
 3

output: 
 ***
***
***

input: 
 4

output: 
 ****
****
****
**** */
function main(n){
    for (let i=1; i<=n; i++){
        for (let j=1; j<=n; j++)
            console.log("*");
        console.log("\n");
    }
}