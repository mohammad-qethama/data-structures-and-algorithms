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

  append(value){

    let lastNode = this.head;

    while( lastNode.next ){ // loop over the values starting from head stop at next === null or if value founded

      lastNode = lastNode.next;

    }

    let node = new Node(value);
    lastNode.next = node;
    return lastNode;


  }
  insertBefore(value, newVal){
    let lastNode = this.head;
    if (lastNode.value === value){
      this.insert(newVal);
      return;

    }

    while( lastNode.next ){


      if(lastNode.next.value === value){
        let node = new Node(newVal);
        node.next = lastNode.next;
        lastNode.next = node;
        break;

      }
      lastNode = lastNode.next;

    }

  }

  insertAfter(value, newVal){
    let lastNode = this.head;

    while( lastNode.next ){


      if(lastNode.value === value){
        let node = new Node(newVal);
        node.next = lastNode.next;
        lastNode.next = node;
        return;

      }
      lastNode = lastNode.next;

    }

    this.append(newVal);


  }





  kthFromEnd(k){
    let n = 1;

    let lastNode = this.head;

    while( lastNode.next ){
      n = n +1 ;


      lastNode = lastNode.next;
    }

    if (k === 0){
      return lastNode.value;

    }


    let counter  = 1;

    lastNode = this.head;

    while( lastNode.next ){
      if (n-k === counter){



        return lastNode.value;
      }

      counter= counter+1;

      lastNode = lastNode.next;
    }

    return 'Exception';
  }



}





module.exports = {
  Node:Node,
  LinkedList:LinkedList
};

