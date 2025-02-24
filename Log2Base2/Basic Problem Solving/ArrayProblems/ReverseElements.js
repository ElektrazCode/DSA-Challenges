/**You will be given an integer array 'arr'. Your task is to reverse the array elements and print it.
Example

input: 
 4 2 1 3 4

output: 
 4 3 1 2

input: 
 5 10 30 20 50 60

output: 
 60 50 20 30 10 */
function reverse(arr)
{
    for(let i=0; i<arr.length/2; i++){
        let temp = arr[i];         //swap function
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
    //return arr.reverse();
    return arr;
}