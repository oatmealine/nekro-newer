/* eslint-disable no-undef */
'use strict';
var expect = require('chai').expect;
var index = require('../src/index.js');

describe('nekro-new general test', () => {
  it('readme usage example', () => {
    let nekro = new index.Nekro();

    expect(nekro.hunger).to.equal(20, 'nekro hunger before');
    const burger = index.foods.hamburger;
    expect(nekro.eat(burger)).to.equal('yum. delicious', 'nekro responses - food consumption');
    expect(nekro.hunger).to.equal(10, 'nekro hunger after');


    expect(nekro.sick).to.equal(false, 'nekro sickness before');
    const cardboard = index.foods.cardboard;
    expect(nekro.eat(cardboard)).to.equal('i think i got the sickness... wtf...', 'nekro responses - sickness');
    expect(nekro.sick).to.equal(true, 'nekro sickness after');

    // curing the human
    while (nekro.sick) {
      nekro.eat(index.foods.coughSyrup);
    }
    expect(nekro.sick).to.be.equal(false, 'nekro curing');

    // death
    expect(nekro.health).to.equal(100, 'nekro health before');
    expect(nekro.alive).to.equal(true, 'nekro alive before');

    expect(nekro.hurt(100)).to.equal('ow, im fucking dead now', 'nekro responses - death');

    expect(nekro.health).to.equal(0, 'nekro health after');
    expect(nekro.alive).to.equal(false, 'nekro alive after');
  });

  it('feeding custom food to nekro', () => {
    let nekro = new index.Nekro();
    let cookie = new index.Food('testing cookie', 120);

    nekro.eat(cookie, 50);
    expect(nekro.hunger).to.equal(0, 'nekro hunger');
    expect(cookie.integrity).to.equal(50, 'food integrity');

    nekro.eat(cookie, 100);
    expect(cookie.integrity).to.equal(0, 'food integrity 2');

    cookie.poison();
    nekro.eat(cookie, 100);
    expect(nekro.sick).to.equal(true, 'food poisoning');
  })
});

describe('nekro-new classes tests', () => {
  it('food basic tests', () => {
    let food = new index.Food('test cookie', 10);

    food.eat(50);
    expect(food.integrity).to.equal(50, 'food integrity');
    food.eat(60);
    expect(food.integrity).to.equal(0, 'food integrity 2');
  })
})