'use strict';
const {Nodekth,KthTree,fizzBuzzTree} = require('../fizz-buzz-tree.js');
let tree2;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let ten;
let eleven;

let node21;
let n32;

let arr4;


let arr2;
let arr3;
let arrtop;

describe('Binary Tree/ Binary Search Tree', () => {
  beforeAll(() => {
    one = new Nodekth(1);
    two = new Nodekth(2);
    three = new Nodekth(3);
    four = new Nodekth(4);
    five = new Nodekth(5);
    six = new Nodekth(6);
    seven = new Nodekth(7);
    eight = new Nodekth(15);
    nine = new Nodekth(9);
    ten = new Nodekth(10);
    eleven = new Nodekth(11);

    node21 = new Nodekth(15);
    n32 = new Nodekth(7);

    arr4 = [node21,n32];
    six.children = arr4;

    arr2 = [five,six,seven];
    arr3 = [eight,nine,ten];
    two.children = arr2;
    three.children = arr3;
    four.children.push(eleven);


    arrtop = [two,three,four];

    one.children = arrtop;

    tree2 = new KthTree(one,3);

  });




  // root - left - right
  it('should initiate node',()=>{
    let node = new Nodekth(1);

    expect(node.value).toEqual(1);
    expect(node.children.length).toEqual(0);

  });
  it('should read the children of node' ,()=>{
    expect(one.children.length).toEqual(3);
    expect(one.children[0].value).toEqual(2);
  });
  it('should initiate tree',()=>{
    let tree3 = new KthTree();

    expect(tree3.root).toEqual(null);
    expect(tree3.order).toEqual(null);

  });

  it('should to return a tree modified by the function',()=>{
    let newTree= fizzBuzzTree(tree2);
    expect(newTree.root).toBeTruthy();
    expect(newTree.order).toEqual(3);
    expect(newTree.root.value).toEqual('1');
    expect(newTree.root.children[1].value).toEqual('fizz');
    expect(newTree.root.children[0].children[0].value).toEqual('buzz');
    expect(newTree.root.children[0].children[1].children[0].value).toEqual('fizzbuzz');




  });


  it('should throw an error',()=>{
    let newTree = new KthTree();
    const t = ()=>{
      fizzBuzzTree(newTree);
    };

    expect(t).toThrow(Error);
    // expect(newTree.findMaximumValue).toThrow('tree is empty');
  });

});
