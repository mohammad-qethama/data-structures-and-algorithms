'use strict';
class Node {
  constructor(value){
    this.value = value;
    this.next= null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;

  }
  insert(value){
    // create new Node
    // assure new Node. next is pointing correctly(tow cases)
    // make new Node the new head

    if (!this.head){
      let node = new Node(value);
      this.head = node;


    }else{
      let node = new Node(value);
      node.next = this.head;
      this.head = node;


    }

  }
  includes(value)
  {
    //loop over the list
    // if statement to find val
    // return true if exist ,else false
    let lastNode = this.head;

    while( lastNode.next ){ // loop over the values starting from head stop at next === null or if value founded
      if(lastNode.value === value){
        return true;
      }
      lastNode = lastNode.next;

    }
    return false;

  }
  toString(){
    let lastNode = this.head;

    let LinkedListString = `{ ${lastNode.value} }`;

    // "{ a } -> { b } -> { c } -> NULL" return this string
    while(lastNode.next){
      lastNode = lastNode.next;
      LinkedListString = LinkedListString + ` -> { ${lastNode.value} }`;


    }
    LinkedListString = LinkedListString + ' -> NULL';
    return LinkedListString;
  }



}
module.exports = {
  Node:Node,
  LinkedList:LinkedList
};

