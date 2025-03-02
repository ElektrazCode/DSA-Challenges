/** Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^79 
7
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 ) 
2 
300
 
 , which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^00 
0
  to be 111.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0*/
var lastDigit = function(str1, str2){  

    if (str1==0 || str2==0) return 1;
    
    let pattern = [];
    let lastDigit = +str1[str1.length-1];
    let result = lastDigit;
  
    while(!pattern.includes(result%10)){
      pattern.push(result%10);
      result *= lastDigit;
    }
    return (pattern.length===1) ? pattern[0] : pattern[(str2.substr(-3)-1) % pattern.length];
  }