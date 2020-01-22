'use strict';

const functions = require('../lib/sum-matrix.js')

describe('Functions of the two interviews', () => {
    describe('Sum Matrix Test', () => {

        it('Sould sum all element of an array that is an element to an other', () => {
            const arr = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
            expect(functions.sumMatrix(arr)).toEqual([6, 15, 18])
        })
    })
    describe('Fibonacci Sequence Test', () => {
        it('Should return the exact elemen of the given index based on fibonacci sequence', () => {
            expect(functions.fibSeq(7)).toEqual(13)
        })
        it('Should return the element based on fibonacci sequence same as the previuos test if the input is negative', () => {
            expect(functions.fibSeq(-14)).toEqual(-377)
        })
    })
})

