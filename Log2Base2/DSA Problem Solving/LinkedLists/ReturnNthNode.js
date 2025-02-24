/**Example

input: 
 10->20->30->40->NULL
1

output: 
 20

input: 
 10->20->30->40->NULL
3

output: 
 40 */

function getNthNode(head, index)
{
    let temp=head;
    let counter=0;
    
    while (temp!==null){
        if (counter===index)
            return temp.data;
        counter++;
        temp=temp.next;
    }
    return -1;
}