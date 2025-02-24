/**Example

input: 
       100
      /    \
  NULL  NULL

output: 
 1

input: 
       100
      /    \
  50  NULL

output: 
 2 */

function maxDepth(root)
{
    if (root === null)
        return 0;
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
}
//Log2Base2 solution
function maxDepth(root)
{
    if (root === null)
        return 0;
    else
    {
        let lDepth = maxDepth(root.left);
        let rDepth = maxDepth(root.right);

        if (lDepth > rDepth)
            return(lDepth+1);
        else
            return(rDepth+1);
    }
}