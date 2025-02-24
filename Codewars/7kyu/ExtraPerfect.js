/**Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}
Explanation:
(5)10 = (101)2
First and last bits as set bits.

(7)10 = (111)2
First and last bits as set bits. */
/**PREP
 *Paramaters: a decimal number
 *Return: array of all numbers from one to that number that are perfect numbers
 *Examples: (3) => [1,3] (1->1) (3->11)
 *Pseudo-code: Loop numbers from 1 to that numbe
               convert each number into its binary representation
               check first and last digits if 1 then push to array
*/
function extraPerfect(n){
    const perfects = [];
    for (let i=1; i<=n; i++){
      let binary = i.toString(2)
      if (binary[0]==1 && binary[binary.length-1]==1)
        perfects.push(i);
    }
    return perfects;
  }