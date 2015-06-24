'use strict';

var game = require('../lib/battlegame.js');

describe('game units', function(){
  describe('infantry unit', function(){
    it('exists and has the correct properties', function(){
      expect(game.infantry).not.toBe(undefined);
      expect(game.infantry.health).not.toBe(undefined);
      expect(game.infantry.speed).not.toBe(undefined);
    });
    it('has the values for its properties that are given in the spec', function(){
      expect(game.infantry.health).toBe(2);
      expect(game.infantry.speed).toBe(2);
    });
    it('has an attack method, which takes another unit as an argument', function(){
      expect(game.infantry.attack).not.toBe(undefined);
      expect(typeof game.infantry.attack).toBe(function);
    });
  });
  describe('artillery unit', function(){
    it('exists and has the correct properties', function(){
      expect(game.artilery).not.toBe(undefined);
      expect(game.artilery.health).not.toBe(undefined);
      expect(game.artilery.speed).not.toBe(undefined);
    });
    it('has the values for its properties that are given in the spec', function(){
      expect(game.artilery.health).toBe(2);
      expect(game.artilery.speed).toBe(2);
    });
    it('has an attack method, which takes another unit as an argument', function(){
      expect(game.artilery.attack).not.toBe(undefined);
      expect(typeof game.artilery.attack).toBe(function);
    });
  });
  describe('cavalry unit', function(){
    it('exists and has the correct properties', function(){
      expect(game.cavalry).not.toBe(undefined);
      expect(game.cavalry.health).not.toBe(undefined);
      expect(game.cavalry.speed).not.toBe(undefined);
    });
    it('has the values for its properties that are given in the spec', function(){
      expect(game.cavalry.health).toBe(2);
      expect(game.cavalry.speed).toBe(2);
    });
    it('has an attack method, which takes another unit as an argument', function(){
      expect(game.cavalry.attack).not.toBe(undefined);
      expect(typeof game.cavalry.attack).toBe(function);
    });
  });
});

describe('gameplay', function(){
  describe('infantry attacks artillery', function(){
    it('decreases artillery health to 1', function(){
      infantry.attack(artillery);
      expect(artillery.health).toBe(1);
    });
  });
  describe('cavalry attacks infantry', function(){
    it('decreases infantry health to 1', function(){
      cavalry.attack(infantry);
      expect(infantry.health).toBe(1);
    });
  });
  describe('artillery attacks cavalry', function(){
    it('decreases cavalry health to -2', function(){
      artillery.attack(cavalry);
      expect(cavalry.health).toBe(-2);
    });
  });
})
