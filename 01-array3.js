//NO 3 DONE TAPI YG GA ADA BUKANNYA NULL MALAH UNDEFINED
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(array, number) {
    let newArr = []
    for(let i = 0; i < array.length; i++)
    {
        newArr = newArr.concat(array[i]);
    }

    for(let i=0; i<newArr.length; i++){
        if(newArr[i] == number){
            let result = i
            if(result === undefined) return null
            else return i 
        }
    }
   }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));