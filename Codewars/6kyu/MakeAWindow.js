/**DESCRIPTION:
Make me a window. I'll give you a number (N). You return a window.

Rules:

The window will always be 2 x 2.

The window needs to have N number of periods across and N number of periods vertically in each pane.

Example:

N = 3

---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------
Note: there should be no trailing new line characters at the end. */

function makeAWindow(num) {
    let output = '-'.repeat(num*2+3)+'\n'; 
    output += (('|'+'.'.repeat(num)).repeat(2) + '|\n').repeat(num);
    output += '|' + '-'.repeat(num) + '+' + '-'.repeat(num) + '|\n';
    output += (('|'+'.'.repeat(num)).repeat(2) + '|\n').repeat(num);
    output += '-'.repeat(num*2+3);
    return output;
}

//Refactor

function makeAWindow(num) {
    let edge = '-'.repeat(num*2+3); 
    let pane = (('|'+'.'.repeat(num)).repeat(2) + '|\n').repeat(num);
    let center = '|' + '-'.repeat(num) + '+' + '-'.repeat(num) + '|\n';
    return edge + '\n' + pane + center + pane + edge;
}