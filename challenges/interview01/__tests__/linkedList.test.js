'use strict';

const LinkedList = require('../linkedList.js');

let ll = new LinkedList();

describe('Linked List', () => {

    beforeEach(() => {
        ll = new LinkedList();
    });

    it('check the if the linked list is palindrome', () => {
        const ll = new LinkedList();
        ll.insert('t')
        ll.insert('a')
        ll.insert('c')
        ll.insert('o')
        ll.insert('c')
        ll.insert('a')
        ll.insert('t')
        expect(ll.palindromeChecker()).toBeTruthy();
    })

    it('check the if the linked list is not palindrome', () => {
        const ll = new LinkedList();
        ll.insert('t')
        ll.insert('a')
        ll.insert('d')
        ll.insert('o')
        ll.insert('c')
        ll.insert('a')
        ll.insert('t')
        expect(ll.palindromeChecker()).toBeFalsy();
    })

});

