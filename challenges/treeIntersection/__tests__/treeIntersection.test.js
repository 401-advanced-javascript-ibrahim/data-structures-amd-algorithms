/* eslint-disable strict */

'use strict';

const {Node, BinaryTree, treeIntersection} = require('../treeIntersection.js');

describe('tree intersection',()=>{
  const node1 = new Node(150);
  const node2 = new Node(100);
  const node3 = new Node(250);
  const node4 = new Node(75);
  const node5 = new Node(160);
  const node6 = new Node(200);
  const node7 = new Node(350);

  const tree1 = new BinaryTree(node1);
  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;

  const node21 = new Node(42);
  const node22 = new Node(100);
  const node23 = new Node(600);
  const node24 = new Node(15);
  const node25 = new Node(160);
  const node26 = new Node(200);
  const node27 = new Node(350);

  const tree2 = new BinaryTree(node21);
  node21.left = node22;
  node21.right = node23;
  node22.left = node24;
  node22.right = node25;
  node23.left = node26;
  node23.right = node27;

  it('should returns an array with the common values',()=>{
    let result = treeIntersection(tree1,tree2);
    expect(result).toEqual([100, 160, 200, 350]);
  });
});