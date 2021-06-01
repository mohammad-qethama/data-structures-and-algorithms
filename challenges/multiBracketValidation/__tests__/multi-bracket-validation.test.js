const multiBracketValidation = require('../multi-bracket-validation.js');




describe('testing multi-bracket Validator',()=>{

  it('Should return true on valid brackets strings',()=>{

    let value1 = multiBracketValidation('{}');
    let value2 = multiBracketValidation('{}()');
    let value3 = multiBracketValidation('{}{Code}[Fellows](())');
    expect(value1).toEqual(true);
    expect(value2).toEqual(true);
    expect(value3).toEqual(true);



  } );
  it('Should return false  on invalid brackets strings',()=>{

    let value1 = multiBracketValidation('{)}');
    let value2 = multiBracketValidation('{()])');
    let value3 = multiBracketValidation('[');
    let value4 = multiBracketValidation('{)');
    let value5 = multiBracketValidation(')');



    expect(value1).toEqual(false);
    expect(value2).toEqual(false);
    expect(value3).toEqual(false);
    expect(value4).toEqual(false);
    expect(value5).toEqual(false);




  } );

  it('Should raise an exception if input is not string ',()=>{

    let value1 = multiBracketValidation(5454);
    expect(value1).toEqual('input string please!!');




  } );








});

