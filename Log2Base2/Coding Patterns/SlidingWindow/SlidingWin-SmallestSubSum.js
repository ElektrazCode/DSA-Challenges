/**
 * Get the Shortest Subarray with the Sum closest to the given Sum.
 * Example

input: 
 arr[] = {4,1,5,2,4,1}
S = 7

output: 
 2

input: 
 arr[] = {1,5,4,2,1,8}
S = 7

output: 
 1 */


function smallLengthSubarraySum(arr, n, S)
{
   let subSum = 0;
   let start = 0;
   let size = Integer.MAX_VALUE;
   
   for(let i=0; i<n; i++){
        subSum += arr[i];
        while (subSum >= S){
            let win = i - start + 1;
            size = Math.min(win, size);
            subSum -= arr[start];
            start++;
        }
   }
    return (size == Integer.MAX_VALUE) ? 0 : size;
}
