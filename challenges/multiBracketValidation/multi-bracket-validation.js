/* eslint-disable strict */
'use strict';

function multiBracketValidation(input) {
  let letterNumber = [];
  let bracketsArr = [];
  let bracketsObj = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '{' || input[i] === '[' || input[i] === '(') {
      bracketsArr.push(input[i]);
    }
    else if (input[i].match(/^[0-9a-zA-Z]+$/)) {
      letterNumber.push(input[i]);
    } else {
      if (input[i] !== bracketsObj[bracketsArr.pop()]) {
        return false;
      }
    }
  }
  if (bracketsArr.length !== 0) {
    return false;
  }
  return true;
}

module.exports = multiBracketValidation;