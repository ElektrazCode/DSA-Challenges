/**Remove Duplicates from a sorted array
 * Implement the function rmDuplicates(int arr[], int n) which takes two arguments

arr[] - Sorted array
n      - Size of the array

Your task is to remove the duplicates elements from the given sorted array and return the new length.

Note: You should write an in-place algorithm to implement this task.
Example

input: 
 arr[] = {1,1,1,3,3,5,5}
n = 7

output: 
 3

input: 
 arr[] = {10,20,30,40,50}
n = 5

output: 
 5
 */

function rmDuplicates(arr)
{
    let index = 0;
    
    for(let i=1; i<arr.length; i++){
        if (arr[i] != arr[index])
            arr[++index] = arr[i];
    }
    return index+1;
}