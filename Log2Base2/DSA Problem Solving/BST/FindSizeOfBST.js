/**Count all nodes in a BST
 * Example

input: 
       100
      /    \
 NULL   NULL

output: 
 1

input: 
       100
      /    \
  50   NULL

output: 
 2
 */
function size(root)
{   
    if (root === null)
        return 0;
    return 1 + size(root.left) + size(root.right);
}