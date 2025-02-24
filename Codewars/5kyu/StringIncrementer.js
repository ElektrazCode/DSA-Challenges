/**DESCRIPTION:
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */
//PREP
//Parameters: a string that may end with a number or not
//Return: if string ends with number increment number by one (paying attention to leading zeros)
//        else append 1 to string
//Pseudo-code: get index of first number with search method
//             if === -1, append 1 and return string
//             else
//             slice number part from string
//             note length of number of digits to preserve 0 padding
//             convert string to number, incrementing it by 1 and reconverting it back to string
//             note new length of number
//             add padding by comparing length of old and new number
//             reconstitue string by replacing old number with new number 
//             return new string
function incrementString (strng) {
  
    let index = strng.search(/[0-9]/);
    
    if (index === -1) return strng + '1';
    
    let strNum = strng.slice(index);
    let newNum = String(Number(strNum)+1);
    
    if (newNum.length < strNum.length)
      newNum = '0'.repeat(strNum.length - newNum.length) + newNum;
    
    return strng.slice(0, index) + newNum;
  }