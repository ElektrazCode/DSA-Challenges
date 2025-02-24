/**DESCRIPTION:
Funny Dots
You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

Both integers are equal or greater than 1; no need to check for invalid parameters.

Examples

                                            +---+---+---+
             +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+            
             +---+                          | o | o | o |
                                            +---+---+---+
 */
function dot(n,m){
    const edge = '+---'.repeat(n) + '+';
    const inside = '| o '.repeat(n) + '|';
    const insideArr = new Array(m).fill(inside).join('\n'+edge+'\n');
    return edge + '\n' + insideArr + '\n' + edge;
  }