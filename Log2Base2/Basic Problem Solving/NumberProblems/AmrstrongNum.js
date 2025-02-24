/**Example

input: 
 153

output: 
 Armstrong number

input: 
 321

output: 
 Not Armstrong number */
function isArmstrong(num){
    let numOfDigits = 0;
    let temp = num;
    let sum = 0;
    
    while(temp !== 0){
        temp = temp / 10;
        numOfDigits = numOfDigits +1;
    }

    temp = num;

    while(temp !== 0){
        let mod = temp % 10;
        let power = 1;
        for (let i=0; i<numOfDigits; i++){
            power *= mod;
        }
        sum += power;
        temp = temp / 10;
    }  
    return (sum === num)
}