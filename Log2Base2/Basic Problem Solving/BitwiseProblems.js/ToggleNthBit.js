/*Example

input: 
 65 7

output: 
 1

input: 
 1 7

output: 
 65* */
function toggle(num, n){
    return num ^ (1<<n-1);
}