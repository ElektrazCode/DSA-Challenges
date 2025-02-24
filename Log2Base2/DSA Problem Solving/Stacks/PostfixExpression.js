/**Example

input: 
 82+

output: 
 10

input: 
 125*+

output: 
 11 */

 function postfixEval(str)
{   let stack = [];
    for(let i=0; str[i]; i++){
        if(str[i]>='0' && str[i]<='9')      // if(/\d/.test(str[i]));
            stack.push(str[i]-'0');               //stack.push(+str[i]);    
        else
            {
                let y = stack.pop();
                let x = stack.pop();
                
                switch(str[i]){
                    case '+': stack.push(x+y); break;
                    case '*': stack.push(x*y); break;
                    case '-': stack.push(x-y); break;
                    case '/': stack.push(x/y);
                }
            }
    }
    return stack.pop();
}