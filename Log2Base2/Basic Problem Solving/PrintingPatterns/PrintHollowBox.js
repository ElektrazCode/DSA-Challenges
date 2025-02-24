/** You will be given a positive number 'N'. Your task is to print a Hollow N x N box of stars.
Example

input: 
 3

output: 
 ***
*  *
***

input: 
 4

output: 
 ****
*   *
*   *
*****/
function hollowBox(n){
    for (let i=1; i<=n; i++){
        for (let j=1; j<=n; j++){
            if (i==1 || i==n || j==1 || j==n)
                console.log("*");
            else
                console.log(" ");
        }
        console.log("\n");
    }
}