/**DESCRIPTION:
Write a method named getExponent(n,p) that returns the largest integer exponent x such that px evenly divides n. if p<=1 the method should return null/None (throw an ArgumentOutOfRange exception in C#). */
function getExponent(n,p){
  
    if(p<=1) return null;
    
    let x = Math.floor(Math.log(Math.abs(n))/Math.log(p));
    
    while(x>0 && (n/(p**x)) %1 !== 0) --x;
  
    return x;
  }