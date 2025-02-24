/** Complete the function which converts hex number (given as a string) to a decimal number.*/
function hexToDec(hexString){
    const hex = [...'0123456789ABCDEF'];
    let hexArr = hexString.split('');
    let decimal = 0;
    let count = 0;
    while(hexArr.length!==0){
      let digit = hexArr.pop();
      if(digit==='-') 
        decimal = -decimal;
      else
        decimal += (16**count)*hex.indexOf(digit.toUpperCase());
      count++;
    }
    return decimal;
  }

  /**Refactor */
  function hexToDec(hexString){
    return parseInt(hexString, 16);
  }