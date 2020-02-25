/* eslint-disable strict */

'use strict';

const mergeSort = require('../merge-sort.js');

describe('', () => {
  it('it should return sorted array', () => {
    let arr1 = [8, 4, 23, 42, 16, 15];
    let arr2 = [5, 12, 7, 5, 5, 7];
    let arr3 = [2, 3, 5, 7, 13, 11];
    expect(mergeSort(arr1)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(mergeSort(arr2)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(mergeSort(arr3)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});