/**Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!" */

/*PREP
Parameters: string
Return: string
Examples: "Hi!" => ""
Pseudo-Code: convert string into array of words (split(' '))
             check if the word has a !
                filter out ! and check its length 
             replace with ""
             re-convert array into string (join)
*/
function remove (string) {
    return string.split(' ')
                 .map(word=> (word.split('').filter(w=> w==='!').length===1) ? "" : word)
                 .filter(word=> word!=="")
                 .join(' ');
  }