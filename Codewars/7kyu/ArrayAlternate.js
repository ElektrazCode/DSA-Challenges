/** DESCRIPTION:
Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input:                5, true, false
expected result would be: [true, false, true, false, true]
Good luck!*/

/**
 *P: length of array, 2 values to alternate in array
 *R: array of the required length, having 2 values alternating
 *E: 5, true, false -> [true, false, true, false, true]
 *P: creat empty array
     loop from 0 to array required length
     check if even push firstValue else pushsecondValue
     return array
 */
     function alternate(n, firstValue, secondValue){
        const arrOfValues = [];
        for(let i=0; i<n; i++){
          (i % 2 === 0) ? arrOfValues.push(firstValue) : arrOfValues.push(secondValue);
        }
        return arrOfValues;
      }