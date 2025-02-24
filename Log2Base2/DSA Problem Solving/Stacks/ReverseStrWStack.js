/**Implement the function char* stringrev(char *str) which takes one argument.

str - Input string

Your task is to reverse the given string(use the same string to store the result) using the stack data structure.

Note: You don't need to write the logic for stack push and pop operation.
You can use the following functions,
i) push(char val) - To push the element on top of the stack.
ii) pop() - To get the last inserted element from the stack.
Example

input: 
 abc

output: 
 cba

input: 
 hello

output: 
 olleh */

function stringrev(str)
{
    let stack = [];
    for(let i=0; str[i]; i++){
        stack.push(str[i]);
    }
    for(let i=0; stack[i]; i++){
        str[i]=stack.pop();
        //Immutable String
        //let String.prototype.replaceAt = function(index, replacement){
        //  this.substring(0, index) + replacement + this.substring(index+1);
        //}
        //str.replaceAt(i,stack.pop())
    }
    return str;
}