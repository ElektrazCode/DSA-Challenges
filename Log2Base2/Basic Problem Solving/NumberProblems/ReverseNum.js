/** You will be given a number 'num'. Your task is to find the reverse of 'num'.
Example

input: 
 451

output: 
 154

input: 
 300

output: 
 3*/
function reverse(num)
{
    let temp =0;
    while (num !== 0)
    {
        temp = (temp * 10) + (num % 10);
        num = num / 10;
    }
    return temp;
}