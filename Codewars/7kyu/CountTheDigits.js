/**Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count. */

function nbDig(n, d) {
  
    const numbers = [];
    let counter = 0;
    
    for(let i=0; i<=n; i++){
      numbers[i] = i*i;
      counter += numbers[i].toString().split('').filter(digit=> digit == d).length;
    }
    return counter;
  }