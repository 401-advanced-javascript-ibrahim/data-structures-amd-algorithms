/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
'use strict';

class PseudoQueue {
  constructor(){
    this.firstStack = [];
    this.secondStack = [];
  }

  enqueue(value){
    this.firstStack.push(value);
  }

  dequeue(){
    if (this.secondStack.length === 0) {
      if (this.firstStack.length === 0) {
        return 'Ops empty queue';
      }
      while (this.firstStack.length > 0) {
        let poped = this.firstStack.pop();
        this.secondStack.push(poped);
      }
    }
    return this.secondStack.pop();
  }
}

let pseudoQueue = new PseudoQueue();

pseudoQueue.enqueue(1);
pseudoQueue.enqueue(2);
pseudoQueue.enqueue(3);
pseudoQueue.enqueue(4);
let result = pseudoQueue.dequeue();
console.log(result);
console.log(pseudoQueue);

module.exports = PseudoQueue;