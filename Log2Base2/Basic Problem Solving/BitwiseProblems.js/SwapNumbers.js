/**Example

input: 
 3 4

output: 
 4 3

input: 
 10 1

output: 
 1 10 */
function swap(a, b)
{
	a = a^b;
	b = a^b;
    a = a^b;
	
	return a, b;
}