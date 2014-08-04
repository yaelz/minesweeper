'use strict';

describe('Service: randomizer', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var randomizer;
  beforeEach(inject(function (_randomizer_) {
    randomizer = _randomizer_;
  }));

  it('should return an array of a certain size', function () {
    // TODO ugly test (the expect)! What should I have started with?
    var numOfRows = 3;
    var numOfCols = 5;
    var arr = randomizer.getRandArray(numOfRows, numOfCols);
    expect(arr.length * arr[0].length).toBe(numOfRows * numOfCols);
  });

});
