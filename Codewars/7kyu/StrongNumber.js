/**PREP
  *Parameter: number
  *Return: if the sum of the factorial of each digit in the number is equal to the number -> "Strong" else "not Strong"
  *Example: strong(145) -> "STRONG!!!!"
  *Pseudo-Code: put number in array, each digit as an element, 
                reduce it to have the sum of each digit's factorial 
                if the reduced value is equal to the original number then return "Strong"
                else return "Not Strong"*/
                function strong(n) {
                    const factArr = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
                    const factSum = String(n).split('')
                                             .reduce((sum, digit) => sum + factArr[+digit] , 0);
                    
                  //     let factorial = (digit) ? 1 : 0;
                  //     while(digit){
                  //       factorial *= digit--;
                  //     }
                  
                    return (factSum === n) ? "STRONG!!!!" : "Not Strong !!" ;
                  }