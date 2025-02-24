/** DESCRIPTION:
You are to write an function that takes a string as it's first paramter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5) 
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

Simple. Good luck.*/

//Prep
//Parameters: a string, the index of the word in the string, the number of times it will be repeated
//Return: return the required word repeated the specified number of times separated with -
//Example: modifyMultiply ("This is a string",3,5) => "string-string-string-string-string"
//Pseudo-code: split string into array of words using separator space
//             save word at required index adding a dash to it
//             repeat word number of times and slice off last dash
function modifyMultiply (str,loc,num) {
    const word = str.split(' ')[loc] + '-';
    return word.repeat(num).slice(0,-1);
  } 

//Refactor
Array(n).fill(str.split(' ')[i]).join('-');