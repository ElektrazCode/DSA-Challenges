/**Example

input: 
 HEllO

output: 
 heLLo

input: 
 DRIVINg

output: 
 drivinG */
 function convert(str)
 {
     let i=0;
     while(str[i++]){
         if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
             str[i]=str[i]-32;   //I don't think this is possible in js (ok for C).
         else
             str[i]=str[i]+32;   //If not working have to create a new string and assign the covnerted letters to it.
     }
     return str;
 }