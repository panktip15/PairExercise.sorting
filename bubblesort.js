
function swap (elem1,elem2){
  return [elem1,elem2] = [elem2,elem1];
}



function bubbleSort (arr){
  if (arr.length === 0){
    return arr;
  } else {
    for (let i = 0 ; i < arr.length - 1; i++){
      for (let j = 0; j < arr.length - 1 - i; j++){
        if (arr[j] > arr[j + 1]){
          let swapped = swap(arr[j], arr[j + 1]);
          arr[j] = swapped[0];
          arr[j+1] = swapped[1];
        }
      }
    }
    return arr;
  }
}


