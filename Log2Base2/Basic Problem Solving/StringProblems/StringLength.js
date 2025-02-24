/**You will be given a string 'str'. Your task is to find the length of 'str' without using strlen() function and print it.
Example

input: 
 language

output: 
 8

input: 
 program

output: 
 7 */
function length(str)
{
    let i = 0;
	while(str[i++]); //will be undefined in js however in C will end will the null character '\0'
	return i;
}