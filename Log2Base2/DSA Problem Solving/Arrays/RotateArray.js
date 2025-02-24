/**Implement the function arrayRotate(int arr[], int n, int k) which takes three arguments

arr[] - An array of integers
n      - Size of the array
k      - Number of times the array needs to be rotated 

Your task is simple, you just need to rotate the given array k times.

Note: You should write an in-place algorithm to implement this task.
Example

input: 
 arr[] = {1,2,3,4,5}
n = 5
k = 1

output: 
 {5,1,2,3,4}

input: 
 arr[] = {1,2,3,4,5}
n = 5
k = 2

output: 
 {4,5,1,2,3} */

 //MySolution
 function arrayRotate(arr, n, k){
    let temp;
    for(let i=0; i<k; i++){
        temp = arr[n-1];
        for(let j=n-1; j>0; j--){
            arr[j] = arr[j-1];
        }
        arr[0] = temp;
    }
}

//Their Solution
function rightRotate(arr, n){
    
    let temp = arr[n-1], i;

    for(i = n - 1; i > 0 ; i--)
        arr[i] = arr[i-1];

    arr[0] = temp;
}

function arrayRotate(arr, n, k){
    for(let i = 1; i <= k; i++)
        rightRotate(arr,n);
}


//Refactor
function arrayRotate(arr, k){
    for(let i=0; i<k; i++){
        arr.unshift(arr.pop());
    }
}

//Reverse Positions
function reverse(arr, start, end){
    while(start<end){
        let temp = arr[end];
        arr[end--] = arr[start];
        arr[start++] = temp;
    }
}
function arrayRotate(arr, n, k)
{
    reverse(arr, 0, n-k-1);
    reverse(arr, n-k, n-1);
    reverse(arr, 0, n-1);
}