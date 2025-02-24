/**An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str){
    const lowerStr = str.toLowerCase();
    for(let i=0; i<str.length; i++){
      let letter = lowerStr.charAt(i);
       if (lowerStr.indexOf(letter) !== lowerStr.lastIndexOf(letter)){
          return false;
        }
    }
    return true;
  }