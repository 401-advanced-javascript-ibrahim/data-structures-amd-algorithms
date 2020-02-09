/* eslint-disable strict */

'use strict';

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

class BST {
  constructor(root = null) {
    this.root = root;
  }

  add(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    }
    this._addNode(val, this.root);
  }
  _addNode(val, node) {
    if (val > node.value) {
      if (node.right === null) {
        node.right = new Node(val);
        return;
      } else {
        this._addNode(val, node.right);
        return;
      }
    }
    if (val <= node.value) {
      if (node.left === null) {
        node.left = new Node(val);
        return;
      }
      else {
        this._addNode(val, node.left);
        return;
      }
    }
  }

  fizzBuzzTree(root) {
    if (root === null) {
      return;
    }
    if (root.value % 3 === 0 && root.value % 5 === 0) {
      root.value = 'FizzBuzz';
    } else if (root.value % 3 === 0) {
      root.value = 'Fizz';
    } else if (root.value % 5 === 0) {
      root.value = 'Buzz';
    }

    this.fizzBuzzTree(root.right);
    this.fizzBuzzTree(root.left);
  }
}

module.exports = { Node, BST };