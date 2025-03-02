/** Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

123
123
123

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.*/
function squareIt(int) {
    let square = String(int);
    let length = Math.sqrt(square.length);
  
    if (length % 1 !== 0)
      return 'Not a perfect square!';
    
    if (length === 1) 
      return square;
    
    return square.split('')
                 .map((num, index) => ((index+1) % (length) === 0 && index!==square.length-1) ? num + '\n' : num)
                 .join('');
  }