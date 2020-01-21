'use strict';

let testArr = [4, 8, 15, 16, 23, 42]

function binarySearch(arr, item) {
    let output
    for (let i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
            output = i
            break;
        } else {
            output = - 1
        }
    }
    return output
}

module.exports = { binarySearch }
console.log(binarySearch(testArr, 15));