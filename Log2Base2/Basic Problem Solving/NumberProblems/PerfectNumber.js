/**You will be given a number 'n'. Your task is to check whether 'n' is a perfect number or not.
Example

input: 
 28

output: 
 Yes

input: 
 100

output: 
 No */
function isPerfect(n){
    let sum=0;
        
    for(let i=1; i<n; i++){
        if (n % i === 0) sum += i;
    }
    
    return (sum === n);
}