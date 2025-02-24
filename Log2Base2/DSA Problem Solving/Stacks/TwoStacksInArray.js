/**Example

input: 
 stack1[] = {30,20,10} - pop1()

output: 
 30

input: 
 stack1[] = {20,10}    - pop1()

output: 
 20 */
function twoStacksInArray(){

    let size = 6;
    let stack = new Array(size);
    let mid = size/2;
    let top1 = -1;
    let top2 = mid - 1;

    function push1(val)
    {
        if(top1==mid-1)
            return;
        else
            stack[++top1]=val;
        
    }

    function push2(val)
    {
        if(top2==size-1)
            return;
        else
            stack[++top2]=val;
    }

    function pop1()
    {
        if(top1==-1)
            return -1;
        else
            return stack[top1--];
    }

    function pop2()
    {
        if(top2==mid-1)
            return -1;
        else
            return stack[top2--];
        
    }
}


//Memory efficient Solution is to start each stack at opposite ends, one from beginning of array and the other from the end
function twoStackInArray(){
    let size = 6;
    let stack = new Array(size);
    let top1 = -1;
    let top2 = size;


    function push1(val)
    {
        if(top1==top2-1){
            return;
        }
        else
        stack[++top1]=val;
    }

    function push2(val)
    {   
        if(top2==top1+1)
            return;
        else
            stack[--top2]=val;
    }

    function pop1()
    {
        if(top1==-1)
            return -1;
        else
            return stack[top1--];
    }

    function pop2()
    {
        if(top2==size)
            return -1;
        else
            return stack[top2++];
            
        
    }
}