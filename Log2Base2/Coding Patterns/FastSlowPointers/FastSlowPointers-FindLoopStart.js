/**Find the start of the loop in a linked list
 * Example

input: 
 10->20->30->40->10

output: 
 10

input: 
 10->20->30->40->20

output: 
 20
 */
function calculateLength(slow){
    let current = slow;
    let length = 0;
    do{
        current = current.next;
        length++;
    }while(current != slow);
    return length;
}

function findStart(length, head){
    let pointer1 = head;
    let pointer2 = head;
    
    for(let i=0; i<length; i++){
        pointer1 = pointer1.next;
    }
    while(pointer1!=pointer2){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1;
}

function findLoopStart(head)
{
    let slow = head;
    let fast = head;
    
    while(slow != null && fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow==fast){
            let length = calculateLength(slow);
            return findStart(length, head);
        }
    }
    return null;
}


