/** DESCRIPTION:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.*/
function expandedForm(num) {
    const numbers = [];
    let count = 0;
    while(num){
      let value = (num%10)*(10**count);
      if (value) numbers.unshift(value);
      count++;
      num = Math.trunc(num/10);
    }
    return numbers.join(' + ');
  }