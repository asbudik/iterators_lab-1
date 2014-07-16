var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#min', function(){
    var minArray;
    beforeEach(function(){
      minArray = [2, 0, 8, 3, 99, 5];
    });
    it('should return the mininum in an array', function(){
      expect(Iterators.min(minArray)).to.equal(0);
    })    
    it('should return Infinity for empty array', function(){
      minArray = [];
      expect(Iterators.min(minArray)).to.equal(Infinity);
    })
  })
})