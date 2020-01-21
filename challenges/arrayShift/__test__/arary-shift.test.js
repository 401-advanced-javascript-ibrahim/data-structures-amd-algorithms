'use strict';

let arratShift = require('./../lib/arary-shift.js')

let arr = [1, 2, 5, 4]


describe('testig the validation of insertShiftArray function', () => {
    it('see if the pushing part of the function works', () => {
        expect(arratShift.push(arr, 3).length).toBeEqual(5)
    });

    it('testing the insertShiftArray function', () => {
        expect(arratShift.insertShiftArray(arr, 3)).toStrictEqual([1, 2, 3, 4, 5])
    })
})