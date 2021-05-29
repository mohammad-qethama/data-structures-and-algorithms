'use strict';
const {Node} = require('../Data-Structure/linkedList/linked-list.js');

class Stack{
  constructor(){
    this.top= null;
  }
  push(val){
    let node = new Node(val);

    if (!(this.top)){
      this.top = node;
    }else{
      node.next = this.top;
      this.top = node;
    }

  }
  pop(){

    if (!(this.top)){
      return 'cant pop from  an empty stack!!';
    }else{
      let popedValue = this.top.value;
      this.top = this.top.next;
      return popedValue;
    }
  }
  peek(){
    if (!(this.top)){
      return 'cant peek at an empty stack!!';

    }else{
      return this.top.value;
    }
  }
  isEmpty(){
    return !(this.top);

  }
}

class Queue{
  constructor(){
    this.front= null;
  }
  enqueue(val){
    let node = new Node(val);
    if(!this.front){this.front= node; }
    else{
      let lastNode = this.front;
      while( lastNode.next ){
        lastNode = lastNode.next;

      }
      lastNode.next = node;
    }

  }
  dequeue(){
    if(!this.front){return 'error:queue is empty'; }
    let dequeuedValue = this.front.value;
    this.front = this.front.next;
    return dequeuedValue;

  }
  peek(){
    if (!(this.front)){
      return 'cant peek at an empty queue!!';

    }else{
      return this.front.value;
    }
  }
  isEmpty(){
    return !(this.front);

  }


}

module.exports={
  Queue:Queue,
  Stack:Stack,
};
