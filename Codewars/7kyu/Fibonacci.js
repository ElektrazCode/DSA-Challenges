/**DESCRIPTION:
Create function fib that returns n'th element of Fibonacci sequence (classic programming task). */
function fib (n){
      if (n == 0 || n == 1)
        return n;
      return fib(n-1) + fib(n-2); 
}