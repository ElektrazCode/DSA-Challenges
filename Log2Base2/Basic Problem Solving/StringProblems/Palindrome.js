/**You will be given a string 'str'. Your task is to check whether 'str' is a palindrome or not.
Example

input: 
 abcde

output: 
 Not Palindrome

input: 
 radar

output: 
 Palindrome */
function isPalindrome(str)
{
    let size= str.length;
	for(let i=0; i<size/2; i++){
	    if(str[i]!==str[size-i-1])
            return false
	}
	return true;
}