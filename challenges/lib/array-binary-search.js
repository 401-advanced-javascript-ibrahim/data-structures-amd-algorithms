'use strict';

function binarySearch(arr, item) {
    let firstIdx = 0;
    let finalIdx = arr.length - 1;
    while (firstIdx <= finalIdx) {
        let midIdx = Math.floor((firstIdx + finalIdx) / 2)
        if (arr[midIdx] === item) {
            return midIdx
        } else if (item > arr[midIdx]) {
            firstIdx = midIdx + 1
        } else if (item < arr[midIdx]) {
            finalIdx = midIdx - 1
        }
        return -1
    }
}

//******* The previuos method which will take time compared with the active one *******\\

// function binarySearch(arr, item) {
//     let output
//     for (let i = 0; i < arr.length; i++) {
//         if (item == arr[i]) {
//             output = i
//             break;
//         } else {
//             output = - 1
//         }
//     }
//     return output
// }

module.exports = binarySearch
