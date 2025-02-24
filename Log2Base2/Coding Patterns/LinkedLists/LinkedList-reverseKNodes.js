/**Example

input: 
 6 10 20 30 40 50 60
2

output: 
 20 10 40 30 60 50

input: 
 6 10 20 30 40 50 60 
3

output: 
 30 20 10 60 50 40 */


function reverseSubList(head, k)
{
    if (k<1 || head==null)
        return head;
    
    let prev = null;
    let current = head;
    
    while(current != null){
        
        let start = prev;
        let last = current;
        let next;
        
        for (let i=0; current!= null && i<k; i++){
            
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        if (start==null)
            head = prev;
        else
            start.next = prev;
        
        last.next = current;
        prev = last;
    }
    return head;
}
