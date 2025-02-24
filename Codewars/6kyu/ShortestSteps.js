/**Summary:
Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.

Description:
A step is defined as either:

Adding 1 to the number: num += 1
Doubling the number: num *= 2
You will always start from the number 1 and you will have to return the shortest count of steps it would take to land exactly on that number.

1 <= num <= 10000

Examples:

num == 3 would return 2 steps:

1 -- +1 --> 2:        1 step
2 -- +1 --> 3:        2 steps

2 steps */
function shortestStepsToNum(num) {
    let counter = 0;
    while(num>1){
      if(num%2==0) num/=2;
      else num-=1;
      counter++;
    }
    return counter;
  }