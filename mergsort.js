
function split(wholeArray) {
  let middle = Math.round(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle)

  return [firstHalf, secondHalf];
}

function merge(firstHalf,secondHalf){
  let headB = 0;
  let headA = 0;
  let sortedArr = [];
  while(headA < firstHalf.length && headB < secondHalf.length){
   if(firstHalf[headA] < secondHalf[headB]){
      sortedArr.push(firstHalf[headA]);
      headA++;
    } else {
      sortedArr.push(secondHalf[headB]);
      headB++;
    }
  }

  for(;headA<firstHalf.length; headA++){sortedArr.push(firstHalf[headA])};
  for(;headB<secondHalf.length; headB++){sortedArr.push(secondHalf[headB])};


  return sortedArr;
}


function mergeSort(array){
  if(array.length === 1){
    return array;
  }
  let splittedArr = split(array);
  let firstHalf = splittedArr[0];
  let secondHalf = splittedArr[1];
  return merge(mergeSort(firstHalf),mergeSort(secondHalf));

}

mergeSort([3,6,9,2,1,4]);
