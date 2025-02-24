/**Implement the function void doubleTree(struct node *root) which takes one argument.

root - root node of the Binary Search Tree.

Your task here is to convert the given tree into its corresponding double tree. 
Double tree: For each node in the given tree we need to create a duplicate node and insert it as the left child of the original node.

Note: In the sample test cases below we have given the inorder representation of the converted tree for your convenience.
Example

input: 
 1 100

output: 
 100 100

input: 
 2 100 50

output: 
 50 50 100 100 */

function doubleTree(root)
{
    if (root == null)
        return;
    else
    {
        doubleTree(root.left);
        doubleTree(root.right);

        let backup = root.left;
        root.left = new Node(root.data);
        root.left.left = backup;
    }
}