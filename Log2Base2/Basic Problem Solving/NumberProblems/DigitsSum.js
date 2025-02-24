/**You will be given a number 'num'. Your task is to find the sum of digits of 'num'.
Example

input: 
 12

output: 
 3

input: 
 345

output: 
 12 */
function sum(num){
    let sum=0;
    while (num !== 0)
    {
        sum += (num % 10);
        num = num/10;
    }
    return sum;
}