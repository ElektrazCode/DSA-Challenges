/**Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

FUNDAMENTALSARRAYS */
/**PREP*
 * Parameters: an array of numbers.
 * Return: sum of smallest 2 numbers.
 * Examples: [5, 8, 12, 19, 22] => 13
 * Pseudo-code: get min number in array
                add to sum
                remove min from array
                get min number in array
                add to sum
                return sum
                
                or
                
                sort array
                return 1st + 2nd
 */
                function sumTwoSmallestNumbers(numbers) {  
                    numbers.sort((a,b)=>a-b);
                    return numbers[0] + numbers[1];
                  }