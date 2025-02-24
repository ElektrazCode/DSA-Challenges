/**Implement the function getTopKElements(int arr[], int size, int k) which takes 3 arguments

arr[] - integer array
size  - size of the integer array
k - positive integer

Here you will be given an integer array. Your task is to get the top k elements of the array using max heap. 

You have been provided with below 2 functions which you can make use of it in getTopKElements function.

BuildHeap(int arr[], size) - Builds a max heap with the given array.
Heapify(int arr[], int index, int size) - Heapifies the array from position index to size(max heap)
Example

input: 
 5 30 99 80 100 1
2

output: 
 100 99

input: 
 4 100 1000 1 10
3

output: 
 1000 100 10 */

function getTopKElements(arr, size, k)
{   
    let n = size;
    let i=0;
    
    buildHeap(arr, size);
    
    while(i++<k){

        swap(arr, 0, n-1);
        heapify(arr, --n, 0);
    }
    for(i=size-1; i>size-k-1; i--){
         System.out.println(arr[i] + " ");
    }
}

function buildHeap(arr, n)
{
    let startIdx = (n / 2) - 1;

    for (let i = startIdx; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i)
{
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        swap(arr, i, largest);

        heapify(arr, n, largest);
    }
}
function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
