function solution (roman) {
  let number = 0;
  let romans = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };

  for(let i=0; i<roman.length; i++){
    if( (i===roman.length-1) || (romans[roman[i]]>=romans[roman[i+1]])){
      number += romans[roman[i]];
    }
    else{
      number += romans[roman[i+1]] - romans[roman[i]];
      i++;
    }
  }
  
    return number;
}