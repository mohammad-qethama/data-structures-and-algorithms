function placeArrayInTree(t,h){

  function traversal(node){
    if(node.left) traversal(node.left);
    h.add(node.value.toString(),node.value.toString());
    if(node.right) traversal(node.right);
  }


  traversal(t.root);
}


function searchForSimilarities(t,h){
  let values = [];
  function traversal(node){
    if(node.left) traversal(node.left);

    if(h.get(node.value.toString())){
      values.push(node.value);
    }
    if(node.right) traversal(node.right);
  }


  traversal(t.root);
  return values;
}

function treeIntersection(tree1,tree2,hashTable){
  if(!(tree1.root) ||!(tree2.root) ) return 'Error : InputERROR : empty or INVALID BinaryTree';

  placeArrayInTree(tree1,hashTable);
  return searchForSimilarities(tree2,hashTable);

}

module.exports = treeIntersection;
