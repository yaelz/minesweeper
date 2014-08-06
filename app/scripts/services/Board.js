'use strict';

(function () {

  /* @ngInject */
  function BoardFactory(randomArrayFiller) {
    function Board(numOfRows, numOfColumns, numOfMines) {
      this._grid = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
      this.fillBoard();
    }
    // Service logic
    // ...

    Board.prototype.reveal = function (col, row) {
//      console.log(this._grid);
      return this._grid[col][row];
    };

    Board.prototype.fillBoard = function () {
      var numOfRows = this._grid.length;
      if (numOfRows === 0) {
        // TODO ugly! but what if the board is empty? Should I allow the first test with no args in the board constructor?
        return Board;
      }
      var numOfCols = this._grid[0].length;
      for (var row = 0; row < numOfRows; row++) {
        for (var col = 0; col < numOfCols; col++) {
          if (this._grid[row][col] !== 'x') {
            continue;
          }
          if (row !== 0) {
            this._grid[row - 1][col]++;
            if (col !== 0) {
              this._grid[row - 1][col - 1]++;
            }
          }
          if (col !== 0) {
            this._grid[row][col - 1]++;
            if (row !== numOfRows - 1) {
              this._grid[row + 1][col - 1]++;
            }
          }
          if (row !== numOfRows - 1) {
            this._grid[row + 1][col]++;
            if (col !== numOfCols - 1) {
              this._grid[row + 1][col + 1]++;
            }
          }
          if (col !== numOfCols - 1) {
            this._grid[row][col + 1]++;
            if (row !== 0) {
              this._grid[row - 1][col + 1]++;
            }
          }
        }
      }
    };

    return Board;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Board', BoardFactory);

})();
