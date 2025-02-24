/** Example

input: 
        100
         / \
      50  200
               /  \
           150  300

    key = 100

output: 
 50

input: 
        100
         / \
      50  200
               /  \
           150  300

    key = 200

output: 
 150*/

function levelOrderSuccessor(root, key)
{
    if (root == null)
        return -1;
    
    let q = [];
    q.add(root);
    
    while(!q.length){
        
        let node = q.shift();

        if (node.left != null)
            q.push(node.left);
            
        if (node.right != null)
            q.push(node.right);
                
        if(node.data == key)
                    
        if(node.data == key){
            node = q.shift();
            return node.data;
        }      
    }
    return -1;
}