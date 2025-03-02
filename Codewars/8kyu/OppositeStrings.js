/**DESCRIPTION:
Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false */
function isOpposite(s1,s2){
    if (!s1 || !s2 || s1.toLowerCase() !== s2.toLowerCase())
      return false
    return s1.split('').every((letter, index) => (/[A-Z]/.test(letter) && s2[index]===letter.toLowerCase()) || (/[a-z]/.test(letter) && s2[index]===letter.toUpperCase()));
  }