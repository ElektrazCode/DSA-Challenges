/**You will be given two numbers 'num1' and 'num2'. Your task is to check whether 'num1' and 'num2' are equal or not using bitwise operators.
Example

input: 
 4 4

output: 
 Equal

input: 
 0 0

output: 
 Equal */
function isEqual(num1, num2){
	return ((num1 ^ num2) === 0);
}