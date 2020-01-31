'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {

        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            return this;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        return this;
    }

    includes(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    toString() {
        let currentNode = this.head;
        let linkedListString = '';
        while (currentNode) {
            linkedListString += ` ${currentNode.value} ->`;
            currentNode = currentNode.next;
        }
        return linkedListString += ` NULL`;
    };

    palindromeChecker() {
        let currentNode = this.head;
        let arr = [];
        let x;

        while (currentNode) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        };

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == arr[arr.length - (1 + i)]) {
                x = true
            } else {
                x = false
                break;
            };
        };

        return x
    };
};

const ll = new LinkedList();
ll.insert('t')
ll.insert('a')
ll.insert('c')
ll.insert('o')
ll.insert('c')
ll.insert('a')
ll.insert('t')

const ll2 = new LinkedList();
ll2.insert('t')
ll2.insert('c')
ll2.insert('a')
ll2.insert('a')
ll2.insert('w')
ll2.insert('t')

console.log('tttttt', ll.palindromeChecker());
console.log('ffffff', ll2.palindromeChecker());
module.exports = LinkedList;