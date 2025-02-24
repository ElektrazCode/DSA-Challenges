/**Remove all occurrences of a specific element from an array in such a way that you perform an in-place deletion (No new array).
 * 
 * You will be given an array and a value, your task is to remove all the occurrence of the given value from the array and return the new length. You should solve the problem in-place. 
Example

input: 
 arr[] = {10,30,40,10,10}
val = 10

output: 
 2

input: 
 arr[] = {4,7,6,7,8,7,7}
val = 7

output: 
 3
 */

function removeElement(arr, val)
{
    let length = 0;
    
    for(let i=0; i<arr.length; i++){
        if (arr[i] !== val)
            arr[length++] = arr[i];
    } 
    return length;
}