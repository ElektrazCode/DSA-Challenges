/**Example

input: 
 a*bcd,e$

output: 
 e*dcb,a$

input: 
 he$ll@o!

output: 
 ol$le@h! */

 //My Solution

function reverse(str)
{
    let start = 0;
    let end = str.length-1;
    let temp;
    
    while(start<end)
    {
        while (str[start]<65 || str[start]>122||(str[start]<97 && str[start]>90)){
            start++;
        }
        while (str[end]<65 || str[end]>122 ||(str[end]<97 && str[end]>90)){
            end--;
        }
            
        temp = str[start];
        str[start++] = str[end];
        str[end--] = temp;
    }
    
}

//Their Solution
function reverse(str)
{
    let start = 0;
    let end   = str.length - 1;

    while(start < end)
    {
        if(!isAlphabet(str[start]))
            start++;
        else if(!isAlphabet(str[end]))
            end--;
        else
        {
            swap(str, start, end);
            start++;
            end--;
        }
    }
}


function isAlphabet(ch)
{
    return ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'));
}

function swap(str, start, end){
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
}

