/**DESCRIPTION:
Task
Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
The string's tops are from displaying the string in the below way:


                                         7891012
                             TUWvXY      6     3
                   ABCDE     S    Z      5
           lmno    z   F     R    1      4
     abc   k  p    v   G     Q    2      3
.34..9 d...j  q....x   H.....P    3......2
125678 efghi  rstuwy   IJKLMNO    45678901
The next top is always 1 character higher than the previous one. For the above example, the solution for the 123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123 input string is 7891012TUWvXYABCDElmnoabc34.

When the msg string is empty, return an empty string.
The input strings may be very long. Make sure your solution has good performance.
The (.)dots on the sample dispaly of string are only there to help you to understand the pattern
Check the test cases for more samples.
 */

//PREP
//Parameter: a message (long string)
//Return: local tops of string from highest to lowest in a form of a long string
//Example: input: 123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123
//         output: 7891012TUWvXYABCDElmnoabc34
//Pseudo-Code: convert letters into array
//             initalize counters for the number of letters used at the bottom and height of for each top string
//             loop through all letters in msg
//             skip letters from beginning of string (keeping count of side bottom letters and height letters)
//             save top letters as a string in an array.
//             return the reverse of the string.
function tops(msg) {
    let msgArr = msg.split('');
    let count = 1;
    let output = [];
    let index = 0;
    if (!msg) return msg;
    while(index + (2*count) < msgArr.length){
      index += 2*count;
      output.push(msgArr.slice(index, index + (count+1)).join(''));
      index += 2*count + 1;
      count++;
    }
    console.log(msgArr, output)
    return output.reverse().join('');
  }

//Another Ideas
function tops(msg) {
    //create empty result string
    let result = ''
    
    //do the thing for the tops
    for (let start = msg.slice(2), topElements=2, spaceBetween=5; start.length; topElements++, spaceBetween+=3){
      result = start.slice(0, topElements) + result
      start = start.slice(topElements + spaceBetween)
    }
    
    //return
    return result
  }

  function tops(msg) {
    spot = []
    for (i = j = 2; i < msg.length; i += 4*j++ - 1)
      spot.push(msg.substr(i, j))
    return spot.reverse().join('')
  }