/**Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/
const reverseSeq = n => {
    return new Array(n).fill(1).map((num, index)=>n-index);
  };
