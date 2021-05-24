
const LinkedListModel = require('../linked-list.js');
// const Node = LinkedListModel.Node;
const LinkedList = LinkedListModel.LinkedList;
const { expect } = require('@jest/globals');

describe('linked list Tests', ()=>{
  let ll = new LinkedList();
  let kthElement = new LinkedList();


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

  // ******************************************************************************************************************************
  // challenge ll Insert

  it('Should Add at node at the end of the list ',()=>
  {
    ll.append(100);

    let allValues =  ll.toString();
    expect(allValues).toEqual('{ 99 } -> { 7 } -> { 6 } -> { 5 } -> { 100 } -> NULL');

    expect(ll.head.next.next.next.next.value).toEqual(100);
    expect(ll.head.next.next.next.next.next).toEqual(null);

  });

  it('Should Add multible node at the end of the list ', ()=>
  {
    ll.append(1000);
    ll.append(500);

    let allValues =  ll.toString();

    expect(ll.head.next.next.next.next.value).toEqual(100);
    expect(ll.head.next.next.next.next.next.value).toEqual(1000);
    expect(ll.head.next.next.next.next.next.next.value).toEqual(500);
  } );

  it('Should Add node before Value ', ()=>
  {
    ll.insertBefore(6,8);
    expect(ll.head.next.next.value).toEqual(8);
    expect(ll.head.next.next.next.value).toEqual(6);
  });

  // ******************************************************************************************************************************
  // challenge ll kth from last

  it('Should return "Exception" K > length ', ()=>
  {
    let result =   ll.kthFromEnd(99);

    expect(result).toEqual('Exception');

  });

  it('Should return "Exception" K === length ', ()=>
  {
    let result =   ll.kthFromEnd(8);

    expect(result).toEqual('Exception');

  });

  it('Should return return value if k = 0  ', ()=>
  {
    kthElement.insert(1);
    let result =   kthElement.kthFromEnd(0);

    expect(result).toEqual(1);

    result = kthElement.kthFromEnd(1);

    expect(result).toEqual('Exception');

  });

  it('Should return value targeted  ', ()=>
  {
    let result =   ll.kthFromEnd(1);

    expect(result).toEqual(1000);

    result = ll.kthFromEnd(0);

    expect(result).toEqual(500);

    result = ll.kthFromEnd(4);

    expect(result).toEqual(6);


  });







});


