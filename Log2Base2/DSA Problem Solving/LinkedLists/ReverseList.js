/**Example

input: 
 10->NULL

output: 
 10

input: 
 10->20->NULL

output: 
 20 10 */

 function reverse(head){
    let current = head, prev = null, next = null;

    while(current !== null)
    {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
}