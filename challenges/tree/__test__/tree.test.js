/* eslint-disable strict */

'use strict';

const { Node, BT, BST } = require('../tree.js');

describe('Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BT();
    expect(tree.root).toBeNull();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BT(1);
    expect(tree.root).toEqual(1);
  });
});

describe('BT', () => {

  let tree = null;

  beforeAll(() => {
    let awad = new Node('awad');
    let saleh = new Node('saleh');
    let mohammad = new Node('mohammad');
    let ibrahim = new Node('ibrahim');
    let osama = new Node('osama');
    let omar = new Node('omar');

    awad.left = saleh;
    awad.right = mohammad;
    mohammad.left = ibrahim;
    mohammad.right = osama;
    saleh.left = omar;

    tree = new BT(awad);
  });

  it('preOrder', () => {
    let expected = ['awad', 'saleh', 'omar', 'mohammad', 'ibrahim', 'osama'];
    expect(tree.preOrder()).toEqual(expected);
  });

  it('inOrder', () => {
    let expected = ['omar', 'saleh', 'awad', 'ibrahim', 'mohammad', 'osama'];
    expect(tree.inOrder()).toEqual(expected);
  });

  it('postOrder', () => {
    let expected = ['omar', 'saleh', 'ibrahim', 'osama', 'mohammad', 'awad'];
    expect(tree.postOrder()).toEqual(expected);
  });
});

describe('BST', () => {
  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BST();
    let four = 4;
    tree.add(four);
    tree.add(2);
    tree.add(5);
    expect(tree.root.value).toEqual(4);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(5);
  });
});