function binarySearch(arr,key){
  let maxIndex = arr.length -1;
  let minIndex = 0;

  //  return Math.floor((maxIndex-minIndex)/2);

  if(key === arr[maxIndex]){
    return maxIndex;
  }
  if(key === arr[minIndex]){
    return minIndex ;
  }

  while (maxIndex > minIndex){
    console.log([Math.floor((maxIndex+minIndex)/2)]);

    if(key === arr[Math.floor((maxIndex+minIndex)/2)]){
      return Math.floor((maxIndex+minIndex)/2);


    }
    if( arr[Math.floor((maxIndex+minIndex)/2)] > key){
      maxIndex = Math.floor((maxIndex+minIndex)/2);
      console.log('min');

    }

    if( arr[Math.floor((maxIndex+minIndex)/2)] < key){
      minIndex = Math.floor((maxIndex+minIndex)/2)+1;

    }


  }

  return -1 ;
}
