'use strict';
const LL = require ('../Data-Structure/linkedList/linked-list');
const Node = LL.Node;
const LinkedList = LL.LinkedList;
function zipLists (ll1,ll2){
  if (ll1.head === null){
    return ll2.head;
  }
  if (ll2.head ===null){
    return ll1.head;
  }

  let ll2Node = ll2.head;
  let ll1Node = ll1.head;

  while (ll2Node.next && ll1Node.next ){

    ll1.insertAfter(ll1Node.value,ll2Node.value);
    console.log(ll1.toString());

    ll2Node = ll2Node.next;
    ll1Node = ll1Node.next.next;
  }
  while (ll2Node.next){
    ll1.append(ll2Node.value);
    ll2Node = ll2Node.next;
    ll1Node = ll1Node.next ;

  }

  if (!ll2Node.next && !ll1Node.next){

    ll1.append(ll2Node.value);


  }else{
    ll1.insertAfter(ll1Node.value,ll2Node.value);

  }




  console.log(ll2Node);

  return ll1.head;

}
module.exports = zipLists;
