/**Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr (C returns 1)
false otherwise (C returns 0) */

function containAllRots(strng, arr) {
  
    if (!strng) return true;  
      
      else{
       
        let tempStr = strng.split('');
        
        for (let i=0; i<tempStr.length; i++)
          {
              tempStr.push(tempStr.shift());
  
              if(!arr.includes(tempStr.join('')))
                return false;
          }
          return true;
        
  //       return tempStr.reduce((isIncluded,letter) => {
  //           tempStr.push(tempStr.shift());
  //           if(arr.includes(tempStr.join(''))){
  //             return true;
  //           }
  //           else{
  //             return false;
  //           }
  //       });
      }
  }