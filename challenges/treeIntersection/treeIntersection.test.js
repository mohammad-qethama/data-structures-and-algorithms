const HashTable = require('../hashTables/hashTables.js');
const {BinaryTree,Node} = require('../tree/tree.js');
const treeIntersection = require('./treeIntersection.js');
let tree ;
let tree2;
let mytable;

describe('testing the treeIntersection ',()=>{
  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(16);
    let nine = new Node(9);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    let one2 = new Node(1);// tree root
    let two2 = new Node(33);
    let three2 = new Node(22);
    let four2 = new Node(13);
    let five2 = new Node(123);
    let six2 = new Node(33);
    let seven2 = new Node(44);
    let eight2 = new Node(12);
    let nine2 = new Node(9);

    one2.left = two2;//
    one2.right = three2;//
    two2.left = six2;//
    six2.right = seven2;
    seven2.left = eight2;
    seven2.right = nine2;
    three2.left = four2;
    three2.right = five2;

    tree = new BinaryTree(one);
    tree2 = new BinaryTree(one2);
    mytable = new HashTable(30);
  });

  it('should return the similarities as an array  ', () => {
    let arr = treeIntersection(tree,tree2,mytable);
    expect(arr).toEqual([9,1]);
  });
  it('should return an error message', () => {
    let arr = treeIntersection(333,tree2,mytable);
    expect(arr).toEqual('Error : InputERROR : empty or INVALID BinaryTree');

  });
});
