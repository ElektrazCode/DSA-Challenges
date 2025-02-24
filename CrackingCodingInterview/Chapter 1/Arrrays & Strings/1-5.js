function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let i = 0,
    j = 0,
    edits = 0;

  while (str1[i] && str2[j]) {
    if (str1[i] !== str2[j]) {
      if (str1[i] === str2[j + 1]) i--;
      else if (str1[i + 1] === str2[j]) j--;
      edits++;
    }
    i++;
    j++;
  }
  edits += str1.length - i + str2.length - j;
  console.log(str1[i], str2[j], edits);
  return edits <= 1;
}

console.log(oneAway("apple", "aple"));
