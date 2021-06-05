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

}



class BinarySearchTree{
  constructor(){
    this.root=null;
  }


  add(val){
    let newN = new Node(val);


    if (this.root === null){
      this.root= newN;
      return this.root;

    }

    function travirsal(tree){

      if(val < tree.value){
        if(tree.right){
          travirsal(tree.right);
        }else{
          tree.right= newN;


        }
      }

      if(val > tree.value){
        if(tree.left){
          travirsal(tree.left);
        }else{
          tree.left= newN;

        }
      }

    }
    travirsal(this.root);

    return this.root;

  }
  contains(val){
    if(!this.root) return false;
    if(!Number.isInteger(val)) return 'contains(a) where a MUST be INTIGER!!';
    // if(this.root.value === val)return true;
    let bingo = false;
    function travirsal(tree){

      console.log(tree.value);
      if (tree.value === val) bingo = true;
      if(val < tree.value){
        console.log('smaller');
        if(tree.right) travirsal(tree.right);

      }


      if(val > tree.value){
        if(tree.left)travirsal(tree.left);
      }


    }
    travirsal(this.root);

    return bingo ;
  }



}

//   let treew = new BinarySearchTree();

//   treew.add(4);
//   treew.add(3)
//   treew.add(6)
//   treew.add(8)
//   treew.add(5)
//   treew.add(2)


//   treew.contains(0)

module.exports = {
  BinarySearchTree:BinarySearchTree,
  BinaryTree:BinaryTree,
  Node:Node,
};
