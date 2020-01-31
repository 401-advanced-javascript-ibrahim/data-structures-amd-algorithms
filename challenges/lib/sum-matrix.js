'use strict';

function sumMatrix(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let newIdx = 0;
        for (let j = 0; j < arr[i].length; j++) {
            newIdx = newIdx + arr[i][j];
        };
        result[i] = newIdx;
    };
    return result;
};

function fibSeq(num) {
    let arr = [0, 1];
    for (let i = 0; i < Math.abs(num) - 1; i++) {
        arr[i + 2] = arr[i] + arr[i + 1];
    };
    if (num >= 0) {
        return arr[num];
    };
    if (num < 0) {
        if (Math.abs(num) % 2 === 0) {
            return -arr[Math.abs(num)];
        } else {
            return arr[Math.abs(num)];
        };
    };
};

module.exports = { sumMatrix, fibSeq }