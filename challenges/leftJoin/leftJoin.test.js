let leftJoin = require('./leftJoin.js');
let HashTable = require('../hashTables/hashTables.js');
let synenomHashTable;
let antonymsHashTable;
describe('Testing Join Left', () => {
  beforeAll(() => {
    synenomHashTable = new HashTable(20);
    antonymsHashTable = new HashTable(20);


    synenomHashTable.add('sad','depressed');
    synenomHashTable.add('endeavour','aspire');
    synenomHashTable.add('uncertain','hazy');
    synenomHashTable.add('exterminate','destroy');
    synenomHashTable.add('epitome','precise');




    antonymsHashTable.add('sad','happy');
    antonymsHashTable.add('endeavour','quit');
    antonymsHashTable.add('uncertain','obvious');
    antonymsHashTable.add('exterminate','Secure');
    antonymsHashTable.add('uncertain','obvious');
  });

  it('should left join the two tables  and returns an array ', () => {
    let result = leftJoin(synenomHashTable,antonymsHashTable);
    expect(result).toBeTruthy();

  });
  it('should left join the two tables  and returns an array of arrays that have the key synonym and antonyms as an elements ', () => {
    let result = leftJoin(synenomHashTable,antonymsHashTable);
    expect(result)
      .toEqual([
        [ 'epitome', 'precise', null ],
        [ 'sad', 'depressed', 'happy' ],
        [ 'exterminate', 'destroy', 'Secure' ],
        [ 'uncertain', 'hazy', 'obvious' ],
        [ 'endeavour', 'aspire', 'quit' ]
      ]);

  });
  it('should return correct arrays ', () => {
    let result = leftJoin(synenomHashTable,antonymsHashTable);
    expect(result[0][2]).toBeFalsy();

  });

});


