// function compress(str) {
//   if (!str) return null;

//   let countsMap = new Array(str.length).fill(0);
//   let start = 0;

//   for (let i = 1; i < str.length; i++) {
//     if (str.charAt(i) !== str.charAt(i - 1)) {
//       countsMap[start] = i - start;
//       start = i;
//     }
//   }
//   countsMap[start] = str.length - start;

//   if (countsMap.every((e) => e === 1)) return str;
//   else
//     return countsMap.reduce(
//       (acc, e, i) => (e !== 0 ? (acc += str[i] + e) : (acc += "")),
//       ""
//     );
// }

//Terrible time complexity since string concatenation takes between o(n) & o(n2) depending on the JS engine because it recreates a new string each time.
//Arrays would be more efficient as arr.push(e) has a o(1) time complexity.

function compress(str) {
  // let compStr = "";
  let arr = []; // more efficient solution
  let count = 0;
  let valid = false;

  for (let i = 0; i < str.length; i++) {
    count++;
    if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
      if (count > 1) valid = true;
      // compStr += str.charAt(i) + count;
      arr.push(str.charAt(i));
      arr.push(count);
      count = 0;
    }
  }

  // return valid ? compStr : str;
  return valid ? arr.join("") : str;
}

console.log(compress("aaabbbbbbss"));
