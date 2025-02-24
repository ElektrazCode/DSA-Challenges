/**You will be given an array of integers and the subarray size k.  Your task is to find the maximum sum of any contiguous subarray of size 'k'.
Example

input: 
 arr[] = {1, 5, -1, 6, 3, 2}
k = 3

output: 
 11

input: 
 arr[] = {4, 2, 3, 5, 1}
k = 2

output: 
 8 */

function maxSubarraySum(arr, win)
{   
    let currSum = 0; 
    for (let i=0; i<win; i++){
        currSum += arr[i];
    }
    let maxSum = currSum;
    for (let i=1; i<=arr.length-win; i++){
        currSum = currSum - arr[i-1] +  arr[i+win-1];
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}


//Proposed Solution
function maxSubarraySum(arr, n, k)
{
    let i;
    let wstart = 0;
    let subSum = 0, max = 0;

    for(i = 0; i < n; i++)
    {
        subSum += arr[i];

        if(i >= k-1)
        {
            if(subSum > max)
                max = subSum;

            subSum -= arr[wstart];
            wstart++;
        }
    }

    return max;
}