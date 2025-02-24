/**Given a sorted array of numbers, remove the duplicates such that duplicates appeared at most twice and return the new length.

Note: You should implement this task without creating additional memory. 
Example

input: 
 arr[] = {5,5,5,6,6,6,8}
n = 7

output: 
 5

input: 
 arr[] = {-2,-2,5,5,7}
n = 5

output: 
 5 */

 function removeDuplicates(arr)
{
    if (n<3)
        return n;
    let index = 1;
    //  int counter = 0;
 
    for (let i=1; i<arr.length-1; i++){
        if (arr[i-1]!=arr[i+1])
            arr[index++] = arr[i];
        //  if (arr[index] == arr[i] && ++counter == 1)
        //     index++;
        //  if (arr[index] != arr[i]){
        //     counter = 0;
        //     arr[++index] = arr[i];
        //  }
    }
    arr[index++] = arr[n-1];
    return index;
}
