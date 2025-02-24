/**Implement the function void reverse_words(char str[]) which takes one argument.

str - Input String

Your task is to reverse the individual words of the given string.
Example

input: 
 Programming is an Art

output: 
 gnimmargorP si na trA

input: 
 Welcome to Log2Base2

output: 
 emocleW ot 2esaB2goL */

 //My Solution
function reverse_words(str)
{
    let i, wstart = 0;
    let len = str.length;

    for(i = 0; i < len; i++)
    {
        if(str[i] == ' ')
        {
            reverse(str,wstart,i - 1);
            wstart = i + 1;
        }
    }

    reverse(str,wstart,len-1);
}

function reverse(str, start, end)
{
    while(start < end)
    {
        let temp = str[start];
        str[start++] = str[end];
        str[end--] = temp;
    }
}

//Their Solution
/* Solution */

function length(str)
{
    let len;

    for(len = 0; str[len]; len++);

    return len;
}

function reverse(str, start, end)
{
    while(start < end)
    {
        let temp = str[start];
        str[start++] = str[end];
        str[end--] = temp;
    }
}

function reverse_words(str)
{
    let i, wstart = 0;
    let len = length(str);

    for(i = 0; i < len; i++)
    {
        if(str[i] == ' ')
        {
            reverse(str,wstart,i - 1);
            wstart = i + 1;
        }
    }

    reverse(str,wstart,len-1);
}

//Refactor

function reverseWords(arr){
    return arr.map(word=> word.split('').reverse().join(''));
}