const HashTable = require('../hashTables/hashTables.js');

function repeatedWord (str){
  if (!(typeof str === 'string')) return 'InvalidInput!!:please enter a string';
  str = str.toLowerCase();
  let arr = str.split(/[ ,]+/);
  let myhash = new HashTable(arr.length);
  let x;

  for (let i of arr){
    // console.log(i)
    x = myhash.get(i);
    if (x){
      break;
    }
    myhash.add(i, i);

    //  console.log('asd',x)

  }
  return x;
}

module.exports = repeatedWord;
