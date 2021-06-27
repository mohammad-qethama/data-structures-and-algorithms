const repeatedWords = require('./repeatedWords.js');

describe('repeated word',()=>{
  it('should return a ',()=>{
    let firstStr = 'Once upon a time, there was a brave princess who...';
    let x = repeatedWords(firstStr);
    expect(x).toEqual('a');

  });
  it('should return it ',()=>{
    let secondStr = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let x = repeatedWords(secondStr);
    expect(x).toEqual('it');

  });
  it('should return a ',()=>{
    let thirdStr = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    let x = repeatedWords(thirdStr);
    expect(x).toEqual('summer');

  });

  it('should return falsy value',()=>{
    let str1 = '';
    let str2 = ' ';
    let x = repeatedWords(str1);
    let y = repeatedWords(str2);

    expect(x).toBeFalsy();
    expect(y).toBeFalsy();

  });

  it('should return a ',()=>{
    let num = 123 ;
    let x = repeatedWords(num);
    expect(x).toEqual('InvalidInput!!:please enter a string');

  });
});


