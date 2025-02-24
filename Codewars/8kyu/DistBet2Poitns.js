/** DESCRIPTION:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.*/
function distanceBetweenPoints(a, b) {
    return ((b.y-a.y)**2 + (b.x-a.x)**2)**(1/2);
  }