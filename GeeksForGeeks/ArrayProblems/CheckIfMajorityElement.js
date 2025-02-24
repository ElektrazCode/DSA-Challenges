/**Check for Majority Element in a sorted array 
 * Given an array arr of N elements,  A majority element in an array arr of size N is an element that appears more than N/2 times in the array. The task is to write a function say isMajority() that takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true if x is a majority element (present more than n/2 times).

Examples: 

Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
Output: True (x appears more than n/2 times in the given array)

Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
Output: False (x doesn't appear more than n/2 times in the given array)

Input: arr[] = {1, 1, 1, 2, 2}, x = 1
Output: True (x appears more than n/2 times in the given array)
*/

/**METHOD 1 (Using Linear Search): Linearly search for the first occurrence of the element, once you find it (let at index i), check the element at index i + n/2. If the element is present at i+n/2 then return 1 else return 0. */
// Javascript Program to check for majority
// element in a sorted array

function isMajority(arr, n, x) {
  let i,
    last_index = 0;

  // Get last index according to
  // n (even or odd)
  last_index = n % 2 == 0 ? parseInt(n / 2, 10) : parseInt(n / 2, 10) + 1;

  // Search for first occurrence
  // of x in arr[]
  for (i = 0; i < last_index; i++) {
    // Check if x is present and
    // is present more than n/2 times
    if (arr[i] == x && arr[i + parseInt(n / 2, 10)] == x) return true;
  }
  return false;
}

let arr1 = [1, 2, 3, 4, 4, 4, 4];
let n1 = arr1.length;
let x1 = 4;
if (isMajority(arr1, n1, x1) == true)
  document.write(
    x + " appears more than " + parseInt(n1 / 2, 10) + " times in arr[]"
  );
else
  document.write(
    x + " does not appear more than " + parseInt(n1 / 2, 10) + " times in arr[]"
  );

/**Time Complexity: O(n)
Auxiliary Space: O(1) */

/**METHOD 2 (Using Binary Search): Use binary search methodology to find the first occurrence of the given number. The criteria for binary search is important here.  */
// Javascript Program to check for majority
// element in a sorted array */

// If x is present in arr[low...high]
// then returns the index of first
// occurrence of x, otherwise returns -1
function _binarySearch(arr, low, high, x) {
  if (high >= low) {
    let mid = parseInt((low + high) / 2, 10);
    //low + (high - low)/2;

    // Check if arr[mid] is the first
    // occurrence of x.    arr[mid] is
    // first occurrence if x is one of
    // the following is true:
    // (i) mid == 0 and arr[mid] == x
    // (ii) arr[mid-1] < x and arr[mid] == x

    if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x) return mid;
    else if (x > arr[mid]) return _binarySearch(arr, mid + 1, high, x);
    else return _binarySearch(arr, low, mid - 1, x);
  }

  return -1;
}

// This function returns true if the x is
// present more than n/2 times in arr[]
// of size n
function isMajority(arr, n, x) {
  // Find the index of first occurrence
  // of x in arr[]
  let i = _binarySearch(arr, 0, n - 1, x);

  // If element is not present at all,
  // return false
  if (i == -1) return false;

  // check if the element is present
  // more than n/2 times
  if (i + parseInt(n / 2, 10) <= n - 1 && arr[i + parseInt(n / 2, 10)] == x)
    return true;
  else return false;
}

let arr = [1, 2, 3, 3, 3, 3, 10];
let n = arr.length;
let x = 3;
if (isMajority(arr, n, x) == true)
  document.write(
    x + " appears more than " + parseInt(n / 2, 10) + " times in arr[]"
  );
else
  document.write(
    x + " does not appear more than " + parseInt(n / 2, 10) + " times in arr[]"
  );

/**Time Complexity: O(log n)
Auxiliary Space: O(1)

Algorithmic Paradigm: Divide and Conquer */
