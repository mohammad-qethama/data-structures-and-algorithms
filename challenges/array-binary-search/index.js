'use strict';
function insertShiftArray (arr,num){
  let indexToMiddle = arr.length/2;
  let newArr = [];
  for (let i = 0; i < indexToMiddle;i++){
    newArr.push(arr[i]);
  }
  newArr.push(num);

  for (let i = newArr.length-1;i< arr.length;i++){
    newArr.push(arr[i]);
  }
  return newArr;
}
