/**DESCRIPTION:
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17 */

/**
 *P: goals from 3 different leagues
 *R: sum of all goals from all leagues
 *E: 43, 10, 5 -> 58
 *P: add goals from 3 leagues and return sum
 */
 function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }