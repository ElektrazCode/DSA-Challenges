/**Implement the function identicalTree(struct node *a, struct node *b) which takes two arguments. 

a - root node of first tree.
b - root node of second tree. 

Your task is to check whether the given two BSTs are equal or not. Return 1 they are equal and 0 if they are not equal. 

Note: We have provided the expected return value of the function in expected output section below.
Example

input: 
          50              50
        /    \            /     \
     35   75       35   75

output: 
 1

input: 
          50              50
        /    \            /     \
     35   75       35   90

output: 
 0 */

 function identicalTree(a, b){
    if (a==null && b==null)
        return 1;
        
    if ((a==null && b!=null) || (a!=null && b==null) || (a.data != b.data))
        return 0;
    
    return ( identicalTree(a.left, b.left)==1 && identicalTree(a.right, b.right)==1) ? 1 : 0;
}

//Log2Base2 Solution
function identicalTree(a, b){
    if(a == null && b == null){
        return 1;
    } else if (a != null && b!= null){
        return (a.data == b.data && identicalTree(a.left, b.left) == 1 && identicalTree(a.right, b.right) == 1) ? 1 :0;
    } else {
        return 0;
    }
}