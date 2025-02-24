/**Task:
You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2.... */
function grid(N) {

    let char = 97;
    let grid = '';
    
    if(N<0) return null;
    
    for(let i=0;i<N;i++){
      for(let j=0; j<N;j++){
        grid += String.fromCharCode(((j+i)%26)+97);
        grid += (j<N-1) ? ' ' : '';
      }
      grid += (i<N-1) ? '\n' : '';
    }
    return grid;
  }