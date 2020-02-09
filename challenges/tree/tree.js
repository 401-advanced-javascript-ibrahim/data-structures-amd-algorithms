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
  contains(val) {
    return this._containsNode(val, this.root);
  }
  _containsNode(val, node) {
    if (node === null) {
      return false;
    }
    if (node.value === val) {
      return true;
    } else if (node.value < val) {
      return this._containsNode(val, node.right);
    } else if (node.value >= val) {
      return this._containsNode(val, node.left);
    }
  }
}

module.exports = { Node, BT, BST };