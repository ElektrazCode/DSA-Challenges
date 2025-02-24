/**Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */
function find_average(array) {
    let average =0;
    if(array.length!==0)
    {
      array.forEach(num=>average+=num);
      average/=array.length;
    }
    return average;
  }