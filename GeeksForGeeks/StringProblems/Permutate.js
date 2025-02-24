function permutate(str, prefix = "") {
  if (str.length == 0) console.log("************", prefix, "************");
  else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substr(0, i) + str.substr(i + 1);
      console.log(i, "|", rem, "|", prefix + str.charAt(i));
      permutate(rem, prefix + str.charAt(i));
    }
  }
}
console.log("i | rem | prefix");
console.log("----------------");
permutate("abcd");
