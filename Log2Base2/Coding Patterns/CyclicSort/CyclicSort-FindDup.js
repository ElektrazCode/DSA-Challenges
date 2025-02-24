/**You will be given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. 
Find that duplicate number without using any extra space.
Example

input: 
 arr[] = {1,2,4,3,2}

output: 
 2

input: 
 arr[] = {1,3,3,5,4,2}

output: 
 3 */
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function duplicateNumber(arr, size)
{
    let i = 0;
   
    while(i < size){
        
        let index = arr[i] - 1;
        
        if(i != index){
            if(arr[i] == arr[index])
                return arr[i];
            else
                swap(arr, i, index);
        }
        else
            i++;
    }
    return -1;
}


//Log2Base2 Solution
function duplicateNumber(arr, size)
{
    let i = 0;

    while(i < size)
    {
        if(arr[i] != i + 1) {
            let index = arr[i] - 1;
            if (arr[i] != arr[index]) {
                let temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
            }
            else
                return arr[i];
        }
        else
            i++;
    }

    return -1;
}
