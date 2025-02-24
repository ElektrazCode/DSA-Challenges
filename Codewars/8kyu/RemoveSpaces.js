/**Simple, remove the spaces from the string, then return the resultant string. */
function noSpace(x){
    return x.match(/[a-z0-9]/ig).join('');
  }
  // x.split('').filter(letter=> letter!==' ').join('');