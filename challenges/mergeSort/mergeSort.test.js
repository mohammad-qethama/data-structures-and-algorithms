const {merge,mergeSort}= require('./mergeSort.js');
describe('Testing insertion Sort algorith ',() =>{
  it('should return the array of integers sorted',()=>{
    let array = [8,4,23,42,16,1];
    mergeSort(array);
    expect(array).toEqual([1,4,8,16,23,42]);
  });

  it('should return the array of mixed types sorted',()=>{
    let array = [8,4.6,'23',42,'16','1.5'];
    mergeSort(array);
    expect(array).toEqual(['1.5', 4.6, 8, '16', '23', 42]);
  });

  it('should return the empty array',()=>{
    let array = [];
    mergeSort(array);
    expect(array).toEqual([]);
  });
  it('should return the array of elements sorted alphabetically',()=>{
    let array = ['e','b','c','a','zebra','ss'];
    mergeSort(array);
    expect(array).toEqual(['a', 'b', 'c', 'e', 'ss', 'zebra' ]);
  });



});
