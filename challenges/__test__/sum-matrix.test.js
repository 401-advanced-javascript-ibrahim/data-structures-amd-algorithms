'use strict';

const sumMatrix = require('../lib/sum-matrix.js')

describe('Sum Matrix', () => {
    it('Sould sum all element of an array that is an element to an other', () => {
        const arr = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
        expect(sumMatrix(arr)).toEqual([6, 15, 18])
    })
})