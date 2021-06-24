const HashTable = require('./hashTables.js');
describe('hash table tests',()=>{
  let myhash;

  beforeAll(()=>{
    myhash = new HashTable(20);
    myhash.add('John', 'Boss');
    myhash.add('Cathy', 'The Real Boss');
    myhash.add('Zach', 'Kid 1');
    myhash.add('Allie', 'Kid 2');
    myhash.add('Rosie', 'Dog');
    myhash.add('Cat', 'TA');
    myhash.add('Justin', 'Student');
    myhash.add('Jason', 'Student');
    myhash.add('Ben', 'Student');
    myhash.add('Timea', 'Student');
    myhash.add('Jen', 'Student');
    myhash.add('Khalil', 'Student');
    myhash.add('Michael', 'Student');

  });

  it('Should add value to the data_structure',()=>{
    myhash.add('Ovi', 'Student');
    let value = myhash.get('Ovi');
    expect(value).toEqual('Student');

  });
  it('Should Retrieve the value stored based on a key  ',()=>{

    let value = myhash.get('Cat');
    expect(value).toEqual('TA');

  });
  it('Should Successfully returns null for a key that does not exist in the hashtable',()=>{
    let value = myhash.get('Ca123t');
    expect(value).toEqual(null);

  });
  it('Successfully handle a collision within the hashtable',()=>{
    let value = myhash.table[13].head.next.value['Allie'];

    expect(value).toEqual('Kid 2');

  });
  it('Should Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let value = myhash.get('Jason');
    expect(value).toEqual('Student');


  });
  it('Successfully hash a key to an in-range value',()=>{
    let value = myhash.hash('dontbeShi');
    expect(value).toBeLessThan(myhash.size);

  });


});
