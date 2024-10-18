function PalPerm(str) {
  if (!str) return false;

  let map = new Array(26).fill(0);
  let pal = str.toLowerCase().replaceAll(/[^a-z]/g, "");

  for (let i = 0; i < pal.length; i++) {
    let index = pal.charCodeAt(i) - "a".charCodeAt(0);
    map[index]++;
  }
  let countOnes = map.filter((num) => num % 2 !== 0).length;
  return (
    (countOnes === 1 && pal.length % 2 !== 0) ||
    (countOnes === 0 && pal.length % 2 === 0)
  );
}

console.log(PalPerm("mirror"));
