/**Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year. */

function fridayTheThirteenths(start, end) {
    let result='';
    
    for(let i=start; i<=end || i<=start; i++){
      for(let j=0; j<12; j++){
        const date = new Date(i,j,13);
        if (date.getDay() === 5){
          (result=='') ? result = '' : result += ' ';  
          result += `${j+1}/13/${i}`;
        }
      }
    }
    return result;
  }