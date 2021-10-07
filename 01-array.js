//NO 1
// const arr = [1, 2, 3];
// const arr2 = [8, 1, 5, 7];

// function reverse(array) {
//     return array.reverse()
// }

// const newArr = reverse(arr);
// const newArr2 = reverse(arr2);

// console.log(arr, newArr);
// console.log(arr2, newArr2);

//NO 2 DONE
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage( array) {
//     let total = 0;
//     let total2 = 0;
    
//     for(let i =0 ; i < array.length ;i++){
//         total = total + array[i]
//     }

//     let avg = total / array.length;

//     for(let i =0 ; i < array.length ;i++){
//         if(array[i] > avg){
//             total2 = total2 + 1
//         }
//     }
//     return total2
// }

// console.log(getAverage(arr1))
// console.log(getAverage(arr2))

//NO 3 HOW TO MAKE 2 DIMENSION INDEX BECOME SINGLE ARRAY INDEX
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(array, number) {

    for(let i=0; i < array.length; i++ ){
        for(let j=0; j < array.length; j++ ){
            if(number == array[i][j]){
                return i
            }
        }
    }
   }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));