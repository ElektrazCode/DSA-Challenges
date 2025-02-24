/**DESCRIPTION:
You are given a binary tree. Implement the method maxSum which returns the maximal sum of a route from root to leaf. For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13
The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal sum.

The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}; */
function maxSum(root) {
    if(!root)
      return 0;
    return Math.max(root.value + maxSum(root.left), root.value + maxSum(root.right));

    
    //refactor
    function maxSum(root) {
        if (!root)
          return 0;
        return root.value + Math.max(maxSum(root.left), maxSum(root.right));
      }