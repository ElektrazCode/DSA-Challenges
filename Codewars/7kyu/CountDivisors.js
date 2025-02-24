/**Count the number of divisors of a positive integer n.

Random tests go up to n = 500000. */

function getDivisorsCnt(n){
    let counter=1;
      
    for(let i=2; i<=n; i++){
        if(n%i === 0) counter++;
    }
    
    return counter;
  }