describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([3,6,9,2,1,4])).toEqual([[3,6,9],[2,1,4]])
  });
  it('is able to split odd length array', function() {
    expect(split([3,6,9])).toEqual([[3,6],[9]])
  });

});


describe('Merge function', function(){

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([9],[6])).toEqual([6,9]);
    expect(merge([3,9],[6,10])).toEqual([3,6,9,10]);
    expect(merge([2,3,6],[4,9,10])).toEqual([2,3,4,6,9,10]);
  });
});


describe('MergeSort function', function(){

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(mergeSort([9,6])).toEqual([6,9]);
    expect(mergeSort([3,9,6,10])).toEqual([3,6,9,10]);
    expect(mergeSort([2,3,6,4,9,10])).toEqual([2,3,4,6,9,10]);
  });
});
