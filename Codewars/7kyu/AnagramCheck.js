
/**DESCRIPTION:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

// write the function isAnagram
var isAnagram = function(test, original) {
  
    if(test.length!==original.length)
      return false;
    
    let dict = {};
    
    for (let letter of original.toLowerCase()){
      if (dict[letter])
        dict[letter]++;
      else
        dict[letter] = 1;
    }
    
    for(let char of test.toLowerCase()){
      let re = new RegExp(char, "ig")
      if ((!dict[char]) || (dict[char] !== test.match(re).length))
        return false;
    }
    
    return true;
  };



//Short Solution
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };