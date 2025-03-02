/**You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE" */
function direction(facing, turn){
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return (turn<0) ? directions.reverse()[(directions.indexOf(facing) - (turn / 45)) % 8] : directions[(directions.indexOf(facing) + (turn / 45)) % 8];
  }