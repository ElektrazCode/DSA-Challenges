/**Example

input: 
 1
100

output: 
 100

input: 
 2
100
50

output: 
 100 50 */
function mirror(root)
{
    if(root===null){
        return;
    }
    
    mirror(root.left);
    mirror(root.right);
    
    //swap left & right node
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
}