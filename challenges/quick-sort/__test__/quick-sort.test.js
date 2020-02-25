/* eslint-disable strict */

'use strict';

const quickSort = require('../quick-sort.js');

describe('', () => {
  it('it should return sorted array', () => {
    let arr1 = [8, 4, 23, 42, 16, 15];
    let arr2 = [5, 12, 7, 5, 5, 7];
    let arr3 = [2, 3, 5, 7, 13, 11];
    expect(quickSort(arr1, 0, arr1.length - 1)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(quickSort(arr2, 0, arr2.length - 1)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(quickSort(arr3, 0, arr3.length - 1)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});