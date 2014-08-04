'use strict';

describe('Service: randomArrayFiller', function () {
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

  it('should return a random number', function () {
    // TODO should this be the next test or should it be private and the tests done only on the array?
    var maxNum = 5;
    var randomNum = randomArrayFiller.getRandomNum(maxNum);
    expect(randomNum).toBeGreaterThan(-1);
    expect(randomNum).not.toBeGreaterThan(4);
  });

  it('should create a new array with 3 rows and columns', function () {
    var numOfRows = 3;
    var numOfCols = 1;
    var rows = randomArrayFiller.getRandArray(3, 1);
    expect(rows.length).toBe(numOfRows);
    for (var col = 0; col < numOfCols; col++) {
      expect(rows[col].length).toBe(numOfCols);
    }
  });

  it('should create a new array with 6 mines', function () {
    // TODO delete this test?
    var numOfRows = 3;
    var numOfCols = 5;
    var numOfMines = 6;
    var newB = randomArrayFiller.getRandArray(numOfRows, numOfCols, numOfMines);
    var numOfMinesInArr = 0;
    for (var row = 0; row < numOfRows; row++) {
      for (var col = 0; col < numOfCols; col++) {
        if (newB[row][col] === 1) {
          numOfMinesInArr++;
        }
      }
    }
    expect(numOfMinesInArr).toBe(numOfMines);
  });

  it('should create a few boards with a few mines', function () {
    var numOfRows = 3;
    var numOfCols = 3;
    var maxNumOfMines = 5;
    for (var mines = 0; mines < maxNumOfMines; mines++) {
      var newB = randomArrayFiller.getRandArray(numOfRows, numOfCols, mines);

      var numOfMinesInArr = 0;
      for (var row = 0; row < numOfRows; row++) {
        for (var col = 0; col < numOfCols; col++) {
          if (newB[row][col] === 1) {
            numOfMinesInArr++;
          }
        }
      }
      expect(numOfMinesInArr).toBe(mines);
    }
  });

  it('should create two DIFFERENT boards', function () {
    var numOfMines = 7;
    var numOfRows = 5;
    var numOfColumns = 5;
    var newArr = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    var anotherArr = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    expect(newArr).not.toEqual(anotherArr);
  });

});
