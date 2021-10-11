//NO 1 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(array) { 
  return (array.length === 0) ? 0 : array[0] + sumOfArray(array.slice(1));
 }

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));






