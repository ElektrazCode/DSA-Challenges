/**DESCRIPTION:
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas" */
function solution(input, markers) {
    const output = input.split('\n');
    return output.map(sentence => {
                          for(let i=0; i<sentence.length; i++){
                            if (markers.includes(sentence[i]))
                              sentence = sentence.slice(0, i-1);
                          }
                          return sentence;
                      }).join('\n');
  }

  //Shorter Solution
  function solution(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }