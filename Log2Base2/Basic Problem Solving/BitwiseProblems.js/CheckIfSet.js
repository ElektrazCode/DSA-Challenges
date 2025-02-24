/**You will be given two positive integers 'num' and 'n' . Your task is to check if nth bit of 'num' is set or not using bitwise operators.
Example

input: 
 64 5

output: 
 OFF

input: 
 64 7

output: 
 ON */
function isSet(num, n){
	return ((num & (1<<n-1)) === 0); //Or ((num | (1<<n-1)) === num)
}