/**For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */
function well(x){
    console.log(x);
    if (x.every(w=>w==='bad')) return 'Fail!';
    if (x.filter(w=>w==='good').length>2) return 'I smell a series!';
    if (x.filter(w=>w==='good').length>=1) return 'Publish!';
  }