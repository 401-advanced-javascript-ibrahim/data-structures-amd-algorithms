`use strict`;

let arratShift = {}

let testArray = [2, 4, 6, 8]
let testArr = [1, 2, 5, 4, 3]
console.log('teeee', testArray);

class List {
    constructor() {
        this.length = 0;
        this.data = {};
    }

}

arratShift.push = function (arr, item) {
    let data = {}
    for (let i = 0; i < arr.length; i++) {
        data[i] = arr[i];
    }
    data[arr.length] = item;
    arr = Object.values(data)
    return arr;
}

arratShift.swap = function (arr) {
    console.log(arr);

    let savedidx = Math.floor(arr.length / 2)
    let saved = arr[savedidx];
    arr[savedidx] = arr[arr.length - 1]
    arr[arr.length - 1] = saved
    console.log('testing', arr);
    return arr
}
arratShift.insertShiftArray = function (arr, item) {
    newArr = arratShift.push(arr, item)
    arratShift.swap(newArr)
    return newArr
}

console.log('insertShiftArray();', arratShift.insertShiftArray(testArray, 5))

module.exports = arratShift; 