function leftJoin (table1,table2){
  let keys =[];
  let arr =[];
  let arrOfArr= [];
  if (table1.table){
    arr = table1.table;
  }else{
    return 'invalid synenom-HashTable';}

  for (let i in arr){
    if(arr[i]){
      let x = arr[i].head;

      while (x){
        keys.push(Object.keys(x.value)[0]);
        x=x.next;
      }

    }
  }
  // console.log(keys)
  for (let i of keys){
    let tempVal =table2.get(i);
    let temp = [];
    if(tempVal){
      temp.push(i);
      temp.push(table1.get(i));
      temp.push(tempVal);
    }else{
      temp.push(i);
      temp.push(table1.get(i));
      temp.push(tempVal);
    }
    arrOfArr.push(temp);
  }

  // console.log(arrOfArr)
  return arrOfArr;

}

module.exports = leftJoin ;
