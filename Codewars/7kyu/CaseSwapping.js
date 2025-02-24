/**Given a string, swap the case for each of the letters. */

function swap(str){
    let temp = str.split('');
    
    for(let i=0; i<str.length;i++){
      
      if (temp[i].match(/[a-z]/)) {
        temp[i] = temp[i].toUpperCase();
      }
      else if (temp[i].match(/[A-Z]/)){
        temp[i] = temp[i].toLowerCase();
      }
    }
    return temp.join('');
  }