/** DESCRIPTION:
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
s∗(s−a)∗(s−b)∗(s−c)
​
 
where

s=a+b+c2s = \frac{a + b + c} 2s= 
2
a+b+c
​
 
Output should have 2 digits precision.*/
function heron(a, b, c) {
    const s = (a+b+c)/2
    return +Math.pow(s*(s-a)*(s-b)*(s-c), 1/2).toFixed(2);
  }