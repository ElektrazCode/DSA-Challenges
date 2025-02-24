/**You will be given a binary tree and your task is to print the tree level by level.
Example

input: 
 3
100 50 200

output: 
 100 50 200

input: 
 4
100 50 200 150

output: 
 100 50 200 150 */



function printLevelOrder(root)
{   
    if (root===null)
        return;
        
    let q = [];
    q.push(root);
    
    while (q.length){
        
        let node = q.shift();
        console.log(node.data + " ");
        
        if(node.left!=null)
            q.push(node.left);
        
        if(node.right!=null)
            q.push(node.right);
    }
}