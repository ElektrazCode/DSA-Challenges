
  function valueOfX(eq) {
    let [left, right] = eq.split(' = '); 
    if (right.includes('x')) [left, right] = [right, left];
    return (eval(right) - eval(left.replace('x', 0))) * (left.includes('- x') ? -1 : 1);
  }

  console.log(valueOfX('9 - 1 = - x + 10'));