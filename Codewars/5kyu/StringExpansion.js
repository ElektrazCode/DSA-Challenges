/**DESCRIPTION:
Consider the following expansion:

solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

More examples in test cases.

Good luck! */
function solve(str){
    let formula = str.substr(0, str.indexOf('\)')).split('\(');
    let expr='';
  
    while(formula.length !== 0){
      const last = formula[formula.length-1];
  
      if(/[a-z].*[1-9]/.test(last)){
        expr = expr.repeat(Number(last[last.length-1]));
        expr = last.substr(0, last.length-1) + expr; 
        formula.pop();
      }
      else if (/[a-z]/.test(last))
          expr = formula.pop() + expr;
      else if (/\d/.test(last))
          expr = expr.repeat(Number(formula.pop()))
    }
    return expr;
  }

  //Better Solution
  function solve(s) {
    while (s.includes('(')) {
      s = s.replace(/\d?\((\w*)\)/,(m,a)=>a.repeat(+m[0]||1));
    }
    return s;
  }