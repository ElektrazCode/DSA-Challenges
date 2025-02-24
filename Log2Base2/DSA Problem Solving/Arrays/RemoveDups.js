/*Implement the function rmDuplicates(int arr[], int n) which takes two arguments

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
 5* */

//MySolution
function rmDuplicates(arr, n){
    for(let i=n-1; i>0; i--){
        if (arr[i]==arr[i-1]){
            for(let j=i;j<n-1;j++){
                arr[j]=arr[j+1];
            }
            arr[n-1]='\0';
            n--;
        }
    }
    return n;
}

//Their Solution

function rmDuplicates(arr, n){
    if (n==0 || n==1)
        return n;

    let len = 0, i;

    for (i = 0; i < n-1; i++)
         if (arr[i] != arr[i+1])
             arr[len++] = arr[i];

    arr[len++] = arr[n-1];

    return len;
}

//Refactor
function rmDups(arr, n){
    const set = new Set(...arr);
    return set.size;
}