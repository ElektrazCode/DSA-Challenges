/**You will be given an integer array 'arr'. Your task is to print the largest and smallest element in 'arr'.
Example

input: 
 5 8 10 3 2 6

output: 
 Max = 10
Min = 2

input: 
 6 100 56 74 2 99 44

output: 
 Max = 100
Min = 2 */
function minMax(arr)
{
    let min = Infinity;
    let max = - Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>max)
            max = arr[i];
        if(arr[i]<min)
            min = arr[i];
    }
    //return [Math.min(...arr), Math.max(...arr)];
    return [min, max];
}