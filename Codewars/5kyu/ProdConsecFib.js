/**function productFib(prod){
  let sequence = [];
  let fib = (n) => (n<=1) ? n : fib(n-1) + fib(n-2);
  let n=0;
  let seqProd = 0;
  while(prod>seqProd){
    if (!sequence[n]) sequence.push(fib(n));
    if (!sequence[n+1]) sequence.push(fib(n+1));
    seqProd = sequence[n]*sequence[n+1];
    n++;
  }
  return [sequence[n-1], sequence[n], (prod === seqProd) ? true : false]; 
} */

//Best Solution
function productFib(prod){
    let [a, b] = [0, 1];
    while(a * b < prod) [a, b] = [b, a + b];
    return [a, b, a * b === prod];
  }