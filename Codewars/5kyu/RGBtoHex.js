/**The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */
function toHex(d){
    if (d<=0) return '00';
    if (d>=255) return 'FF';
    
    let first = Math.floor(d/16);
    let second = d % 16;
    
    first = (first>9) ? String.fromCharCode(first-10+65) : first + '';
    second = (second>9) ? String.fromCharCode(second-10+65) : second + '';
    
    return first + second;
  }
  function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b);
  }