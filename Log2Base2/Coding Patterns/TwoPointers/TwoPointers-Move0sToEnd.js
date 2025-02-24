/**Move all zeros to the end of the array (in-place) 
 * Example

input: 
 6
1 0 1 0 1 0

output: 
 1 1 1 0 0 0

input: 
 5
0 0 0 0 1

output: 
 1 0 0 0 0
 */

 //My Solution
 function moveZeroes(arr){
    let start = 0;
    let end = arr.length - 1;
    
    while (start<end){
        if (arr[start]==0){
            if(arr[end]==0)
                end--;
            else{
                arr[start++] = arr[end];
                arr[end--] = 0;
            }
        }
        else
            start++;
    }
    return arr;
}

//Solution

function moveZeroes(arr, n){
    let i, newLen = 0;

    for(i = 0; i < n; i++)
        if(arr[i] != 0)
            arr[newLen++] = arr[i];

    while(newLen < n)
    {
        arr[newLen++] = 0;
    }
}
