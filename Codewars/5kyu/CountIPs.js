/**Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246 */
function ipsBetween(start, end){
    const startIP = start.split('.');
    const endIP = end.split('.');
    return (endIP[0] - startIP[0])*Math.pow(256,3) + (endIP[1] - startIP[1])*Math.pow(256,2) + (endIP[2] - startIP[2])*256 + (endIP[3] - startIP[3]);
  }