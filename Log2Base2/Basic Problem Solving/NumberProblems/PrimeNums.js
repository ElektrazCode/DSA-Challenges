/**Example

input: 
 5

output: 
 Prime number

input: 
 4

output: 
 Not Prime number */
function isPrime(num){
    for(let i=2; i<num; i++){
        if (num % i === 0) return false;
    }
    return true;
}