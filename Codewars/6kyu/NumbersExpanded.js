/**DESCRIPTION:
Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100" */
function expandedForm(num){
  
    const numArr = String(num).split('');
    const decPoint = numArr.indexOf('.');
  
    return numArr.map((digit, index) =>{
      return (digit==0 || digit=='.') ? digit :
             (decPoint-index>0) ? `${digit * (10**(decPoint-index-1))}` : `${digit}/${10**(index-decPoint)}`;
    }).filter(digit=> (digit!=0) && (digit!='.')).join(' + ');
}