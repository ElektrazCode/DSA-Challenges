/**You will be given two strings 'str1' and 'str2'. Your task is to concatenate 'str1' and 'str2' without using strcat() function.
Example

input: 
 test case

output: 
 testcase

input: 
 program mable

output: 
 programmable */
function concat(str1, str2)
{
    let i = 0;
    let str3 = '';
    while(str1[i]){
        str3[i] = str1[i++];
    }
    let j=0;
    while(str2[j]!='\0'){
        str3[i++] = str2[j++];
    }    
    return str3;   //str1 + str2
}