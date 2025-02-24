/**You will be given an 2 dimensional integer array 'arr'. Your task is to print the sum of elements in 'arr'.
Example

input: 
 2 1 3 2 5

output: 
 11

input: 
 1 11

output: 
 11 */
function sum2D(arr)
{
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            sum += arr[i][j];
        }
    }
    return sum;
}