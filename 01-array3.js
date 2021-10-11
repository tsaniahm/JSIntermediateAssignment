//NO 3 
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(array, number) {
    let newArray = [].concat(...array)
    let search = newArray.indexOf(number)

    if(search < 0){
        return null
    }else{
        return search
    }
   }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));