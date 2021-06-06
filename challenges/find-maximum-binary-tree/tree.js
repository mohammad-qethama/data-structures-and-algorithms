class Node{
  constructor(value){
    this.value= value ;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree{
  constructor(root=null){
    this.root =root;
  }

  preOrder(){
    let values=[];

    function travirsal(node){
      values.push(node.value);
      if (node.left) travirsal(node.left);
      if (node.right) travirsal(node.right);

    }
    travirsal(this.root);
    return values;



  }

  inOrder(){
    let values=[];
    function travirsal(node){
      if (node.left) travirsal(node.left);
      values.push(node.value);
      if (node.right) travirsal(node.right);

    }
    travirsal(this.root);
    return values;

  }

  postOrder(){
    let values=[];
    function travirsal(node){
      if (node.left) travirsal(node.left);

      if (node.right) travirsal(node.right);
      values.push(node.value);

    }
    travirsal(this.root);
    return values;
  }
  findMaximumValue(){


    if(!this.root) throw new Error('tree is empty');
    let maxTemp= this.root.value;
    function findMax(nodeReviewd){
      if (nodeReviewd.left) findMax(nodeReviewd.left);
      if (nodeReviewd.value>maxTemp) maxTemp = nodeReviewd.value;
      if (nodeReviewd.right) findMax(nodeReviewd.right);
      if (nodeReviewd.value>maxTemp) maxTemp = nodeReviewd.value;


    }

    findMax(this.root);
    return maxTemp;

  }

}





module.exports = {
  BinaryTree:BinaryTree,
  Node:Node,
};
