const AnimalShelter = require('../fifo-animal-shelter.js');

const animalShelter = new AnimalShelter();

const cat1 = {
  name:'suzi',
  type:'cat',
  breed:'angora',
};

const cat2 = {
  name:'violent',
  type:'cat',
  breed:'domestic',
};

const dog1 = {
  name:'rex',
  type:'dog',
  breed:'dogo-argantino',
};

const dog2 = {
  name:'lucy',
  type:'dog',
  breed:'golden-retriever',
};

it('Can successfully enqueue dogs and cats in the shelter ',()=>{
  animalShelter.enqueue(cat1);
  animalShelter.enqueue(dog1);

  expect(animalShelter.Dogs.isEmpty()).toBeFalsy();
  expect(animalShelter.Cats.isEmpty()).toBeFalsy();

});
it('Can successfully enqueue multiple values into a queue',()=>{
  animalShelter.enqueue(cat1);
  animalShelter.enqueue(cat2);
  animalShelter.enqueue(dog1);
  animalShelter.enqueue(dog2);
  expect(animalShelter.Cats.isEmpty()).toBeFalsy();
  expect(animalShelter.Dogs.isEmpty()).toBeFalsy();

  expect(animalShelter.Cats.front.next.next.value.name).toEqual('violent');
  expect(animalShelter.Dogs.front.next.next.value.name).toEqual('lucy');


});
it('Can successfully dequeue out of a shilter the expected object of dogs and cats',()=>{
  let value = animalShelter.dequeue('cat');
  let valueDog = animalShelter.dequeue('dog');
  expect(value).toBeTruthy();
  expect(value.name).toEqual('suzi');
  expect(valueDog).toBeTruthy();
  expect(valueDog.name).toEqual('rex');

});
it('Can successfully empty a queue after multiple dequeues',() =>{
  animalShelter.dequeue('cat');
  animalShelter.dequeue('cat');
  animalShelter.dequeue('dog');
  animalShelter.dequeue('dog');

  expect(animalShelter.Dogs.isEmpty()).toBeTruthy();
  expect(animalShelter.Cats.isEmpty()).toBeTruthy();


} );

it('Should raise exception when dequeue and empty shelter ',() =>{
  let value1 =  animalShelter.dequeue('cat');
  let value2 = animalShelter.dequeue('dog');
  expect(value1).toEqual('no cats available try later :(');
  expect(value2).toEqual('no dogs available try later :(');


} );

it('Should reject enqueueing non object data types',()=>{

  let value1 =  animalShelter.enqueue('cat');
  let value2 = animalShelter.enqueue({car:'bugatti'});
  expect(value1).toEqual('Input must be proper obj!!!');
  expect(value2).toEqual('Input must be proper obj!!!');

} );

it('Should reject enqueueing other animals types',()=>{

  const bird = {
    name:'chuck',
    type:'parrot',
    breed:'grey-affrican',
  };

  let value1 =  animalShelter.enqueue(bird);
  expect(value1).toEqual('must be only dog or cats objects!!!');


} );

it('Should reject dequeuing other animals types',()=>{

  let value1 =  animalShelter.dequeue('dragon');
  expect(value1).toEqual('pref must be cat or dog');


} );
