/**You will be given two positive integers 'num' and 'n' . Your task is to disable nth bit of 'num' using bitwise operators.
Example

input: 
 65 7

output: 
 1

input: 
 65 1

output: 
 64 */
function disable(num, n){
	return (num & ~(1<<n-1));
}