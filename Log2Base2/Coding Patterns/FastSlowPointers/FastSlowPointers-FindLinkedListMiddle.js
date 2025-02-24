/**Find the middle node of a linked list
 * Implement the function int getMiddleNode(struct node *head) which takes one argument.

head - head node of the linked list.

Your task is to return the value of the middle node of the given linked list.
If the head is NULL, return -1.
Example

input: 
 NULL

output: 
 -1

input: 
 10->20->30->NULL

output: 
 20
 */

function getMiddleNode(head){
    if (head == null)
        return -1;
    let slow = head;
    let fast = head;
    
    while (fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.data;
}