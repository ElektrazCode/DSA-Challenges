/**You will be given an integer array 'arr'. Your task is to print the largest element in 'arr'.
Example

input: 
 5 8 10 3 2 6

output: 
 Max = 10

input: 
 4 0 0 0 0

output: 
 Max = 0 */
function largest(arr)
{
    let max = - Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max)
            max = arr[i];
    }
    //return Math.max(...arr);
    return max;
}