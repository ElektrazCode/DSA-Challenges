/**You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word. */

function validateWord(s)
{ 
  const arr = s.split('');
  const counts = arr.map(letter=>{ 
    return arr.filter(char => (char.toLowerCase() || char) === (letter.toLowerCase() || letter) ).length
    });
  const validCount = counts[0];
  return counts.every(count => count === validCount);
  
//   let char;
//   const counts = s.split('').reduce((obj,letter) => {
//     if(letter.toUpperCase()){
//       char = letter.toLowerCase();
//     }
//     else char = letter;
//     if (!obj[char]){
//       obj[char]=0;
//     }
//     obj[char]++;
//     return obj;
//   },{});
  
//   const tempArr = Object.values(counts);
//   const validCount = tempArr[0];
  
//   return tempArr.reduce((valid, count)=> count === validCount);
}