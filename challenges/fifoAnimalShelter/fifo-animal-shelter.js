'use strict';
const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;
class AnimalShelter{
  constructor(){
    this.Dogs = new Queue();
    this.Cats = new Queue();
  }

  enqueue(obj){
    if(obj.name){
      if((obj.type === 'cat')) {
        this.Cats.enqueue(obj);

      }else if(obj.type === 'dog'){
        this.Dogs.enqueue(obj);

      }else{ return 'must be only dog or cats objects!!!';}


    }else{return 'Input must be proper obj!!!';}



  }

  dequeue(pref){
    if (pref === 'cat'){
      if(!this.Cats.isEmpty()){
        let cat = this.Cats.dequeue();
        return cat;}
      return 'no cats available try later :(';

    }
    if (pref === 'dog'){
      if(!this.Dogs.isEmpty()){

        let dog = this.Dogs.dequeue();
        return dog;}
      return 'no dogs available try later :(';

    }
    return 'pref must be cat or dog';
  }

}
module.exports = AnimalShelter;
