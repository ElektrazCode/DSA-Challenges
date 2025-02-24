/**Implement the function int isBalanced(char *str) which takes one argument.

str - Parentheses string

Your task is to check whether the given parentheses are balanced or not.
return 1, if balanced
return 0, otherwise

Note: You don't need to write the logic for stack push and pop operation. 
You can use the following functions,
i) push(char val) - To push the element on top of the stack.
ii) pop() - To get the last inserted element from the stack.
Example

input: 
 ()[]{}

output: 
 1

input: 
 {(})

output: 
 0 */

function isBalanced(str){
    for(let i = 0; str[i]; i++){
        if(str[i] == '(' || str[i] == '[' || str[i] == '{')   //can put openning tags in a set and test with openings.has(str[i])  -- O(1)
            push(str[i]);
        else
        {
            if(isStackEmpty())
                return false;

            let top = pop();

            if((str[i] == ')' && top != '(') ||      //can put matching tags in a dict and check with if dict[top] === str[i]  
                (str[i] == ']' && top != '[') ||
                (str[i] == '}' && top != '{'))
                    return false;
        }
    }
    return isStackEmpty();
}
