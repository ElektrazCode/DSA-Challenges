/** You will be given an integer array 'arr'. Your task is to print the sum of elements in 'arr'.
Example

input: 
 5 4 6 2 1 3

output: 
 16

input: 
 4 10 20 30 40

output: 
 100*/
function sum(arr)
{
    let sum = 0;

    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    //return arr.reduce((acc, num)=> acc+num)
return sum;
}