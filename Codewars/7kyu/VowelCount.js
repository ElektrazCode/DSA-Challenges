/**Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

function getCount(str) {
    let vowelsCount = 0;
    const letters = str.split('');
    letters.forEach(letter => { 
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            vowelsCount ++;
        }
    });
    return vowelsCount;
  }