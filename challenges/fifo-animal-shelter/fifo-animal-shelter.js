/* eslint-disable strict */
'use strict';

class AnimalShelter {
  constructor() {
    this.dog = [];
    this.cat = [];
  }
  enqueue(animal) {
    if (animal.species === 'cat') {
      this.cat.push(animal);
    } else if (animal.species === 'dog') {
      this.dog.push(animal);
    } else {
      return null;
    }
  }

  dequeue(pref) {
    if (pref.species === 'cat') {
      this.cat.shift();
      return this.cat;
    } else if (pref.species === 'dog') {
      this.dog.shift();
      return this.dog;
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;