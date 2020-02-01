# Stacks and Queues

* Stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

* Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle

## Challenge

* The goal is to create methods to each the stack and the queue, these are the basic methods can applied on each.

## Approach & Efficiency

* To make the test cleaner, we create an extra method that convert each stack and queue to an array.
* Every method has been tested and approve their effectiveness on the classes

## API

### Stacks:

* `push` : can add one or multi elements to a stack
* `pop` : can take off and return the last element (top) from a stack
* `peek` : return back the value of the last elemnt that pushed into a stack
* `isEmpty` : check if the stack is empty or not

### Queues:

* `enqueue` : can add one or multi elements to a queue.
* `dequeue` : can take off and return the last element (front) from a queue.
* `peek` : return back the value of the last elemnt that enqueued into a queue.
* `isEmpty` : check if the queue is empty or not.

