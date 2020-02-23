/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';

const insertionSort = require('./insertion-sort.js');
describe('Insertion Sort', () => {
  let arr1 = [8, 4, 23, 42, 16, 15];
  let arr2 = [20, 18, 12, 8, 5, -2];
  let arr3 = [5, 12, 7, 5, 5, 7];
  let arr4 = [2, 3, 5, 7, 13, 11];

  it('should sort the arraay', () => {
    expect(insertionSort(arr1)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insertionSort(arr2)).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(insertionSort(arr3)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(insertionSort(arr4)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});