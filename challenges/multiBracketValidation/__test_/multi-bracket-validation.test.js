/* eslint-disable strict */
'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('test multiBracketValidation()',()=>{
  it('should returns true for the regular cases',()=>{
    let input1 = '{}';
    let input2 = '{}(){}';
    expect(multiBracketValidation(input1)).toBeTruthy();
    expect(multiBracketValidation(input2)).toBeTruthy();
  });

  it('should returns true if the input contains letters',()=>{
    let input3 = '()[[Extra Characters]]';
    let input5 = '{}{Code}[Fellows](())';
    expect(multiBracketValidation(input3)).toBeTruthy();
    expect(multiBracketValidation(input5)).toBeTruthy();
  });

  it('should returns false for not match brackts',()=>{
    let input6 = '[({}]';
    let input7 = '(](';
    let input8 = '{(})';
    expect(multiBracketValidation(input6)).toBeFalsy();
    expect(multiBracketValidation(input7)).toBeFalsy();
    expect(multiBracketValidation(input8)).toBeFalsy();
  });
});