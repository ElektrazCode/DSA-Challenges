/**DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((sum, num) => sum + num); //something went wrong
  }

  //Refactor
  function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum, num)=>sum+num) + arr2.reduce((sum, num)=>sum+num); //something went wrong
  }