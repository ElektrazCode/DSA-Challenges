/**DESCRIPTION:
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0 */


// Return the nth triangular number
function triangular( n ) {
    console.log(n);
    if (n<=0) return 0;
    if (n===1) return 1;
    const half = BigInt(Math.ceil(n/2));
    return Number((n%2 === 0) ? BigInt(n)*half+half : BigInt(n)*half);
  //   if(n<=0) return 0;
  //   let sum = n;
  //   while (--n) sum+=n;
  //   return sum;
  //   return triangular(n-1) + n;
  }