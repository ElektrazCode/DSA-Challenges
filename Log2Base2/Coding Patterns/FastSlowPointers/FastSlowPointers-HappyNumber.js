/**Check if the given number is a happy number
 * You will be given a number and your task is to check whether the given number is a happy number or not. if its happy number return 1, otherwise return 0.

Happy Number:
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number '1'.

Example

input: 
 19

output: 
 1

input: 
 15

output: 
 0
*/
function sumSqDigits(num){
    let sum = 0;

    while(num>0){
        let n = num % 10;
        sum += n*n;
        num /= 10; 
    }
    return sum;
}

function isHappyNumber(num){
    let slow = num;
    let fast = num;
    
    do{
        slow = sumSqDigits(slow);
        fast = sumSqDigits(sumSqDigits(fast));
    }while(slow!=fast);
    
    return slow==1;
}