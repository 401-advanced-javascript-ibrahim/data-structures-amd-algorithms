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
    this.result = [];
  }
  breadthFirst(currentNode) {
    let queue = [];
    queue.unshift(currentNode);

    while (queue.length > 0) {
      currentNode = queue.pop();
      this.result.push(currentNode.value);
      if (currentNode.left) queue.unshift(currentNode.left);
      if (currentNode.right) queue.unshift(currentNode.right);
    }
    return this.result;
  }

  findMaximumValue(){
    this.result.sort();
    return this.result.pop();
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
tree.breadthFirst(tree.root);
console.log(tree.findMaximumValue());

module.exports = { Node, BT };