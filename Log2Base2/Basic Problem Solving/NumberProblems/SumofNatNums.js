/**You will be given a number 'N'. Your task is to calculate the sum of first N natural numbers(1 to N)
Example

input: 
 4

output: 
 10

input: 
 10

output: 
 55 */
function sum(N)
{
    let sum=0;
    for (let i=1; i<=N; i++)
    {
        sum+=i;
    }
    return sum;
}

//Refactor
function sum(N){
    return N*(N+1)/2;
}