/**DESCRIPTION:
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges. */
function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || !arrayOfArrays.length || arrayOfArrays.includes(null)) return 0;  
    const sortedLengths = arrayOfArrays.map(array=>array.length).sort((a,b)=>a-b); 
    if (sortedLengths[0]===0) return 0;
    
    let prev = sortedLengths[0];
    
    for(let i=1; i<sortedLengths.length; i++) {
      if (sortedLengths[i] !== prev+1)
        return sortedLengths[i] -1;
      prev++;
    }
    return 0;
  }

  //Refactor
  function getLengthOfMissingArray(arrayOfArrays) {
    const lengths = (arrayOfArrays || [])         //better than the combined ORed ifs
      .map(a => a ? a.length : 0)
      .sort((a, b) => a - b)
    
    if (lengths.includes(0)) {
      return 0
    }
  
    for (let i = 0; i < lengths.length - 1; i++) {     
      if (lengths[i] + 1 !== lengths[i + 1]) {            //comparison of 2 consecutive elements instead of adding a counter
        return lengths[i] + 1
      }
    }
  
    return 0
  }