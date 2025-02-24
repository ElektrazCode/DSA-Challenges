/**Given a string that contains only letters, you have to find out the number of unique strings (including the string itself) that can be produced by re-arranging the letters of the string. Strings are case insensitive.

HINT: Generating all the unique strings and calling length on that isn't a great solution for this problem. It can be done a lot faster...

Examples
uniqCount("AB") = 2n      // "AB", "BA"
uniqCount("ABC") = 6n     // "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"
uniqCount("ABA") = 3n     // "AAB", "ABA", "BAA"
uniqCount("ABBb") = 4n    // "ABBB", "BABB", "BBAB", "BBBA"
uniqCount("AbcD") = 24n   // "ABCD", etc.

// Note that you should return a BigInt, not a Number */
function uniqCount(xs) {
    const str = xs.toUpperCase().split('');
    const size = BigInt(str.length);
    const fact = x => x<2n ? 1n : x * fact(x-1n);
    
    let reps = {};
    str.forEach(letter => reps[letter] = reps[letter] ? reps[letter] + 1n : 1n);
  
    const perm = fact(size);
    const dups = Object.values(reps).filter(r=>r>1n).map(r=>fact(r)).reduce((total, rep)=> total*rep, 1n);
    
    return perm/dups;
  }