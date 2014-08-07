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

    function MockCell() {
      this.setMine = jasmine.createSpy('cell.setMine');
      this.isMine = jasmine.createSpy('cell.setMine').andCallFake(function () {
        return this.setMine.callCount !== 0;
      });
    }

    //add your mocks here
    module({
      randNumber: randMock,
      Cell: MockCell
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
    var grid = randomArrayFiller.getRandArray(3, 1);
    expect(grid.length).toBe(numOfRows);
    for (var col = 0; col < numOfCols; col++) {
      expect(grid[col].length).toBe(numOfCols);
    }
  });

  it('should place a mine in the center of the board', function () {
    randMockArr = [1, 1];
    var grid = randomArrayFiller.getRandArray(3, 3, 1);
    expect(grid[1][1].setMine).toHaveBeenCalled();
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (row !== 1 && col !== 1) {
          expect(grid[row][col].setMine).not.toHaveBeenCalled();
        }
      }
    }
  });

  it('should create a new array with one mine', function () {
    randMockArr = [1, 2];

    var numOfRows = 3;
    var numOfCols = 5;
    var numOfMines = 1;
    var grid = randomArrayFiller.getRandArray(numOfRows, numOfCols, numOfMines);
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (row !== 1 && col !== 2) {
           //TODO how does it know the Cell functions?
          expect(grid[row][col].setMine.callCount).toBe(0);
        }
      }
    }
    expect(grid[1][2].setMine.callCount).toBe(1);
  });

  it('should create two DIFFERENT boards', function () {
    randMockArr = [1, 2, 2, 1];
    var numOfMines = 1;
    var numOfRows = 5;
    var numOfColumns = 5;
    var grid = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    var anotherGrid = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    expect(grid).not.toEqual(anotherGrid);
  });

  it('should create a board with two DIFFERENT mines', function () {
    randMockArr = [2, 2, 2, 2, 3, 1];
    var numOfMines = 2;
    var numOfRows = 5;
    var numOfCols = 5;
    var grid = randomArrayFiller.getRandArray(numOfRows, numOfCols, numOfMines);
    for (var row = 0; row < numOfRows; row++) {
      for (var col = 0; col < numOfCols; col++) {
        if ((row === 2 && col === 2) || (row === 3 && col === 1)) {
          expect(grid[row][col].setMine.callCount).not.toBe(0);
        } else {
          expect(grid[row][col].setMine.callCount).toBe(0);
        }
      }
    }
  });

});
