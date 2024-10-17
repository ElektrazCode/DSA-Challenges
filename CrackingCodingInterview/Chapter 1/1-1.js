/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 */

function hasUniqueCharactersSet(str) {
  let chars = new Set();

  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 */

function hasUniqueCharactersSort(str) {
  // sort string using quicksort
  str.sort();

  for (var i = 1; i < str.length; ++i) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Use a bit vector (bitwise math) to set a bit for each character and accordingly check if the bit has been set before
 * to check for duplicates.
 * Time: O(N)
 * Additional space: O(1)
 */

function isUniqueCharsBitVector(str) {
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    let val = str.charCodeAt(i) - "a".charCodeAt(0);
    if ((checker & (1 << val)) > 0) return false;
    checker |= 1 << val;
  }
  return true;
}

/**
 * Use a set to store the strings unique letters and compare the sizes of the set and original string
 * Time: O(N)
 * Additional space: O(1)
 */

function isUnique(str) {
  let chars = new Set(str);
  return chars.size === str.length;
}

console.log(isUnique("apple"));
