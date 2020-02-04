/* eslint-disable strict */
'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

let animalShelter;

let cat1 = {
  name: 'Abu Aseel',
  species: 'cat',
};

let cat2 = {
  name: 'she-fu',
  species: 'cat',
};

let dog1 = {
  name: 'poo',
  species: 'dog',
};

let dog2 = {
  name: 'sasha',
  species: 'dog',
};

describe('tests our nodes', () => {

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  it('should add a cat to the queue', () => {
    animalShelter.enqueue(cat1);

    expect(animalShelter.cat[0].species).toEqual('cat');
    expect(animalShelter.cat[0].name).toEqual('Abu Aseel');
  });

  it('should add a dog to the queue', () => {
    animalShelter.enqueue(dog1);

    expect(animalShelter.dog[0].species).toEqual('dog');
    expect(animalShelter.dog[0].name).toEqual('poo');
  });

  it('should remove a dog from the queue', () => {
    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    animalShelter.dequeue({ species: 'dog' });

    expect(animalShelter.dog[0].species).toEqual('dog');
    expect(animalShelter.dog[0].name).toEqual('sasha');
  });

  it('should remove a cat from the queue', () => {
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    animalShelter.dequeue({ species: 'cat' });

    expect(animalShelter.cat[0].species).toEqual('cat');
    expect(animalShelter.cat[0].name).toEqual('ariel');
  });

  it('should dequeue nothing if the pref is not dog or cat', () => {
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    animalShelter.dequeue({ species: 'potato' });

    expect(animalShelter.cat[0].species).toEqual('cat');
    expect(animalShelter.cat[0].name).toEqual('she-fu');
  });

});