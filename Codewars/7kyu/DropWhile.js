/**Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

dropWhile(seq, isEven) // -> [1,2,5,4,3,2]
Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other. */
/**PREP
 *Parameters: an array of numbes and function
 *Return: an array of the remaining numbers after removing the longest sequence of numbes fulfilling the condition in the function
 *Examples: [2,6,4,10,1,5,4,3] => [1,5,4,3]
 *Pseudo-code: while array still has elements and first element in array fulfills the condition
               remove first element
               return array
*/
function dropWhile(arr, pred) {
    while (arr.length && pred(arr[0])){
      arr.shift();
    }
  return arr;

}