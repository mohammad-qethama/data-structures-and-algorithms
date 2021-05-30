'use strict';
const {Stack} = require('../stacksAndQueues/stacks-and-queues.js');
class PseudoQueue{
  constructor(){
    this.StackOne = new Stack();
    this.Stacktwo = new Stack();

  }

  enqueue(val){

    this.StackOne.push(val);
  }

  dequeue(){
    if(this.Stacktwo.isEmpty()){

      while(!this.StackOne.isEmpty()){
        let val = this.StackOne.peek();
        this.Stacktwo.push(val);
        this.StackOne.pop();

      }
    }
    let temp = this.Stacktwo.peek();
    this.Stacktwo.pop();

    return temp;


  }

}

module.exports = PseudoQueue;
