/* eslint-disable strict */

'use strict';

const { Node, BT } = require('../find-maximum-value.js');

describe('breadth-first', () => {
  let tree;
  beforeEach(() => {
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

    tree = new BT(one);
  });
  it('should return the maximum value of the tree', () => {
    tree.breadthFirst(tree.root);
    expect(tree.findMaximumValue()).toEqual(6);
  });
});