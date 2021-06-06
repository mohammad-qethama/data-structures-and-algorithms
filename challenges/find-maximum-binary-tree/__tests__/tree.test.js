'use strict';
const {BinaryTree,Node} = require('../tree.js');
let tree;


describe('Binary Tree/ Binary Search Tree', () => {
  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;



    tree = new BinaryTree(one);
  });




  // root - left - right
  it('should find the maximum value',()=>{
    let result =  tree.findMaximumValue();
    expect(result).toEqual(9);
  });
  it('should throw an error',()=>{
    let newTree = new BinaryTree();
    expect(newTree.findMaximumValue).toThrow(Error);
    // expect(newTree.findMaximumValue).toThrow('tree is empty');
  });

});
