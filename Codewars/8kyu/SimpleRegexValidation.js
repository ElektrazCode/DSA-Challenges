/**DESCRIPTION:
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included). */
function validateUsr(username) {
    res =  /^[_a-z0-9]{4,16}$/
    return res.test(username) 
  }