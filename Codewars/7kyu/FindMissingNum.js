/**You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution? */
function missingNo(nums) {
    for(let i=0; i<100; i++){
      if (!nums.includes(i))
        return i;
    }
    return null;
  }