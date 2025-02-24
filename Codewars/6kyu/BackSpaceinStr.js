/**DESCRIPTION:
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */
function cleanString(s) {
    let arr = s.split('');
    let isHash = e => e === '#';
  
    while(arr.includes('#')){
      if (arr.every(isHash))
        return '';
      if(arr.indexOf('#')===0)
        arr.splice(arr.indexOf('#'), 1);
      else
        arr.splice(arr.indexOf('#')-1, 2);
    }
    return arr.join('');
  }

  //Clever Solution
  function clean_string(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }