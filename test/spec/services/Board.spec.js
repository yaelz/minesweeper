'use strict';

describe('Service: Board', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var Board;
  beforeEach(inject(function (_Board_) {
    Board = _Board_;
  }));

  it('should create a board', function () {
    expect(new Board() instanceof Board).toBe(true);
  });

  it('should create a new board with 3 rows and columns', function () {
    var newB = new Board(3, 3);
    var rows = newB.getRows();
    expect(rows.length).toBe(3);
    for (var col = 0; col < rows.length; col++) {
      expect(rows[col].length).toBe(3);
    }
  });

  it('should create a new board with 5 mines', function () {
    // TODO delete this test?
    var newB = new Board(3, 3, 5);
    expect(newB.numOfMines()).toBe(5);
  });

  it('should create a few boards with a few mines', function () {
    var maxNumOfMines = 5;
    for (var mines = 0; mines < maxNumOfMines; mines++) {
      var newB = new Board(3, 3, mines);
      expect(newB.numOfMines()).toBe(mines);
    }
  });

  it('should create and hold the mines in rows', function () {
    var numOfMines = 7;
    var numOfRows = 5;
    var numOfColumns = 5;
    var newB = new Board(numOfRows, numOfColumns, numOfMines);
    var rows = newB.getRows();
//    console.log(rows);
    var minesCounted = 0;
    for (var row = 0; row < numOfRows; row++) {
      for (var col = 0; col < numOfColumns; col++) {
        if (rows[row][col] === 1) {
          minesCounted++;
        }
      }
    }
    expect(minesCounted).toBe(numOfMines);
  });

});
