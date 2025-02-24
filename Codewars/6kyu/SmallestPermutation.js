/**Given a number, find the permutation with the smallest absolute value (no leading zeros).

-20 => -20
-32 => -23
0 => 0
10 => 10
29394 => 23499
The input will always be an integer. */
function minPermutation(n) {
  
    let negative = (n<0) ? true : false; 
   
    let num = String(Math.abs(n)).split('').sort((a,b)=>a-b);
    
    if(num[0]==='0'){
      let index = 0;
      while(num[index]==='0') index++;
      num[0] = num[index];
      num[index] = 0;
    }
    
    return (negative) ? -num.join('') : +num.join('');
  }