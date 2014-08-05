'use strict';

describe('Service: Board', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    var fillerMock = {
      getRandArray: function (numOfRows, numOfCols) {
        var rows = [];
        var cols;
        for (var row = 0; row < numOfRows; row++) {
          cols = [];
          for (var col = 0; col < numOfCols; col++) {
            if ((row === 1 && col === 4) ||
                (row === 4 && col === 0) ||
                (row === 4 && col === 2)) {
              cols.push('x');
            } else {
              cols.push(0);
            }
          }
          rows.push(cols);
        }
//        for (var row = 0; row < numOfRows; row++) {
//          for (var col = 0; col < numOfCols; col++) {
//            console.log(rows[row][col]);
//          }
//          console.log('\n');
//        }
      }
    };

    module({
      randomArrayFiller: fillerMock
    });
  });

  // instantiate service
  var Board;
  beforeEach(inject(function (_Board_) {
    Board = _Board_;
  }));

  it('should create a board', function () {
    expect(new Board() instanceof Board).toBe(true);
  });
  describe('When filling the board', function () {
    it('should fill the cells around a mine with 1', function () {
      var newB = new Board(6, 5, 3);
      expect(newB.reveal(0, 0)).toBe(0);
    });
  });
});
