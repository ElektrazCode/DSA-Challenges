/**DESCRIPTION:
Task
Given an array of integers, sum consecutive even numbers and consecutive odd numbers. Repeat the process while it can be done and return the length of the final array.

Example
For arr = [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]

The result should be 6.

[2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]  -->
         2+2+6       0+2+0     5+5+7+7       3+3+9
[2, 1,   10,    5,    2,        24,     4,   15   ] -->
                               2+24+4
[2, 1,   10,    5,             30,           15   ]
The length of final array is 6
Input/Output
[input] integer array arr

A non-empty array,

1 ≤ arr.length ≤ 1000

0 ≤ arr[i] ≤ 1000

[output] an integer

The length of the final array

Encodings
purity: LetRec
numEncoding: BinaryScott
export constructors nil, cons for your List encoding */

function sumGroups(arr) {
    let isEven = x => x%2 === 0;
    let isOdd = x => x%2 !== 0;
    let done = false;
    
    while(!done){
      done = true;
      
      for(let i=0; i<arr.length; i++){
        let end = 0;
        let arrPart = arr.slice(i);
        end = ((isEven(arr[i])) ? arrPart.findIndex(isOdd) : arrPart.findIndex(isEven)) + i;
        if (end < i) end = arr.length;
        if (end > i+1){
          arr.splice(i, end-i, arr.slice(i, end).reduce((sum, num)=>sum+num));
          done = false;
        }
      }
    }
    return arr.length;
  }

//Smart Solution
function sumGroups(arr) {
  
    var res = [];
    var tracker = 0;
    
    for (i=0;i<arr.length;i++) {   
      tracker += arr[i];                        
      if (arr[i]%2 !== arr[i+1]%2) {             //If next number is not the same (even/odd), push the number into new array
        res.push(tracker);                       //Reset tracker 
        tracker = 0;                             //However,when next number is same, it's added to tracker as per kata 
      }
    }
    
    return res.length === arr.length ? res.length : sumGroups(res);   //When length of new array is equal to old, it means no even number is next to another even number (also applies to odd)
                                                                      //If not, repeat the function 
  }