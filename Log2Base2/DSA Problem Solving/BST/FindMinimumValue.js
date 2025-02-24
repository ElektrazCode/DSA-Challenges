/**Implement the function int minVal(struct node *root) which takes one argument.

root - Root node of the binary search tree

Your task is to return the minimum value present in the given binary search tree.
Example

input: 
       100
      /    \
 NULL   NULL

output: 
 100

input: 
       100
      /    \
  50   NULL

output: 
 50 */
function minVal(root)
{   let curr = root;
        while(curr.left!==null){
            curr=curr.left;
        }
        return curr.data;
}