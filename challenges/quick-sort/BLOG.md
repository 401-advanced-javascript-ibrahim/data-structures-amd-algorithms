# Tracing
`arr = [ 8, 4, 23, 42, 16, 15 ]` 

## pass: 1

* At the begining the function will ove any element less than the last one to the first half of the array, so the sult from the aray above will be `[ 8, 4, 15, 42, 16, 23 ]` 

## pass: 2

* the second pass will take care of the first half of the array, it will sort it since the function called it self after updating the values of the arguments, the results will be `[ 4, 8, 15, 42, 16, 23 ]` 

## pass: 3

* the third and last pass of the function will sort the second half of the array and it will be the final array so the result will be `[ 4, 8, 15, 16, 23, 42 ]` 

