//NO 1 
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(array) {
    let result = new Array;
    for(let i = array.length-1; i >= 0; i--) {
        result.push(array[i])
    }
    return result;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);
