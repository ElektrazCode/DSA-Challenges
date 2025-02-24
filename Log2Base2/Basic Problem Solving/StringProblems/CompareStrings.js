/**You will be given two strings 'str1' and 'str2'. Your task is to check whether 'str1' and 'str2' are the same or not.
Example

input: 
 cake cake

output: 
 Yes

input: 
 god dog

output: 
 No */
function isSame(str1, str2)
{
  while(str1[i] && str2[i])
    {
        if (str1[i] !== str2[i]){
            return false;
        }
        i++;
    } 
    return true;
}