/**You will be given a number 'num'. Your task is to find whether 'num' is a positive number, negative number or zero
Example

input: 
 0

output: 
 Neither positive nor negative

input: 
 -3

output: 
 Negative */
function findPosNeg(num)
{
    return (num === 0) ? "Neither positive nor negative" :
           (num > 0) ? "Positive" : "Negative";
}