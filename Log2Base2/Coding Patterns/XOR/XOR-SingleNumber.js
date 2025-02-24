/**Example

input: 
 arr[] = {5,5,6,3,6}
size = 5

output: 
 3

input: 
 arr[] = {3,1,3}
size = 3

output: 
 1 */

function singleNumber(arr, size)
{   
    let number = arr[0];
    
    for(let i=1; i<size; i++){
        number ^= arr[i];
    }
    return number;
}
