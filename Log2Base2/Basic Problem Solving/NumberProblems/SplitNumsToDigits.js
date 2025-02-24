/**You will be given a number 'num'. Your task is to split num into separate digits.
Example

input: 
 12

output: 
 2 1

input: 
 123

output: 
 3 2 1 */
function digitize(num){
    let digits = []; 
    while (num > 0)
    {
        let mod = num % 10;
        digits.push(mod);  //or console.log(mod);
        num = num/10;
    }
    return digits;
}