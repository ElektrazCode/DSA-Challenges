
/**Let's give it a try! You have a linked list and you have to implement the functionalities push and pop of stack using this given linked list. Your task is to use the class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack. 

Example 1:

Input: 
push(2)
push(3)
pop()
push(4) 
pop()
Output: 3 4
Explanation: 
push(2)    the stack will be {2}
push(3)    the stack will be {2 3}
pop()      poped element will be 3,
           the stack will be {2}
push(4)    the stack will be {2 4}
pop()      poped element will be 4
Example 2:

Input: 
pop()
push(4)
push(5)
pop()
Output: -1 5
Your Task: You are required to complete two methods push() and pop(). The push() method takes one argument, an integer 'x' to be pushed into the stack and pop() which returns an integer present at the top and popped out from the stack. If the stack is empty then return -1 from the pop() method.

Expected Time Complexity: O(1) for both push() and pop().
Expected Auxiliary Space: O(1) for both push() and pop().

Constraints:
1 <= Q <= 100
1 <= x <= 100 */

class MyStack
{
    
    // class StackNode{
    //     constructor(a){
    //         this.data = a;
    //         this.next = null;
    //     }
    // }
    constructor(){
        this.top = null; 
    }
    
    /**
     * @param {number} a
    */
    
    //Function to push an integer into the stack.
    push(a)
    {
        let node = new StackNode(a);
        if(this.top);
            node.next = this.top;
        this.top = node;
    }
    
    /**
    */
    
    //Function to remove an item from top of the stack.
    pop()
    {   
        let node = this.top;
        
        if (!node)
            return -1;
        this.top = this.top.next;
        
        let value = node.data;
        node = null;
        return value;
    }
}