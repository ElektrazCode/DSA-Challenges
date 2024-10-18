function URLify(str, n) {
  return str.trim().replaceAll(/\s/g, "%20");
  //   return str.trim().split(" ").join("%20");

  //   let sol = "";
  //   str = str.trim();
  //   for (let i = 0; i < n; i++) {
  //     if (str.charAt(i) === " ") sol += "%20";
  //     else sol += str.charAt(i);
  //   }
  //   return sol;
}
console.log(URLify("   Mr John Smith   ", 13));
