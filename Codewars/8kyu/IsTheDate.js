/**Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day. */
function isToday(date) {
    const today = new Date();
    return (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear());
  }

  /**Refactor */
  function isToday(date) {
    return new Date().toDateString()===date.toDateString();
  }