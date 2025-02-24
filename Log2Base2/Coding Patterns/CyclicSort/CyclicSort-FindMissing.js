/**You will be given an array & size N. The array will have N distinct numbers from 0 to N. Your task is to find the missing number in the given array.
Example

input: 
 array[] = {3,5,1,4,0}
size = 5

output: 
 2

input: 
 array[] = {1,3,5,4,2,6}
size = 6

output: 
 0 */
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function findMisplaced(arr, size){
    for(let i=0; i<size; i++){
        if (arr[i] != i)
            return i;
    }
    return size;
}
function missingNumber(arr, size)
{
    let i = 0;
    
    while(i<size){
        if (arr[i] < size && i != arr[i])
            swap(arr, i, arr[i]);
        else
            i++;
    }
    return findMisplaced(arr, size);
}
