/**Find the loop length in a linked list if it has a loop otherwise return 0 
 * Example

input: 
 A->B->A

output: 
 2

input: 
 A->B->C->D->E->C

output: 
 3
*/

function loopLength(head)
{
    let slow = head;
    let fast = head;
    
    while (slow != null && fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(fast == slow){
            let counter = 0;
            do{
                slow = slow.next;
                counter++;
            } while(fast != slow);
            return counter;
        }
    }
    return 0;
}

//Log2Base2 Solution
function calculateLength(slow)
{
    let current = slow;
    let length = 0;
    do
    {
        current = current.next;
        length++;
    }while(current != slow);
    return length;
}

function loopLength(head)
{
    let slow, fast;
    slow = fast = head;
    while(slow != null && fast != null && fast.next != null)
    {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)
            return calculateLength(slow);
    }
    return 0;
}
