/** Example

input: 
 4

output: 
 Even

input: 
 1

output: 
 Odd*/
function isEvenOrOdd(num){
	return (num & 1 === 1) ? "Odd" : "Even";
}