/**Print all paths having given sum
 * Example

input: 
 10

output: 
 1 5 4 
1 7 2

input: 
 9

output: 
 1 5 3
 */

function printPaths(root, sum){
    
    let paths = [];
    walk(root, sum, paths, 0);            
    
}

function walk(node, sum, paths, pathLength){
     
     if(node==null)
        return;
     
     paths[pathLength++] = node.data;
     let rem = sum - node.data;
     
     if(rem==0 && node.left==null && node.right==null)
        print(paths, pathLength);
     
     else{
        walk(node.left, rem, paths, pathLength);
        walk(node.right, rem, paths, pathLength);
     }
}

function print(paths, pathLength){
    for(let i=0; i<pathLength; i++)
        System.out.print(paths[i] + " ");
    System.out.println();
    
}