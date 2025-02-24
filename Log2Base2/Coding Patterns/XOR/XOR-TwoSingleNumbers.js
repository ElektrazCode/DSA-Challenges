// Example

// input: 
//  arr[] = {5,5,6,3,6,4}
// size = 6

// output: 
//  3 4

// input: 
//  arr[] = {3,5,7,3}
// size = 4

// output: 
//  5 7

function twoSingleNumbers(arr, size, num3, num4)
{
    let i;
    let xorResult = 0;

    for(i = 0; i < size; i++)
        xorResult ^= arr[i];

    let firstSetBit = 1;
    while((xorResult & firstSetBit) == 0)
    {
        firstSetBit <<= 1;
    }

    let n1 = 0, n2 = 0;
    for(i = 0; i < size; i++)
    {
        if((arr[i] & firstSetBit) != 0 )
            n1 ^= arr[i];
        else
            n2 ^= arr[i];
    }
   num1 = n1;
   num2 = n2;
}