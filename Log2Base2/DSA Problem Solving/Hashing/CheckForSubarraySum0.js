/**You will be given an array. Your task is to check whether the given array has a sub array whose sum is 0.

Implement the function int checkForSubArrayWithSumZero(int size, int arr[]) which takes 2 arguments.
size  -  size of input array
arr[] -  input array

Return 1 if the input array contains any sub-array with sum 0 and return 0 if otherwise.
Example

input: 
 5 5 -3 1 4 -3

output: 
 0

input: 
 5 6 1 -5 4 2

output: 
 1 */

// hash table - int arr[13]
//
// hash table functions
// insert function - int insert(int value)
// returns 1 if the value is succesfully inserted into the hash table
// returns 0 if the value is not inserted, when the hash table is full
//
// search function - int search(int value)
// returns 1 if the value is present in the hash table
// returns 0 if the value is not present in the hash table

function checkForSubArrayWithSumZero(arr_size, arr)
{   
    let sum = 0;

    for(let i=0; i<arr_size; i++){
        
        sum += arr[i];
        
        if (sum==0 || search(sum)==1)
            return 1;
        else
            insert(sum);
    }
    return 0;
}
