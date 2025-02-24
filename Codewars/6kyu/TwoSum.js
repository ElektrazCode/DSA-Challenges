/**DESCRIPTION:
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0] */

/**
 *P: an array of numbers & a target sum
 *R: an array ot two indeces of two numbers from the array that when added give the targeted sum
 *E: [1,2,3], 4 -> [0,2]
 *P: Loop through numbers in array
     For each number, check if the complement between it and the targeted sum exists
     if it does break, return current index and the index of its complement
     else go to next number
*/
function twoSum(numbers, target) {
  
    for(let i=0; i<numbers.length; i++){
      let complement = numbers.indexOf(target - numbers[i]);
      if (complement !== -1 && complement !== i)
        return [i, complement];
    }
    return -1;
  }