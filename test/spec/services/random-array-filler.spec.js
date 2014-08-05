'use strict';

describe('Service: randomArrayFiller', function () {
  // load the service's module
  var randMockArr = [];

  beforeEach(function () {
    module('minesweeperAppInternal');
    var randomMockIndex = 0;
    function randMock() {
      return randMockArr[randomMockIndex++];
    }

    //add your mocks here
    module({
      randNumber: randMock
    });
  });

  // instantiate service
  var randomArrayFiller;
  beforeEach(inject(function (_randomArrayFiller_) {
    randomArrayFiller = _randomArrayFiller_;
  }));

  it('should create a new array with 3 rows and columns', function () {
    var numOfRows = 3;
    var numOfCols = 1;
    var rows = randomArrayFiller.getRandArray(3, 1);
    expect(rows.length).toBe(numOfRows);
    for (var col = 0; col < numOfCols; col++) {
      expect(rows[col].length).toBe(numOfCols);
    }
  });

  it('should place a mine in the center of the board', function () {
    randMockArr = [1, 1];
    var grid = randomArrayFiller.getRandArray(3, 3, 1);
    expect(grid[1][1]).toBe('x');
  });

  it('should create a new array with one mine', function () {
    randMockArr = [1, 2];

    var numOfRows = 3;
    var numOfCols = 5;
    var numOfMines = 1;
    var newB = randomArrayFiller.getRandArray(numOfRows, numOfCols, numOfMines);
    var numOfMinesInArr = 0;
    for (var row = 0; row < numOfRows; row++) {
      for (var col = 0; col < numOfCols; col++) {
        if (newB[row][col] === 'x') {
          numOfMinesInArr++;
        }
      }
    }
    expect(numOfMinesInArr).toBe(1);
  });

  it('should create two DIFFERENT boards', function () {
    randMockArr = [1, 2, 2, 1];
    var numOfMines = 1;
    var numOfRows = 5;
    var numOfColumns = 5;
    var newArr = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    var anotherArr = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    expect(newArr).not.toEqual(anotherArr);
  });

  it('should create a board with two DIFFERENT mines', function () {
    randMockArr = [2, 2, 2, 2, 3, 1];
    var numOfMines = 2;
    var numOfRows = 5;
    var numOfCols = 5;
    var newArr = randomArrayFiller.getRandArray(numOfRows, numOfCols, numOfMines);
//    var anotherArr = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    var numOfMinesInArr = 0;
    for (var row = 0; row < numOfRows; row++) {
      for (var col = 0; col < numOfCols; col++) {
        if (newArr[row][col] === 'x') {
          numOfMinesInArr++;
        }
      }
    }
    expect(numOfMinesInArr).toEqual(numOfMines);
  });

});
