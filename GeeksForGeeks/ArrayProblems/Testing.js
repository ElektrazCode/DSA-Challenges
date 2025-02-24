// Function to check if given number n is a power of two.
function findLongestConseqSubseq(arr, N) {
  // let max = 0;
  // let i = 0;
  // let j = 1;

  // arr.sort((a, b) => a - b);

  // console.log(arr);

  // while (i < N && j < N) {
  //   while (j < N && arr[j] === arr[j - 1] + 1) {
  //     j++;
  //   }
  //   max = Math.max(max, j - i);
  //   i = j;
  //   j++;
  // }
  // return max;
  let count = 0;
  let hash = new Array(Math.max(...arr) + 1).fill(-1);

  arr.forEach((e) => (hash[e] = 1));

  return hash.reduce((maxCount, e) => {
    if (e === -1) {
      count = 0;
    } else count += e;
    console.log(count);
    maxCount = Math.max(maxCount, count);
    return maxCount;
  });
}

console.log(findLongestConseqSubseq([2, 6, 1, 9, 4, 5, 3], 7));
