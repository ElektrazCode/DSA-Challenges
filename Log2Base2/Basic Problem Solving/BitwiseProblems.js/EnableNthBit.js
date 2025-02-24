/**Example

input: 
 0 7

output: 
 64

input: 
 4 1

output: 
 5 */
function enable(num, n)
{
    let bit = 1<<(n-1); //left shift the digit 1 the required number of times (5th bit: 10000 => 10000)
    num = num | bit;  //num ored with the enabled bit string (10000)
	return num;
}