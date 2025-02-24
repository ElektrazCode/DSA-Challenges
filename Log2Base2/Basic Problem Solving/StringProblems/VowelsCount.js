/**You will be given a string 'str'. Your task is to find the number of vowels in 'str' and print it.
Example

input: 
 loop

output: 
 2

input: 
 fly

output: 
 0 */
function vowelCount(str)
{   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	let i = 0;
	let count = 0;

	while(str[i++])
	{
	    if(vowels.has(str[i]))
	        count++;
	}
	return count;
}