const {LinkedList} = require('../Data-Structure/linkedList/linked-list.js');


class HashTable{

  constructor(size){
    this.size = size;
    console.log(size);
    this.table = [];
  }

  hash(key){
    let hash;
    hash = key.split('').reduce((result,n) =>{
      return result + n.charCodeAt(0);
    }, 0) * 399 % this.size;
    return hash;
  }


  add(key,value){
    let hash;


    hash = this.hash(key);
    if(!(this.table[hash])){
      this.table[hash]= new LinkedList ;

    }
    let ketValuePair ={[key]:value};
    console.log(hash,key);
    this.table[hash].insert(ketValuePair);

  }

  get(key){
    let hash =this.hash(key);
    if(!(this.table[hash])){
      return null;
    }else{
      let lastNode = this.table[hash].head;
      while((lastNode)){
        console.log(lastNode.value);
        if(Object.prototype.hasOwnProperty.call(lastNode.value, key)) {
          return lastNode.value[key] ;}

        lastNode = lastNode.next;
      }
      return null;
    }
  }
  contains(key){
    let result = this.get(key);
    let bool = (result) ? true:false;
    return bool;

  }

}

module.exports = HashTable;
