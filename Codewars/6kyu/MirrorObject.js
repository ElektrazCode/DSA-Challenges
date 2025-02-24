/** DESCRIPTION:
Mirror - Mirror
Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx
"You cannot change the original object, because if you did that the reflection would change."*/
const mirror = obj => {
    const arr = Object.keys(obj);
    const arrRev = arr.map(word => word.split('').reverse().join(''));
    const objRev = {};
    arr.forEach((key, index) => objRev[key] = arrRev[index]);
    return objRev;
  };

  //Better Approach

  const mirror = obj => {
    return Object.keys(obj).reduce((m, k) => {
      m[k] = k.split('').reverse().join('');
      return m;
    }, {});
  };