function racePodium(blocks) {
    let second = Math.ceil(blocks/3);
    let first = second + 1;
    if (second + first === blocks) second--;
    let third = blocks - first - second;
    return [second, first, third];
  }