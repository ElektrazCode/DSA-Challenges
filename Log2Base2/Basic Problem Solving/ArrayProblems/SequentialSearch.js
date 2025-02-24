/** You will be given an integer array 'arr' and an integer 'key'. Your task is to search 'key' in 'arr' and print the search result.
Example

input: 
 3 10 20 30 20

output: 
 Key found

input: 
 4 2 4 5 7 6

output: 
 Key not found*/
function search(arr, key)
{
    for( let i=0; i<arr.length; i++){
        if (key === arr[i])
            return true;
    }
    //return arr.includes(key);
   return false;
}