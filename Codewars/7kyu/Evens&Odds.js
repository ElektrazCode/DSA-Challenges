/**DESCRIPTION:
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased. */
function evensAndOdds(num){
    return (num%2===0) ? num.toString(2) :  num.toString(16).toLowerCase();
  }