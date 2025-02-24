/**DESCRIPTION:
Let's implement the range function:

range([start], stop, [step])

range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]

range(0);
=> []

range(10, 0); // /!\ note that the end is before the start
=> []

range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
start, if omitted, defaults to 0; step defaults to 1.

Returns a list of integers from start to stop, incremented by step, exclusive.

Note that ranges that stop before they start are considered to be zero-length instead of negative. */
function range(start=0, end, step=1) {
    let output = [];
    
    if (end===undefined) {
      end = start;
      start = 0;
    }
    
    console.log(start, end, step);
    
    if(step === 0) 
      return new Array(end-start).fill(start);
    
    for (let i=start; i<end; i=i+step){
      output.push(i);
    }
    console.log(output);
    return output;
  }

  //Shorter Solution
  function range(start, end, step) {
    if (arguments.length===1) return range(0, start, 1);
    if (arguments.length===2) return range(start, end, 1);
    var ret = [];
    for (i=0; i<(end-start)/(step||1); i++) {
        ret.push(start+(i*step));
    }
    return ret;
}