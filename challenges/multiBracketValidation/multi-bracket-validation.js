'use strict';
const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack;

let stack = new Stack();

function multiBracketValidation(input) {
  let charTemp;
  if (typeof input !== 'string') return 'input string please!!';

  let strArr = [...input];

  for(let i=0 ; i<strArr.length ; i++ ){
    if (strArr[i] === '[' || strArr[i] ==='(' || strArr[i] === '{' ){
      stack.push(strArr[i]);
    }

    if(strArr[i] === '}' || strArr[i] === ')' || strArr[i] === ']' ){
      console.log (strArr[i]);
      if(stack.isEmpty()) {
        console.log('hi');
        return false;}
      console.log (strArr[i]);

      if (strArr[i] === ')')
      {
        charTemp = '(';
      }
      if (strArr[i] === '}'){
        charTemp = '{';
      }
      if (strArr[i] === ']'){
        charTemp = '[';
      }

      if (charTemp === stack.peek())
      {
        stack.pop();
      }else{
        return false;
      }

    }
  }

  return stack.isEmpty();



}

module.exports = multiBracketValidation;
