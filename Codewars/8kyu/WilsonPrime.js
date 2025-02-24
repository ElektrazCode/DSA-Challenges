/** Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.*/
function amIWilson(p) {
    let f = p-1;
    let c = p-1;
    while(--c){
      f *= c;
    }
    return ((f+1)/(p*p)%1===0)
  }