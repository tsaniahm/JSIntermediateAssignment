//NO 1 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(array) { 
  return (array.length === 0) ? 0 : array[0] + sumOfArray(array.slice(1));
 }

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//NO 2 
const avg1 = sumOfArray(arr1)/arr1.length
const avg2 = sumOfArray(arr2)/arr2.length
function countAboveAvg( array, avg) {
    let count = 0;
    if(array.length === 0){
        return 0
    }
    if(array[0] >= avg){
        count = 1
    }
    return count + countAboveAvg(array.slice(1), avg)
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

//NO 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    if (arr[arr.length - 1] === num) {
        return "Angka ditemukan pada index: "+(arr.length - 1);
    }
    if (arr.length === 1) {
        return "Angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

//NO 4 
function trianglePattern(num1, num2) {
    if (num1 === 0) {
        return "";
    }
    let space = "";
    for (let i = 0; i < num2; i++) {
        if (i < num1 - 1) {
            space = space +  " "
        } else {
            space += String.fromCharCode(64 + (num2 - num1 + (i - num1) + 2));
        }
    }
    console.log(space);
    trianglePattern(num1 - 1, num2);
}

trianglePattern(5, 5);





