/**Find if there is a path whose added node values has the given sum
 * Example

input: 
        100
         / \
      50  200
            /  \
         150  300

    sum = 150

output: 
 1

input: 
        100
         / \
      50  200
            /  \
         150  300

    sum = 40

output: 
 0
 */

function hasPath(root, sum)
{
    if (root == null)
        return (sum == 0);
    
    return hasPath(root.left, sum - root.data) || hasPath(root.right, sum - root.data);
}