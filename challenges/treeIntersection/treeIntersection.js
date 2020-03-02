/* eslint-disable strict */

'use strict';

class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null){
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
}

function treeIntersection(tree1, tree2) {
  let arr1 = tree1.preOrder();
  let arr2 = tree2.preOrder();
  let results = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        results.push(arr2[j]);
      }
    }
  }
  return results;
}

module.exports = {Node, BinaryTree,treeIntersection};