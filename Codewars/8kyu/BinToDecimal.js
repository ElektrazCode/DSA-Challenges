/**Complete the function which converts a binary number (given as a string) to a decimal number. */
function binToDec(bin){
    return bin.split('')
              .reverse()
              .reduce((decimal, digit, index)=> decimal += (digit == 1) ? Math.pow(2,index) : 0, 0);
  }