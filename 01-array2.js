//NO 2 
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage( array) {
    let total = 0;
    let count = 0;
    
    for(let i =0 ; i < array.length ;i++){
        total = total + array[i]
    }

    let avg = total / array.length;

    for(let i =0 ; i < array.length ;i++){
        if(array[i] > avg){
            count = count + 1
        }
    }
    return count
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))