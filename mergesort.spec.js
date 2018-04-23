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
    expect(merge([3,6],[9])).toEqual([3,6,9]);
  });
});

