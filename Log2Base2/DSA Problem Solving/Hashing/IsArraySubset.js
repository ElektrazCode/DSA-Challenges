/** Example

input: 
 5 10 14 15 18 50
3 30 60 90

output: 
 0

input: 
 4 19 56 50 100
2 100 50

output: 
 1*/
function checkforSubArray(size1, arr1, size2, arr2)
{
    let hash = new Array[](size1);
    
    for (let i=0; i<size1; i++){
        hash[i] = -1;
    }
    
    for (let i=0; i<size1; i++){
        let index = arr1[i] % size1;
        
        while(hash[index]!= -1){
            index = (index + 1) % size1;
        }
        hash[index] = arr1[i];
    }
    for(let i=0; i<size2; i++){
        let index = arr2[i] % size1;
        
        if(hash[index] == arr2[i])
            return 1;
        else{
            let start = index + 1;
            
            while(start!=index && hash[index]!= -1 && hash[index]!=arr2[i]){
               index = (index + 1) % size1;
            }
            if(start != index)
                return 1;
        }
    }
    return 0;
    
}
