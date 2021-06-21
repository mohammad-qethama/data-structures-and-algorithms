'use strict';
function mergeSort(arr){
  let n = arr.length;
  // console.log(arr);
  if (n > 1){
    let left = [];
    let right = [];
    let mid = Math.floor(n/2);

    for (let i = 0; i < mid ; i++){
      left.push(arr[i]);
    }
    for (let i = mid ; i < n ; i++){
      right.push(arr[i]);
    }
    mergeSort(left);
    mergeSort(right);
    merge(left,right,arr);

  }
}


function merge(left,right,arr){
  let i=0;
  let j=0;
  let k=0;

  while(i < left.length && j < right.length){
    if(left[i]<=right[j]){
      arr[k]= left[i];
      i = i+1;

    }else{
      arr[k]=right[j];
      j =j+1;
    }
    k = k+1;
  }
  if (i === left.length){
    while(j < right.length ){
      arr[k] = right[j];
      k = k+1;
      j = j+1;
      // console.log(k);
    }

  }else{
    while(i < left.length ){
      arr[k] = left[i];
      k = k+1;
      i = i+1;

    }

  }
}

module.exports = {
  merge:merge,
  mergeSort:mergeSort
};
