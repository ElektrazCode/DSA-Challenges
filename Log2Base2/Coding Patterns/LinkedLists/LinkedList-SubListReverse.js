/**Reverse a subList of a linked List
 * Example

input: 
 4 10 20 30 40
2 3

output: 
 10 30 20 40

input: 
 5 10 20 30 40 60
3 5

output: 
 10 20 60 40 30
 */

function reverseSubList(head, start, end)
{
    if (start == end)
        return head;

    let current = head;
    let prev = null;
    
    for(let i=1; current!= null && i<start; i++){
        prev = current;
        current = current.next;
    }

    
    let part1Last = prev;
    let last = current;
    let next;
    
    for(let i=1; current!= null && i<= end - start +1; i++){
        
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    if(part1Last!=null)
        part1Last.next = prev;
    else
        head = prev;
    last.next = current;
    return head;
}