/**
 * Check if linked list contains a loop
 * Implement the function int hasLoop(struct node *head) which takes one argument.

head - head node of the linked list.

Your task is to check whether the given linked list has a loop or not.
return 1, if the linked list has loop
return 0, otherwise.
Example

input: 
 A->NULL

output: 
 0

input: 
 A->A

output: 
 1
 */

function hasLoop(head)
{
    let slow = head;
    let fast = head.next;
    
    while(slow != fast && fast!= null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(slow == fast)
        return 1;
    else
        return 0;
    
}

//Refactor
function hasLoop(head)
{
    let slow = head;
    let fast = head.next;
    
    while(slow != null && fast!= null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)
        return 1;
    }
    return 0;
}