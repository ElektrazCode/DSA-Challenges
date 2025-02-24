/**Example

input: 
 A->NULL

output: 
 0

input: 
 A->A

output: 
 1 */
function hasLoop(head){
    let slow = head; 
    let fast = head;
    
    while(slow!==null && fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            return 1;
    }
    return 0;   
}