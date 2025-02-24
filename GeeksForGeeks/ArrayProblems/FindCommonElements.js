//Given three Sorted arrays in non-decreasing order, print all common elements in these arrays.
/**Solution1: Common elements in three sorted arrays using two pointer:
A simple solution is to first find the intersection of two arrays and store the intersection in a temporary array, then find the intersection of the third array and temporary array. 

Initialize both pointers i and j to 0, and an empty list common.
While both pointers i and j are within the bounds of the two arrays:
If arr1[i] is less than arr2[j], increment i by 1.
If arr2[j] is less than arr1[i], increment j by 1.
If arr1[i] is equal to arr2[j]:
Add arr1[i] to the common list.
Increment both i and j by 1.
Return the common list containing the common elements of the two arrays. */

// Function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  const temp = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      temp.push(arr1[i]);
      i++;
      j++;
    }
  }

  return temp;
}

function main() {
  const arr1 = [1, 5, 10, 20, 40, 80];
  const arr2 = [6, 7, 20, 80, 100];
  const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

  // Find the intersection of arr1 and arr2
  const temp = findIntersection(arr1, arr2);

  // Find the intersection of temp and arr3 to get common elements
  const ans = findIntersection(temp, arr3);

  console.log("Common elements present in arrays are:");
  for (const element of ans) {
    console.log(element);
  }
}

// Call the main function to start the program
main();

//Time complexity: O(n1 + n2 + n3), where n1, n2 and n3 are sizes of ar1[], ar2[] and ar3[] respectively.
//Auxiliary Space: O(max(n1,n2,n3))

/**Solution2: Common elements in three sorted arrays using three pointer:
It is known that the arrays are sorted in a non-decreasing order. When a common integer has been found, we want to move forward in each array in search of another common integer. Otherwise, the smaller integer among the three must not be common.

The reason for this is that at least one of the other integers is a larger integer, and as we move forward in the array, we only encounter larger integers. In this case, we want to proceed with only the array that contains the smaller integer.

Create and initialize three variables i, j, and k with 0, it will point to the indices of the arrays.
Repeat the following steps until we reach the end of any one of the arrays:
Check whether the integers appointed by i, j, and k are equal or not.
If they are equal, print any of the integers and increase i, j, and k by 1.
Otherwise, increase the index that points to the smaller integer by 1. */

// JavaScript program to print
// common elements in three arrays

// This function prints common elements in ar1
function findCommon(ar1, ar2, ar3, n1, n2, n3) {
  // Initialize starting indexes
  // for ar1[], ar2[] and ar3[]
  var i = 0,
    j = 0,
    k = 0;

  // Iterate through three arrays
  // while all arrays have elements
  while (i < n1 && j < n2 && k < n3) {
    // If x = y and y = z, print any of them and move ahead
    // in all arrays
    if (ar1[i] == ar2[j] && ar2[j] == ar3[k]) {
      document.write(ar1[i] + " ");
      i++;
      j++;
      k++;
    }

    // x < y
    else if (ar1[i] < ar2[j]) i++;
    // y < z
    else if (ar2[j] < ar3[k]) j++;
    // We reach here when x > y and z < y, i.e., z is smallest
    else k++;
  }
}

// Driver code
var ar1 = [1, 5, 10, 20, 40, 80];
var ar2 = [6, 7, 20, 80, 100];
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
var n1 = ar1.length;
var n2 = ar2.length;
var n3 = ar3.length;

document.write("Common Elements are ");
findCommon(ar1, ar2, ar3, n1, n2, n3);

// This code is contributed by rdtank.
//Time complexity: O(n1 + n2 + n3), In the worst case, the largest-sized array may have all small elements and the middle-sized array has all middle elements.
//Auxiliary Space:  O(1)
