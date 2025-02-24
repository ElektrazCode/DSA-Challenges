//PREP
//Parameters: total number of students in class
//Retrun: array with number of students in each group (decreasing sequentially) or -1 if none exist
//Example: 14 -> [5,4,3,2], 16 -> -1
//Pseudo-code: create a sum variable and a group variable assign to both half of the number.
//             create a groups variable containing an empty array
//             if the sum is <= total number of students loop
//             add the group to the sum and decrement the group num by 1
//             push group number to the groups array
//             if the sum === total return array
//             else retun -1
function shortestArrang(n) {
    console.log(n);
    let half = Math.round(n/2);
    let sum = 0;
    while (half>=1 && sum <= n){
      let groups = [];
      let group = half;
      while (group >= 1 && (sum + group) <= n){
        sum += group;
        groups.push(group--);
        console.log(groups);
      }
      if (sum===n) return groups
      else {
        half--;
        sum=0;
      }
    }
    return [-1];
  }