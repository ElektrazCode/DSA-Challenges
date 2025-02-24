/**An array containing distinct consecutive numbers in a specific range*/
//Use index as a reference to place/sort them.

function swap(arr, i,  j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }
 function cyclicSort(arr){
    let i=0;
    while(i<arr.length){
       let index = arr[i] - 1;
       if (arr[i] != arr[index])
          swap(arr, i, index);
       else
          i++;
    }
 }