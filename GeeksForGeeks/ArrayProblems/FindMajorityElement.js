/** Problem:
 * Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears strictly more than N/2 times in the array.
 

Example 1:

Input:
N = 3 
A[] = {1,2,3} 
Output:
-1
Explanation:
Since, each element in 
{1,2,3} appears only once so there 
is no majority element.
Example 2:

Input:
N = 5 
A[] = {3,1,3,3,2} 
Output:
3
Explanation:
Since, 3 is present more
than N/2 times, so it is 
the majority element.

Your Task:
The task is to complete the function majorityElement() which returns the majority element in the array. If no majority exists, return -1.
 

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).
 

Constraints:
1 ≤ N ≤ 107
0 ≤ Ai ≤ 106
 */

/** My Solution:*/

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} size
 * @returns {number}
 */

class Solution {
  majorityElement(a, size) {
    a = a.sort((a, b) => a - b);

    let length = Math.trunc(size / 2) + 1;

    for (let i = 0; i < size; i++) {
      if (i + length - 1 < size && a[i] === a[i + length - 1]) return a[i];
    }
    return -1;
  }
}

/**Geeks for Geeks Solution */
//Back-end complete function Template for javascript

/**
 * @param {number[]} a
 * @param {number} size
 * @returns {number}
 */

class Solution {
  /* Function to find the candidate for Majority */
  findCandidate(a, size) {
    let maj_index = 0,
      count = 1;

    // use linear search to compute candidate for majority element
    for (let i = 1; i < size; i++) {
      if (a[maj_index] == a[i]) count++;
      else count--;
      if (count == 0) {
        maj_index = i;
        count = 1;
      }
    }
    return a[maj_index]; // Return the candidate for the majority element.
  }

  /* Function to check if the candidate 
       occurs more than n/2 times */
  isMajority(a, size, cand) {
    let count = 0;
    for (let i = 0; i < size; i++) if (a[i] == cand) count++;

    if (count > Math.floor(size / 2)) return 1;
    else return 0;
  }

  majorityElement(a, size) {
    let cand = this.findCandidate(a, size);
    /* Print the candidate if it is Majority*/
    if (this.isMajority(a, size, cand))
      return cand; // Return the majority element.
    else return -1; // Return -1 if no majority element exists.
  }
}
