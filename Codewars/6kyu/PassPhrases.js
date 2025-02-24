/**Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC" */

function playPass(s, n) {
    return s.toLowerCase().split('').map( (letter, index) =>{
      
      if  ((/[a-z]/).test(letter)){
        letter = String.fromCharCode((((letter.charCodeAt(0)+n)-97) %26) +97);
        letter = (index % 2 === 0) ? letter.toUpperCase() : letter.toLowerCase();
      } 
      else if ((/[0-9]/).test(letter)){
          letter = Math.abs(Number(letter) - 9);
      }
      return letter;
      
    }).reverse().join('');
  }