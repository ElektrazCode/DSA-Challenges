/**Task
ISBN stands for International Standard Book Number.

For more than thirty years, ISBNs were 10 digits long. On January 1, 2007 the ISBN system switched to a 13-digit format. Now all ISBNs are 13-digits long. Actually, there is not a huge difference between them. You can convert a 10-digit ISBN to a 13-digit ISBN by adding the prefix number (978) to the beginning and then recalculating the last, check digit using a fairly simple method.

Method
Take the ISBN ("1-85326-158-0").
Remove the last character, which can be a number or "X".
Add the prefix number (978) and a hyphen (-) to the beginning.
Take the 12 digits, then alternately multiply each digit from left to right by 1 or 3.
Add up all 12 numbers you got.
Take the number and perform a modulo 10 division.
If the result is 0, the check digit is 0. If it isn't 0, then subtract the result from 10. In this case, that is the check digit.
Add the check digit to the end of the result from step 3.
Return the 13-digit ISBN in the appropriate format:
"prefix number - original ISBN except the last character - check digit"
"978 - 1 - 85326 - 158 - 9" */

function isbnConverter(isbn) {
    isbn = '978-' + isbn;
    let isbnArr = isbn.split('');
    isbnArr.pop();
    isbn = isbnArr.join('');
    let check = isbnArr.filter(item => item.match(/[0-9]/)).map(item=>Number(item)).reduce((sum, item, index)=> (index%2===0) ? sum+=item*1: sum+=item*3 , 0) % 10;
    if (check %10 !== 0) check = 10 - check;
    isbn = isbn + check;
    return isbn;
  }