/**Implement the function getTopKElements(int arr[], int size, int k) which takes 3 arguments

arr[] - integer array
size  - size of the integer array
k - positive integer

In the previous module, we got the top k elements using max heap. For that algorithm the time complexity is O(N + KlogN). Here your task is to optimize the algorithm by using a min heap.

You have been provided with below 2 functions which you can make use of it in getTopKElements function.

BuildHeap(int arr[], size) - Builds a min heap with the given array.
Heapify(int arr[], int index, int size) - Heapifies the array from position index to size(min heap)
Example

input: 
 5 30 99 80 100 1
2

output: 
 100 99

input: 
 5 10 20 30 40 50
1

output: 
 50 */

function getTopKElements(arr, size, k) 
{
    BuildHeap(arr, k-1);
 	
 	for(let i=k; i<=size; i++){
 	    if(arr[i]>arr[0]){
            arr[0] = arr[i];
 	        Heapify(arr, 0, k-1);
 	    }
 	}
    for(let i=k-1; i>=0; i--){
        System.out.print(arr[i] + " ");
    }
}

void BuildHeap(arr, size) {
	let i;

	for (i = size / 2; i >= 0; i--)
		Heapify(arr, i, size);
}

void Heapify(arr, index, size) {
	
	let left = 2 * index + 1;
	let right = left + 1;

	let min = index;

	if (left <= size && arr[left] < arr[min])
		min = left;

	if (right <= size && arr[right] < arr[min])
		min = right;

    if (index != min) {
        let temp = arr[min];
        arr[min] = arr[index];
        arr[index] = temp;
        Heapify(arr, min, size);
    }
}
