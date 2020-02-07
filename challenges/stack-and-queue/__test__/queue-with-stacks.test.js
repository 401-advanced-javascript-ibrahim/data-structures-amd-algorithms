/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

let pseudoQueue;

describe('PseudoQueue', () => {

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  describe('enqueue method', () => {

    it('Can successfully add onto a PseudoQueue', () => {
      pseudoQueue.enqueue('c');
      pseudoQueue.enqueue('o');
      pseudoQueue.enqueue('d');
      pseudoQueue.enqueue('e');
      expect(pseudoQueue.firstStack).toEqual(['c', 'o', 'd', 'e']);
    });
  });

  describe('dequeue method', () => {

    it('Can successfully dequeue off the stack', () => {
      pseudoQueue.enqueue('c');
      pseudoQueue.enqueue('o');
      pseudoQueue.enqueue('d');
      pseudoQueue.enqueue('e');
      expect(pseudoQueue.dequeue()).toEqual('c');
      expect(pseudoQueue.secondStack).toEqual(['e', 'd', 'o']);
    });
  });
});