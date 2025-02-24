/**
 * Find 2 numbers with the target sum
 * Example

input: 
 arr[] = {1,5,10,20,80}
target = 90

output: 
 1

input: 
 arr[] = {1,5,10,20,80}
target = 40

output: 
 0 */

function hasPairWithTarget(arr, target)
{
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end){
        
        let sum =  arr[start] + arr[end];
        
        if (sum == target)
            return 1;
        if (sum > target)
            end--;
        else
            start++;
    }
    return 0;   
}
