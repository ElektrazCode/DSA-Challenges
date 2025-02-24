/**Example

input: 
     100
    /     \
 50    75

output: 
 0

input: 
     100
    /     \
 50   200

output: 
 1

A Tree is a binary search tree if each left node is smaller than its root and each right node is larger than its root */
function isBSTUtil(root, min, max){
    if(root===NULL)
        return 1;
    if (root.data < min || root.data > max)
        return 0;
    return (isBSTUtil(root.left, min, root.data-1) && isBSTUtil(root.right, root.data+1, max));
 }
 
function isBST(root){   
    return (isBSTUtil(root, INT_MIN, INT_MAX));
}
