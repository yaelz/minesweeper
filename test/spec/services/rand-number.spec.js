'use strict';

describe('Service: randNumber', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var randNumber;
  beforeEach(inject(function (_randNumber_) {
    randNumber = _randNumber_;
  }));

  function createRandomArray(max) {
    var numbers = [];
    for (var i = 0; i < 1000 ; i++) {
      var randNum = randNumber(max);
      if (numbers.indexOf(randNum) === -1) {
        numbers.push(randNum);
      }
    }
    return numbers;
  }

  it('should return an integer', function () {
    var max = 26;
    var randNum = randNumber(max);
    expect(parseInt(randNum)).toBe(randNum);
  });

  it('should return two different numbers when called twice', function () {
    var max = 7;
    var numbers = createRandomArray(max);
    expect(numbers.length).toBeGreaterThan(1);
  });

  it('should return a number between 0 and max-1', function () {
    var max = 15;
    var numbers = createRandomArray(max);
    for (var i = 0; i < max ; i++) {
      expect(numbers.indexOf(i)).not.toBe(-1);
    }
    expect(numbers.length).toBe(15);
  });

});
