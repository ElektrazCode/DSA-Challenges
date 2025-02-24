/**Print all paths to all leaf nodes of a tree 
 * Example

input: 
 5
100 50 200 150 300

output: 
 100 50 
100 200 150 
100 200 300

input: 
 4
100 50 200 150

output: 
 100 50 
100 200 150
*/

function print(paths, pathLength){
    
    for(let i=0; i<pathLength; i++)
        console.log(paths[i] + " ");
    
    console.log('\n');
}

function printPathsRecur(root, paths, pathLength){   
    
    if(root == null){
        return;
    }
    
    paths[pathLength++] = root.data;
    
    if(root.left==null && root.right==null)
        print(paths, pathLength);
    
    printPathsRecur(root.left, paths, pathLength);
    printPathsRecur(root.right, paths, pathLength);
    
}

function printPaths(root){
    let paths = [];
    printPathsRecur(root, paths, 0);
}