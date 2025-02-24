/**In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */
function solve(s){
    let numbers = [];
    numbers.push(s.split('').filter(letter=>letter.match(/[A-Z]/)).length);
    numbers.push(s.split('').filter(letter=>letter.match(/[a-z]/)).length);
    numbers.push(s.split('').filter(letter=>letter.match(/[0-9]/)).length);
    numbers.push(s.split('').filter(letter=>!letter.match(/[A-Za-z0-9]/)).length);
    return numbers;
  }