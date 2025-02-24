/**You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted */

function maxDiff(list) {
  
    list.sort((a, b)=> a - b);
    if (list.length===0)
      return 0;
    return list[list.length-1]-list[0];
  };