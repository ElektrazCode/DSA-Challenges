/**DESCRIPTION:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

/**PREP
  *Parameters: string of words
  *Return: the string sorted by numbers in each word
  *Examples: "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"
  *Pseudo-code: convert string into array of words,
                map array and by finding words with index+1 and returning them
                convert new array into string
                return string*/
                function order(words){
                    return words.split(' ').sort((word1, word2) => word1.match(/[1-9]/) - word2.match(/[1-9]/)).join(' ');
                  }