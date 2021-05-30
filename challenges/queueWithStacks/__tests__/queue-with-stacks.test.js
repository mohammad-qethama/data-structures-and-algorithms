'use strict';
const PseudoQueue = require('../queue-with-stacks.js');
let queue = new PseudoQueue();
// this.StackOne = new Stack();
//     this.Stacktwo = new Stack();

it('Can successfully enqueue into a queue',()=>{
  queue.enqueue(5);
  expect(queue.StackOne.isEmpty()).toBeFalsy();
  expect(queue.StackOne.peek()).toEqual(5);
});
it('Can successfully enqueue multiple values into a queue',()=>{
  queue.enqueue(4);
  queue.enqueue(3);
  queue.enqueue(2);
  expect(queue.StackOne.isEmpty()).toBeFalsy();

});
it('Can successfully dequeue out of a queue the expected value',()=>{
  let value = queue.dequeue();
  expect(value).toEqual(5);
  expect(queue.Stacktwo.peek()).toEqual(4);

});
it('Can successfully empty a queue after multiple dequeues',() =>{
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  expect(queue.Stacktwo.isEmpty()).toBeTruthy();
} );

it('Can alternate between enqueueing and dequeuing',() =>{
  let queue2 = new PseudoQueue();
  queue2.enqueue(4);
  queue2.enqueue(3);
  let value = queue2.dequeue();
  queue2.enqueue(2);
  let value2 = queue2.dequeue();
  expect(value).toEqual(4);
  expect(value2).toEqual(3);


} );
