/**Example

input: 
 10->NULL

output: 
 10 0

input: 
 10->20->NULL

output: 
 20 10 0 */

 function printInReverse(head){
    if (head===null)
        return;
    printInReverse(head.next);
    console.log(head.data);
 }