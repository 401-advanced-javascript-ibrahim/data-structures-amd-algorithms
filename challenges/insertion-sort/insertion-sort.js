/* eslint-disable strict */

'use strict';

let arr1 = [8, 4, 23, 42, 16, 15];
let arr2 = [20, 18, 12, 8, 5, -2];
let arr3 = [5, 12, 7, 5, 5, 7];
let arr4 = [2, 3, 5, 7, 13, 11];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[  j + 1] = temp;
  }
  return arr;
}

let test1 = insertionSort(arr1);
let test2 = insertionSort(arr2);
let test3 = insertionSort(arr3);
let test4 = insertionSort(arr4);

console.log('1',test1);
console.log('2',test2);
console.log('3',test3);
console.log('4',test4);

module.exports = insertionSort;