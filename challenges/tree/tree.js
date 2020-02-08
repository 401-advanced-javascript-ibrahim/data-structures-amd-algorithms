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

  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class BST{
    
}

module.exports = { Node, BT };