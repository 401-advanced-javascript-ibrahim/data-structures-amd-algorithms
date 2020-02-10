/* eslint-disable strict */

'use strict';

const { Node, BT } = require('../breadth-first.js');

describe('breadth-first', () => {
  let tree;
  beforeEach(() => {
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
  it('should return an array with the proper values', () => {
    let expected = ['awad', 'saleh', 'mohammad', 'omar', 'ibrahim', 'osama'];
    expect(tree.breadthFirst(tree.root)).toEqual(expected);
  });
});