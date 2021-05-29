'use strict';
const {Stack} = require('../stacks-and-queues.js');
const {Queue} = require('../stacks-and-queues.js');

describe('Testing Queues and Stacks',()=>{
  let stack = new Stack();
  let queue = new Queue();

  it('Can successfully push onto a stack',()=>{
    stack.push(5);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toEqual(5);
  });

  it('Can successfully push multiple values onto a stack',()=>{
    stack.push(4);
    stack.push(3);
    stack.push(2);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toEqual(2);

  });

  it('Can successfully pop off the stack',() =>{
    let value = stack.pop();
    expect(value).toEqual(2);
    expect(stack.peek()).toEqual(3);
  } );
  it('Can successfully empty a stack after multiple pops',() =>{
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
    expect(stack.isEmpty()).toBeTruthy();
  } );

  it('Can successfully instantiate an empty stack',() =>{
    let stack2 = new Stack();
    expect(stack2.top).toEqual(null);

  } );

  it('Calling pop or peek on empty stack raises exception',() =>{
    let stack2 = new Stack();
    expect(stack2.pop()).toBe('cant pop from  an empty stack!!');
    expect (stack2.peek()).toBe('cant peek at an empty stack!!');

  } );

  it('Can successfully enqueue into a queue',()=>{
    queue.enqueue(5);
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.peek()).toEqual(5);
  });
  it('Can successfully enqueue multiple values into a queue',()=>{
    queue.enqueue(4);
    queue.enqueue(3);
    queue.enqueue(2);


    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.peek()).toEqual(5);
    expect(queue.front.next.value).toEqual(4);
  });
  it('Can successfully dequeue out of a queue the expected value',()=>{
    let value = queue.dequeue();
    expect(value).toEqual(5);
    expect(queue.peek()).toEqual(4);
    expect(queue.front.next.value).toEqual(3);

  });
  it('Can successfully empty a queue after multiple dequeues',() =>{
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
    expect(queue.isEmpty()).toBeTruthy();
  } );
  it('Can successfully instantiate an empty queue',()=>{
    let queue2 = new Queue();
    expect(queue2.front).toEqual(null);

    expect(queue2.isEmpty()).toBeTruthy();


  });
  it('Calling dequeue or peek on empty queue raises exception',() =>{
    let queue2 = new Queue();
    expect(queue2.dequeue()).toBe('error:queue is empty');
    expect (queue2.peek()).toBe('cant peek at an empty queue!!');

  } );
  // Calling dequeue or peek on empty queue raises exception


});
