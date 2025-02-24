/**Example

input: 
 5 4 5 3 5 4

output: 
 3

input: 
 7 1 1 1 1 6 4 4

output: 
 6 */
function oddOccurence(arr){
	return arr.reduce((result, num) => result^num);
}