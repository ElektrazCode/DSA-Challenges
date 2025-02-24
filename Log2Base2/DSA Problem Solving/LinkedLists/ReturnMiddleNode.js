/**Example

input: 
 NULL

output: 
 -1

input: 
 10->20->30->NULL

output: 
 20 */

function getMiddleNode(head)
{
    let temp=head;
    let size=0;
    if (head===null){
        return -1;
    }
    else
        while(temp!==null){
            size++;
            temp=temp.next;
        }
        temp=head;
        for(let i=0;i<size/2;i++){
            temp=temp.next;
        }
        return temp.data;
}

//Refactor  --untested
function getMiddleNode(head){
    let fast = head;
    let slow = head;

    while(fast.next!==null && fast.next.next!==null){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.data || -1;
}