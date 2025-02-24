/**Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid. */

/*PREP
Parameters: string of words
  Edge Cases: null? []? #? symbols?
Return: array of words sorted by last letter
Examples:  ['carousel','mainden', 'apple'] => ['apple', 'carousel', 'maiden'] 
Pseudo-Code: Convert string into array of words
             sort function: 
                compare last letter of each word
                if < => return 1
                if > => return -1
                if = return 0
             return sorted array
*/
function last(x){
    const arr = x.split(' ');
    return arr.sort((a,b)=>{
      if (a[a.length-1] > b[b.length-1]) return 1;
      else if (a[a.length-1] === b[b.length-1]) return 0;
      else return -1;
    });
  }