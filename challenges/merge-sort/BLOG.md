# Tracing

arr = [8, 4, 23, 42, 16, 15]

## pass: 1

* `left = [4]` 
* `right = [23]` 
* the function `mergeSort()` will call it self until the it reaches an empty array so the final values of `left` & `right` as above, then the `merge()` function will result `[4, 23]` 

## pass: 2

* `left = [8]` 
* `right = [4, 23]` 
* Now the comparsion before the merge will be between 8(i) & 4(j), the result will be `[4, 8, 23]` 

## pass: 3

* `left = [16]` 
* `right = [15]` 
* Now going to other side of the array ressulting this `[15, 16]` 

## pass: 4

* `left = [42]` 
* `right = [15, 16]` 
* this pass similar to the second one but for the right side of the an array, it results `[15, 16, 42]` 

## pass: 5

* `left = [4, 8, 23]` 
* `right = [15, 16, 42]` 
* Here is the final pass will take the left and the right each is sorted and then start to sort and merge the final array will be `[4,8,15,16,23,42]` 

