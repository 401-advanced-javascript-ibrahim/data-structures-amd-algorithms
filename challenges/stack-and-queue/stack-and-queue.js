/* eslint-disable no-console */
/* eslint-disable no-redeclare */
/* eslint-disable strict */
/* eslint-disable no-undef */
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Stack {
  constructor() {
    this.top = null;
  };

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  };

  pop() {
    if (this.top === null) {
      return null;
    };

    const topNode = this.top;
    this.top = topNode.next;
    return topNode.value;
  };

  peek() {
    if (this.top === null) {
      return null;
    } else {
      return this.top.value;
    };
  };

  isEmpty() {
    return this.top === null;
  };

  //// This method to make the test code cleaner
  convertToArray() {
    let currentNode = this.top;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    };
    return arr;
  };
};

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  };

  enqueue(val) {
    let node = new Node(val);
    node.next = this.back;
    this.back = node;

    if (this.front === null) {
      this.front = node;
    };
  };

  dequeue() {
    if (this.front === null) {
      return null;
    };
    const frontNode = this.front;

    if (this.back !== this.front) {

      let currentNode = this.back;

      while (currentNode.next !== this.front) {
        currentNode = currentNode.next;
      };

      this.front = currentNode;
      this.front.next = null;

    } else {
      this.front = null;
      this.back = null;
    }
    return frontNode.value;
  };

  peek() {
    return this.front === null ? null : this.front.value;
  };

  isEmpty() {
    return this.front === null;
  };

  convertToArray() {
    let currentNode = this.back;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    };
    return arr;
  };
};

let stack = new Queue();

stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);
stack.enqueue(4);

console.log(stack.dequeue());
console.log(stack.back);

module.exports = { Stack, Queue, };