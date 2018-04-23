
function split(wholeArray) {
  let middle = Math.round(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle)

  return [firstHalf, secondHalf];
}

function merge(firstHalf,secondHalf){
  if(firstHalf > secondHalf){

  }
  return firstHalf.concat(secondHalf);
}


function mergeSort(array){
  if(array.length === 1){
    return array;
  }
  let splittedArr = spilt(array);
  let firstHalf = splittedArr[0];
  let secondHalf = splittedArr[1];
  return merge(mergeSort(firstHalf),mergeSort(secondHalf));

}

mergeSort([3,6,9,2,1,4]);
