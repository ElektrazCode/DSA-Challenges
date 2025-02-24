/**Example

input: 
 10->20->30->40->50->NULL
1

output: 
 50

input: 
 10->20->30->40->50->NULL
2

output: 
 40 */

function getNthNodeFromLast(head, n){
    let count = 0
    if(head == null)
        return;

    getNthNodeFromLast(head.next , n);

    if(++count === n)
        return head.data;

}