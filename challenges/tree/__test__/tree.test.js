/* eslint-disable strict */

'use strict';

const { Node, BT } = require('../tree.js');

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