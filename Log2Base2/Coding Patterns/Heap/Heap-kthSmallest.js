function kthSmallestNumber(arr, size, k)
{
    BuildHeap(arr, k-1);
    for(let i=k; i<=size; i++){
        if(arr[i]<arr[0]){
            arr[0]=arr[i];
            Heapify(arr, 0, k-1);
        }
    }
    return arr[0];
}

function BuildHeap(arr, size) {
	let i;

	for (i = size / 2; i >= 0; i--)
		Heapify(arr, i, size);
}

function Heapify(arr, index, size) {
	
	let left = 2 * index + 1;
	let right = left + 1;

	let max = index;

	if (left <= size && arr[left] > arr[max])
		max = left;

	if (right <= size && arr[right] > arr[max])
		max = right;

	if (index != max) {
	    let temp = arr[max];
        arr[max] = arr[index];
        arr[index] = temp;
        Heapify(arr, max, size);
	}
}

