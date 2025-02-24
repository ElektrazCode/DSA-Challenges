/**DESCRIPTION:
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon! */
function reduce(fraction) {
  
    function findGCD(div, denom){
      while(denom>0){
        if (div%denom===0)
          return denom;
        else{
          let temp = denom;
          denom = div%denom;
          div = temp;
          }
      }
      return 0;
    }
    
    let gcd = findGCD(Math.max(fraction[0], fraction[1]), Math.min(fraction[0], fraction[1]));
    return (gcd) ? [fraction[0]/gcd,fraction[1]/gcd] : fraction;  
  }

  //Shorter Solution
  function reduce(fraction) {
    let gcd = (a, b) => b ? gcd(b, a%b) : a;
    let denom = gcd(fraction[0], fraction[1]);
    return [fraction[0]/denom, fraction[1]/denom];
  }