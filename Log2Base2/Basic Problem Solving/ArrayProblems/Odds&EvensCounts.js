/**You will be given an integer array 'arr'. Your task is to print the count of even numbers and odd numbers in 'arr'.
Example

input: 
 3 1 2 3

output: 
 Even Number Count = 1
Odd Number Count = 2

input: 
 4 1 5 3 7

output: 
 Even Number Count = 0
Odd Number Count = 4 */
function oddsEvensCounts(arr)
{
    let oddCount = 0, evenCount = 0; 

    for(let i=0; i<arr.length ;i++){
        if (arr[i] % 2 === 0)
            evenCount++;
        else
            oddCount++;
    }
    //arr.forEach(num => (num % 2 === 0) ? evenCount++ : oddCount++);
    console.log("Even Number Count = ", evenCount);
    console.log("Odd Number Count = ", oddCount);
}