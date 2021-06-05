'use strict';
const {BinarySearchTree,BinaryTree,Node} = require('../tree.js');
let tree;
let treew;
let bT;


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

    treew = new BinarySearchTree();
    treew.add(4);
    treew.add(3);
    treew.add(6);
    treew.add(8);
    treew.add(5);
    treew.add(2);

    bT = new BinaryTree(treew.root);



    tree = new BinaryTree(one);
  });

  it('should instate empty tree;' ,()=>{
    let tree2 = new BinaryTree();
    expect(tree2.root).toEqual(null);
  });

  it('should add single node to left and right' ,()=>{
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let tree2 = new BinaryTree(one);
    expect(tree2.root.value).toEqual(1);
    tree2.root.left = two;
    expect(tree2.root.left.value).toEqual(2);
    tree2.root.right = three;
    expect(tree2.root.right.value).toEqual(3);


  });
  // root - left - right
  it('should traverse tree using pre-order', () => {
    // arrange
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let expectedBST  = [ 4, 6, 8, 5, 3, 2 ];

    // act
    let preOrderResult = tree.preOrder();
    let result = bT.preOrder();

    // assert
    expect(preOrderResult).toEqual(expected);
    expect(result).toEqual(expectedBST);

  });

  // left - root -right
  it('should traverse tree using in-order', () => {
    // arrange
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let expectedBST  = [8,6,5,4,3,2];
    // act
    let inOrderResult = tree.inOrder();
    let result = bT.inOrder();
    // let result =
    // assert
    expect(inOrderResult).toEqual(expected);
    expect(result).toEqual(expectedBST);

  });

  // left - right - root
  it('should traverse tree using post-order', () => {
    // arrange
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let expectedBST  =[ 8, 5, 6, 2, 3, 4 ];
    // act
    let postOrderResult = tree.postOrder();
    let result = bT.postOrder();

    // assert
    expect(postOrderResult).toEqual(expected);
    expect(result).toEqual(expectedBST);

  });

  it('should return T/F based on value', () => {
    // arrange
    let expectedTrue = treew.contains(5);
    let expectedFalse  =treew.contains(99);
    // act


    // assert
    expect(expectedTrue).toEqual(true);
    expect(expectedFalse).toEqual(false);

  });


});
