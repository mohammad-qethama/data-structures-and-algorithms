'use strict';
const LL = require ('../Data-Structure/linkedList/linked-list');
const Node = LL.Node;
const LinkedList = LL.LinkedList;

const zip = require ('./ll-zip.js');

describe('LL zipper',()=>{

  it ('testing ll1>ll2 ',()=> {

    let ll1 =  new LinkedList();
    ll1.insert(5);
    ll1.insert(6);
    ll1.insert(4);
    ll1.insert(3);

    let ll2 =  new LinkedList();

    ll2.insert(99);
    ll2.insert(99);

    let result = zip(ll1,ll2);

    expect(result.value).toEqual(3);
    expect(result.next.value).toEqual(99);



  });

  it ('testing ll1>ll2 ',()=> {

    let ll1 =  new LinkedList();
    ll1.insert(5);
    ll1.insert(6);
    ll1.insert(4);
    ll1.insert(3);

    let ll2 =  new LinkedList();

    ll2.insert(99);
    ll2.insert(99);

    let result = zip(ll2,ll1);

    expect(result.value).toEqual(99);
    expect(result.next.value).toEqual(3);



  });

  it ('testing ll1>ll2 ',()=> {

    let ll1 =  new LinkedList();
    ll1.insert(5);
    ll1.insert(6);
    ll1.insert(4);
    ll1.insert(3);

    let ll2 =  new LinkedList();

    ll2.insert(6);
    ll2.insert(7);
    ll2.insert(8);
    ll2.insert(9);

    let result = zip(ll2,ll1);

    expect(result.value).toEqual(9);
    expect(result.next.value).toEqual(3);
    expect(result.next.next.value).toEqual(8);





  });



});

