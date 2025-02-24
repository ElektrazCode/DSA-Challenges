function kingIsInCheck (chessboard) {
  let checkMate = false;
  let pawns ={
    '♔': [],
    '♛': [],
    '♝': [],
    '♞': [],
    '♜': [],
    '♟': []
  };
  
  //Log the pawns places
  for(let i=0; i<chessboard.length; i++){
    let row = chessboard[i].filter(square=> square!==' ');
    row.forEach(square => {
      pawns[square] = [i, chessboard[i].join('').indexOf(square)];
    });
  }
  console.log(pawns);

  //check Surroundings

    Object.values(pawns).forEach((pawn, index) => {
      let distance = Math.abs((pawns['♔'][0] - pawn[0]) / (pawns['♔'][1] - pawn[1]);
      if(!checkMate){
        switch(index){
            case 1: checkMate = (distance === 1) || (pawns['♔'][1] === pawn[1]) || (pawns['♔'][0] === pawn[0]); 
                       break;
            case 2: checkMate = (distance === 1);
                       break;
            case 3: checkMate = (distance === 1/2 || distance === 2);
                       break;
            case 4: checkMate = ((pawns['♔'][1] === pawn[1]) || (pawns['♔'][0] === pawn[0]));
                       break;
            case 5: checkMate = ((pawns['♔'][0] === pawn[0]+1) && (Math.abs(pawns['♔'][1] - pawn[1]) === 1));
                       break;
        }
        //Check Line of Sight
        if (checkMate){
            pawns.values
                 .filter(p => p!== pawns['♔'] && p!== pawn && p!==[])
                 .includes([pawns['♔'][0],pawns['♔'][1]]);
        }
      }
    });

  return checkMate;
}