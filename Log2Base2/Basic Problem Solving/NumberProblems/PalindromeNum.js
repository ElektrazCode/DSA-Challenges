/**You will be given a number 'num'. Your task is to check whether 'num' is a palindrome number or not.
Example

input: 
 121

output: 
 Palindrome

input: 
 345

output: 
 Not Palindrome */
function isPlaindrome(num){
    let rev=0;
    let temp = num;
    while (temp !== 0){
        rev = (rev * 10) + (temp % 10);
        temp = temp / 10;
    }   
    return (rev === num);
}