/* eslint-disable no-console */
/* eslint-disable no-redeclare */
/* eslint-disable strict */
/* eslint-disable no-undef */
'use strict';

const { Stack, Queue, } = require('../stack-and-queue.js');

let stack;
let queue;

describe('Stacks', () => {

  beforeEach(() => {
    stack = new Stack();
  });

  describe('push method', () => {

    it('Can successfully push onto a stack', () => {
      stack.push('N');

      expect(stack.convertToArray()).toEqual(['N']);
    });

    it('Can successfully push multiple values onto a stack', () => {
      stack.push('i');
      stack.push('r');
      stack.push('a');
      stack.push('k');
      stack.push('i');
      stack.push('H');
      expect(stack.convertToArray()).toEqual(['H', 'i', 'k', 'a', 'r', 'i']);
    });
  });

  describe('pop method', () => {

    it('Can successfully pop off the stack', () => {
      stack.push(15);
      stack.push(7);
      stack.push(1);
      expect(stack.pop()).toEqual(1);
      expect(stack.convertToArray()).toEqual([7, 15]);
    });

    it('Can successfully empty a stack after multiple pops', () => {
      stack.push(97);
      stack.push(93);
      stack.push(7);
      stack.push(1);
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBeTruthy();
    });
  });

  describe('peek method', () => {
    it('Can successfully peek the next item on the stack', () => {
      stack.push('hello');
      stack.push('from');
      stack.push('amman');
      expect(stack.peek()).toMatch('amman');
    });
  });

  describe('empty method', () => {
    it('Can successfully instantiate an empty stack', () => {
      expect(stack.isEmpty()).toBeTruthy();
    });
  });
});

describe('Queue', () => {

  beforeEach(() => {
    queue = new Queue();
  });

  describe('enqueue method', () => {
    it('Can successfully enqueue into a queue', () => {
      queue.enqueue('N');

      expect(queue.convertToArray()).toEqual(['N']);
    });

    it('Can successfully enqueue multiple values into a queue', () => {
      queue.enqueue('i');
      queue.enqueue('r');
      queue.enqueue('a');
      queue.enqueue('k');
      queue.enqueue('i');
      queue.enqueue('H');
      expect(queue.convertToArray()).toEqual(['H', 'i', 'k', 'a', 'r', 'i']);
      expect(queue.peek()).toEqual('i');
    });
  });

  describe('dequeue method', () => {
    it('Can successfully dequeue out of a queue the expected value', () => {
      queue.enqueue(15);
      queue.enqueue(7);
      queue.enqueue(1);
      expect(queue.dequeue()).toEqual(15);
      expect(queue.convertToArray()).toEqual([1, 7]);
    });

    it('Can successfully empty a queue after multiple dequeues', () => {
      queue.enqueue(97);
      queue.enqueue(93);
      queue.enqueue(7);
      queue.enqueue(1);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.convertToArray()).toEqual([]);
      expect(queue.isEmpty()).toBeTruthy();
    });
  });

  describe('peek method', () => {
    it('Can successfully peek into a queue, seeing the expected value', () => {
      queue.enqueue('hello');
      queue.enqueue('from');
      queue.enqueue('amman');
      expect(queue.peek()).toMatch('hello');
    });
  });

  describe('empty method', () => {
    it('Can successfully instantiate an empty queue', () => {
      expect(queue.isEmpty()).toBeTruthy();
    });
  });
});