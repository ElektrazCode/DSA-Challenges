/**Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
Advance stage,described as letter C
Initial stage,described as letter c
Rest cells are divided as follows:

Normal cell,described as lowercase letter
Important cell,described as uppercase letter
Prerequisites:
Important cell,cannot be cut out.
Advance cancer cell,should be cut out with adjacent cells if it can be done.
Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters. */
function cutCancerCells(organism){
    let organismArr = organism.split('');
   while ((/c/i).test(organismArr)){
     let i = organismArr.join('').toLowerCase().indexOf('c');
     let letter = organismArr[i];
     organismArr[i] = ' ';
     if (letter === 'C' && /[a-z]/.test(organismArr[i-1]))
        organismArr[i-1] = ' ';
     if (letter === 'C' && /[a-z]/.test(organismArr[i+1]))
        organismArr[i+1] = ' ';
    }
    return organismArr.filter(letter => letter!==' ').join('');
  }