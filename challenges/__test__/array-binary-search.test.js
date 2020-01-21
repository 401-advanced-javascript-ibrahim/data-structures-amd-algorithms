'use strict';

const binarySearch = require('../lib/array-binary-search.js')

const arr1 = [4, 8, 15, 16, 23, 42];

describe('Validator for the BinarySearch() function', () => {
    it('should return the index of a given search key form a sorted array', () => {
        expect(binarySearch(arr1, 15)).toEqual(2)
    })

    it('should return -1 when you added unvalid search key (does not exist in the array)', () => {
        expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 99)).toEqual(-1)
    })
})