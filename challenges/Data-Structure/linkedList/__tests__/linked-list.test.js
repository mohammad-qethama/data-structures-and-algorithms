
const LinkedListModel = require('../linked-list.js');
const Node = LinkedListModel.Node;
const LinkedList = LinkedListModel.LinkedList;
const { expect } = require('@jest/globals');

describe('linked list Tests', ()=>{
  let ll = new LinkedList();


  it('Should instate empty linked list ',()=>{


    expect(ll.head).toEqual(null);

  });

  it('Should insert node into empty linked list',()=>{
    ll.insert(5);
    expect(ll.head.value).toEqual(5);
    expect(ll.head.next).toEqual(null);


  });

  it('Should insert  multiple nodes into  linked list',()=>{
    ll.insert(6);
    ll.insert(7);
    ll.insert(99);

    expect(ll.head.value).toEqual(99);
    expect(ll.head.next.value).toEqual(7);
    expect(ll.head.next.next.value).toEqual(6);
    expect(ll.head.next.next.next.value).toEqual(5);
    expect(ll.head.next.next.next.next).toEqual(null);




  });

  it('Should return true/false if value exist/missing  in/from the linked list ',()=>{

    let findExistSeven = ll.includes(7);
    let findExistNine = ll.includes(99);

    let findMissing = ll.includes(5454);
    expect(findExistSeven).toEqual(true);
    expect(findMissing).toEqual(false);
    expect(findExistNine).toEqual(true);
    expect(findMissing).toEqual(false);



  });

  it('Should return collection of values in the linked list ',()=>{
    let allValues =  ll.toString();
    expect(allValues).toEqual('{ 99 } -> { 7 } -> { 6 } -> { 5 } -> NULL');

  });

});
