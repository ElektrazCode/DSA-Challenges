/**DESCRIPTION:
For whom the Bell tolls
Write a function bell that will receive a positive integer and return an array. That's all splaining you receive; what needs to be done you'll have to figure out with the examples below.

 n => resulting array

 1 => [1]
 2 => [2, 2]
 3 => [3, 4, 3]
 4 => [4, 6, 6, 4]
 5 => [5, 8, 9, 8, 5]
 6 => [6, 10, 12, 12, 10, 6]
 7 => [7, 12, 15, 16, 15, 12, 7]
 8 => [8, 14, 18, 20, 20, 18, 14, 8]
 9 => [9, 16, 21, 24, 25, 24, 21, 16, 9]
10 => [10, 18, 24, 28, 30, 30, 28, 24, 18, 10]
11 => [11, 20, 27, 32, 35, 36, 35, 32, 27, 20, 11]
12 => [12, 22, 30, 36, 40, 42, 42, 40, 36, 30, 22, 12] */
function bell(n) {
    let output = new Array(n).fill(n);
    const mid = Math.ceil(n/2);
    let value = n-2;
    
    for(let i=1; i<mid; i++){
      output[i] = output[n-i-1] = output[i-1] + value;
      value -=2;
    }
    return output;
  }

  //Refactor
  function bell(n) {
    return [...Array(n)].map((num,index)=>++index*n--);
  }