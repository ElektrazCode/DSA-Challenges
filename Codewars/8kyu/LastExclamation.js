/**Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate. */
function remove (string) {
    return (string[string.length-1]==='!') ? string.slice(0, string.length-1) : string;
  }

  /**Refactor*/
  function remove (string) {
    return string.replace(/!$/, '');
  }