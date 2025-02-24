/** You will be given a binary tree, your task is to find its minimum depth. 
The minimum depth of a binary tree is the number of nodes from the root to the nearest leaf node.
Example

input: 
        100
         / \
     50  200
            /  \
        150  300

output: 
 2

input: 
        100
        /    \
      50    200
       /\        /  \
   10 60 150 300
    /\
 5  20

output: 
 3*/
class Qitems{
    Node node;
    int depth;
}

int minDepth(Node root)
{   
    if (root == null)
        return 0;
    
    Queue<Qitems> q = new LinkedList<>();
    
    Qitems qi = new Qitems();
    
    qi.node = root;
    qi.depth = 1;
    
    q.add(qi);
    
    while(!q.isEmpty()){
        
        Qitems frontNode = q.poll();
        Node node = frontNode.node;
        int depth = frontNode.depth;
        
        if(node.left==null && node.right==null)
            return depth;
            
        if(node.left!=null){
            Qitems newNode = new Qitems();
            newNode.node = node.left;
            newNode.depth = depth + 1;
            q.add(newNode);
        }
        if(node.right!=null){
            Qitems newNode = new Qitems();
            newNode.node = node.right;
            newNode.depth = depth + 1;
            q.add(newNode);
        }
    }
    return 0;
}
