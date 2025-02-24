/**One fine day while ploughing the fields, Farmer Arepo found a stone tablet with symbols carved on it... he knew such artifacts may show a message in four directions, so he wisely kept it and resumed turning the soil. He found more tablets, but with crops to sow he had no time to decipher them.

Your Task
Please help Farmer Arepo by inspecting each tablet to discern whether or not it shows a Sator Square!

The Square
is a two-dimentional palindrome (made from words of equal length)

observes four symmetries: identity, 180-degree rotation, and two diagonal reflections

can be read:

left-to-right (across)
top-to-bottom (down)
bottom-to-top (up)
right-to-left (reverse)
can be rotated 180 degrees and all words still read in all directions 

Some Details
tablet (square) dimensions range from 2x2 to 33x33 inclusive
characters range from ascii ordinals 33 to 126 inclusive
tablets may contain characters that look similar yet are different
you are not permitted to mutate the input*/

function isSatorSquare(tablet) {
    const size = tablet.length;
    for(let i=0;i<size;i++){
      for(let j=0;j<size;j++){
        if(tablet[i][j]!==tablet[j][i] || tablet[i][j]!==tablet[size-i-1][size-1-j] || tablet[i][j]!==tablet[size-1-j][size-1-i])
          return false;
      }
    }
    return true;
  }