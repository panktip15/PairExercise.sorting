describe('Bubble Sort', function () {

  it('handles an empty array', function() {
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('does not mutate the array', function() {
    const arr = [8, 4, 3, 6, 5, 1];
    const newArr = bubbleSort(arr);
    expect(newArr).toEqual(arr);
  });

  it('sorts two numbers inside the array', function() {
    const arr = [4, 1];
    expect( bubbleSort(arr) ).toEqual([1, 4]);
  });

  it('sorts multiple numbers inside the array', function() {
    const arr = [8, 4, 3, 6, 5, 1];
    expect( bubbleSort(arr) ).toEqual([1, 3, 4, 5, 6, 8]);
  });

  it('should count how many iterations occur', function(){
    const arr = [4,1,3];
    spyOn(window, 'swap').and.callThrough();
    bubbleSort(arr);
    expect(swap.calls.count()).toEqual(2);
  });

});


