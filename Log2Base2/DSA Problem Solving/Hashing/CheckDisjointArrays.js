/**You will be given two arrays arr1 and arr2. Your task is to check whether these two arrays are disjoint. 

Implement the function int checkForDisjointArrays(int arr1[], int size1, int arr2[], int size2) which takes 4 arguments. 
arr1   -  first array
size1 -  size of first array
arr2   -  second array
size2 -  size of second array

Return 1 if arr1 and arr2 are disjoint. and return 0 if it is not.
Example

input: 
 5 10 14 15 18 50
3 30 60 90

output: 
 1

input: 
 4 19 56 50 100
4 100 200 300 400

output: 
 0 */

 // hash table - int arr[13]
//
// hash table functions
// insert function - int insert(int value)
// returns 1 if the value is succesfully inserted into the hash table
// returns 0 if the value is not inserted, when the hash table is full
//
// search function - int search(int value)
// returns 1 if the value is present in the hash table
// returns 0 if the value is not present in the hash table
let size = 13;
let hash = new Array(size).fill(-1);

// void init(){
//     int i;
//     for(int i=0; i<size;i++)
//         arr[i]=-1;
// }

function insert(value){
    let key = value % size;
    let index = key;

    while(hash[index] !== -1){
        index = (index +1) % size;
        if (index === key){
            //table full
            return 0;
        }
    }
    hash[index] = value;
    return 1;
}

function search(value){
    let key = value % size;
    let index = key;

    while(hash[index] !== value){
        index = (index+1) % size;
        if(index == key)
            return 0;
    }
    return 1;
}

function checkForDisjointArrays(size1, arr1[], size2, arr2[])
{
  
  for (let i=0; i<size1; i++){
      insert(arr1[i]);
  }
  
  for (let j=0; j<size2; j++){
      if (search(arr2[j])==1)
        return 0;
  }
  return 1;
}
