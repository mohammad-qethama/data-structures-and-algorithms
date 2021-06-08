'use strict';

class Nodekth{
  constructor(num = null){
    this.value=num;
    this.children = [];
  }
}

class KthTree{
  constructor(node = null, k = null){
    this.root = node;
    this.order= k;

  }
}


function fizzBuzzTree(tree){
  if(!tree.root) throw new Error('Invalid Input: Empty Tree');

  let arr=[];
  function testValue(value){
    let score;
    if(!(value%3) ||!(value%5) ){
      if(!(value%3) ) score = 'fizz';
      if(!(value%5)) score = 'buzz';

      if(!(value%3) && !(value%5) ) score = 'fizzbuzz';


    }else {score= value.toString();}
    return score;
  }
  let result = testValue(tree.root.value);
  arr.push(result);
  let top = new Nodekth();
  top = tree.root;
  top.value = result;
  // console.log(top)

  // let currentNode = tree.root;
  function traverse(inNode){
    if(inNode){
      inNode.forEach(child =>{
        let result =testValue(child.value);
        arr.push(result);
        if(child.children.length>0) {

          traverse(child.children);
        }
        child.value = result;

      });}
  }
  traverse(top.children);
  return new KthTree(top,tree.order);

}

module.exports={
  Nodekth:Nodekth,
  KthTree:KthTree,
  fizzBuzzTree:fizzBuzzTree
};
