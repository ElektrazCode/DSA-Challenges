/** Example

input: 
 4

output: 
 0 1 1 2

input: 
 5

output: 
 0 1 1 2 3*/

//Recursion

//function fib(n)
//{
//    if (n==0 || n==1)
//        return n;
//    return fib(n-1)+fib(n-2);
//}

function fibonacci(n){
    let fib=0, oldfib=0, temp=0, fibs = [];
    
    for (let i=0; i<n; i++)
    {   if (i===0 || i===1)
            fib = i;
        else
        {   temp = fib;
            fib = fib + oldfib;
            oldfib = temp;
        }
        fibs.push(fib);
    }
    return fibs;
}