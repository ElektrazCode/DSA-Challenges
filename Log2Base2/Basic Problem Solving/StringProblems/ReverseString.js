/**Example

input: 
 flipkart

output: 
 trakpilf

input: 
 backdrop

output: 
 dordkcab */
function reverse(str)
{
	let temp;
	let size = str.length;
	for(let i=0; i<size/2; i++){
	    temp = str[i];
	    str[i] = str[size-i-1];   //strings are immutable in JS so may want to create a new empty string and assign (add/copy) the characters backwards.
	    str[size-i-1] = temp;
	}
	return str;
}