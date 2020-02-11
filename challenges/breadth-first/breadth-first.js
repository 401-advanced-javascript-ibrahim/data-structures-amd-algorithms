/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BT {
  constructor(root = null) {
    this.root = root;
  }
  breadthFirst(currentNode) {
    let result = [];
    let queue = [];
    queue.unshift(currentNode);

    while (queue.length > 0) {
      currentNode = queue.pop();
      result.push(currentNode.value);
      if (currentNode.left) queue.unshift(currentNode.left);
      if (currentNode.right) queue.unshift(currentNode.right);
    }
    return result;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

one.left = two;
one.right = three;
two.left = six;
two.right = five;
three.right = four;

const tree = new BT(one);
console.log(
  tree.breadthFirst(tree.root),
);
module.exports = { Node, BT };