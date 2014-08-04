'use strict';

describe('Service: randomArrayFiller', function () {
  //TODO name of file should be with capital letter?
  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var randomArrayFiller;
  beforeEach(inject(function (_randomArrayFiller_) {
    randomArrayFiller = _randomArrayFiller_;
  }));

  it('should return an array of a certain size', function () {
    // TODO ugly test (the expect)! What should I have started with?
    var numOfRows = 3;
    var numOfCols = 5;
    var arr = randomArrayFiller.getRandArray(numOfRows, numOfCols);
    expect(arr.length * arr[0].length).toBe(numOfRows * numOfCols);
  });

  it('should return a random number', function () {
    // TODO should this be the next test or should it be private and the tests done only on the array?
    var maxNum = 5;
    var randomNum = randomArrayFiller.getRandomNum(maxNum);
    expect(randomNum).toBeGreaterThan(-1);
    expect(randomNum).not.toBeGreaterThan(4);
  });

//  it('should return an array of size cols*rows with numOfMines ones', function () {
//    var numOfRows = 3;
//    var numOfCols = 2;
//    expect()
//  });

});
