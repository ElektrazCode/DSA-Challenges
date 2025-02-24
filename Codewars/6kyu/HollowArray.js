function isHollow(x){
    let start = x.indexOf(0);
    let end = x.lastIndexOf(0);
    return (!x.slice(start, end).find((n)=>n!==0)) && (end-start+1 >=3) && (start-0 === x.length-end-1);
  }